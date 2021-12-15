const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const [one, two] = line.split(' ');
  let [small, big] = one > two ? [two, one] : [one, two]
  // small = Number(small)
  // big = Number(big)
  for (let i = 1; i <= small; i++) {
    let remainder = big * i % small
    if (remainder === 0) {
      console.log(big * i)
      return
    }
  }
});