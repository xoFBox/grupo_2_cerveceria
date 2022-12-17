function userLogued(req, res, next){
 if(req.session.user){
    res.redirect('/user/profile');
 }
 next();
}

module.exports = userLogued;