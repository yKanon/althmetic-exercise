while (line = readline()) {
  const arr = line.split(' ')
  const res = arr.reduce((prev, cur) => {
    return prev + (+cur)
  }, 0)
  print(res)
}