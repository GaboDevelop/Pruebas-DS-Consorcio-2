const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Estoy en la ruta HOME");
});

// SENDGRID - ENVÍO DE CORREOS
const SENDGRID_API_KEY = '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'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY);

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
            .catch(err => console.log(err.response.body));
});

// ETHERSCAN WITH ROPSTEN TESTNET - VALIDACIÓN DE TRANSACCIONES
const apiKeyToken = 'HQ9BNTX155A7RJSABVE356F6CGYC7XINAX';
const etherscanApi = require('etherscan-api').init(apiKeyToken, 'ropsten'); // Default timeout: 10000

const axios = require('axios');

app.post("/validate-transactions", (req, res) => {
    const metamaskWalletAddress = '0xDCa15B49827229FE0a544BbeBF244b9632a712A7';
    const ropstenTransactionHash = '0x24c3121c1807038a2968e30ab274ca9b7ce5849d6cb628827bef804028083641';

    const etherscanTransaction = etherscanApi.proxy.eth_getTransactionByHash(ropstenTransactionHash)
        
    etherscanTransaction.then((etherscanResponse) => {
        const transactionResult = etherscanResponse.result;
        console.log('transactionResult', transactionResult);

        // The transaction destination account matches with metamask wallet address
        if (transactionResult.to === metamaskWalletAddress.toLowerCase()) {
            axios.get(`https://api-ropsten.etherscan.io/api`, {
                params: {
                    module: 'transaction',
                    action: 'getstatus',
                    txhash: ropstenTransactionHash,
                    apikey: apiKeyToken,
                }
            })
            .then((ropstenResponse) => {
                const ropstenTestnetTransaction = ropstenResponse.data;
                console.log('ropstenTestnetTransaction', ropstenTestnetTransaction);

                // The transaction status indicates no errors
                if (ropstenTestnetTransaction.result.isError === '0') {
                    console.log('Transaction validated in ropsten testnet');
                    res.send("Transaction validated!");
                } else {
                    res.send("Error validating transaction in Ropsten Testnet");
                }
            })
            .catch((e) => {
                console.warn('Error validating transaction in Ropsten Testnet', e);
            })
        } else {
            res.send("Transaction invalidated!");
        }
    })
    .catch((e) => {
        res.send("Error validating transaction");
    })
});

app.get("*", (req, res) => {
  res.send("Estoy en la ruta 404");
});

app.listen(3000, () => {
  console.log("El servidor express esta en escucha en el puerto 3000...");
});
