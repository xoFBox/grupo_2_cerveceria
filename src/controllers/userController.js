const db = require('../database/models')

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { includes } = require('../middlewares/userRegisterValidation');

const userController = {

    login(req,res){
        res.render('users/login', {style: '/css/login.css'});
    },

    loginPost(req,res){
        db.User.findOne({
            where:{
                email: req.body.email
            },
            include: "category"
        })
        .then((found)=>{
            if(found && bcrypt.compareSync(req.body.password, found.password)){

                // aqui se ocultaria la password de 'found'
                found.category_id = found.category.category_name
                req.session.user = found;
                
                if(req.body.recordame){
                    res.cookie('user' ,req.session.user, {maxAge : (1000*60)*2})
                }
    
                res.redirect('/user/profile')
            } else {
                //no se logueo
                res.render('users/login', {style: '/css/login.css', userNotFound: true})
            }
        })

        
       
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

            db.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then((found)=>{
                if(found){
                    res.render('users/register',{style: '/css/register.css', emailNotAvailable: true})
                } else{
                    let nombreImagen = "default.png"
                    if(req.file.filename){
                        nombreImagen = req.file.filename
                    }
                    
                    db.UserCategory.findOne({
                        where:{
                            category_name: req.body.category
                        }
                    })
                    .then((c)=>{
                        db.User.create({
                            first_name: req.body.first_name,
                            last_name:  req.body.last_name,
                            email:  req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            address: req.body.address,
                            image: nombreImagen,
                            category_id: c.id
                        })
                        .then(()=>{
                            req.session.user = {
                                ...req.body,
                                image: req.file.filename,
                                category_id: c.category_name,
                            }
                            
                            res.redirect('/');
                        })
                    })
        
                    
                    
                }
            })
        }
    },

    profile(req, res){
        res.render('users/profile', {style: '/css/profile.css'});
    },

    edit(req, res){
        res.render('users/profileEdit', {style: '/css/register.css'});
    },

    editPost(req,res){
        let nombreImagen = "default.png"
        if(req.file.filename){
            nombreImagen = req.file.filename
        }
        db.UserCategory.findOne({
            where:{
                category_name: req.body.category
            }
        })
        .then((c)=>{
            db.User.update(
                {
                    first_name: req.body.first_name,
                    last_name:  req.body.last_name,
                    email:  req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    address: req.body.address,
                    image: nombreImagen,
                    category_id: c.id
                },
                {
                    where: {id: req.params.id}
                })
                .then(()=>{
                    req.session.user = {
                        image: req.file.filename,
                        ...req.body,
                        category_id: c.category_name,
                    }

                    res.redirect('/');
                })
        })
        
    },

    logout(req, res){
        res.clearCookie('user')
        req.session.destroy();
        res.redirect('/')
    },

    newCategory(req,res){
        db.UserCategory.findOne({
            where:{
                category_name: req.body.newCategory
            }
        })
        .then((found)=>{
            if(!found){
                db.UserCategory.create({
                    category_name: req.body.newCategory
                })
            }
            res.redirect('/')
        })
        
    }
}

module.exports = userController