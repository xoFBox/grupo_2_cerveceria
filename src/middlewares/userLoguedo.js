function userLogued (req,res,next) {
    res.locals.logueado = false

    if(req.cookies.user){
        req.session.user = req.cookies.user
    }

    if(req.session.user){
        res.locals.logueado = true
        res.locals.user = req.session.user
    }

    next()
}

module.exports = userLogued