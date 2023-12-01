const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");
const dataResult = fs.readFileSync("./assets/resultFull.json", "utf-8");

const dataSyncPmo = JSON.parse(
  fs.readFileSync("./assets/syncDariPmo.json", "utf-8")
);

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);

// console.log("Data from Kadin Aktiv:", dataMaster.length);
// console.log("Master Data:", dataSecondary.length);
// console.log("Result Data:", JSON.parse(dataResult).length);
// const checker = JSON.parse(dataResult).filter((el) => el.rsvp_id);
// console.log("Result Data:", checker.length);

console.log(dataSyncPmo.filter((el) => el.no_kta_rsvp).length);
