/**
 * 顺序查找
 * @param {参数} arrayParam 
 * @param {要查找的目标} aim 
 */
function binarySearch(arrayParam, aim) {
  let low = 0, mid = 0, high = arrayParam.length - 1;

  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arrayParam[mid] == aim) {
      return mid;
    } else if (arrayParam[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}