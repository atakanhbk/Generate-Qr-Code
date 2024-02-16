const userInput = document.getElementsByClassName("user-input")[0];
const generateBtn = document.getElementsByClassName("generate-btn")[0];


const generateFunction = (e) => {
    e.preventDefault();
    
    const userValue = userInput.value.trim();
    

    console.log(userValue);
  
}


generateBtn.addEventListener("click",generateFunction);