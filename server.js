const { text } = require('express');
const express = require('express');
const nodemailer= require("nodemailer");
const app=express();

app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
res.sendFile(__dirname+'/public/form.html')
}
)
app.post('/',(req, res)=>{
    console.log(req.body);
    const transporter= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'insta10408@gmail.com',
            pass:'aman2151'

        }
    })
    
    const mailOption = {
        from: req.body.email,
        to: 'info@redpositive.in',
        subject:'Internship Task',
        text:req.body.message
    }

    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        } else{
            console.log(info.response);
            res.send('Success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log('Server running on'+PORT)
})