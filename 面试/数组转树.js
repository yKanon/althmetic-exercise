let arr = [
  {
    id: 1,
    val: '学校',
    parentId: null,
  },
  {
    id: 2,
    val: '班级1',
    parentId: 1,
  },
  {
    id: 3,
    val: '班级2',
    parentId: 1,
  },
  {
    id: 4,
    val: '学生1',
    parentId: 2,
  },
  {
    id: 5,
    val: '学生2',
    parentId: 3,
  },
  {
    id: 6,
    val: '学生3',
    parentId: 3,
  },
];

// 1.
// const buildTree = (array, parentId, childrenArray) => {
//   array.forEach((element) => {
//     if (element.parentId === parentId) {
//       element.children = [];
//       buildTree(array, element.id, element.children);
//       childrenArray.push(element);
//     }
//   });
// };
// const arrayToTree = (array, parentId) => {
//   const child = [];
//   buildTree(array, parentId, child);
//   return child.length > 0 ? (child.length > 1 ? child : child[0]) : {};
// };
// const object = arrayToTree(arr, null);

// 2.
const arrayToTree = (array) => {
  array.forEach((i) => {
    let pid = i.parentId;
    if (pid) {
      array.forEach((item) => {
        if (pid === item.id) {
          !item.children && (item.children = []);
          item.children.push(i);
        }
      });
    }
  });

  return array.filter((item) => item.parentId === null);
};
const object = arrayToTree(arr);

console.log(object);
