const mongoose = require('mongoose');

mongoose.connect("http://localhost:27017/WowBuyNow", {useNewUrlParser:true, useUnifiedTopology:true ,UseCreateindex:true}).then(data) => {
    console.log('MOngoDB connected with server: ');
};