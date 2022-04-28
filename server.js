const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const randomSentence = require("random-sentence");

//Serve static files//
app.use("/public", express.static("public"));

//Send the client the HTML file//
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

//Recieve client's request, respond with random sentence//
app.get("/generate/:amount", (req, res) => {
    console.log(`User's input: ${req.params.amount} - Responded with random sentence(s).`);

    // Constant that has 1-5 range numbers// <--- Experimental
    //const numberRange = /[1-5]/;
    // const validRange = numberRange.test(req.params.amount);

    //Send function only when the input is in range. Yes, i know it is silly. I need to think how to make it easier LOL//
    if (req.params.amount == 5) {
        res.send({
            message: `${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}`,
        });

    } else if (req.params.amount == 4) {
        res.send({
            message: `${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}`,
        });

    } else if (req.params.amount == 3) {
        res.send({
            message: `${randomSentence()}<br>${randomSentence()}<br>${randomSentence()}`,
        });

    } else if (req.params.amount == 2) {
        res.send({
            message: `${randomSentence()}<br>${randomSentence()}`,
        });

    } else if (req.params.amount == 1) {
        res.send({
            message: `${randomSentence()}`,
        });

    } else {
        res.send({
            message: "Error, make sure you type a number ranged between 1-5.",
        });
    }
});

//Server is up on port + message//
app.listen(port);
console.log(`The server is up on port ${port}`);