class MyDate {
  constructor(day, month, year) {
    this.setDate(day, month, year);
  }
  setDate(day, month, year) {
    this.setDay(day);
    this.setMonth(month);
    this.setYear(year);
  }
  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }
  setDay(day) {
    this.day = day;
  }
  setMonth(month) {
    this.month = month;
  }
  setYear(year) {
    this.year = year;
  }
  toString() {
    return `${(this.day, this.month, this.year)}`;
  }
}
var d = new MyDate();
var n = d.toString();
// console.log(d);
// console.log(n);

let date = new MyDate(2, 11, 2020);

console.log(date);
