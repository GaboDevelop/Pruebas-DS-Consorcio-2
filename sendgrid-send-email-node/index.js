const express = require("express");
const app = express();
const SENDGRID_API_KEY = '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'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY);

app.get("/", (req, res) => {
  res.send("Estoy en la ruta HOME");
});

app.post("/send", (req, res) => {
    const msg = {
      to:"gabriel.enr1998@gmail.com",
      from: 'geortega.17@est.ucab.edu.ve',
      subject: 'test',
      templateId: 'd-8f0baa124d6e44f8b377f88de7af7b81',
      dynamic_template_data: {
        constante: "equipo 2",
      }
  };
  sgMail.send(msg)
          .then(()=>res.send("Enviaste el correo"))
          .catch(err => console.log(err.response.body))
  ;
});

app.get("*", (req, res) => {
  res.send("Estoy en la ruta 404");
});

app.listen(3000, () => {
  console.log("El servidor express esta en escucha en el puerto 3000...");
});
