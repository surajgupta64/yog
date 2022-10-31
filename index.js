const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000;
const userValidate = require('./Routes/jwt')
// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Mooongose connection 
mongoose.connect('mongodb+srv://yogpowerinternational:YogPowerInternational1998@cluster0.1nevea5.mongodb.net/yogapowerdb?retryWrites=true&w=majority',
    () => {
        console.log("DB connected");
    }
);
mongoose.connection.on('error', (err) => {
    console.log(err)
});
app.get('/', (req, res) => res.json({ status: "Running" }));

//ROUTES 
app.use('/signup', require('./Routes/signup'));

// Proctected
app.use('/login', require('./Routes/login'));
app.use('/renewlsClient', userValidate, require('./Routes/renewlsClient'));
app.use('/renewedClients', userValidate, require('./Routes/renewedClients'));
app.use('/activeClients', userValidate, require('./Routes/activeClients'));
app.use('/allClients', userValidate, require('./Routes/allClients'));
app.use('/expriryClients', userValidate, require('./Routes/expriryClients'));
app.use('/Servicedata', userValidate, require('./Routes/Servicedata'));
app.use('/Payment', userValidate, require('./Routes/Payment'));
app.use('/individualMember', userValidate, require('./Routes/individualMember'));
app.use('/enquiryForm', userValidate, require('./Routes/enquiryForm'));
app.use('/employeeForm', userValidate, require('./Routes/employeeForm'));
app.use('/Batch', userValidate, require('./Routes/Batch'));
app.use('/Companyprofile', userValidate, require('./Routes/Companyprofile'));
app.use('/Package', userValidate, require('./Routes/Package'));
app.use('/offer', userValidate, require('./Routes/offer'));
app.use('/brandlogoupdate', userValidate, require('./Routes/brandlogoupdate'));
app.use('/service', userValidate, require('./Routes/service'));
app.use('/staffAttendance', userValidate, require('./Routes/staffAttentance'));
app.use('/clientAttendance', userValidate, require('./Routes/clientAttendance'));
app.use('/prospect', userValidate, require('./Routes/prospect'));
app.use('/subservice', userValidate, require('./Routes/subservice'));
app.use('/memberForm', userValidate, require('./Routes/memberForm'));
app.use('/designation', userValidate, require('./Routes/designation'));
app.use('/impCallList', userValidate, require('./Routes/impCallList'));
app.use('/suppilerCallList', userValidate, require('./Routes/suppilerCallList'));
app.use('/stockListing', userValidate, require('./Routes/stockListing'));
app.use('/fitnessProduct', userValidate, require('./Routes/fitnessProduct'));
app.use('/ayurdevaMedicine', userValidate, require('./Routes/ayurdevaMedicine'));
app.use('/foodProduct', userValidate, require('./Routes/foodProduct'));
app.use('/guestCallList', userValidate, require('./Routes/guestCallList'));
app.use('/invoice', userValidate, require('./Routes/Invoice'));
app.use('/emailsms', userValidate, require('./Routes/emailSender'));

app.listen(port, function () {
    console.log('listening on port', port);
})