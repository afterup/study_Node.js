var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req,res,next){
  console.log(req.url,'미들웨어임');
  next();
});
app.use(logger('dev')); //morgan
app.use(express.static(path.join(__dirname, 'public'))); //정적파일 제공 (image, js, css 등)
app.use(express.json()); //body-parser
app.use(express.urlencoded({ extended: false })); //true면 qs 확장모듈 사용, false면 querystring 모듈 사용
app.use(cookieParser());//cookie-parser
app.use(session({
  resave: false, //세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지
  saveUnitialized: false, //세션에 저장할 내역이 없더라도 세션을 저장할지 (보통 방문자 추적시사용)
  secret: 'secret code', 
  cookie: {
    httpOnly:true, //클라이언트에서 쿠키 확인못하게 설정
    secure:false,  //https가 아닌 환경에서도 사용. 배포시에는 https 적용하고 true사용
  },
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
