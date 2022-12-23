const fs = require('fs');
const path = require('path');
const userDbPath = path.join(__dirname, "../data/usersData.json");
const allUsers = JSON.parse(fs.readFileSync(userDbPath, 'utf-8'));
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const userController = {

    login(req,res){
        res.render('users/login', {style: '/css/login.css'});
    },

    loginPost(req,res){
        
        let found = allUsers.find(user => user.email == req.body.email)

        if(found && bcrypt.compareSync(req.body.password, found.password)){

            // aqui se ocultaria la password de 'found'

            req.session.user = found;
            
            if(req.body.recordame){
                res.cookie('user' ,req.session.user, {maxAge : (1000*60)*2})
            }

            res.redirect('/user/profile')
        } else {
            //no se logueo
            res.render('users/login', {style: '/css/login.css', userNotFound: true})
        }
       
    },

    register(req,res){
        res.render('users/register', {style: '/css/register.css'});
    },

    registerPost(req,res){
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                style: '/css/register.css',
                oldData: req.body
            });
        } else {
            delete req.body.confirmPassword;    

        const found = allUsers.find(user => req.body.email == user.email)
        
        if(found){
            res.render('users/register',{style: '/css/register.css', emailNotAvailable: true})
        } else{
            let nombreImagen = "default.png"
            if(req.file.filename){
                nombreImagen = req.file.filename
            }   

            const newUser = {
                id: allUsers[allUsers.length-1].id +1,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                image: nombreImagen
            }
            allUsers.push(newUser)
    
            fs.writeFileSync(userDbPath, JSON.stringify(allUsers, null, ' '));

            delete newUser.password

            req.session.user = newUser
            
            res.redirect('/');
        }
        }
    },

    profile(req, res){
        res.render('users/profile', {style: '/css/profile.css'});
    },

    edit(req, res){
        res.render('users/profileEdit', {style: '/css/register.css'});
    },

    logout(req, res){
        res.clearCookie('user')
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = userController