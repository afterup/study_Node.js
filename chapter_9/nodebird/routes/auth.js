const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { User } = require('../models');

const router = express.Router();
router.post('/join', isNotLoggedIn, async(req,res,next)=>{
    const { email, nick, password} = req.body;
    try{
        const exUser = await User.findOne({where: {email}});
        if(exUser) {
            req.flash('joinError', '이미 가입된 메일입니다.');
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(password,12);
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    }catch(error){
        console.log(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req,res,next)=>{
    debugger;
    passport.authenticate('local',(authError,user,info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            req.flash('loginError',info.message);
            return res.redirect('/');
        }
        return req.login(user, (loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req,res,next); //->미들웨어 내의 미들웨어에 붙임 (미들웨어에 사용자 정의를 추가하고 싶을때 이용)
});

router.get('/logout',isLoggedIn, (req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/kakao',passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect:'/',
}), (req,res)=>{
    res.redirect('/');
});

module.exports = router;