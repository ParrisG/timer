// process.stdout.write('\x07');
// console.log("ran");

const args = process.argv.slice(2);

if (args.length === 0) {
  return;
}
// create a functin that takes in any number of arguments from the command line and makes the console beep after the number of seconds in each argument
// if no additonal arguments are passed, don't schedule any beeps and end the program
// if input is negative, ignore/skip
// if input is NaN ignore/skip

let filteredArgs = [];

for (let num of args) {
  if (Number(num) >= 0 && !isNaN(Number(num))) {
    filteredArgs.push(num);
  }
}

for (const num of filteredArgs) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (num * 1000));
}