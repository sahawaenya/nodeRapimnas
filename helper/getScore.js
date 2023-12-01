const noExist = require("./noExist");
function getScore(dataMaster, dataSecondary) {
  const nameMaster = dataMaster.map((el) =>
    el.nama_lengkap.toLowerCase().split(" ")
  );
  const result = dataSecondary.filter(
    (el) => !noExist(el.nama_lengkap, nameMaster).length
  );
  return result;
}

module.exports = getScore;
