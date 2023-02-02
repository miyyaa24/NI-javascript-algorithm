/**
 * 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.
 * 
 * number 타입을 리턴해야 합니다.
 * 
 */

function getLargestElement(arr) {

    let max = arr[0];
  
    for (let value of arr) {
      if (value  > max) {
        max = value ;
      }
    }
    return max;
  }