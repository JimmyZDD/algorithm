# 栈

## 1.介绍
栈是一个后进先出的集合, nodejs数组是支持栈操作的

例如：

	let a = []
	a.push(1)
	a.pop()

## 2.代码
	/**
	 * 初始化一个栈
	 * @param {栈大小} size 
	 */
	function initStack(size) {
	  if (!Number.isInteger(size) || size<=0){
	    throw new Error("size值错误")
	  }
	
	  return {
	    top: 0,
	    max: size,
	    stack: []
	  }
	}
	
	/**
	 * 入栈
	 * @param {栈} param 
	 * @param {入栈参数} input 
	 */
	function push(param, input) {
	  overflow(param);
	
	  param.stack[param.top] = input;  
	  param.top++;
	}
	
	/**
	 * 出栈
	 * @param {栈} param 
	 */
	function pop(param) {
	  let temp;
	  isEmpty(param);
	
	  param.top--;
	  temp = param[param.top]
	  param.stack.length = param.top
	
	  return temp;
	}
	
	/**
	 * 判断栈是否为空
	 * @param {栈} param 
	 */
	function isEmpty(param) {
	  if (param.top == 0) {
	    throw new Error("栈空了")
	  }
	}
	
	/**
	 * 判断栈是否上溢了
	 * @param {栈} param 
	 */
	function overflow(param) {
	  if (param.top == param.max){
	    throw new Error("栈上溢了")
	  }
	}