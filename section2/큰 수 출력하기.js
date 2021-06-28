// 숫자 2개를 입력받아, 자신의 바로 앞 수보다 크거나
//  같은 수를 출력하는 프로그램을 작성하시오.


//첫 줄에 자연수 N 이 주어지고, 그 다음에 N개의 정수 입력


function sol(a, b) {
    let answer = [];
    for(let i of b) {
        if(a <= i){
            answer.push(i);
        }; 
    } 
    return answer
}


let a = 6;                              // a와 b를 비교하여 a보다 크거나 같
let b = [7, 3, 9, 5, 6, 12]             // 숫자 출력

console.log(sol(a, b));
