document.querySelectorAll(".copy-link").forEach((copyLinkContainer) => {
  const inputValue = copyLinkContainer.querySelector(".copy-link-input");
  const copyButton = copyLinkContainer.querySelector(".copy-link-button");

  inputValue.addEventListener("focus", () => {
    inputValue.select();
  });

  copyButton.addEventListener("click", () => {
    const text = inputValue.value;
    navigator.clipboard.writeText(inputValue.value);
    inputValue.value = "Copied!"
    setTimeout(() => {
      inputValue.value = text;
    },2000)
    
  });
});
