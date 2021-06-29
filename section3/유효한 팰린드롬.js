// 어제 문제와 같이 회문검사 프로그램을 만들어라
// 단 알파벳 외의 문자를 무시하고 알파벳만 회문인지 구분하라.


function sol(s){
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

let word="found7, time: study; Yduts; emit, 7Dnuof";
console.log(sol(word));

