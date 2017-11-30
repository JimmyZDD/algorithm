/**
 * 希尔排序（插入排序）
 * @param {数组} arrayParam 
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function shellSort(arrayParam, type) {
  type = type || 1;
  if (typeof type != "number") {
    throw new Error("排序类型错误")
  }
  if (!Array.isArray(arrayParam)) {
    throw new Error("排序参数错误")
  }

  if (type > 0) {
    positiveSort(arrayParam);
  } else {
    reverseSort(arrayParam)
  }
}

/**
 * 正序排序
 * @param {参数} arrayParam 
 */
function positiveSort(arrayParam) {
  let i, j, d, temp, n = arrayParam.length;
  d = parseInt(n / 2);

  while (d > 0) {
    for (i = d; i < n; i++) {
      j = i - d;
      while (j >= 0 && arrayParam[j] > arrayParam[j + d]) {
        temp = arrayParam[j];
        arrayParam[j] = arrayParam[j + d];
        arrayParam[j + d] = temp;
        j = j - d;
      }
    }
    d = parseInt(d / 2);
  }
}


/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  let i, j, d, temp, n = arrayParam.length;
  d = parseInt(n / 2);

  while (d > 0) {
    for (i = d; i < n; i++) {
      j = i - d;
      while (j >= 0 && arrayParam[j] < arrayParam[j + d]) {
        temp = arrayParam[j];
        arrayParam[j] = arrayParam[j + d];
        arrayParam[j + d] = temp;
        j = j - d;
      }
    }
    d = parseInt(d / 2);
  }
}

// let param = [1,33,4,55,66,7];
let param = [1, 3, 4, -1, 5, 6, 7];
shellSort(param, -1)
console.log(param)