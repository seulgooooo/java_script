
// str 안에 있는 단어중 가장 글자의 수가 많은 단어를 출력하라

function sol(s) {
    let answer = "";
    let max = Number.MIN_SAFE_INTEGER;
    for(let i of s) {
        if(i.length > max){
            max = i.length;
            answer = i;
        }
    }
    return answer;
}


let str = ["teacher", "time", "student", "deautiful", "good"];
console.log(sol(str));