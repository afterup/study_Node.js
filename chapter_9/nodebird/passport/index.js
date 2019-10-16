const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const {User} = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user,done)=>{
        done(null,user.id); //done(에러발생시 사용, 세션에 저장)
    });

    passport.deserializeUser((id,done)=>{ // serializeUser에서 세션에 저장된 아이디로 사용자정보 객체 불러옴
        User.findOne({
            where:{id},
            include:[{
                model:User,
                attributes:['id','nick'],
                as:'Followers',
            },{
                model:User,
                attributes:['id','nick'],
                as:'Followings',
            }],
        })
            .then(user => done(null,user))
            .catch(err => done(err));
    });

    local(passport);
    kakao(passport);
};