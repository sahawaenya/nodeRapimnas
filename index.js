const fs = require("fs");
const updateData = require("./helper/updateDataFromOrganisasi");
const getScore = require("./helper/getScore");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");
const dataPengurus = fs.readFileSync("./assets/pengurusKadin.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);
const sortirDariPMO = getScore(dataMaster, dataSecondary);
console.log(sortirDariPMO);
// console.log("Master Data:", dataMaster.length);
// console.log("Compared Data:", dataSecondary.length);
// console.log(
//   "Belum Verifikasi:",
//   dataMaster.filter((el) => el.keterangan == "Belum_Diverifikasi").length
// );

// console.log(
//   "Sudah Verifikasi:",
//   dataMaster.filter((el) => el.keterangan == "Sudah_Diverifikasi").length
// );

// console.log(
//   "Belum Bayar:",
//   dataMaster.filter((el) => el.keterangan == "Belum_Bayar").length
// );

// console.log(
//   "Sudah Bayar:",
//   dataMaster.filter((el) => el.keterangan == "Sudah_Bayar").length
// );

// console.log("Uregistered Data:", sortirDariPMO.length);

// fs.writeFileSync(
//   "./assets/sortirDariPMO.json",
//   JSON.stringify(sortirDariPMO, null, 2)
// );
