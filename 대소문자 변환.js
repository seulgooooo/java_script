// 대문자는 소문자로, 소문자는 대문자로 변환하여 출력하시오

function sol(s) {
    let answer = "";
    for(let i of s) {
        if(i === i.toUpperCase()) {
            answer += i.toLowerCase();
        } else answer += i.toUpperCase();
    }
    return answer;
    
}



let str = 'StuDY';

console.log(sol(str));
// sTUdy
