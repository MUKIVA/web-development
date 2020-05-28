var error = false;

function isNumber(char) {
  return ((char >= '0' && char <= '9') || char == '-')
}


function checkBrackets(str) {
  if ((str.split('(').length - 1) != (str.split(')').length - 1) && (error == false)) {
    console.log('ОШИБКА: Не корректная строка')
    return true;
  }
  if (error == false){
    return false;
  } else {
    return true;
  }
}


function checkStr(str) {
  let pos = 0;
  let validValues = '123456789-+*/ ()';
  while (pos < str.length - 1) {
    if ((validValues.indexOf(str[pos]) == -1) && (error == false)) {
      console.log('ОШИБКА: В строке присутствует недопустимый символ.')
      return true;
    }
    pos++;
  }
  return false;
}


function cursorReplace(str, cursor) {  // Движение курсора к следующему значению
  if ((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') {
    cursor = str.indexOf(' ', cursor);
    return cursor;
  } else if (str[cursor] == '(') {
    if (str.indexOf(') (') == -1){
      cursor = str.lastIndexOf(')');
    } else {
      cursor = str.lastIndexOf(') (');
    }
    return cursor;
  } else {
    return cursor;
  }
}


function fillFirst(str, cursor, firstNum) { // Выделение и расчёт первого числа
  if (isNumber(str[cursor])) {
    firstNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
    if (str.indexOf(') (') != -1) {
      str = str.substring(0, str.indexOf(') (')+1);
    }
    firstNum = calc(str.substring(cursor + 1, str.lastIndexOf(')')));
  }
  if (isNaN(firstNum)) {
    console.log(`ОШИБКА: Одна из переменных не была задана или не была вычислена.`);
    error = true;
    return null;
  } else {
    return firstNum;
  }
}


function fillSecond(str, cursor, secondNum) { // Выделение и расчёт второго числа
  if ((isNumber(str[cursor])) && secondNum == null)  {
    secondNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
    secondNum = calc(str.substring(cursor + 1, str.lastIndexOf(')')));
  }
  if (isNaN(secondNum)) {
    console.log(`ОШИБКА: Одна из переменных не была задана или не была вычислена.`);
    error = true;
    return null;
  } else {
    return secondNum;
  }
}


function calc(mathExp) { // Вычисление целого выражения
  error = false;
  if ((typeof mathExp == "string") && (error == false)) {
    var operationSymbol = null;
    var firstNumber = null;
    var secondNumber = null;
    mathExp = mathExp.replace(/\s+/g, ' ').trim();
    mathExp += ' ';
    error = checkStr(mathExp);
    error = checkBrackets(mathExp);
    var cursor = 2;
    if (mathExp[0] == '+' || mathExp[0] == '-' || mathExp[0] == '*' || mathExp[0] == '/') operationSymbol = mathExp[0];
    while (cursor < mathExp.length) {
      if (firstNumber == null && error == false) {
        firstNumber = fillFirst(mathExp, cursor, firstNumber);
        cursor = cursorReplace(mathExp, cursor);
      }
      if (secondNumber == null && error == false) {
        secondNumber = fillSecond(mathExp, cursor, secondNumber);
        cursor = cursorReplace(mathExp, cursor);
      }
      cursor++;
    }
    if ((firstNumber != null && secondNumber != null && operationSymbol != null) && (error != true)) { // Проверка на недостающие переменные
      if (operationSymbol == '+') { // Выполнение операции
        console.log(`Результат: ( ${mathExp}) = ${firstNumber + secondNumber}`);
        return firstNumber + secondNumber;
      } else if (operationSymbol == '-'){
        console.log(`Результат: ( ${mathExp}) = ${firstNumber - secondNumber}`);
        return firstNumber - secondNumber;
      } else if (operationSymbol == '*'){
        console.log(`Результат: ( ${mathExp}) = ${firstNumber * secondNumber}`);
        return firstNumber * secondNumber;
      } else if (operationSymbol == '/' && secondNumber != '0') {
        console.log(`Результат: ( ${mathExp}) = ${firstNumber / secondNumber}`);
        return firstNumber / secondNumber;
      } else if (operationSymbol == '/' && secondNumber == '0' && error == false)  {  // Делить на наоль нельзя
        console.log(`ОШИБКА: Делить на ноль нельзя.`)
        error = true;
        return null;
      }
    } else if (error == false) {
    console.log(`ОШИБКА: Одна из переменных не была задана или не была вычислена.`); // Строка записана некорректно или присутствует деление на ноль.
    error = true;
    return null;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
