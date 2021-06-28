// 회문문자열이면 "YES" 아니면 "NO"를 출력하는 프로그램을 작성하세요.
// 대소문자를 구분하지 않습니다.

function sol(word) {
    let len = word.length;                      // 글자의 길이를 할당
    let str = word.toLowerCase();               // 모든 단어를 소문자로 변환
    for(i = 0; i <= Math.floor(len/2); i++){    // 단어 전체가 아닌 len의 반만 반복
        if(str[i] !== str[len - i -1]){         // 만약 대칭되는 단어가 다르면
            return "NO";                        // 바로 'NO' 반환
        } else return("YES");                   // 끝까지 맞으면 'YES' 반환
    }
}

let word = "good";
console.log(sol(word));
