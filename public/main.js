const generateAmountInput = document.getElementById("generateAmountInput");
const generateButton = document.getElementById("generateButton");
const responseContainer = document.getElementById("responseContainer");

//Send the server client's request on button press//
const sendButtonReq = async (amount) => {
    const response = await fetch("/generate/" + amount);
    const result = await response.json();
    responseContainer.innerText = '';

    // Recieve error message and create new HTML element.//
    result.errors.forEach((error) => {
        const errorEl = document.createElement("h2");
        errorEl.setAttribute("class", "errorClass");
        errorEl.innerText = error;
        responseContainer.appendChild(errorEl);
    });

    // Recieve sentence message and create new HTML element.//
    result.sentences.forEach((sentence) => {
        const sentenceOneEl = document.createElement("h2");
        sentenceOneEl.setAttribute("class", "sentence");
        sentenceOneEl.innerText = sentence;
        responseContainer.appendChild(sentenceOneEl);
    });
};

//Pressing button will shoot function//
generateButton.addEventListener('click', () => {
    if (generateAmountInput.value === '') {
        sendButtonReq(1);
    } else {
        sendButtonReq(generateAmountInput.value);
    }
});