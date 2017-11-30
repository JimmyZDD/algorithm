# 希尔排序
## 1.基本思想
希尔排序也是一种插入排序方法,实际上是一种分组插入方法。先取定一个小于n的整数d1作为第一个增量,把表的全部记录分成d1个组,所有距离为d1的倍数的记录放在同一个组中,在各组内进行直接插入排序；然后,取第二个增量d2(＜d1),重复上述的分组和排序,直至所取的增量dt=1(dt<dt-1<…<d2<d1),即所有记录放在同一组中进行直接插入排序为止。
## 2.时间复杂度
**最好情况：**由于希尔排序的好坏和步长d的选择有很多关系，因此，目前还没有得出最好的步长如何选择(现在有些比较好的选择了，但不确定是否是最好的)。所以，不知道最好的情况下的算法时间复杂度。  

**最坏情况下：** O(N*logN)，最坏的情况下和平均情况下差不多

**平均情况下：**O(N*logN)

## 3.空间复杂度
O(1)
## 4.稳定性
 由于多次插入排序，我们知道一次插入排序是稳定的，不会改变相同元素的相对顺序，但在不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，最后其稳定性就会被打乱，所以**shell排序是不稳定的**。
## 5.node.js代码实现
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