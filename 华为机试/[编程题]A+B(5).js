let flag = true

while (line = readline()) {
  if (flag) {
    flag = false
    continue
  }
  const arr = line.split(' ')
  arr.shift()
  const res = arr.reduce((prev, cur) => {
    return prev + (+cur)
  }, 0)

  print(res)
}