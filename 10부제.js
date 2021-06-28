


function sol(day, arr) {                    // 앞에는 결과값을 낼 날짜, 뒤에는 배열
    let ansewer = 0;                        // 리턴해야하니까 미리 만들기
    for(let x of arr) {
        if(x % 10 == day) ansewer++;  
        }
        return ansewer;
    }





arr = [25, 23, 11, 47, 53, 17, 33];
console.log(sol(3, arr));