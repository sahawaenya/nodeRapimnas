const { log } = require("console");
const fs = require("fs");

const dataPengurus = JSON.parse(
  fs.readFileSync("./assets/newPengurus.json", "utf-8")
);
const dataPmo = JSON.parse(
  fs.readFileSync("./assets/tempResult.json", "utf-8")
);

const newDataPmo = dataPmo.map((el) => {
  const searchName = el.nama_lengkap.toLowerCase().split(" ");
  const filtered = dataPengurus.filter((fil) => {
    let filteredLength = 0;
    const arrFilteredName = fil.nama_lengkap.toLowerCase().split(" ");
    for (let i = 0; i < searchName.length; i++) {
      for (let j = 0; j < arrFilteredName.length; j++) {
        if (arrFilteredName[j] == searchName[i]) {
          ++filteredLength;
          break;
        }
      }
    }
    return searchName.length == filteredLength;
  })[0];
  //   console.log(filtered);
  el.no_kta_rsvp = filtered?.no_kta;
  if (filtered?.email != "#N/A") el.email_rsvp = filtered?.email;
  else el.email_rsvp = "";
  el.nama_perusahaan_rsvp = filtered?.nama_perusahaan;
  el.bidang_rsvp = filtered?.bidang;
  el.jabatan_lengkap_rsvp = filtered?.jabatan_lengkap;
  el.tingkatan_rsvp = filtered?.tingkatan;
  el.is_registered_rsvp = filtered?.is_registered;
  //   "no_kta": "202032220317052",
  //     "nama_perusahaan": "PT PT FOOBE MEGA KUNINGAN",
  //     "bidang": "Bidang Wilayah Jawa Bali",
  //     "jabatan_lengkap": "Wakil Ketua Komite Tetap Banten",
  //     "tingkatan": "Kadin Indonesia",
  //     "nama_kadin_prov": "",
  //     "nama_kadin_kab_kota": "",
  //     "is_registered": 1
  return el;
});

fs.writeFileSync(
  "./assets/finalResult.json",
  JSON.stringify(newDataPmo, null, 2)
);
