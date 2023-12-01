const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");
const dataResult = fs.readFileSync("./assets/resultFull.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);

console.log("Data from Kadin Aktiv:", dataMaster.length);
console.log("Master Data:", dataSecondary.length);
console.log("Result Data:", JSON.parse(dataResult).length);
