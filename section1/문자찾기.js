
// str 안의 단어중 U가 몇개인지 찾아내는 프로그램을 작성하시오.

function sol(s, t) {
    answer = 0;
    for(let i of s) {
        if( i == t)
        answer ++; 
    }
    return answer;
}



let str = "COMPUTERPROGRAMING"
console.log(sol(str, 'U'))





