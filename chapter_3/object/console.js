console.time('시간 측정');
for(let i=0; i<100000;i++){
    continue;
}
console.timeEnd('시간 측정');

console.log('내용표시');
console.error('error메세지');

const obj = {
    outside: {
        inside: {
            key:'value',
        },
    },
};

//객체 콘솔에 표시
console.dir(obj, {colors: true, depth:1});
console.dir(obj, {colors: true, depth:2});
