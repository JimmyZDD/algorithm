/**
 * 直接选择排序
 * @param {要排序的数据} arrayParam
 * @param {正数为正序排序，负数为倒序排序} type 
 */
function selectSort(arrayParam, type) {
  type = type || 1;
  if (typeof type != "number"){
    throw new Error("排序类型错误")
  }
  if (!Array.isArray(arrayParam)){
    throw new Error("排序参数错误")
  }

  if (type>0){
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
  let i,j,k,temp,n=arrayParam.length;

  for(i=0; i<n-1; i++){
    k = i;
    for(j=i+1; j<n; j++){
      if (arrayParam[j]<arrayParam[k]){
        k=j;
      }
    }
    if (k != i){
      temp = arrayParam[i];
      arrayParam[i] = arrayParam[k];
      arrayParam[k] = temp;
    }
  }
}

/**
 * 倒序排序
 * @param {数组} arrayParam 
 */
function reverseSort(arrayParam) {
  let i,j,k,temp,n=arrayParam.length;
  
  for(i=0; i<n-1; i++){
    k = i;
    for(j=i+1; j<n; j++){
      if (arrayParam[j]>arrayParam[k]){
        k=j;
      }
    }
    if (k != i){
      temp = arrayParam[i];
      arrayParam[i] = arrayParam[k];
      arrayParam[k] = temp;
    }
  }
}

let param = [-1,1,6,2,33,3,4,-2]
// let param = [1,2,3,4, 5, 55]
selectSort(param, -1)
console.log(param)