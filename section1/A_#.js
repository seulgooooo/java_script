// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를  
// 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.


function change(str) {
    var string = ''
    for(let i of str){                  
        if(i === 'A') {
            string += '#';
        } else {
            string += i;
        }
    }
    return string
}


var str = 'BANANA';
console.log(change(str));






// 함수 사용 버전


function change(str) {
    var string = str;                           // 얕은 복사  (주소 참조가 아님)
    string = string.replace(/A/g, '#');         // string에서 A를 #으로 변환
    return string;                             
}

var str = 'BANANA';
console.log(change(str));