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

  temp = param.stack[param.top];
  param.stack[param.top] = undefined;
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

let value = initStack(3);
console.log(value)

push(value, 1)
console.log(value)
push(value, 2)
console.log(value)
push(value, 3)
console.log(value)

pop(value)
console.log(value)
pop(value)
console.log(value)
pop(value)
console.log(value)
pop(value)
