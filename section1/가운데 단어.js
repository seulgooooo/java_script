


// 가운데에 있는 단어 1개 혹은 2개 출력하라



function sol(s) {
    let answer;
    let mid = Math.floor(s.length / 2);          // 글자에서 중간값을 찾음 5라면 3
    if(s.length % 2 == 1 ) {
        answer = s.substring(mid, mid + 1 );     // 홀수라면 중간의 한 글자만 출력
    } else {
        answer = s.substring(mid -1 , mid + 1);  // 짝수라면 중간의 두 글자 출력
    } 
    return answer;
}


console.log(sol("study"));