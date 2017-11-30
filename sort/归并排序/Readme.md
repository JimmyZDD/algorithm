#归并排序
##1.基本思想
归并排序其实要做两件事：

（1）“分解”——将序列每次**折半划分**。

（2）“合并”——将划分后的序列段**两两合并后排序**。
 

我们先来考虑第二步，如何合并？

在每次合并过程中，都是对两个有序的序列段进行合并，然后排序。

这两个有序序列段分别为 R[low, mid] 和 R[mid+1, high]。

先将他们合并到一个局部的暂存数组R2中，带合并完成后再将R2复制回R中。

为了方便描述，我们称 R[low, mid] 第一段，R[mid+1, high] 为第二段。

每次从两个段中取出一个记录进行关键字的比较，将较小者放入R2中。最后将各段中余下的部分直接复制到R2中。

经过这样的过程，R2已经是一个有序的序列，再将其复制回R中，一次合并排序就完成了
![](http://images2015.cnblogs.com/blog/318837/201604/318837-20160422105330898-383478645.png)
##2.时间复杂度
归并排序的形式就是一棵二叉树，它需要遍历的次数就是二叉树的深度，而根据完全二叉树的可以得出它的时间复杂度是O(n*log2n)。
##3.空间复杂度
由前面的算法说明可知，算法处理过程中，需要一个大小为n的临时存储空间用以保存合并序列。所以为O(n)
##4.稳定性
在归并排序中，相等的元素的顺序不会改变，所以它是**稳定的算法**。
##5.node.js代码实现
	/**
	 * 归并排序
	 * @param {要排序的数据} arrayParam
	 * @param {正数为正序排序，负数为倒序排序} type 
	 */
	function mergeSort(arrayParam, type) {
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
	  for (let gap = 1; gap < arrayParam.length; gap = 2 * gap) {
	    mergePass(arrayParam, gap, arrayParam.length)
	  }
	}
	
	function mergePass(arrayParam, gap, length) {
	  let i = 0;
	
	  for (i = 0; i + 2 * gap - 1 < length; i = i + 2 * gap) { //1、2、4、8依次类推的步长
	    merge(arrayParam, i, i + gap - 1, i + 2 * gap - 1)
	  }
	
	  // 余下两个子表，后者长度小于gap
	  if (i + gap - 1 < length) {
	    merge(arrayParam, i, i + gap - 1, length - 1);
	  }
	}
	
	function merge(arrayParam, low, mid, high) {
	  let i = low, j = mid + 1, k = 0;
	  let arrayTemp = [];  //临时存储
	
	  // 扫描第一段和第二段序列，直到有一个扫描结束
	  while (i <= mid && j <= high) {
	    // 判断第一段和第二段取出的数哪个更小，将其存入合并序列，并继续向下扫描
	    if (arrayParam[i] <= arrayParam[j]) {
	      arrayTemp[k] = arrayParam[i];
	      i++;
	      k++;
	    } else {
	      arrayTemp[k] = arrayParam[j];
	      j++;
	      k++;
	    }
	  }
	
	  // 若第一段序列还没扫描完，将其全部复制到合并序列
	  while (i <= mid) {
	    arrayTemp[k] = arrayParam[i];
	    i++;
	    k++;
	  }
	
	  // 若第二段序列还没扫描完，将其全部复制到合并序列
	  while (j <= high) {
	    arrayTemp[k] = arrayParam[j];
	    j++;
	    k++;
	  }
	  
	  // 将合并序列复制到原始序列中
	  for (k = 0, i = low; i <= high; i++ , k++) {
	    arrayParam[i] = arrayTemp[k];
	  }
	}
	
	/**
	 * 倒序排序
	 * @param {数组} arrayParam 
	 */
	function reverseSort(arrayParam) {
	  for (let gap = 1; gap < arrayParam.length; gap = 2 * gap) {
	    mergePassReverse(arrayParam, gap, arrayParam.length)
	  }
	}
	
	function mergePassReverse(arrayParam, gap, length) {
	  let i = 0;
	
	  for (i = 0; i + 2 * gap - 1 < length; i = i + 2 * gap) {
	    mergeReverse(arrayParam, i, i + gap - 1, i + 2 * gap - 1)
	  }
	
	  if (i + gap - 1 < length) {
	    mergeReverse(arrayParam, i, i + gap - 1, length - 1);
	  }
	}
	
	function mergeReverse(arrayParam, low, mid, high) {
	  let i = low, j = mid + 1, k = 0, arrayTemp = [];
	
	  while (i <= mid && j <= high) {
	    if (arrayParam[i] >= arrayParam[j]) {
	      arrayTemp[k] = arrayParam[i];
	      i++;
	      k++;
	    } else {
	      arrayTemp[k] = arrayParam[j];
	      j++;
	      k++;
	    }
	  }
	
	  while (i <= mid) {
	    arrayTemp[k] = arrayParam[i];
	    i++;
	    k++;
	  }
	
	  while (j <= high) {
	    arrayTemp[k] = arrayParam[j];
	    j++;
	    k++;
	  }
	
	  for (k = 0, i = low; i <= high; i++ , k++) {
	    arrayParam[i] = arrayTemp[k];
	  }
	}
