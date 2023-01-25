// 문자열 my_string이 매개변수로 주어집니다.
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    
    let arr = [];
    let max = my_string.length - 1;
    
    for(let i = 0; i < my_string.length; i++){
        arr[i] = my_string[max-i];
    }
    
    let str = arr.join("");
    return str;
    
}