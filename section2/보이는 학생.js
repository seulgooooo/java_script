// 선생님이 학생을 일렬로 세웠다. 학생의 키가 앞에서 부터 순서대로 주어질 때 맨 앞에
// 서있는 선생님이 볼 수 있는 학생의 수를 구하시오
// (앞의 학생보다 키가 작은 학생은 선생님에게 보이지 않습니다.)

function sol(s) {
    let answer = 0;                   // count 전용   
    let max = 0;                      // max = 선생님 순차적으로 보게 될 큰 아이
    for(i of s) {                     // i번째 학생이 현재 선생님 눈에 보이는
        if(i > max){                  // 가장 큰 아이보다 크다면
            max = i;                  // max를 i로 바꿔주고
            answer += 1;              // answer에 +1을 해라
        }
    } return answer;
}


let student = [130, 135, 148, 140, , 145, 150, 150, 153];

console.log(sol(student));