/**
 * 
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * 
 * 입출력 예
    두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
    두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
 * 
 */

function solution(numbers) {
    
    let arr = numbers.sort(function(a,b) {
        return a - b;
    });
    
    return arr[numbers.length-1] * arr[numbers.length-2]
    
}