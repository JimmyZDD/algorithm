# 直接插入排序
## 1.基本思想
每次选择一个元素K插入到之前已排好序的部分A[1…i]中，插入过程中K依次由后向前与A[1…i]中的元素进行比较。若发现发现A[x]>=K,则将K插入到A[x]的后面，插入前需要移动元素
## 2.时间复杂度
**最好的情况下：** 正序有序(从小到大)，这样只需要比较n次，不需要移动。因此时间复杂度为O(n)  

**最坏的情况下：** 逆序有序,这样每一个元素就需要比较n次，共有n个元素，因此实际复杂度为O(n­2) 

**平均情况下：** O(n­2)
## 3.空间复杂度
O(1)
## 4.稳定性
比较的时候，两个相同的元素是不需要移动顺序的，因此插入排序是**稳定的**
## 5.node.js代码实现
	/**
	 * 直接插入排序
	 * @param {要排序的数据} arrayParam
	 * @param {正数为正序排序，负数为倒序排序} type 
	 */
	function insertSort(arrayParam, type) {
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
	  let n = arrayParam.length;
	  let i, j, temp;
	
	  for (i = 1; i < n; i++) {
	    temp = arrayParam[i]; //找到一个元素
	    j = i - 1;
	    while (j >= 0 && temp < arrayParam[j]) { //和这个元素之前的元素比较
	      arrayParam[j + 1] = arrayParam[j]; //移动元素
	      j--
	    }
	    arrayParam[j + 1] = temp; //将元素插入到合适的位置
	  }
	}
	
	/**
	 * 倒序排序
	 * @param {数组} arrayParam 
	 */
	function reverseSort(arrayParam) {
	  let n = arrayParam.length;
	  let i, j, temp;
	
	  for (i = 1; i < n; i++) {
	    temp = arrayParam[i];
	    j = i - 1;
	    while (j >= 0 && temp > arrayParam[j]) {
	      arrayParam[j + 1] = arrayParam[j];
	      j--
	    }
	    arrayParam[j + 1] = temp;
	  }
	}