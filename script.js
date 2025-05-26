const dise = [
  "./src/dice_1.png",
  "./src/dice_2.png",
  "./src/dice_3.png",
  "./src/dice_4.png",
  "./src/dice_5.png",
  "./src/dice_6.png",
];

const btns = document.querySelectorAll("button");
const image = document.querySelector("#image");
const resultDiv = document.querySelector(".result");
const resetBtn = document.querySelector("#reset");

let value = null;

btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    value = e.target.value;
    btns.forEach((ele) => ele.classList.remove("active"));
    button.classList.add("active");
    console.log(value);
  });
});

image.addEventListener("click", function () {
  if (value == null) {
    alert("Please select a number");
    return;
  }

  const randomIndex = Math.floor(Math.random() * dise.length);
  image.src = dise[randomIndex];

  let currentScore = parseInt(resultDiv.innerHTML) || 0;
  if (parseInt(value) === randomIndex + 1) {
    currentScore += 15;
  } else {
    currentScore -= 5;
  }
  resultDiv.innerHTML = currentScore;

  value = null;
  btns.forEach((btn) => btn.classList.remove("active"));
});

resetBtn.addEventListener("click", function () {
  resultDiv.innerHTML = "0";
  image.src = "./src/dice_1.png";
  btns.forEach((btn) => btn.classList.remove("active"));
  value = null;
});
