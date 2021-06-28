// N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 
// 가장 큰 합을 출력하라.

function sol(arr) {
    let answer = Number.MIN_SAFE_INTEGER;       // answer 초기화
    let sum1 = sum2 = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        sum1 = sum2 = 0;                        // sum1과 sum2를 0으로 초기화
        for(let j = 0; j < n; j ++) {
            sum1 += arr[i][j];                  // 행 탐색하기
            sum2 += arr[j][i];                  // 열 탐색하기
        }
        answer = Math.max(answer, sum1, sum2);  // 최대값 answer에 담기
    } 
    sum1 = sum2 = 0;                             // sum1과 sum2를 0으로 초기화
    for(let i = 0; i < n ; i++){                 // 대각선의 합 구하기
        sum1 += arr[i][i];
        sum2 += arr[i][n - i -1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer
}

const  arr = [[10, 13, 10, 12, 15],
              [12, 39, 30, 23, 11],
              [11, 25, 50, 53, 15],
              [19, 27, 29, 37, 27],
              [19, 13, 30, 13, 19]];

console.log(sol(arr));