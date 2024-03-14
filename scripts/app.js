let input = document.getElementById("form_text");
input.addEventListener("input", () => {
  if (input.value.length >= 30) {
    input.classList.add("expanded");
  } else {
    input.classList.remove("expanded");
  }
});

function encrypt() {
  let inputText = document.getElementById("form_text").value;
  let encryptMessage = inputText
    .split("e")
    .join("enter")
    .split("i")
    .join("imes")
    .split("a")
    .join("ai")
    .split("o")
    .join("ober")
    .split("u")
    .join("ufat");
  let resultArea = document.getElementById("encrypted_text");
  resultArea.innerHTML = encryptMessage;
}

function decrypt() {
  let inputText = document.getElementById("form_text").value;
  let decryptMessage = inputText
    .split("enter")
    .join("e")
    .split("imes")
    .join("i")
    .split("ai")
    .join("a")
    .split("ober")
    .join("o")
    .split("ufat")
    .join("u");
  let resultArea = document.getElementById("encrypted_text");
  resultArea.innerHTML = decryptMessage;
}

function copy() {
  let textToCopy = document.getElementById("encrypted_text");
  textToCopy.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textToCopy.value);
}

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

document
  .getElementById("encrypt_button")
  .addEventListener("click", function () {
    let text = document.getElementById("form_text").value;
    if (text) {
      document.getElementById("result_before").style.display = "none";
    } else {
      return;
    }
  });

document
  .getElementById("decrypt_button")
  .addEventListener("click", function () {
    let text = document.getElementById("form_text").value;
    if (text) {
      document.getElementById("result_before").style.display = "none";
    } else {
      return;
    }
  });
