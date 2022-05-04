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

    //Valid number range.
    const numberRange = /[1-5]/;
    const validRange = numberRange.test(req.params.amount);

    let responseData = {
        sentences: [],
        errors: [],
    };

    if (validRange) {
        console.log(`User's input: ${req.params.amount} - Responded with a random sentence(s).`);

        for (let i = 0; i < req.params.amount; i++) {
            responseData.sentences.push(randomSentence());
        };
        res.send(responseData);

    } else {
        console.log(`User's input: ${req.params.amount} - Responded with an error.`);

        res.send({
            sentences: [" "],
            errors: ["Error, make sure you type a number ranged between 1-5."],
        });
    }
});

//Server is up on port + message//
app.listen(port);
console.log(`The server is up on port ${port}`);