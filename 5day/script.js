const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
let infoTxt = document.querySelector('.info-txt')
let filterInput;

txtInput.addEventListener("keyup", () => {
  //removing spaces & special character from entered value
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none"
  checkBtn.classList.remove("active");
});

checkBtn.addEventListener("click", () => {
    //splitting user input character, reversing them, and joining them in a single word
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block"
  if(filterInput !== reverseInput) {
    return infoTxt.innerHTML = `No, <span> '${txtInput.value}'</span> is not a palindrome!`
  } 
  infoTxt.innerHTML = `Yes, <span> '${txtInput.value}'</span> is a palindrome!`
});
 