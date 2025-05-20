dise = [
  "./src/dice_1.png",
  "./src/dice_2.png",
  "./src/dice_3.png",
  "./src/dice_4.png",
  "./src/dice_5.png",
  "./src/dice_6.png",
];

const btns = document.querySelectorAll("button");
const imageDiv = document.querySelector(".imageDiv");
const image = document.querySelector("#image");
const resultDiv = document.querySelector(".result");
const resetBtn = document.querySelector("#reset");

let value=null;

btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    value = e.target.value;
    button.style.backgroundColor = "green";
    button.style.color = "white";
    console.log(value);
  });
});

function diseDisplay() {


    
    image.addEventListener("click", function () {
        if (!value) {
         alert("Please select a number");
         return;
       }
      imageDiv.innerHTML = "";
    const img = document.createElement("img");
    const imgDiv = document.createElement("div");
    const randomIndex = Math.floor(Math.random() * dise.length);

    console.log(randomIndex);

    img.src = dise[randomIndex];

    imgDiv.append(img);
    imageDiv.append(imgDiv);

    if (parseInt(value) === randomIndex + 1) {
      resultDiv.innerHTML = 15;
    } else { 
      resultDiv.innerHTML = -5;
    }
});
}

diseDisplay();

