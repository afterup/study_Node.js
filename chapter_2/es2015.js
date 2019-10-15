
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
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
//->
const { getCandy, status:{ count }} = candyMachine;
//배열 비구조화
var array = ['node',{},10,true];
var node = array[0];
//->
const [node,obj,bool] = array;

//프로미스
const condition = true;
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message); //resolve한 경우 실행
    })
    .catch((error)=>{
        console.error(error);// reject한 경우 실행
    });
//
const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공');
Promise.all([promise1,promise2])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    });

//async/await
function findAndSaveUser(Users){
    Users.findOne({})
        .then((user)=>{
            user.name = 'zero';
            return user.save();
        })
        .then((user)=>{
            return Users.findOne({gender:'m'});
        })
        .catch(err=>{
            console.error(err);
        });
}

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
}
//
const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공');
(async() => {
    for await(promise of [promise1,promise2]){
        console.log(promise);
    }
})();


//AJAX

//FormData


