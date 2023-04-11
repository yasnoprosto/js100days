// const hexNumbers = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
// ];
// const colors = document.querySelectorAll(".color");
// const btn = document.querySelector("#btn__generate");

// btn.addEventListener("click", () => {
//   colors.forEach((color) => {
//     let randomHex = getRandomHex();
//     color.textContent = randomHex;
//     color.style.backgroundColor = randomHex;
//   });
// });

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function getRandomHex() {
//   const hexColor = ["#", "", "", "", "", "", ""];
//   for (let i = 1; i < hexColor.length; i++) {
//     let randomIndex = getRandomInt(0, 16);
//     let hexNumber = hexNumbers[randomIndex];
//     hexColor[i] = hexNumber;
//   }

//   return hexColor.join("");
// }

const colors = document.querySelectorAll('.colors');
const btn = document.querySelector("#btn__generate");

function generateColors() {
    colors.forEach((color) => {
        let hexCode = "#" + Math.random().toString(16).substring(2,8);
        color.style.backgroundColor = hexCode;
        color.textContent = hexCode;
    })
}

btn.addEventListener('click', generateColors)
