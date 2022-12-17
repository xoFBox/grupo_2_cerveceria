const mainController ={
    
    index(req, res) {
        if (req.session){
            res.render('index', {style: "/css/index.css", usuario: req.session.user});
        }else{
            res.render('index', {style: "/css/index.css"});
        }
        
}
}

module.exports = mainController