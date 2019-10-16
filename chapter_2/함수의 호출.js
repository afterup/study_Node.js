
o1 = {val1:1, val2:2, val3:3};

function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}

sum.apply(o1) 