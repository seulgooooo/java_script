
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 
// 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요

// 입력 = COMPUTERPROGRAMMING
// 찾을 문자 = R
// 출력 = 3


function find(str, w) {
    let answer = 0;
    for(let i of str){
        if(i === w){
            answer++;
        }
    }
    return answer
}

var str = 'COMPUTERPROGRAMMING';
console.log(find(str, 'R'));




// 대문자가 몇 개 있는지 찾기

function sol(s) {
    let answer = 0;
    for(let i of s) {
        if( i == i.toUpperCase()){              // toUpperCase는 대문자를 찾아주는 함수
            answer++;                           // 대문자인 경우 answer에 + 1 
        }
    }
    return answer;
}



let str = "KoreaTimeGood";
console.log(sol(str));

