// if문 예제

// 3개의 값 중에서 가장 작은 값을 출력하는 프로그램을 만들기

function low(a, b, c){                  // 밑의 숫자 대입
    let temp;                         // 최솟값을 담을 장소
    if(a < b) temp = a;                 // a와 b 중에서 a가 작으면 a를 temp에 담기
    else temp = b;                      // b가 더 크면 b를 담기
    if(c<temp) temp = c;                // 위의 과정이 끝난 후 c도 비교 만약 c가 
                                        // 더 작으면 c로 교체
    return temp;                        // 리턴값 = temp

}

console.log(low(6, 5, 11));             // 숫자 바꿔도 잘 돌아감.
