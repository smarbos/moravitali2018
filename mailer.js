var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)

let smtpConfig = {
    host: '',
    port: 25,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: 'hola@moravitali.com.ar',
        pass: ''
    }
};

let smtpTransport = nodemailer.createTransport(smtpConfig);


// verify connection configuration
smtpTransport.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Test ✔ <test@moravitali.com.ar>", // sender address
    to: "smarbos@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
