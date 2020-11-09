const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.sendgridAPI);

const msgSend = (userMail,userName)=>{
    sgMail.send({
        to:userMail,
        from:'purimuneer@gmail.com',
        subject:'welcome!!',
        text:`Hello, welcome to our app ${userName}.`
    })

}

const msgSendDelete = (userMail,userName)=>{
    sgMail.send({
        to:userMail,
        from:'purimuneer@gmail.com',
        subject:':{',
        text:`Hello, Sorry to see you go from our app ${userName}.`
    })

}
module.exports = {
    msgSend,
    msgSendDelete
}