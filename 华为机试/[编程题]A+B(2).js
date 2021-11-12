while (line = readline()) {
  let lines
  const [num1, num2] = line.split(' ')
  if (!num2) continue

  const res = +num1 + (+num2)
  console.log(res)
}