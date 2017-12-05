# 顺序查找
## 1.基本思想
顺序挨个查找
## 2.时间复杂度
需要比较n次。故为O(n)
## 3.node.js代码实现
	/**
	* 顺序查找
	* @param {参数} arrayParam 
	* @param {要查找的目标} aim 
	*/
	function orderSearch(arrayParam, aim) {
		for (let i=0; i< arrayParam.length; i++){
			if (arrayParam[i] == item){
				return id;
			}
		}

		return -1;
	}