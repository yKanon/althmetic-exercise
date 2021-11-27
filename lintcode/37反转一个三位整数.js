export class Solution {

  /**
   * reverseInteger
   *
   * @param number: A 3-digit number.
   * @return: Reversed number.
   */
  reverseInteger(number) {
    // write your code here
    const str = number + ''
    const arr = str.split('')
    console.log(str)
    return +arr.reverse().join('')
  }

}