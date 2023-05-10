function makeDigits2(num) {
    let result = 1;
    let count = 2;
  
    while (count <= num) {
      result = result + `-${count}`;
      count++;
    }
    return String(result);
  
} 