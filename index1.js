const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);

fs.writeFileSync("./assets/result.json", JSON.stringify(result, null, 2));
// console.log(strCheck.includes(str2.toLowerCase()));
