/**
 * 堆排序
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function heapSort(arrayParam, type) {
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
  //建立初始堆
  for (let i = parseInt(arrayParam.length / 2); i >= 0; i--) {
    headAdjust(arrayParam, i, arrayParam.length)
  }

  console.log("aaa==>", arrayParam)
  for (let i = arrayParam.length - 1; i > 0; i--) {
    let temp = arrayParam[i]; //找到最大的值放到最后边，
    arrayParam[i] = arrayParam[0];
    arrayParam[0] = temp;

    console.log("bbb==>", arrayParam)

    headAdjust(arrayParam, 0, i);
    console.log(i, "==>", arrayParam)

  }
}

/**
 * 大根堆
 * @param {*} arrayParam 
 * @param {*} parent 
 * @param {*} length 
 */
function headAdjust(arrayParam, parent, length) {
  let temp = arrayParam[parent];// temp保存当前父结点
  let child = 2 * parent + 1;  //找到左子结点

  while (child < length) {
    //如果存在右结点并且右结点比较大，选择右结点和父结点比较
    if (child + 1 < length && arrayParam[child] < arrayParam[child + 1]) {
      child++;
    }

    //如果父结点比子结点大，符合大根堆停止
    if (temp >= arrayParam[child])
      break;

    //交换父结点和子结点中较大的结点
    arrayParam[parent] = arrayParam[child];

    // 选取孩子结点的左孩子结点,继续向下筛选
    parent = child;
    child = 2 * child + 1;
  }

  arrayParam[parent] = temp;
}


/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  //建立初始堆
  for (let i = parseInt(arrayParam.length / 2); i >= 0; i--) {
    headAdjustReverse(arrayParam, i, arrayParam.length)
  }

  for (let i = arrayParam.length - 1; i > 0; i--) {
    let temp = arrayParam[i]; //找到最大的值放到最后边，
    arrayParam[i] = arrayParam[0];
    arrayParam[0] = temp;

    headAdjustReverse(arrayParam, 0, i);
  }
}

/**
 * 小根堆
 * @param {*} arrayParam 
 * @param {*} parent 
 * @param {*} length 
 */
function headAdjustReverse(arrayParam, parent, length) {
  let temp = arrayParam[parent];// temp保存当前父结点
  let child = 2 * parent + 1;  //找到左子结点

  while (child < length) {
    //如果存在右结点并且右结点比较大，选择右结点和父结点比较
    if (child + 1 < length && arrayParam[child] > arrayParam[child + 1]) {
      child++;
    }

    //如果父结点比子结点大，符合大根堆停止
    if (temp <= arrayParam[child])
      break;

    //交换父结点和子结点中较大的结点
    arrayParam[parent] = arrayParam[child];

    // 选取孩子结点的左孩子结点,继续向下筛选
    parent = child;
    child = 2 * child + 1;
  }

  arrayParam[parent] = temp;
}


let param = [1,-3, 6, 2, -4, 33, 3, 4]
// let param = [1,6,2,33,3,4,55]
// let param = [1,2,3,4, 5, 55]
heapSort(param, 1)
console.log(param)