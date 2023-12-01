const fs = require("fs");
const dataKadinAktiv = fs.readFileSync("./assets/kadinaktiv.json", "utf-8");
const dataPmo = fs.readFileSync("./assets/dariPmo.json", "utf-8");

const dataMaster = JSON.parse(dataKadinAktiv);
const dataSecondary = JSON.parse(dataPmo);

const result = dataSecondary.map((el) => {
  const filteredData = dataMaster.filter((fil) => {
    const nameToCheck = el.nama_lengkap.toLowerCase().split(" ");
    const result = nameToCheck.filter((name) =>
      fil.nama_lengkap.includes(name)
    );
    return nameToCheck.length == result.length;
  })[0];

  el.rsvp_id = filteredData?.rsvp_id || "";
  el.jenis_kepesertaan = filteredData?.jenis_kepesertaan || "";
  el.email_rsvp = filteredData?.email || "";
  el.keterangan = filteredData?.keterangan || "";
  // console.log(el);
  // if (el.rsvp_id) console.log(el);
  return el;
});
fs.writeFileSync("./assets/resultFull.json", JSON.stringify(result, null, 2));

// console.log(strCheck.includes(str2.toLowerCase()));
