# 直接选择排序
## 1.基本思想
首先在未排序序列中找到最小元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小元素，然后放到排序序列末尾。以此类推，直到所有元素均排序完毕。
## 2.时间复杂度
**最好情况下:** 交换0次，但是每次都要找到最小的元素，因此大约必须遍历N*N次，因此为O(N*N)。减少了交换次数！

**最坏情况下，平均情况下:** O(N*N)
## 3.空间复杂度
O(1)
## 4.稳定性
由于每次都是选取未排序序列A中的最小元素x与A中的第一个元素交换，因此跨距离了，很可能破坏了元素间的相对位置，因此选择排序是**不稳定的！**
## 5.node.js代码实现
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
