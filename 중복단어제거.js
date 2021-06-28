// 문자가 아닌 중복되는 단어 자체를 제거해서 출력해라

function sol(s) {
    let answer = [];
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === i) {
            answer.push(s[i]);
        }
    }
    return answer;
}


let str = ["good", "time", "good", "time", "student"];
console.log(sol(str));


// 다른 버전   filter() 사용


