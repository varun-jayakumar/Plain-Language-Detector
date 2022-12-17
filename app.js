const form = document.getElementById("Form");
const displayArea = document.getElementById("displayArea");
const LanguageDetect = require("languagedetect");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  displayArea.innerHTML = "";
  const input = document.getElementById("inputText");
  const lngDetector = new LanguageDetect();
  const newEle = document.createElement("h3");
  try {
    newEle.innerText = lngDetector.detect(input.value, 1)[0][0];
  } catch {
    newEle.innerText = "Sorry I couldnt get it";
  }
  displayArea.append(newEle);
});
