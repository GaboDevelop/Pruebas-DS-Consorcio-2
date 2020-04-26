const express = require("express");
const app = express();
var CronJob = require("cron").CronJob;

app.get("/", (req, res) => {
  res.send("Hola Barquisimeto!");
});

// COBRRAR DINERO DE UNA CUENTA DE BANCO
app.get("/cron", async (req, res) => {
  let message = req.query.message || "Mensaje por defecto";
  let minuteFreq = req.query.minuteFreq || 1;

  let job = new CronJob(`*/${minuteFreq} * * * *`, () => {
    console.log(message);
  });
  job.start();

  res.json(`Cada ${minuteFreq} minutos tu terminal dirá: ${message}`);
});

app.listen(3000, () => {
  console.log("********************************************************");
  console.log("********************************************************");
  console.log("El servidor express esta en escucha en el puerto 3000...");
  console.log("********************************************************");
  console.log("********************************************************");
});
