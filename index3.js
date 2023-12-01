const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");
const getScore = require("./helper/getScore");

const dataSyncPmo = JSON.parse(
  fs.readFileSync("./assets/finalResult.json", "utf-8")
);

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);

// console.log("Data from Kadin Aktiv:", dataMaster.length);
// console.log("Master Data:", dataSecondary.length);
// console.log("Result Data:", JSON.parse(dataResult).length);
// const checker = JSON.parse(dataResult).filter((el) => el.rsvp_id);
// console.log("Result Data:", checker.length);

console.log("Master Data:", dataMaster.length);
console.log("Compared Data:", dataSecondary.length);
console.log(
  "Belum Verifikasi:",
  dataMaster.filter((el) => el.keterangan == "Belum_Diverifikasi").length
);

console.log(
  "Sudah Verifikasi:",
  dataMaster.filter((el) => el.keterangan == "Sudah_Diverifikasi").length
);

console.log(
  "Belum Bayar:",
  dataMaster.filter((el) => el.keterangan == "Belum_Bayar").length
);

console.log(
  "Sudah Bayar:",
  dataMaster.filter((el) => el.keterangan == "Sudah_Bayar").length
);
const result = getScore(dataMaster, dataSecondary);

console.log("Uregistered Data:", result.length);
console.log(
  "data with KTA:",
  dataSyncPmo.filter((el) => el.no_kta_rsvp).length
);
