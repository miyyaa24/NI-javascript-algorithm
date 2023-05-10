function makeOddDigits(num) {
    let result = '';
    let count = 0;
  
    let i = 1;
  
    while(count < num) {
  
      result = result + String(i);
      i = i + 2;
      count++;
  
    } return result;
  }