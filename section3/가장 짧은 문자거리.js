// 한 개의 문자열 단어와 특정 문자가 주어지면 문자열에서 단어가  
// 특정 문자와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
// (문자 사이의 거리를 출력하는 프로그램을 만드시오)

function solution(s, t){
    let answer=[];
    let p=100;                                      // 글자길이가 넘지 않을 여유있는 숫자로 초기화
    for(j of s){                                    // 좌측에서 우측으로 거리 계산하기
        if(j === t){
            p = 0;                                  // 찾는 글자와 같은 글자라면 p를 0으로 바꾸고
            answer.push(p);                         // answer에 넣어두기
        }
        else{
            p++;                                    // 다르면 p에 1을 더하고
            answer.push(p);                         // answer에 담기
        }
    }
    p=100;
    for(i = s.length -1; i >= 0; i--){              // 우측에서 좌측으로 거리 계산하여 수정
        if(s[i] === t) p = 0;                       // 같으면 0으로
        else{   
            p++;                                    // 다르면 +1 하고
            answer[i] = Math.min(answer[i], p);     // 더 작은 수를 answer에 담기
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));