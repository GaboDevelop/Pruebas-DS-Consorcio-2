require("dotenv").config();

const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.get("/", (req, res) => {
  res.send("Hola Barquisimeto!");
});

// COBRRAR DINERO DE UNA CUENTA DE BANCO
app.get("/cobrar/ach-debit", async (req, res) => {
  console.log("--------------------------------------------------------");
  console.log("Prueba cobrando ACH Debit");
  console.log("--------------------------------------------------------");

  // CREAR CUSTOMER
  const dtoCustomer = {
    description: "Juan Test",
  };
  const customer = await stripe.customers.create(dtoCustomer);

  // CREAR SOURCE (BANK ACCOUNT - ACH DEBIT)
  const dtoSource_achDebit = {
    type: "ach_debit",
    currency: "usd",
    owner: {
      name: "Juan",
      email: "juan.rosen@example.com",
    },
    ach_debit: {
      account_number: "000123456789",
      country: "US",
      type: "individual",
      routing_number: "110000000",
    },
  };
  const source = await stripe.sources.create(dtoSource_achDebit);

  // ASOCIAR SOURCE A CUSTOMER
  const bankAccount = await stripe.customers.createSource(customer.id, {
    source: source.id,
  });

  // COBRAR
  const charge = await stripe.charges.create({
    source: source.id,
    amount: 105,
    currency: "usd",
  });

  // ENVIAR A PANTALLA (Terminar + Pagina Web)
  const dtoRes = { customer, source, bankAccount, charge };
  console.log(dtoRes);

  console.log("");
  console.log("");

  res.json(dtoRes);
  // ESTA DEBERIA DAR FALLIDA. NOT SUPPORTED
});

app.get("/cobrar/ach-credit-transfer", async (req, res) => {
  console.log("--------------------------------------------------------");
  console.log("Prueba cobrando ACH Credit");
  console.log("--------------------------------------------------------");

  // CREAR CUSTOMER
  const dtoCustomer = {
    description: "Maria Test",
  };
  const customer = await stripe.customers.create(dtoCustomer);

  // CREAR SOURCE (BANK ACCOUNT - ACH DEBIT)
  const dtoSource_achDebit = {
    type: "ach_credit_transfer",
    currency: "usd",
    owner: {
      name: "Maria",
      email: "maria.rosen@example.com",
    },
  };
  const sourceA = await stripe.sources.create(dtoSource_achDebit);
  const sourceB = await stripe.sources.create(dtoSource_achDebit);

  // ASOCIAR SOURCE A CUSTOMER
  const bankAccountA = await stripe.customers.createSource(customer.id, {
    source: sourceA.id,
  });
  const bankAccountB = await stripe.customers.createSource(customer.id, {
    source: sourceB.id,
  });

  // COBRAR
  // Lo hago esperar 5 segundos porque debe estar en "Chargable" state el Source
  setTimeout(async () => {
    console.log("Espera 5 segundos por favor...");
    const charge = await stripe.charges.create({
      // HAY QUE VER COMO HACER CUANDO EL CUSTOMER TENGA ASOCIADAS MULTIPLES BANK ACCOUNTS
      customer: customer.id,
      source: sourceB.id,
      amount: 155,
      currency: "usd",
    });

    // ENVIAR A PANTALLA (Terminar + Pagina Web)
    const dtoRes = {
      customer,
      sources: [sourceA, sourceB],
      bankAccounts: [bankAccountA, bankAccountB],
      charge,
    };
    console.log(dtoRes);

    console.log("");
    console.log("");

    res.json(dtoRes);
    // ESTA DEBERIA DAR BIEN
  }, 5000);
});

app.listen(3000, () => {
  console.log("********************************************************");
  console.log("********************************************************");
  console.log("El servidor express esta en escucha en el puerto 3000...");
  console.log("********************************************************");
  console.log("********************************************************");
});
