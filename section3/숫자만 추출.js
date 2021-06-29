// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 
// 그 순서대로 자연수를 만드는 프로그램을 만드시오.

function sol(s) {
    let answer = "";
    let num = "";
    for(i of s) {
        if(!isNaN(i)) num += i;
        else answer += i;
    }return answer;
}


let word = "g0en2T0s8eSoft";

console.log(sol(word));