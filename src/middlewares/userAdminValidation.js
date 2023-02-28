function userAdminValidation (req,res,next){
    if(req.session.user.category_id !== "admin"){
        res.redirect('/')
    }
    next();
    
    
}

module.exports = userAdminValidation;