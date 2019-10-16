/*
JavaScript - 유효범위 :변수의 수명
*/

var vscope = 'global'; //전역변수
function fscope(){
    var vscope = 'local'; //지역변수
    alert(vscope); // ->local 출력 
}

var vscope = 'global'; //전역변수
function fscope(){
    vscope = 'local'; //전역변수 수정
    alert(vscope); // ->local 출력 
}

var vscope = 'global'; //전역변수
function fscope(){
    var vscope = 'local'; //지역변수 수정
    vscope = 'local'; //지역변수 수정
    alert(vscope); // ->local 출력 
}


function a(){
    i=0; //전역변수 수정이기에 var를 붙여줘야 지역변수
}
for(var i=0; i<5; i++){ //전역변수. a가 i를 계속 0으로 초기화
    a();
    document.write(i);
}


(function(){
    var MYAPP = {}; //익명함수 안의 지역변수 
    MYAPP.calculator = {
            'left' : null,
            'right' : null
    }
    MYAPP.calculator.left = 10;
})();


for(var i=0; i<1; i++){
    var name = 'coding'; //전역변수
}
alert(name); // coding 호출


var i=5;
function a() {
    var i = 10;
    b(); // 전역변수 5 호출
}
function b(){
    document.write(i); 
}