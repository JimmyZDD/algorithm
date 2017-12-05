# 冒泡排序
## 1.基本思想
使用二分查找需要两个前提：

(1) 必须是顺序存储结构。

(2) 必须是有序的表。

首先，将表中间位置记录的关键字与查找关键字比较，如果两者相等，则查找成功；
否则利用**中间位置**记录将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。
重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。
## 2.时间复杂度
二分查找的过程可看成一个二叉树。二分查找的平均查找长度实际上就是**树的高度O(log2N)**。
## 3.node.js代码实现
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