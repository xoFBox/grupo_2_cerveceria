const fs = require('fs');
const path = require('path');
const userDbPath = path.join(__dirname, "../data/usersData.json");
const allUsers = JSON.parse(fs.readFileSync(userDbPath, 'utf-8'));


const userController = {

    login(req,res){
        res.render('users/login', {style: '/css/login.css'});
    },

    loginPost(req,res){ 
        res.redirect('/')
    },

    register(req,res){
        res.render('users/register', {style: '/css/register.css'});
    },

    registerPost(req,res){
        // Se borra hasta que se valide la contraseña
        delete req.body.confirmPassword;

        allUsers.push({
            id: allUsers[allUsers.length-1].id +1,
            ...req.body,
            image: req.file ? req.file.orginialname : 'default.png'
        })

        fs.writeFileSync(userDbPath, JSON.stringify(allUsers, null, ' '));
        res.redirect('/');
    }
}

module.exports = userController