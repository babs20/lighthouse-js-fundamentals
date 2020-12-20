const talkingCalendar = function (date) {

  const month = date => {
    // Get the month using date.substring then match it to the correct month
    switch (date.substring(5, 7)) {
      case '01':
        return 'January';
      case '02':
        return 'February';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
    }
  }

  const day = date => {
    // Initalize the number variable to store the formatted day string 
    let number = '';
    // Check if the day is 1 or 2 numbers long and cut off the 0 if it is 1-9
    if (date[8] === '0') {
      number = date[9];
    } else {
      number = date.substring(8);
    }

    // apply the correct ending to the day depending on the number
    if (number === '11' || number === '12' || number === '13') { // teens
      return number + 'th'
    } else {
      if (number === '1' || number[1] === '1') { // 1st
        return number + 'st';
      } else if (number === '2' || number[1] === '2') { // 2nd
        return number + 'nd';
      } else if (number === '3' || number[1] === '3') { // 3rd
        return number + 'rd';
      } else { // Everything else
        return number + 'th'
      }
    }
  }

  const year = date => {
    return date.substring(0, 4);
  }

  return `${month(date)} ${day(date)}, ${year(date)}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));