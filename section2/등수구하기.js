/* N 명의 학생의 국어점수가 입력되면 
 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 
즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
*/

function sol(Score) {
    let arr = Score.length;                          // 배열의 길이 미리 할당
    let answer = Array.from({length:arr}, ()=>1)     // 학생 수 만큼 배열을 1로 초기화

    for(let i = 0; i < arr; i++){
        for(let j = 0; j<arr; j++){
            if(Score[j]>Score[i]) answer[i]++;
        }
    } return answer;
}



let Score = [87, 89, 92, 100, 76];  // 국어 점수
console.log(sol(Score));


