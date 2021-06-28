// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 모두 대문자로 출력해라

// 입력 ltisTimeToStudy
// 출력 ITISTIMETOSTUDY


function sol(s) {
    let answer = "";
    for(let i of s) {
        if(i === i.toUpperCase()) {
            answer += i;
        } else answer += i.toUpperCase();
    }
    return answer;
    
}



let str = 'ItisTimeToStudy';

console.log(sol(str));
// ITISTIMETOSTUDY