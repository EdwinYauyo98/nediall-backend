const pool = require('../database');

const contact = (req, res) => {
    const {name, lastname, email, contact_number} = req.body;
    pool().getConnection(function (err, connection) {
        if(err) throw err;


        
        connection.query('INSERT INTO dbcfd5endvqsc0.contact_credentials SET?',{
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

module.exports = {
    contact
}