let salary = 1500;
let inss;
let tax;
let baseSalary;
let grossPay;

if (salary <= 1556.94) {
  inss = salary * 0.08;
} else if (salary > 1556.94 && salary <= 2594.92) {
  inss = salary * 0.09;
} else if (salary > 2594.93 && salary <= 5189.82) {
  inss = salary * 0.11;
} else if (salary > 5189.82) {
  inss = salary - 570.88;
}

baseSalary = salary - inss;
console.log(baseSalary);

if (salary <= 1903.98) {
  tax = baseSalary * 0.075 - 142.8;
  console.log(tax);
}
