
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





