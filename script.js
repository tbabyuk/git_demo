
console.log("hello world!")

const date = document.querySelector("#date");

const lang = navigator.language;
const now = new Date();

const today = now.toLocaleString(lang, {dateStyle: "full"});

date.innerText = today;