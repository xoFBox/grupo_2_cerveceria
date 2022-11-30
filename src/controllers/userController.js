const fs = require('fs');
const path = require('path');
const userDbPath = path.join(__dirname, "../data/usersData.json");
const allUsers = JSON.parse(fs.readFileSync(userDbPath, 'utf-8'));
const bcrypt = require('bcryptjs');


const userController = {

    login(req,res){
        res.render('users/login', {style: '/css/login.css'});
    },

    loginPost(req,res){

        let found = allUsers.find(user => user.email == req.body.email)
        if(found && bcrypt.compareSync(req.body.password, found.password)){
            //se logueo
            res.redirect('/')
        } else {
            //no se logueo
            res.redirect('/user/login')
        }
       
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
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file ? req.file.orginialname : 'default.png'
        })

        fs.writeFileSync(userDbPath, JSON.stringify(allUsers, null, ' '));
        res.redirect('/');
    }
}

module.exports = userController