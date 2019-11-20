const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config()

const app = express();
const dev = app.get('env') !== 'production';

if(!dev){
    app.disable('x-powered-by')
    app.use(express.static(path.resolve(__dirname, 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/userForm', (req, res) => {
  const htmlEmail = `
    <div style="background-color:#C9FDFF; padding:10px;">
      <h1 style="background-color:#062873; color:white; padding:10px;">Solicitud de contacto de usuario</h1>
      <h3>Datos de contacto:</h3>
      <ul>
        <li><b>Nombres:</b> ${req.body.names}</li>
        <li><b>Apellidos:</b> ${req.body.lastnames}</li>
        <li><b>Edad:</b> ${req.body.age}</li>
        <li><b>Estado Civil:</b> ${req.body.civicStatus}</li>
        <li><b>Dirección:</b> ${req.body.address}</li>
        <li><b>Email:</b> ${req.body.email}</li>
        <li><b>Teléfono Fijo:</b> ${req.body.phone}</li>
        <li><b>Teléfono Celular:</b> ${req.body.celphone}</li>
        <li><b>Estudios:</b> ${req.body.studies}</li>
        <li><b>Experiencia 1:</b> ${req.body.experience1}</li>
        <li><b>Experiencia 2:</b> ${req.body.experience2}</li>
      </ul>
    </div>`
    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASS, 
      }
    })

    let mailOptions = {
      from: 'Actitud60 contacto@actitud60.cl',
      to: 'rlatufm@gmail.com',
      subject: `User Form ${req.body.names} ${req.body.lastnames}`,
      replyTo: req.body.email,
      text: req.body.name,
      html: htmlEmail,

    }

    transporter.sendMail(mailOptions, (err, info) =>{
      if(err){
        return console.log(err)
      }
      console.log('Message sent: %s', info.name)
    })
  }
  );

  app.post('/api/orgForm', (req, res) => {
    const htmlEmail = `
      <div style="background-color:#C9FDFF; padding:10px;">
        <h1 style="background-color:#062873; color:white; padding:10px;">Solicitud de contacto de ${req.body.organization}</h1>
        <h3>Datos de contacto:</h3>
        <ul>
          <li><b>Nombres:</b> ${req.body.names}</li>
          <li><b>Apellidos:</b> ${req.body.lastnames}</li>
          <li><b>Organización:</b> ${req.body.organization}</li>
          <li><b>Email:</b> ${req.body.email}</li>
          <li><b>Teléfono:</b> ${req.body.phone}</li>
          <li><b>Estoy buscando:</b> ${req.body.looking}</li>
        </ul>
      </div>`
      let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASS, 
        }
      })
  
      let mailOptions = {
        from: 'Actitud60 contacto@actitud60.cl',
        to: 'rlatufm@gmail.com',
        subject: `Formulario de Organización ${req.body.organization}`,
        replyTo: req.body.email,
        text: req.body.name,
        html: htmlEmail,
  
      }
  
      transporter.sendMail(mailOptions, (err, info) =>{
        if(err){
          res.status(500).send('Something wrong happened!');
          return console.log(err)
        }
        console.log('Message sent: %s', info.name)
        res.status(200).send('Mail sent');
      })
      
    }
    );
  

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
})