#冒泡排序

##1.基本思想

通过无序区中相邻记录关键字间的比较和位置的交换,使关键字最小或者的记录如气泡一般逐渐往上“漂浮”直至“水面”
##2.时间复杂度
**最好情况下：**正序有序，则只需要比较n次。故为O(n)

**最坏情况下: ** 逆序有序，则需要比较(n-1)+(n-2)+……+1，故为O(N*N)
##3.空间复杂度
O(1)
##4.稳定性
排序过程中只交换相邻两个元素的位置。因此，当两个数相等时，是没必要交换两个数的位置的。所以，它们的相对位置并没有改变，冒泡排序算法是稳定的！
##5.node.js代码实现
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
