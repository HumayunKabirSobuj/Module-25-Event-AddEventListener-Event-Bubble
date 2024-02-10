//  option two function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// option three function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option three onother function
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}