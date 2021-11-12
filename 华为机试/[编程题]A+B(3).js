while (line = readline()) {
  const [num1, num2] = line.split(' ')
  const [resolvedNum1, resolvedNum2] = [+num1, +num2]
  //if(resolveNum1 === 0 && resolveNum2 === 0) end()
  const res = resolvedNum1 + resolvedNum2
  if (res === 0) break
  print(res)
}