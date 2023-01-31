// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.



function computeSumOfAllElements(arr) {

  if(arr.length === 0) {
    return 0;
  }

  let result = 0;

  for(let i = 0; i < arr.length; i++) {
      result += arr[i];
  }

  return result;
}