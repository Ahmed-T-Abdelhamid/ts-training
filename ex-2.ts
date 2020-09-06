let unit = window.prompt("Enter C or F");
let temp: any = window.prompt("Enter the temperature");

if (unit === "C") {
  const F = ((temp * 9) / 5 + 32);
  console.log(temp, "C is", F, " in Fahrenheit");
} else if (unit === "F") {
  const C = ((temp - 32) * 5) / 9;
  console.log(temp, "F is", C, " in Celcius");
}
