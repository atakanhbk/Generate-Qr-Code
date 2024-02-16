const userInput = document.getElementsByClassName("user-input")[0];
const generateBtn = document.getElementsByClassName("generate-btn")[0];
const qrImage = document.querySelector(".qr-code > img");
const spinnerBorder = document.getElementsByClassName("spinner-border")[0];

const generateFunction = (e) => {
  e.preventDefault();
  const userValue = userInput.value.trim();

  if (userValue != "") {
    spinnerBorder.style.display = "block";
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userValue}`;
    qrImage.src = `${api}`;

    qrImage.addEventListener("load", () => {
        qrImage.parentNode.style.display = "block";
        spinnerBorder.style.display = "none";
        userInput.value = "";
    });
  } else {
    alert("Please You Should Write Something");
  }
};

generateBtn.addEventListener("click", generateFunction);
