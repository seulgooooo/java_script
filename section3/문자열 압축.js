// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 
// 프로그램을 작성하시오. (a가 7개, b가 2개 -> a7b2)

function sol(s){
    let answer="";
    let cnt = 1;
    s = s + " ";
    for(i = 0; i < s.length -1; i++){
        if(s[i] === s[i+1]) cnt++;              // 옆 글자랑 같으면 cnt +1 
        else{                                   // 다르면
            answer += s[i];                     // answer에 그 단어를 넣는다.
            if(cnt>1) answer += String(cnt);    // 그리고 answer에 cnt를 문자로 담아라 
            cnt = 1;                            // cnt를 1로 초기화
        }
    }
    return answer;
}

let word="KKHSSSSSSSE";
console.log(sol(word));