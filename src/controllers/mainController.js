const mainController ={
    
    index(req, res) {
        res.render('index', {style: "/css/index.css"});
}
}

module.exports = mainController