
// 0부터 n까지의 합을 구하는 프로그램을 작성하시오.


console.log(sum(10))                        // 55

function sum(num){                      
    let temp= 0;                            // 숫자를 담을 공간을 우선 만들고
    for(let i = 1; i <= num; i++){          // i가 num보다 작건나 같을 동안
        temp += i                           // temp에 i값을 더해라
    }
    return temp                             // temp값 리턴하면 출력 완료
}