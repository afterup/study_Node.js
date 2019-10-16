// closure : 내부함수가 외부함수의 맥락에 접근할 수 있는 것

function outter(){
    var title = 'coding';
    function inner(){
        alert(title); // 외부함수의 title 호출 
    }
    inner();
}

function fctory_movie(title){
    return{
        get_title: function(){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }// 내부함수들 
}

ghost = factory_movie('Ghost');
alert(ghost.get_title());
ghost.set_title('공각'); // factory_movie의 지역변수 변경 

/*
 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성한다.
 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이며, 함수가 변수에 저장될 때
 변수가 남아있는 어휘적 환경에 대한 참조를 유지한다. 
 이런 이유로 함수가 호출될 때 변수는 사용할 수 있는 상태로 남게된다.

클로저를 사용하면 프라이빗 메소드를 만들어서 흉내낼 수 있음

*/

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }  
  };
  
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  alert(counter1.value()); /* 0 */
  counter1.increment();
  counter1.increment();
  alert(counter1.value()); /* 2 */
  counter1.decrement();
  alert(counter1.value()); /* 1 */
  alert(counter2.value()); /* 0 */