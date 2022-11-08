const userController = {

    login(req,res){
        res.render('login', {style: '/css/login.css'});
    },

    register(req,res){
        res.render('register', {style: '/css/register.css'});
    },

    loginPost(req,res){
        res.redirect('/')
    },
}

module.exports = userController