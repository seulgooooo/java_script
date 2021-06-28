/* 
OX문제에서 0은 문제의 답이 틀린 경우이고, 1은 문제의 답이 맞는 경우이다.
연속으로 맞게 되면 가산점이 주어지는데 연속 2번째 문제에 +2점
연속 3번째인 경우에는 +3점을 계산한다.
틀린 문제는 0점이며 다음 문제에 다시 맞는 경우는 +1점이다. 

총 점수를 계산하는 프로그램을 작성하시오
*/


function sol(arr) {
    let answer = 0;             // 앞 점수 체크용
    let count = 0;              // 실제 점수 = 리턴값
    for(let i of arr){
        if(i === 1 && answer === 0){
            answer = 1;
            count += 1;
        } else if (i === 1 && answer !== 0){
            answer += 1;
            count += answer;
        } else if (i === 0){
            answer = 0;
        } 
    }return count;
    
}


const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(sol(arr));



