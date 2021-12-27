// 1.
// function findKthLargest(nums: number[], k: number): number {
//   let newArr = nums.sort((a, b) => b - a);
//   return newArr[k - 1];
// }

// 2.

function swap(nums, i, j) {
  if (i === j) return;
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function partition(nums, left, right) {
  let pivot = nums[right];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (nums[i] < pivot) {
      swap(nums, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(nums, right, pivotIndex);

  return pivotIndex;
}

function findKthLargest(nums: number[], k: number): number {
  let len = nums.length;

  const quick = (left, right) => {
    if (left > right) return;

    let random = ~~(Math.random() * (right - left)) + left;
    swap(nums, random, right);

    let pivotIndex = partition(nums, left, right);

    if (len - k < pivotIndex) {
      quick(left, pivotIndex - 1);
    } else {
      quick(pivotIndex + 1, right);
    }
  };

  quick(0, len - 1);

  return nums[len - k];
}
