// 소문자이면서 중복되는 문자는 제거하고 1글자만 출력하는 프로그램을 작성하라
// 문자열의 순서는 유지되어야한다.

function sol(s) {
    let answer = "";
    for(let i =0; i <s.length; i ++) {
        if(s.indexOf(s[i]) === i) {                 // 원래의 위치와 최초의 위치가 같으면 
            answer += s[i];                         // answer에 해당 단어 추가
        }
    }
    return answer;
}


console.log(sol("keskkset"))
// kset

// .indexOf() = 단어 안에서 제일 먼저 발견되는 위치를 알려주는 함수
// indexOf("sss", 1) = 1번 위치 이후로 처음으로 발견되는 위치를 알려줌

