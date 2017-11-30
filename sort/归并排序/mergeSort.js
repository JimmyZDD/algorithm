/**
 * 归并排序
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function mergeSort(arrayParam, type) {
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
  for (let gap = 1; gap < arrayParam.length; gap = 2 * gap) {
    mergePass(arrayParam, gap, arrayParam.length)
  }
}

function mergePass(arrayParam, gap, length) {
  let i = 0;

  for (i = 0; i + 2 * gap - 1 < length; i = i + 2 * gap) { //1、2、4、8依次类推的步长
    merge(arrayParam, i, i + gap - 1, i + 2 * gap - 1)
  }

  // 余下两个子表，后者长度小于gap
  if (i + gap - 1 < length) {
    merge(arrayParam, i, i + gap - 1, length - 1);
  }
}

function merge(arrayParam, low, mid, high) {
  let i = low, j = mid + 1, k = 0;
  let arrayTemp = [];  //临时存储

  // 扫描第一段和第二段序列，直到有一个扫描结束
  while (i <= mid && j <= high) {
    // 判断第一段和第二段取出的数哪个更小，将其存入合并序列，并继续向下扫描
    if (arrayParam[i] <= arrayParam[j]) {
      arrayTemp[k] = arrayParam[i];
      i++;
      k++;
    } else {
      arrayTemp[k] = arrayParam[j];
      j++;
      k++;
    }
  }

  // 若第一段序列还没扫描完，将其全部复制到合并序列
  while (i <= mid) {
    arrayTemp[k] = arrayParam[i];
    i++;
    k++;
  }

  // 若第二段序列还没扫描完，将其全部复制到合并序列
  while (j <= high) {
    arrayTemp[k] = arrayParam[j];
    j++;
    k++;
  }

  // 将合并序列复制到原始序列中
  for (k = 0, i = low; i <= high; i++ , k++) {
    arrayParam[i] = arrayTemp[k];
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  for (let gap = 1; gap < arrayParam.length; gap = 2 * gap) {
    mergePassReverse(arrayParam, gap, arrayParam.length)
  }
}

function mergePassReverse(arrayParam, gap, length) {
  let i = 0;

  for (i = 0; i + 2 * gap - 1 < length; i = i + 2 * gap) {
    mergeReverse(arrayParam, i, i + gap - 1, i + 2 * gap - 1)
  }

  if (i + gap - 1 < length) {
    mergeReverse(arrayParam, i, i + gap - 1, length - 1);
  }
}

function mergeReverse(arrayParam, low, mid, high) {
  let i = low, j = mid + 1, k = 0, arrayTemp = [];

  while (i <= mid && j <= high) {
    if (arrayParam[i] >= arrayParam[j]) {
      arrayTemp[k] = arrayParam[i];
      i++;
      k++;
    } else {
      arrayTemp[k] = arrayParam[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    arrayTemp[k] = arrayParam[i];
    i++;
    k++;
  }

  while (j <= high) {
    arrayTemp[k] = arrayParam[j];
    j++;
    k++;
  }

  for (k = 0, i = low; i <= high; i++ , k++) {
    arrayParam[i] = arrayTemp[k];
  }
}


let param = [1, -4, 6, 2, 33, 3, 4]
// let param = [1,6,2,33,3,4,22]
// let param = [1, 2, 3, 4, 5, 55]
mergeSort(param, 1)
console.log(param)