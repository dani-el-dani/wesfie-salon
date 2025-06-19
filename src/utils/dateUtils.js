const ET_EPOCH_ms = new Date(Date.UTC(1969, 8, 11)).getTime() // ethiopian Epoch at 1962 / 01 / 01 00:00:00:0000 (Meskerem 1, 1962)
const ET_Epoch_date = { year: 1962, month: 0, day: 1 };


export const ETWeekDays = ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'አርብ', 'ቅዳሜ']
export const ETMonths = ['መስከረም', 'ጥቅምት', 'ሕዳር', 'ታህሳስ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዚያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሃሴ', 'ጷግሜ']
export const GCWeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
export const GCMonths = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]

function isGregorianLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isEthiopianLeapYear(year) {
  return year % 4 === 3; // EC leap year: the year before a GC leap year
}

export function ethiopianDateNow(){
  const diffTime = Date.now() - ET_EPOCH_ms;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return daysToDate(diffDays)
}

// Ethiopian → Gregorian
export function ethiopianToGregorian(date) {

  let totalDays = 0;

  let year_diff = date.year - ET_Epoch_date.year

  totalDays = year_diff * 365 + Math.floor((year_diff + 2) / 4)

  totalDays += (date.month) * 30

  totalDays += (date.day - 1);

  const gcDate = new Date(totalDays * 24 * 60 * 60 * 1000 + ET_EPOCH_ms);
  return gcDate;
}

export function gregorianToEthiopian(gcYear, gcMonth, gcDay) {

  const inputGC = new Date(Date.UTC(gcYear, gcMonth, gcDay));
  const diffTime = inputGC.getTime() - ET_EPOCH_ms;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return daysToDate(diffDays)

}

export function getMonthDays(year, month){
  const startDay = ethiopianToGregorian({year, month, day:1}).getDay()
  const monthDays = Array.from(
    { length: 42},
    (value, index) => (1 - startDay) + index
    );

  return(monthDays)
}

export function getProperDate(date){

  let totalDays = dateToDays(date)

  return daysToDate(totalDays)
}

export function ETtoString(date){
  const day = ethiopianToGregorian(date).getDay()
  return `${ETWeekDays[day]} ${ETMonths[date.month]} ${date.day}, ${date.year}`
}

export function isPast(date1, date2){
  return dateToDays(date1) < dateToDays(date2)
}

export function isEqual(date1,date2){
  return dateToDays(date1) === dateToDays(date2)
}

export function getNextDay(date){
  return getProperDate({year : date.year, month : date.month, day : date.day + 1})
}

export function toDateString(date){
  const properDate = getProperDate(date)
  return `${properDate.year}-${properDate.month + 1 < 10 ? '0' + (properDate.month + 1) : (properDate.month + 1)}-${properDate.day < 10 ? '0' + properDate.day : properDate.day}`
}

export function parseDate(dateString){
  const [year,month,day] = dateString.split(/[- :]/).map(str => parseInt(str))
  return getProperDate({year,month : month - 1,day})
}

export function addDays(date, days){
  return getProperDate({year : date.year, month : date.month, day : date.day + days})
}

function dateToDays(date){
  let totalDays = 0;
  let year_diff = date.year - ET_Epoch_date.year
  totalDays = year_diff * 365 + Math.floor((year_diff + 2) / 4)
  totalDays += (date.month) * 30
  totalDays += (date.day - 1);
  return totalDays
}

function daysToDate(days){
  let leap_days = Math.floor((days + 731) / (4 * 365 + 1))
  let ecYear = Math.floor((days - leap_days) / 365) + ET_Epoch_date.year
  let year_diff = ecYear - ET_Epoch_date.year
  let daysLeft = days - (year_diff * 365 + Math.floor((year_diff + 2) / 4))
  const ecMonth = Math.floor(daysLeft / 30)
  const ecDay = daysLeft % 30 + 1;

  return { year: ecYear, month: ecMonth, day: ecDay };
}


