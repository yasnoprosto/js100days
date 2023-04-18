const input = document.querySelector("form input");
const maxLength = input.getAttribute("maxlength")
const counter = document.querySelector("form .counter")
const icon = document.querySelector("form i")

input.addEventListener('keyup', () => {
  counter.innerText = maxLength - input.value.length
  if(input.value.length == 16) {
      counter.style.color = "red";
      counter.style.borderColor = "red";
      input.style.borderColor = "red";
      icon.style.color = "red";
  } else {
    counter.style.color = "#58cff1";
      counter.style.borderColor = "#58cff1";
      input.style.borderColor = "#58cff1";
      icon.style.color = "#58cff1";
  }
})

