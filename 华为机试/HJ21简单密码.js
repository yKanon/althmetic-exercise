// 密码是我们生活中非常重要的东东，我们的那么一点不能说的秘密就全靠它了。哇哈哈. 接下来渊子要在密码之上再加一套密码，虽然简单但也安全。

// 假设渊子原来一个BBS上的密码为zvbo9441987,为了方便记忆，他通过一种算法把这个密码变换成YUANzhi1987，这个密码是他的名字和出生年份，怎么忘都忘不了，而且可以明目张胆地放在显眼的地方而不被别人知道真正的密码。

// 他是这么变换的，大家都知道手机上的字母： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0,就这么简单，渊子把密码中出现的小写字母都变成对应的数字，数字和其他的符号都不做变换，

// 声明：密码中没有空格，而密码中出现的大写字母则变成小写之后往后移一位，如：X，先变成小写，再往后移一位，不就是y了嘛，简单吧。记住，z往后移是a哦。

let upperReg = /[A-Z]/;
let lowerReg = /[a-z]/;

function isUpper(char) {
  return upperReg.test(char);
}

function isLower(char) {
  return lowerReg.test(char);
}

function changeUpper(char) {
  let retString = ``;
  let charCode = char.toLowerCase().charCodeAt();
  if (char === `Z`) {
    retString = `a`;
  } else {
    retString = String.fromCharCode(charCode + 1);
  }

  return retString;
}

function changeLower(char) {
  let index = 0;
  let arr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  arr.forEach((item, i) => {
    if (item.indexOf(char) >= 0) {
      index = i + 2;
    }
  });
  return index;
}

const line = readline();
let charArr = line.split("");
const ret = charArr.map((char) => {
  if (/[0-9]/.test(char)) return char;

  if (isUpper(char)) {
    return changeUpper(char);
  } else if (isLower(char)) {
    return changeLower(char);
  }

  return;
});

console.log(ret.join(""));
