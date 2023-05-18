// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.
// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

function powerOfTwo(num) {
    if (num === 1) {
      return true;
    }
  
    if (num % 2) {
      return false;
    }
  
    let powered = 2;
    while (powered < num) {
      powered = powered * 2;
    }
  
    return powered === num;
  }