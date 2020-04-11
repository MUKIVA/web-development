function isPrimeNumber(n) {
  if (Array.isArray(n)) {
    for (let j = 0; j < n.length; j++) {
      primeNumberCheck(n[j]);
    }
  } else if (typeof n == "number") {
    primeNumberCheck(n);
  } else {
    console.log(`${n} invalid parameter`)
  }
}

function primeNumberCheck(curNum) {
  let isPrime = true;
  if (typeof curNum == "number") {
  for (let i = 2; i < curNum; i++) {
    if (curNum % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${curNum} is prime number`)
  } else {
    console.log(`${curNum} is not prime number`)
  }
  } else {
    console.log(`${curNum} invalid parameter`)
  } 
}
