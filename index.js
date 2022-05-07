const inputEl = document.getElementById("input");
const addButton = document.getElementById("add");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const countEl = document.getElementById("count");
const resetEl = document.getElementById("reset");

let count = 0;


increaseButton.addEventListener("click", function() {
    count++;
    countEl.textContent = "Count: " + count;
})

decreaseButton.addEventListener("click", function() {
    count--;
    countEl.textContent = "Count: " + count;
})

resetEl.addEventListener("click", function() {
    count = 0;
    countEl.textContent = "Count: " + count;
})

addButton.addEventListener("click", function() {
    let calc = count + parseInt(inputEl.value);
    count = calc;
    countEl.textContent = "Count: " + calc;
    inputEl.value = "";
})
