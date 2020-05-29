function calc(str) {

  let isNumber = (n) => (typeof (n) == "number");
  let isOperation = (char) => (char == '+' || char == '-' || char == '*' || char == '/'); 
  let isDigit = (char) => (char >= '0' && char <= '9');

  function fillTurn(str) {
    let pos = 0;
    let turn = [];
    while (pos < str.length - 1) {
      if (isOperation(str[pos]) && !isDigit(str[pos + 1])) {
        turn.push(str[pos])
      } else if (isOperation(str[pos]) && isDigit(str[pos + 1]) && (str[pos] == '+' || str[pos] == '-')) {
        turn.push(parseFloat(str.substring(pos, str.indexOf(' ', pos))));
        pos = str.indexOf(' ', pos);
      } else if (isOperation(str[pos]) && isDigit(str[pos + 1]) && (str[pos] == '*' || str[pos] == '/')) {
        turn.push(str[pos]);
      } else if (isDigit(str[pos]) || (str[pos] == '.' && isDigit(str[pos+1]))) {
        turn.push(parseFloat(str.substring(pos, str.indexOf(' ', pos))));
        pos = str.indexOf(' ', pos);
      }
      pos++;
    }
    return turn;
  }

  function checkStr(str) {
    let pos = 0;
    let validValues = '1234567890-+*/ ().';
    while (pos < str.length - 1) {
      if (validValues.indexOf(str[pos]) == -1) {
        return false;
      }
      pos++;
    }
    return true;
  };
  
  function turnCheck(turn) {
    let operations = 0;
    let numbers = 0;
    for (let i = 0; i < turn.length; i++) {
     if (isNumber(turn[i])) numbers += 1;
     if (isOperation(turn[i])) operations += 1;
    }
    return (numbers == operations + 1);
  }

  function stringFormatting(str) {
    str = str.replace(/['+']+/g, ' +');
    str = str.replace(/['\-']+/g, ' -');
    str = str.replace(/['*']+/g, ' *');
    str = str.replace(/['/']+/g, ' /');
    str = str.replace(/['(', ')']+/g, ' ').trim();
    str += ' ';
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

  if (typeof(str) == "string" && !str.trim() == '') {
    if (checkStr(str))
    {
      str = stringFormatting(str);
      let turn = [];
      turn = fillTurn(str);
      console.log(turn);
      if (turnCheck(turn)) {
        let result = performOperations(turn);
        if (result == null) {
          return ('ERROR: Произошла неведомая мне ошибка. Серьезно, как это можно было сломать?')
        } else {
          return (`Результат: ${result}`);
        }
      } else {
       console.log('ERROR: некорректная последовательность');
       return null;
      }
    } else {
      return console.log('ERROR: Встречен не подходящий символ.');
    }
  } else {
    return console.log('ERROR: В параметрах не была передана строка.');
  }
}
