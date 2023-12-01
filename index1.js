const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");
const getScore = require("./helper/getScore");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);
const result = getScore(dataMaster, dataSecondary);

fs.writeFileSync("./assets/tempResult.json", JSON.stringify(result, null, 2));
// console.log(strCheck.includes(str2.toLowerCase()));
