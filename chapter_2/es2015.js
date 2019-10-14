
//const, let
if(true) {
    var x = 3;   
}
console.log(x); //3

if(true) {
    const y = 3;
}
console.log(y);//Uncaught ReferenceError

//백틱
const num1 = 1;
const num2 = 2;
const string = `${num1}더하기 ${num2}는 ${num1+num2}`;

//객체 리터럴
const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fan',
};

//-> 이전버전
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode : sayNode,
};
oldObject[es+6] = 'Fan';

//화살표함수
function add1(x,y){
    return x+y;
}
//->
const add2 = (x,y)=> (x+y);

//비구조화 할당

//프로미스

//async/await

//AJAX

//FormData


