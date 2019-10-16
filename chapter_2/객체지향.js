
// 배열
var memberArray = ['one','two','three'];
memberArray[2];


//객체. 이름이 있는 정보를 정리
var memberObject = {
    manager : 'one',
    developer : 'two',
    designer: 'three'
}
memberObject.designer; // three
memberObject.manager = 'four'; //값 변경
delete memberObject.developer// 값 삭제

for(var name in memberObject){
    console.log(name, memberObject[name]);
}

//--- this

var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second; // 10 + 20
    }
}
kim.sum();

// --- constructor

function Person(name, first, second) {
    this.name: name,
    this.first: first,
    this.second: second,
    this.sum: function(){
        return this.first + this.second; // 10 + 20
    }
}

Person(); // 함수 호출
var gong = new Person('gong',20,30); // Person 객체 생성
var son = new Person('son',50,20); // Person 객체 생성

gong.sum = function(){
    return this.first;
}// gong 객체의 메소드만 수정됨

// prototype. 모든객체가 공통적으로 사용하는 함수 생성, 수정. 
// 객체가 생성될 때마다 메소드를 생성하지 않기에 메모리 절약
Person.prototype.sum = function(){
    return this.first;
}

son.sum = function(){
    return 'this';
}// prototype을 제외, son 객체의 메소드만 수정됨.

// --- class 

class Person {
    constructor(name, first, second){ // 생성자. 객체가 생성되며 호출됨
        this.name = name;
        this.first =fisrt;
        this.second = second;
        console.log('constructor');
    }
    sum(){ // 기존의 prototype
        return 'prototype';
    }
}

var Kim = new Person('kim',10,20);
kim.sum();

// --- 상속. Inheritance

class PersonPlus extends Person{
    // Person 클래스가 남이 짠 코드일 경우, 혹은 최소한을 유지해야할 코드여서
    // 수정이 불가피할 때 상속을 하여 코드를 추가, 수정함
    avg(){
        return (this.first+this.second)/2;
    }
}
var gim = new PersonPlus('gim',20,30);
gim.sum(); //Person
gim.avg(); //PersonPlus

// --- super
class PersonPlus extends Person{

    constructor(name,first,second,third){
        super(name,first,second); // 부모클래스의 기능을 가져옴
        this.third = third;
    }
    sum(){
        return super.sum()+ this.third;
    }

    avg(){
        return (this.first+this.second)/2;
    }
}

// __proto__  상속받는 방법.
var suberObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;
subObj.subVal; // sub
subObj.superVal; // super

//-- Object.create()
var superObj = {superVal:'super'}
var subObj = Object.create(superObj); // subObj는 superObj를 부모로 하는 객체
subObj.subVal = 'sub';
subObj.subVal; // sub
subObj.superVal; // super