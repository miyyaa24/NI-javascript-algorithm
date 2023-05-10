// string 타입을 리턴해야 합니다.
// 2-3-5-7의 형식으로 리턴해야 합니다.

function listPrimes(num) {
  let result = '2';
  
  for (let i = 3; i <= num; i += 2) {
    let isPrime = true;
    let sqrt = parseInt(Math.sqrt(i));
    
    for (let j = 3; j <= sqrt; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result = `${result}-${i}`;
    }
  }

  return result;
}
