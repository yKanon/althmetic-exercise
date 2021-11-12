while (line = readline()) {
  const [num1, num2] = line.split(' ')
  const res = +num1 + (+num2)
  console.log(res)
}