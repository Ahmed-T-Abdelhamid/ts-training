const start = 1500;
let end = 2700;


while (end > start) {
  if (end % 7 === 0 && end % 5 === 0) {
    console.log(end);
  }
  end--;
}
