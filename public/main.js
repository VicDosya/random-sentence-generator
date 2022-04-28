const generateAmountInput = document.getElementById("generateAmountInput");
const generateButton = document.getElementById("generateButton");
const responseText = document.getElementById("responseText");

//Send the server client's request on button press//
const sendButtonReq = async (amount) => {
    const response = await fetch("/generate/" + amount);
    const result = await response.json();
    responseText.innerHTML = result.message;
};

//Pressing button will shoot function//
generateButton.addEventListener('click', () => {
    sendButtonReq(generateAmountInput.value);
});