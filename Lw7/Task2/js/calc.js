function cursorReplace(str, cursor) {
  if ((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') {
    cursor = str.indexOf(' ', cursor);
    return cursor;
  } else if (str[cursor] == '(') {
    cursor = str.indexOf(')', cursor);
    return cursor
  } else {
    return cursor;
  }
}

function fillFirst(str, cursor, firstNum) {
  if ((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') {
    firstNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
  let  str1 = str.substring(cursor + 1, str.indexOf(')', cursor))
    firstNum = calc(str.substring(cursor + 1, str.indexOf(')', cursor)));

  }
  return firstNum;
}


function fillSecond(str, cursor, secondNum) {
  if (((str[cursor] >= '0' && str[cursor] <= '9') || str[cursor] == '-') && secondNum == null) {
    secondNum = parseFloat(str.substring(cursor, str.indexOf(' ', cursor)));
  } else if (str[cursor] == '(') {
    secondNum = calc(str.substring(cursor + 1, str.indexOf(')', cursor)));
  }
  return secondNum;
}

function calc(mathExp) {
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
    if (firstNumber != null && secondNumber != null && operationSymbol != null) {
    if (operationSymbol == '+') {
      console.log(`Результат: ${firstNumber + secondNumber}`)
      return firstNumber + secondNumber;
    } else if (operationSymbol == '-'){
      console.log(`Результат: ${firstNumber - secondNumber}`)
      return firstNumber - secondNumber;
    } else if (operationSymbol == '*'){
      console.log(`Результат: ${firstNumber * secondNumber}`)
      return firstNumber * secondNumber;
    } else if (operationSymbol == '/')
      console.log(`Результат: ${firstNumber / secondNumber}`)
      return firstNumber / secondNumber;
    } else {
      console.log(`Некорректная строка`)
    }
} else {
  console.log('Это не строка')
}
}
