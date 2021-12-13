const body = document.querySelector("#body");

const selectAlertButton = document.querySelector("#mybuttonCreateAlert");
const SelectBackgroundButton = document.querySelector("#mybuttonChangeBackground");

const createAlert = () => {
    alert("button clicked");
};

// const changeBackgroundColor = () => {
//     body.classList.add("red-background");
// };

const toggleBackgroundColor = () => {
    body.classList.toggle("red-background");
};

selectAlertButton.addEventListener("click", createAlert);
// SelectBackgroundButton.addEventListener("click", changeBackgroundColor);
SelectBackgroundButton.addEventListener("click", toggleBackgroundColor);
