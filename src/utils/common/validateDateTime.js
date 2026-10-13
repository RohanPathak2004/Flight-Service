function compareDate(timeStamp1, timeStamp2) {
      let date1 = new Date(timeStamp1);
      let date2 = new Date(timeStamp2);

      return date1.getTime() > date2.getTime();
}

module.exports = {
      compareDate,
}