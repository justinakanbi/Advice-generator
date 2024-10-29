// let adviceId = document.querySelector(".adv");
// let adviceContent = document.querySelector(".quo");
// let loading = document.querySelector(".loading");
// let button = document.querySelector(".glow");


// let adviceData = async () => {
// let response = await fetch("https://api.adviceslip.com/advice")
// let data = await response.json();
// loading.classList.add("d-none")
// adviceId.textContent = `ADVICE #${data.slip.id}`;
// adviceContent.textContent = `${data.slip,advice}`;
// };

// button.addEventListener("click", () => {
//     location.reload("");
// })

// setTimeout(() => {
//     adviceData();
// }, 3000)

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("generate-btn");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const {slip:{id,advice}} =await response.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

getAdvice();

adviceBtn.addEventListener("click", () => {
    getAdvice();
});