/**
 * 直接插入排序
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function insertSort(arrayParam, type) {
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
  let n = arrayParam.length;
  let i, j, temp;

  for (i = 1; i < n; i++) {
    temp = arrayParam[i]; //找到一个元素
    j = i - 1;
    while (j >= 0 && temp < arrayParam[j]) { //和这个元素之前的元素比较
      arrayParam[j + 1] = arrayParam[j]; //移动元素
      j--
    }
    arrayParam[j + 1] = temp; //将元素插入到合适的位置
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  let n = arrayParam.length;
  let i, j, temp;

  for (i = 1; i < n; i++) {
    temp = arrayParam[i];
    j = i - 1;
    while (j >= 0 && temp > arrayParam[j]) {
      arrayParam[j + 1] = arrayParam[j];
      j--
    }
    arrayParam[j + 1] = temp;
  }
}

// let param = [1,6,2,33,3,4]
let param = [1, 2, -5, 3, 4, 5, 55]
insertSort(param, -1)
console.log(param)