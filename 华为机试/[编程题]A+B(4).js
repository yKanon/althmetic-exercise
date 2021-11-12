while(line = readline()) {
  if(line === '0') break
  let arr = line.split(' ')
  arr.shift()
  const res = arr.reduce((prev, cur) => {
    return prev + (+cur)
  }, 0)
  print(res)
}