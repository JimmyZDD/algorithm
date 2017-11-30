#快速排序
##1.基本思想
它是由冒泡排序改进而来的。在待排序的n个记录中任取一个记录(通常取第一个记录),把该记录放入适当位置后,数据序列被此记录划分成两部分。所有关键字比该记录关键字小的记录放置在前一部分,所有比它大的记录放置在后一部分,并把该记录排在这两部分的中间(称为该记录归位),这个过程称作一趟快速排序。**最核心的思想是将小的部分放在左边，大的部分放到右边，实现分割**
##2.时间复杂度
**最好的情况下：**因为每次都将序列分为两个部分(一般二分都复杂度都和logN相关)，故为 O(N*logN)  

**最坏的情况下：**基本有序时，退化为冒泡排序，几乎要比较N*N次，故为O(N*N)
##3.空间复杂度
O(nlog2n)
##4.稳定性
 由于每次都需要和中轴元素交换，因此原来的顺序就可能被打乱。如序列为 5 3 3 4 3 8 9 10 11会将3的顺序打乱。所以说，快速排序是**不稳定的！**
##5.node.js代码实现
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