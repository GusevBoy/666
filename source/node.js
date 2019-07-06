var nodemailer = require ('nodemailer');
var transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
        user: ' y ouremail@address.com',
        pass: 'yourpassword'
    }
});