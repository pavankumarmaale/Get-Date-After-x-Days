const addDays = require("date-fns/addDays");

const getDate = function (days) {
  const newDate = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
console.log(getDate(2));
module.exports = getDate;
