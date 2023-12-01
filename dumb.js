const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);
console.log(dataMaster.length);
console.log(dataSecondary.length);

const result = dataSecondary.map((el) => {
  const filteredData = dataMaster.filter((fil) => {
    const nameToCheck = el.nama_lengkap.toLowerCase().split(" ");
    const resultIn = nameToCheck.filter((name) =>
      fil.nama_lengkap.toLowerCase().split(" ").includes(name)
    );
    return nameToCheck.length == resultIn.length;
  })[0];

  el.rsvp_id = filteredData?.rsvp_id || "";
  el.jenis_kepesertaan = filteredData?.jenis_kepesertaan || "";
  el.email_rsvp = filteredData?.email || "";
  el.keterangan = filteredData?.keterangan || "";
  // console.log(el);
  // if (el.rsvp_id) console.log(el);
  return el;
});

console.log(result.length);
// fs.writeFileSync(
//   "./assets/resultFull.json",
//   JSON.stringify(result, null, 2),
//   "utf-8"
// );

// console.log(strCheck.includes(str2.toLowerCase()));
