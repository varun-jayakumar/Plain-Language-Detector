const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

// OR
// const lngDetector = new (require('languagedetect'));

try {

    console.log(lngDetector.detect('எழுத்துக்குறிகள். இதை மேம்படுத்த உத', 1)[0][0]);
}
catch {
    console.log("language not identified");
}