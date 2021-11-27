export class Solution {

  /**
   * findNumber
   *
   * @param array: An array.
   * @return: An interger.
   */
  findNumber(array) {
    // Write your code here.
    if (array.length === 1) return array[0]
    const record = array.reduce((prev, cur) => {
      if (prev[cur]) {
        prev[cur] += 1
      } else {
        prev[cur] = 1
      }
      return prev
    }, Object.create(null))

    let uniqueArr = Array.from(new Set(array))
    uniqueArr.sort((a, b) => a - b)
    let maxNum = Math.max(...uniqueArr.map(i => record[i]))

    for (let i = 0; i < uniqueArr.length; i++) {
      if (record[uniqueArr[i]] == maxNum) return uniqueArr[i]
    }
  }

}