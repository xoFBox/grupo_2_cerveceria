function userUnknow(req, res, next){
    if(!req.session.user){
       res.redirect('/user/login');
    }
    next();
   }
   
   module.exports = userUnknow;