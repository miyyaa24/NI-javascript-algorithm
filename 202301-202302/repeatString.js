function repeatString(str, num) {

    if (str === '' || num === 0) {
      return '';
    }
  
    let result = '';
  
    for ( let i = 0; i < num; i++) {
      result = result + str;
    }
  
    return result;
  
  }