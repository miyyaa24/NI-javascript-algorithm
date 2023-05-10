// 수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

function makeOddDigits(num) {

    let count = 1;
    let result = "";
    let i = 1;
  
    while(count <= num) {
      result = result + String(i);
      i = i + 2;
      count++;
    }
  
    return result;
  }
  