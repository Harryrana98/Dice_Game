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
    btns.forEach((ele)=>ele.classList.remove("active"))
    button.classList.add("active")
    console.log(value);

    // btns.forEach((btn) => {
    //   btn.style.backgroundColor = "";  
    //   btn.style.color = "";
    // });
  });
});

function diseDisplay() {


    
    image.addEventListener("click", function () {
        if (value==null) {
         alert("Please select a number");
         return;
       }
       else{
 const randomIndex = Math.floor(Math.random() * dise.length);

    console.log(randomIndex);

    image.src = dise[randomIndex];

    if (parseInt(value) === randomIndex + 1) {
      resultDiv.innerHTML += 15;
    } else { 
      resultDiv.innerHTML -= 5;
    }
       }
     
   
       value=null
});
}

diseDisplay();

