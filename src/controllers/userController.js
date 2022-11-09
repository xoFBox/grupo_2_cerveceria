const userController = {

    login(req,res){
        res.render('users/login', {style: '/css/login.css'});
    },

    register(req,res){
        res.render('users/register', {style: '/css/register.css'});
    },

    loginPost(req,res){
        res.redirect('/')
    },
}

module.exports = userController