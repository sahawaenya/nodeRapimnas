const { log } = require("console");
const fs = require("fs");
const getScore = require("./helper/getScore");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);
const result = getScore(dataMaster, dataSecondary);

console.log("Master Data:", dataMaster.length);
console.log("Compared Data:", dataSecondary.length);
console.log("Uregistered Data:", result.length);
fs.writeFileSync("./assets/result.json", JSON.stringify(result, null, 2));
// console.log(strCheck.includes(str2.toLowerCase()));
