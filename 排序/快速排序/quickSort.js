/**
 * 快速排序(交换排序)   //倒序有问题
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function quickSort(arrayParam, s, t, type) {
  type = type || 1;
  if (typeof type != "number") {
    throw new Error("排序类型错误")
  }
  if (!Array.isArray(arrayParam)) {
    throw new Error("排序参数错误")
  }

  if (type > 0) {
    positiveSort(arrayParam, s, t)
  } else {
    reverseSort(arrayParam, s, t)
  }
}

/**
 * 正序排序
 * @param {参数} arrayParam 
 */
function positiveSort(arrayParam, s, t) {
  let i = s, j = t, temp;

  if (s < t) {
    temp = arrayParam[s];
    while (i != j) {
      while (j > i && arrayParam[j] > temp) j--;
      if (i < j) {
        arrayParam[i] = arrayParam[j];
        i++;
      }

      while (i < j && arrayParam[i] < temp) i++;
      if (i < j) {
        arrayParam[j] = arrayParam[i];
        j--;
      }
    }
    arrayParam[i] = temp;
    positiveSort(arrayParam, s, i - 1);
    positiveSort(arrayParam, i + 1, t);
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam, s, t) {
  let i = s, j = t, temp;

  if (s < t) {
    temp = arrayParam[s];
    while (i != j) {
      while (j > i && arrayParam[j] < temp) j--;
      if (i < j) {
        arrayParam[i] = arrayParam[j];
        i++;
      }

      while (i < j && arrayParam[i] > temp) i++;
      if (i < j) {
        arrayParam[j] = arrayParam[i];
        j--;
      }
    }
    arrayParam[i] = temp;
    reverseSort(arrayParam, s, i - 1);
    reverseSort(arrayParam, i + 1, t);
  }
}

let param = [5, 3, -2, 3, 4, 3, 8, 9, 10, 11]
// let param = [5, 3, 3, 4, 3, 8, 9, 10]
quickSort(param, 0, param.length - 1, -1)
console.log(param)