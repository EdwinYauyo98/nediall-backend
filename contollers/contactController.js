const pool = require('../database');

const contact = (req, res) => {
    const {name, lastname, email, contact_number} = req.body;
    pool().getConnection(function (err, connection) {
        if(err) throw err;


        
        connection.query('INSERT INTO contact_credentials SET?',{
            name: name,
            lastname: lastname,
            email: email.trim(),
            contact_number: contact_number
        }, (err, result) => {
            if(!err){
                res.json("contacto añadido")
            }else{
                res.json("contacto no añadido");
                console.log(err);
            }

            connection.release();
        });

    });
}

const getcontact = (req,res) =>{
    
    pool().getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM contact_credentials', (err, result) =>{
            if(!err){
                res.json("ok");
            }
            else{
                res.json("error");
                console.log("error");

            }
        })
    });
}

module.exports = {
    contact,
    getcontact
}