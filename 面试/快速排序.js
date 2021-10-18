function quickSort(arr, left = 0, right = arr.length - 1) {
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

// 分区操作, 返回pivot的index
function partition(arr, left, right) {
  let pivot = left,
    index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }

  swap(arr, pivot, index - 1);
  return index - 1;
}

// 测试
const array = [5, 4, 3, 2, 1];
console.log("原始array:", array);
const newArr = quickSort(array);
console.log("newArr:", newArr);
// 原始 array:  [5, 4, 3, 2, 1]
// newArr:     [1, 4, 3, 2, 5]
