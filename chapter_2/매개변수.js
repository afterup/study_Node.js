/*
function a(arg){} -> 매개변수, parameter
a(1) -> 인자

자바스크립트는 매개변수를 지정해주지 않고 인자값을 넣어도 에러가 발생하지 않음.
인자값이 몇개 들어갈 지 모를 때  사용. 
arguments 객체  => .length를 통해 몇개의 인자인지 알 수 있음
*/

function sum(){
    var _sum = 0;
    for(i = 0 ;i <arguments.length;i++){ //인자 수
        _sum += arguments[i];
    }
    return_sum;
}
document.write('result:'+ sum(1,2,3,4));

//---
function two(arg) {
    console.log(
        two.length, // 1  -> 매개변수의 수
        arguments.length // 2 -> 입력된 인자 수
    )
}
two(arg1, arg2); 

