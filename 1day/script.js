const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease__by__100")) {
      count -= 100;
    } else if (styles.contains("decrease__by__10")) {
      count -= 10;
    } else if (styles.contains("decrease__by__1")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase__by__1")) {
      count++;
    } else if (styles.contains("increase__by__10")) {
      count += 10;
    } else if (styles.contains("increase__by__100")) {
      count += 100;
    }

    if(count > 0) {
        counter.style.color = "green"
    } 
    else if(count === 0) {
        counter.style.color = "gray"
    } else if(count < 0) {
        counter.style.color = "red"
    }
    counter.textContent = count;
  });
});

// дописать увеличение яркости цвета с каждым кликом
