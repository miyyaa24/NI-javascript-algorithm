function addOneSecond(hour, minute, second) {

    if (hour === 23) {
      hour = 0;
      return `1초 뒤에 ${hour}시 0분 0초 입니다`;
    }
  
    if (second === 59) {
      second = 0;
      minute +=1;
    
    } else {
      second +=1;
    }
  
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  
    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
  
  }
  