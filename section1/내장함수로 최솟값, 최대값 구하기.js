


function sum(arr) {
    temp = []
    sum = 0, min = Number.MAX_SAFE_INTEGER;             // 큰 수로 미리 초기화
    for( i of arr) {
        if(i % 2 == 1) {
            sum += i;
            if( x < min ) min = x;
        }
    }
    temp.push(sum);
    temp.push(min);

    return temp;
}

arr = [ 12, 77, 38, 41, 53, 92, 85];
sum(arr)

