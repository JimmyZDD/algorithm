/**
 * 初始化队列
 * @param {初始化大小} size 
 */
function initQueue(size) {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("size值错误")
  }

  return {
    head: 0,
    tail: 0,
    max: size+1,
    queue: []
  }
}

/**
 * 入队
 * @param {参数} param 
 * @param {输入} input 
 */
function enqueue(param, input) {
  overflow(param);

  param.queue[param.tail] = input;
  if (param.tail == param.max) {
    param.tail = 1;
  } else {
    param.tail++;
  }
}

/**
 * 出队列
 * @param {参数} param 
 */
function dequeue(param) {
  isEmpty(param);

  let temp = param.queue[param.head];
  param.queue[param.head] = undefined;
  if (param.head == param.max) {
    param.head = 1;
  } else {
    param.head++;
  }

  return temp;
}


/**
 * 判断队列是否为空
 * @param {栈} param 
 */
function isEmpty(param) {
  if (param.head == param.tail) {
    throw new Error("队列空了")
  }
}

/**
 * 判断栈是否满了
 * @param {栈} param 
 */
function overflow(param) {
  if ((param.tail + 1) % param.max == param.head) {
    throw new Error("队列满了")
  }
}

let value = initQueue(3)
console.log("value===>", value)
enqueue(value, 1)
console.log("value===>", value)
enqueue(value, 2)
console.log("value===>", value)
enqueue(value, 3)
console.log("value===>", value)
// enqueue(value, 4)
// console.log("value===>", value)

dequeue(value);
console.log("value===>", value)
dequeue(value);
console.log("value===>", value)
dequeue(value);
console.log("value===>", value)
dequeue(value);
console.log("value===>", value)