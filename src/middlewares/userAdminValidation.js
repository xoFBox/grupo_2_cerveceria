function userAdminValidation (req,res,next){
    if(req.session.user && req.session.user.category_id === "admin"){
        next();
    }else{
        res.redirect('/')
    }
    
    
    
}

module.exports = userAdminValidation;