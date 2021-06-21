const btn = document.getElementById("button");

btn.onclick = () => changeBG(randomDirection(), randomColor(), randomColor());

const revertBtn = document.getElementById("revert-button");
if (revertBtn) revertBtn.onclick = () => revertBG();


const body = document.getElementById("body");
function changeBG(direction, color1, color2) {
    body.style.backgroundImage = `linear-gradient(${direction}, rgb(${color1}), rgb(${color2}))`;
}

function randomColor() {
    return `${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}`;
}

function randomDirection() {
    return `${random(0, 359)}deg`;
}

function random(min, max) {
    const randomNumber = min + Math.round(Math.random() * (max - min));
    return randomNumber;
}

function revertBG() {
    document.body.style.backgroundImage = "linear-gradient(to bottom right, rgb(236, 131, 236), rgb(19, 62, 155))";
}