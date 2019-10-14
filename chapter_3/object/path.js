const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep); // 경로 구분자
console.log('path.delimiter',path.delimiter); //환경변수 구분자
console.log('---------');

console.log('path.dirname()',path.dirname(string)); //파일이 위치한 폴더 경로
console.log('path.extname()',path.extname(string)); //파일의 확장자
console.log('path.basename()',path.basename(string)); //확장자 포함 파일이름
console.log('path.basename()',path.basename(string, path.extname(string))); //확장자 비포함 파일이름
console.log('---------');

console.log('path.parse()',path.parse(string)); // 파일경로를 root, dir, base, ext, name으로 구분
console.log('path.format()',path.format({
    dir: 'C:\\users\\afterup',
    name: 'path',
    ext: '.js',
}));
