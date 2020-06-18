function calc(str) {

  let isNumber = (n) => (typeof (n) == "number");
  let isOperation = (char) => (char == '+' || char == '-' || char == '*' || char == '/'); 
  let checkStr = (str) => (str.search(/[^\d\+\-\*\/\s()\.]/g) != -1);
  let turnCheck = (turn) => (turn.filter(operation => isOperation(operation)).length + 1 != turn.filter( number => isNumber(number)).length);

  function fillTurn(str) {
    let turn = str.split(' ')
    for (let i = 0; i < turn.length; i++) {
      if (!isOperation(turn[i])) turn[i] = parseFloat(turn[i]);
    }
    return turn;
  }

  function stringFormatting(str) {
    str = str.replace(/\+/g, ' +');
    str = str.replace(/\-/g, ' -');
    str = str.replace(/\*/g, ' * ');
    str = str.replace(/\//g, ' / ');
    str = str.replace(/[()\s]+/g, ' ').trim();
    return str;
  }

  function performOperations(turn) {
    if (turn.length == 1 && isNumber(turn[0])) {
      return turn.shift();
    }
    if (turn.length > 1 && isOperation(turn[0])) {
      let operation = turn.shift();
      let firstNum = null;
      let secondNum = null;
      (isNumber(turn[0])) ? firstNum = turn.shift() : firstNum = performOperations(turn);
      (isNumber(turn[0])) ? secondNum = turn.shift() : secondNum = performOperations(turn);
      if (firstNum != null && secondNum != null) {
        if (operation == '+') return (firstNum + secondNum);
        if (operation == '-') return (firstNum - secondNum);
        if (operation == '*') return (firstNum * secondNum);
        if (operation == '/') return (firstNum / secondNum);
      } else {
        return null
      }
    } else {
      return null;
    }
  }

  if (typeof(str) != "string" || str.trim() == '') return ('ERROR: В параметрах не была передана строка.');
  if (checkStr(str)) return ('ERROR: Встречен не подходящий символ.');
  str = stringFormatting(str);
  let turn = fillTurn(str);
  if (turnCheck(turn)) return ('ERROR: некорректная последовательность');
  let result = performOperations(turn);
  if (result == null) {
    return ('ERROR: Произошла неведомая мне ошибка. Серьезно, как это можно было сломать?')
  } else {
    return (`Результат: ${result}`);
  }
}