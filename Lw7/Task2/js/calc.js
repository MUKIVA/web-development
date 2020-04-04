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
  if ((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') {
    firstNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
    while (str.indexOf(') (') != -1) {
      str = str.substring(0, str.indexOf(') (')+1);
    }
    firstNum = calc(str.substring(cursor + 1, str.lastIndexOf(')')));
  }
  return firstNum;
}


function fillSecond(str, cursor, secondNum) { // Выделение и расчёт второго числа
  if (((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') && secondNum == null) {
    secondNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
    while (str.indexOf(') (') != -1) {
      str = str.substring(str.indexOf(') (') + 3, str.length - 2);
    }
    secondNum = calc(str.substring(cursor + 1, str.lastIndexOf(')')));
  }
  return secondNum;
}


function calc(mathExp) { // Вычисление целого выражения
  if (typeof mathExp == "string") {
    var operationSymbol = null;
    var firstNumber = null;
    var secondNumber = null;
    mathExp = mathExp.replace(/\s+/g, ' ').trim();
    mathExp += ' ';
    var cursor = 2;
    if (mathExp[0] == '+' || mathExp[0] == '-' || mathExp[0] == '*' || mathExp[0] == '/') operationSymbol = mathExp[0];
    while (cursor < mathExp.length) {
      if (firstNumber == null) {
        firstNumber = fillFirst(mathExp, cursor, firstNumber);
        cursor = cursorReplace(mathExp, cursor);
      }
      if (secondNumber == null) {
        secondNumber = fillSecond(mathExp, cursor, secondNumber);
        cursor = cursorReplace(mathExp, cursor);
      }
      cursor++;
    }
    if (firstNumber != null && secondNumber != null && operationSymbol != null) { // Проверка на недостающие переменные
      if (operationSymbol == '+') { // Выполнение операции
        console.log(`Результат: ( ${mathExp}) = ${firstNumber + secondNumber}`)
        return firstNumber + secondNumber;
      } else if (operationSymbol == '-'){
        console.log(`Результат: ( ${mathExp}) = ${firstNumber - secondNumber}`)
        return firstNumber - secondNumber;
      } else if (operationSymbol == '*'){
        console.log(`Результат: ( ${mathExp}) = ${firstNumber * secondNumber}`)
        return firstNumber * secondNumber;
      } else if (operationSymbol == '/' && secondNumber != '0') {
        console.log(`Результат: ( ${mathExp}) = ${firstNumber / secondNumber}`)
        return firstNumber / secondNumber;
      } else if (operationSymbol == '/' && secondNumber == '0') {  // Делить на наоль нельзя
        console.log(`ОШИБКА: Делить на ноль нельзя.`)
        return null;
      }
    } else {
    console.log(`ОШИБКА: Одна из переменных не была задана или не была вычислена.`) // Строка записана некорректно или присутствует деление на ноль.
  }
 }
}
