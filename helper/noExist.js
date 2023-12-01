const checkExist = (nameToCheck, nameMaster) => {
  const result = nameMaster.filter((el) => {
    const check = nameToCheck.toLowerCase().split(" ");

    const hasil = check.filter((elHasil) => el.includes(elHasil));
    return check.length == hasil.length;
  });
  return result.map((el) => {
    el.nomor_kta?.split("-").join();
  });
};
module.exports = checkExist;
