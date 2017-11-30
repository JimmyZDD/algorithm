/**
 * 冒泡排序(交换排序)
 * @param {数组} arrayParam 
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function bubblingSort(arrayParam, type) {
  type = type || 1;
  if (typeof type != "number") {
    throw new Error("排序类型错误")
  }
  if (!Array.isArray(arrayParam)) {
    throw new Error("排序参数错误")
  }

  if (type > 0) {
    positiveSort(arrayParam)
  } else {
    reverseSort(arrayParam)
  }
}


/**
 * 正序排序
 * @param {参数} arrayParam 
 */
function positiveSort(arrayParam) {
  let i, j, temp, n = arrayParam.length;

  for (i = 0; i < n - 1; i++) {
    for (j = n - 1; j > i; j--) {
      if (arrayParam[j] < arrayParam[j - 1]) {
        temp = arrayParam[j];
        arrayParam[j] = arrayParam[j - 1];
        arrayParam[j - 1] = temp;
      }
    }
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  let i, j, temp, n = arrayParam.length;

  for (i = 0; i < n - 1; i++) {
    for (j = n - 1; j > i; j--) {
      if (arrayParam[j] > arrayParam[j - 1]) {
        temp = arrayParam[j];
        arrayParam[j] = arrayParam[j - 1];
        arrayParam[j - 1] = temp;
      }
    }
  }
}

// let param = [1,6,2,33,3,4]
let param = [1, -5, 2, -3, 3, 4, 5, 55]
bubblingSort(param, -1)
console.log(param)