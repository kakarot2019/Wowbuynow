const mongoose = require('mongoose');

const connectdatabase =( ) => {
    mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then((data) => {
        console.log('MOngoDB connected with server: $(data.connection.host)');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports=connectdatabase;

