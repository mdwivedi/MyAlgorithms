/**
 * @fileoverview Description of this file.
 */
function testTimeToDateData() {

var testTimes = [ //times in milliseconds
1609459200000,
1610671200000,
1611967200000,
1612053600000,
1614556799000,
1614559200000,
1635640800000,
1640908800000,
1640995200000,
1642207200000,
1643503200000,
1643589600000,
1646092799000,
1646095200000,
1653955200000,
1672444800000,
1672531200000,
1672537200000,
1672706400000,
1704067199000,
1704067200000,
1704073200000,
1704242400000,
1709164800000,
1709251199000,
1709251200000,
1709265599000,
1719702599000,
1719789019000,
1733011199000,
1733011200000,
1735524000000,
1735603200000,
1735686000000,
1735689600000,
1736901600000,
1738197600000,
1738284000000,
1740787199000,
1740789600000,
1761871200000,
1767139200000,
1767225600000,
1768437600000,
1769733600000,
1769820000000,
1772323199000,
1772325600000,
1780185600000,
1798675200000,
1798761600000,
1798767600000,
1798936800000,
1830297599000,
1830297600000,
1830303600000,
1830472800000,
1835395200000,
1835481599000,
1835481600000,
1835495999000,
1845932999000,
1846019419000,
1859241599000,
1859241600000,
1861754400000,
1861833600000,
1861916400000];
var actualDates = [//Corresponding actual dates
'2021 : 1 : 1 : 0 : 0 :0',
'2021 : 1 : 15 : 0 : 40 :0',
'2021 : 1 : 30 : 0 : 40 :0',
'2021 : 1 : 31 : 0 : 40 :0',
'2021 : 2 : 28 : 23 : 59 :59',
'2021 : 3 : 1 : 0 : 40 :0',
'2021 : 10 : 31 : 0 : 40 :0',
'2021 : 12 : 31 : 0 : 0 :0',
'2022 : 1 : 1 : 0 : 0 :0',
'2022 : 1 : 15 : 0 : 40 :0',
'2022 : 1 : 30 : 0 : 40 :0',
'2022 : 1 : 31 : 0 : 40 :0',
'2022 : 2 : 28 : 23 : 59 :59',
'2022 : 3 : 1 : 0 : 40 :0',
'2022 : 5 : 31 : 0 : 0 :0',
'2022 : 12 : 31 : 0 : 0 :0',
'2023 : 1 : 1 : 0 : 0 :0',
'2023 : 1 : 1 : 1 : 40 :0',
'2023 : 1 : 3 : 0 : 40 :0',
'2023 : 12 : 31 : 23 : 59 :59',
'2024 : 1 : 1 : 0 : 0 :0',
'2024 : 1 : 1 : 1 : 40 :0',
'2024 : 1 : 3 : 0 : 40 :0',
'2024 : 2 : 29 : 0 : 0 :0',
'2024 : 2 : 29 : 23 : 59 :59',
'2024 : 3 : 1 : 0 : 0 :0',
'2024 : 3 : 1 : 3 : 59 :59',
'2024 : 6 : 29 : 23 : 9 :59',
'2024 : 6 : 30 : 23 : 10 :19',
'2024 : 11 : 30 : 23 : 59 :59',
'2024 : 12 : 1 : 0 : 0 :0',
'2024 : 12 : 30 : 2 : 0 :0',
'2024 : 12 : 31 : 0 : 0 :0',
'2024 : 12 : 31 : 23 : 0 :0',
'2025 : 1 : 1 : 0 : 0 :0',
'2025 : 1 : 15 : 0 : 40 :0',
'2025 : 1 : 30 : 0 : 40 :0',
'2025 : 1 : 31 : 0 : 40 :0',
'2025 : 2 : 28 : 23 : 59 :59',
'2025 : 3 : 1 : 0 : 40 :0',
'2025 : 10 : 31 : 0 : 40 :0',
'2025 : 12 : 31 : 0 : 0 :0',
'2026 : 1 : 1 : 0 : 0 :0',
'2026 : 1 : 15 : 0 : 40 :0',
'2026 : 1 : 30 : 0 : 40 :0',
'2026 : 1 : 31 : 0 : 40 :0',
'2026 : 2 : 28 : 23 : 59 :59',
'2026 : 3 : 1 : 0 : 40 :0',
'2026 : 5 : 31 : 0 : 0 :0',
'2026 : 12 : 31 : 0 : 0 :0',
'2027 : 1 : 1 : 0 : 0 :0',
'2027 : 1 : 1 : 1 : 40 :0',
'2027 : 1 : 3 : 0 : 40 :0',
'2027 : 12 : 31 : 23 : 59 :59',
'2028 : 1 : 1 : 0 : 0 :0',
'2028 : 1 : 1 : 1 : 40 :0',
'2028 : 1 : 3 : 0 : 40 :0',
'2028 : 2 : 29 : 0 : 0 :0',
'2028 : 2 : 29 : 23 : 59 :59',
'2028 : 3 : 1 : 0 : 0 :0',
'2028 : 3 : 1 : 3 : 59 :59',
'2028 : 6 : 29 : 23 : 9 :59',
'2028 : 6 : 30 : 23 : 10 :19',
'2028 : 11 : 30 : 23 : 59 :59',
'2028 : 12 : 1 : 0 : 0 :0',
'2028 : 12 : 30 : 2 : 0 :0',
'2028 : 12 : 31 : 0 : 0 :0',
'2028 : 12 : 31 : 23 : 0 :0',
]

  for(let i = 0; i<testTimes.length;i++ ){
    timeToDate(testTimes[i],actualDates[i]);
  }
}
function timeToDate(timeInMilis,actualDate) {
 let dateofconsideration = actualDate;
 var dateToConvert = timeInMilis;
 const firstJan2021 = 1609459200000;  // Jan 1, 2021 00:00:00 GMT-0000
 const oneSecMsec = 1000;
 const oneMinMsec = 60000;
 const oneHourMsec = 3600000;
 const oneDayMsec = 86400000;
 let isLeapYear = false;
 const baseYear = 2020;
 let remainingLastYearDays;
 let remainingFullYears = 0;

 var fullDaysAfterDec3120201 = Math.floor((dateToConvert - firstJan2021) / oneDayMsec);
 var timeOfDay = (dateToConvert - firstJan2021) % oneDayMsec;
 let finalDate;
 let finalMonth;
 let finalYear;

 let fourYearsGroupsPassed = Math.floor(fullDaysAfterDec3120201 / 1461);  // 3*365 + 366 (4 year groups)
 let remainingFullDaysLessThan4Years = fullDaysAfterDec3120201 % 1461;

 remainingFullYears = Math.floor(remainingFullDaysLessThan4Years / 365);
 remainingLastYearDays = remainingFullDaysLessThan4Years % 365;

 if (remainingFullYears == 4) {
   // We are on Dec 30 of 4th year.
   remainingFullYears = 4 - 1;
   dayOfYear = 365+1;
   isLeapYear = true;
 } else {
   if (remainingFullYears == 3 && remainingLastYearDays > 0) {
     //We are in fourth year
     dayOfYear = remainingLastYearDays + 1;
     isLeapYear = true;
   } else {
     // We are in first two year.
     dayOfYear = remainingLastYearDays + 1;
   }
 }

 finalYear = baseYear + fourYearsGroupsPassed*4 + remainingFullYears + 1;
 
 if ((parseInt(finalYear % 4) === 0) && (parseInt(finalYear % 100) === 0)) {
    isLeapYear = false;
 } 
  
 if (dayOfYear == 0) {
   finalDate = 31;
   finalMonth = 12;
 } else {
   result = findDateMonth(isLeapYear, dayOfYear)
   if(result['status']=='pass'){
     finalDate = result['day'];
     finalMonth = result['month'];
   }
 }

 var hourCount = Math.floor(timeOfDay / oneHourMsec);
 var fractionalHours = timeOfDay % oneHourMsec;
 var minCount = Math.floor(fractionalHours / oneMinMsec);
 var fractionalMinutes = fractionalHours % oneMinMsec;
 var secondCount = Math.floor(fractionalMinutes / oneSecMsec);
 let final_date = `${finalYear} : ${finalMonth} : ${finalDate} : ${hourCount} : ${minCount} :${secondCount}`
   console.log(final_date);
   if(final_date === dateofconsideration){
     console.log(true);
   } else {
     console.log(false);
   }
};


const findDateMonth = function (isLeap, dayYear) {
 let monthsNonLeapYear = ['0', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
 let monthsLeapYear = ['0,', '31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
 let day;
 let month;
 if (dayYear == 0) {
   return {
     'status':'pass',
     'day': 31,
     'month': 12
   };
 }


 if (isLeap) {
   for (let index = 1; index <= 12; index++) {
     dayYear = dayYear - parseInt(monthsLeapYear[index]);
     if (dayYear == 0) {
       day = parseInt(monthsLeapYear[index]);
       month = index;
       break;
     } else if (dayYear < 0) {
       day = dayYear + parseInt(monthsLeapYear[index]);
       month = index;
       break;
     }
   }

 } else {
   if (dayYear > 365) {
     return {
       'status': 'error',
     }
   }
   for (let index = 1; index <= 12; index++) {
     dayYear = dayYear - monthsNonLeapYear[index];
     if (dayYear == 0) {
       day = parseInt(monthsNonLeapYear[index]);
       month = index;
       break;
     } else if (dayYear < 0) {
       day = dayYear + parseInt(monthsNonLeapYear[index]);
       month = index;
       break;
     }
   }
 }
 return {
   'status':'pass',
   'day': day,
   'month': month
 }
}
