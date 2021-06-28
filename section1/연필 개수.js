// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명의 학생수를 입력하면
// 몇개의 다스가 필요한지 구하는 프로그램을 작성하시오.


function sol(s) {
    if(s % 12 !== 0) {
        return (Math.round(s/12));
    } else return(s/12);
}

console.log(sol(24));