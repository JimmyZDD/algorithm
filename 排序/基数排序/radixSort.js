const CONFIG = {
  "1": 1,
  "2": 10,
  "3": 100
};  // 本实例中的最大数是百位数，所以只要到100就可以了
const MAXLENGTH = 3;

/**
 * 基数排序
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function radixSort(arrayParam, type) {
  type = type || 1;
  if (typeof type != "number") {
    throw new Error("排序类型错误")
  }
  if (!Array.isArray(arrayParam)) {
    throw new Error("排序参数错误")
  }

  if (type > 0) {
    positiveSort(arrayParam, 0, arrayParam.length - 1, MAXLENGTH)
  } else {
    reverseSort(arrayParam, 0, arrayParam.length - 1, MAXLENGTH)
  }
}

/**
 * 正序排序
 * @param {参数} arrayParam 
 */
function positiveSort(arrayParam, start, end, digit) {
  let radixMax = 10; //基数
  let radixMin = -9; //基数
  let i = 0, j = 0;
  let count = {};   //存放各个桶的数据统计个数
  let bucket = [];

  // 按照从低位到高位的顺序执行排序过程
  for (let d = 1; d <= digit; d++) {
    // 置空各个桶的数据统计
    for (i = radixMin; i < radixMax; i++) {
      count[i] = 0;
    }
    // 统计各个桶将要装入的数据个数
    for (i = start; i <= end; i++) {
      j = getDigit(arrayParam[i], d);
      count[j]++;
    }

    // count[i]表示第i个桶的右边界索引
    for (i = radixMin + 1; i < radixMax; i++) {
      count[i] = count[i] + count[i - 1];
    }

    // 将数据依次装入桶中
    // 这里要从右向左扫描，保证排序稳定性
    for (i = end; i >= start; i--) {
      j = getDigit(arrayParam[i], d); // 求出关键码的第k位的数字， 例如：576的第3位是5
      bucket[count[j] - 1] = arrayParam[i]; // 放入对应的桶中，count[j]-1是第j个桶的右边界索引
      count[j]--; // 对应桶的装入数据索引减一
    }

    // 将已分配好的桶中数据再倒出来，此时已是对应当前位数有序的表
    for (i = start, j = 0; i <= end; i++ , j++) {
      arrayParam[i] = bucket[j];
    }
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam, start, end, digit) {
  let radixMax = 10; //基数
  let radixMin = -9; //基数
  let i = 0, j = 0;
  let count = {};   //存放各个桶的数据统计个数
  let bucket = [];

  // 按照从低位到高位的顺序执行排序过程
  for (let d = 1; d <= digit; d++) {
    // 置空各个桶的数据统计
    for (i = radixMin; i < radixMax; i++) {
      count[i] = 0;
    }
    // 统计各个桶将要装入的数据个数
    for (i = start; i <= end; i++) {
      j = getDigit(arrayParam[i], d);
      count[j]++;
    }

    // count[i]表示第i个桶的右边界索引
    for (i = radixMin + 1; i < radixMax; i++) {
      count[i] = count[i] + count[i - 1];
    }

    // 将数据依次装入桶中
    // 这里要从右向左扫描，保证排序稳定性
    for (i = end; i >= start; i--) {
      j = getDigit(arrayParam[i], d); // 求出关键码的第k位的数字， 例如：576的第3位是5
      bucket[count[j] - 1] = arrayParam[i]; // 放入对应的桶中，count[j]-1是第j个桶的右边界索引
      count[j]--; // 对应桶的装入数据索引减一
    }
    console.log("bucket===>", bucket)

    // 将已分配好的桶中数据再倒出来，此时已是对应当前位数有序的表
    if (d == digit) {
      for (i = end, j = 0; i >= start; i-- , j++) {
        arrayParam[i] = bucket[j];
      }
    } else {
      for (i = start, j = 0; i <= end; i++ , j++) {
        arrayParam[i] = bucket[j];
      }
    }
  }
}

// 获取x这个数的d位数上的数字
// 比如获取123的1位数，结果返回3
function getDigit(x, d) {
  return (parseInt(x / CONFIG[d]) % 10)
}

let param = [1, 6, -1, 2, 33, 3, -33, -234, -450, 4, 100, 455]
// let param = [1,2,3,4, 5, 55]
radixSort(param, 1)
console.log(param)