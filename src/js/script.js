const base = document.querySelector(".base-input");
const height = document.querySelector(".height-input");
const btn = document.querySelector(".btn-area");
const output = document.querySelector("#output");

let calArea = () => {
    if (base.value > 0 && height.value > 0) {
        const area = (1 / 2) * base.value * height.value;
        output.innerText = `Area is ${area}`;
    } else {
        output.innerText = `Enter positive number`;
    }
}
btn.addEventListener("click", calArea, false);