/**
 * 
 * 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
 */

function solution(n) {
    let nums = String(n).split("");
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result += parseInt(nums[i]);
    }return result;
    
}



/**
 * 문제 설명
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 * 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

 * 제한사항
 * N의 범위 : 100,000,000 이하의 자연수
 */


function solution(n)
{
  const arr = String(n).split("");
    return arr.reduce(function(acc,cur){
        return parseInt(acc) + parseInt(cur)
    }, 0);
   
}