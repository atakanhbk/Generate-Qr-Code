const userInput = document.getElementsByClassName("user-input")[0];
const generateBtn = document.getElementsByClassName("generate-btn")[0];
const qrImage = document.querySelector(".qr-code > img");

const generateFunction = (e) => {
  e.preventDefault();
  const userValue = userInput.value.trim();

  if (userValue != "") {
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userValue}`;
    qrImage.src = `${api}`;
  } else {
    alert("Please You Should Write Something");
  }
};

generateBtn.addEventListener("click", generateFunction);
