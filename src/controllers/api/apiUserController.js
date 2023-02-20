const db = require('../../database/models')



const apiUserController = {

    allUsers(req, res){
        db.User.findAll()
        .then(data => {
            res.status(200).json({
                count: data.length,
                data: data.map(user=>({id: user.id, firstName: user.first_name, email: user.email, detail: `localhost:3000/api/users/${user.id}`}))
                
    })})
        .catch(error => res.status(500).json('ERROR: DB_ERROR' + error))

    },

    userDetail(req, res){
       db.User.findByPk(req.params.id)
        .then(data=> {
            res.status(200).json({
                user: {
                    id: data.id,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    address: data.address,
                    email: data.email,
                    image: `localhost:3000/images/users/${data.image}`
                }
                
        })})
        .catch(error => res.status(500).json('ERROR: DB_ERROR' + error))
        }
    };
     

module.exports = apiUserController