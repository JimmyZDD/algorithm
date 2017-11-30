#堆排序
##1.堆的概念
**堆是一棵顺序存储的完全二叉树。**

其中每个结点的关键字都不大于其孩子结点的关键字，这样的堆称为**小根堆**。

其中每个结点的关键字都不小于其孩子结点的关键字，这样的堆称为**大根堆**。

举例来说，对于n个元素的数组[R0, R1, ... , Rn]当且仅当满足下列关系之一时，称之为堆：

(1) **Ri <= R2i+1 且 Ri <= R2i+2 (小根堆)**

(2) **Ri >= R2i+1 且 Ri >= R2i+2 (大根堆)**

其中**i=1,2,…,n/2向下取整**;

![](http://images2015.cnblogs.com/blog/318837/201604/318837-20160422104522335-1248911478.png)
如上图所示，序列R{3, 8, 15, 31, 25}是一个典型的小根堆。

堆中有两个父结点，元素3和元素8。

元素3在数组中以R[0]表示，它的左孩子结点是R[1]，右孩子结点是R[2]。

元素8在数组中以R[1]表示，它的左孩子结点是R[3]，右孩子结点是R[4]，它的父结点是R[0]。可以看出，它们**满足以下规律**：

设当前元素在数组中以R[i]表示，那么，

(1)**它的左孩子结点是：R[2i+1];**

(2) **它的右孩子结点是：R[2i+2];**

(3) **它的父结点是：R[(i-1)/2];**

(4) **R[i] <= R[2*i+1] 且 R[i] <= R[2i+2]。**

##2.思想要点
以上思想可归纳为两个操作：
###正向排序(大根堆)

（1）根据初始数组去构造初始堆（构建一个完全二叉树，保证所有的父结点都比它的孩子结点**数值大**）。

（2）每次交换第一个和最后一个元素，输出最后一个元素（**最大值**），然后把剩下元素重新调整为**大根堆**。 

当输出完最后一个元素后，这个数组已经是按照**从小到大**的顺序排列了

###反向排序(小根堆)

（1）根据初始数组去构造初始堆（构建一个完全二叉树，保证所有的父结点都比它的孩子结点**数值小**）。

（2）每次交换第一个和最后一个元素，输出最后一个元素（**最小值**），然后把剩下元素重新调整为**小根堆**。 

当输出完最后一个元素后，这个数组已经是按照**从大到小**的顺序排列了

##3.时间复杂度
**平均情况**:  O(nlog2n)

**最坏情况**: O(nlog2n)

**最好情况**: O(nlog2n)

##4.空间复杂度
由代码可知空间就是存储的序列，所以为 **O(1)**
##5.稳定性
堆排序是**一种不稳定**的排序方法。

因为在堆的调整过程中，关键字进行比较和交换所走的是该结点到叶子结点的一条路径，

因此对于**相同的关键字就可能出现排在后面的关键字被交换到前面**来的情况。

##6.nodejs代码
	/**
	 * 堆排序
	 * @param {要排序的数据} arrayParam
	 * @param {正数为正序排序，负数为倒序排序} type 
	 */
	function duiSort(arrayParam, type) {
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
	  //建立初始堆
	  for (let i = parseInt(arrayParam.length / 2); i >= 0; i--) {
	    headAdjust(arrayParam, i, arrayParam.length)
	  }
	
	  for (let i = arrayParam.length - 1; i > 0; i--) {
	    let temp = arrayParam[i]; //找到最大的值放到最后边，
	    arrayParam[i] = arrayParam[0];
	    arrayParam[0] = temp;
		
	    headAdjust(arrayParam, 0, i);	
	  }
	}
	
	/**
	 * 大根堆
	 * @param {*} arrayParam 
	 * @param {*} parent 
	 * @param {*} length 
	 */
	function headAdjust(arrayParam, parent, length) {
	  let temp = arrayParam[parent];// temp保存当前父结点
	  let child = 2 * parent + 1;  //找到左子结点
	
	  while (child < length) {
	    //如果存在右结点并且右结点比较大，选择右结点和父结点比较
	    if (child + 1 < length && arrayParam[child] < arrayParam[child + 1]) {
	      child++;
	    }
	
	    //如果父结点比子结点大，符合大根堆停止
	    if (temp >= arrayParam[child])
	      break;
	
	    //交换父结点和子结点中较大的结点
	    arrayParam[parent] = arrayParam[child];
	
	    // 选取孩子结点的左孩子结点,继续向下筛选
	    parent = child;
	    child = 2 * child + 1;
	  }
	
	  arrayParam[parent] = temp;
	}
	
	
	/**
	 * 倒序排序
	 * @param {数组} arrayParam 
	 */
	function reverseSort(arrayParam) {
	  //建立初始堆
	  for (let i = parseInt(arrayParam.length / 2); i >= 0; i--) {
	    headAdjustReverse(arrayParam, i, arrayParam.length)
	  }
	
	  for (let i = arrayParam.length - 1; i > 0; i--) {
	    let temp = arrayParam[i]; //找到最大的值放到最后边，
	    arrayParam[i] = arrayParam[0];
	    arrayParam[0] = temp;
		
	    headAdjustReverse(arrayParam, 0, i);	
	  }
	}
	
	/**
	 * 小根堆
	 * @param {*} arrayParam 
	 * @param {*} parent 
	 * @param {*} length 
	 */
	function headAdjustReverse(arrayParam, parent, length) {
	  let temp = arrayParam[parent];// temp保存当前父结点
	  let child = 2 * parent + 1;  //找到左子结点
	
	  while (child < length) {
	    //如果存在右结点并且右结点比较大，选择右结点和父结点比较
	    if (child + 1 < length && arrayParam[child] > arrayParam[child + 1]) {
	      child++;
	    }
	
	    //如果父结点比子结点大，符合大根堆停止
	    if (temp <= arrayParam[child])
	      break;
	
	    //交换父结点和子结点中较大的结点
	    arrayParam[parent] = arrayParam[child];
	
	    // 选取孩子结点的左孩子结点,继续向下筛选
	    parent = child;
	    child = 2 * child + 1;
	  }
	
	  arrayParam[parent] = temp;
	}
