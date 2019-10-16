
function a(){ } //=>함수
a = {
    b:function(){ //=>메소드. 객체의 속성 값으로 담겨진 함수

    }
}

//----

function cal(func,num){
    return func(num);
}
function increase(num){
    return num+1;
}
cal(increase,1); //함수는 값이기에 다른 함수의 인자로 전달될 수 있음

//----

function cal(mode){
    var funcs= {
        'plus' : function(left,right){return left+right};
    }
    return funcs[mode];
}
alert(cal('plus')(2,1)); //함수를 매개변수값으로 사용 

//----

var process = [
    function(input) {return input+10;},
    function(input) {return input*input;},
    function(input) {return input/2;}
]; // 함수를 배열값으로도 사용 가능

var input = 1;
for(var i = 0; i<process.length; i++){
    input = process[i](input);
}

// ---- 콜백


// Ajax 비동기 콜백. asynchronous Javascript and Xml

