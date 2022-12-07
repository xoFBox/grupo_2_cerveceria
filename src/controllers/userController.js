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
            delete found.password
            req.session.user = found;
            res.redirect('/')
        } else {
            //no se logueo
            res.render('users/login', {style: '/css/login.css', userNotFound: true})
        }
       
    },

    register(req,res){
        res.render('users/register', {style: '/css/register.css'});
    },

    registerPost(req,res){
        // Se borra hasta que se valide la contraseña
        
        delete req.body.confirmPassword;    

        const found = allUsers.find(user => req.body.email == user.email)
      
        if(found){
            res.render('users/register',{style: '/css/register.css', emailNotAvailable: true})
        } else{
            const newUser = {
                id: allUsers[allUsers.length-1].id +1,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file ? req.file.orginialname : 'default.png'
            }
            allUsers.push(newUser)
    
            fs.writeFileSync(userDbPath, JSON.stringify(allUsers, null, ' '));

            delete newUser.password

            req.session.user = newUser
            
            res.redirect('/');
        }

    }
}

module.exports = userController