function create(value) {
  return {
    pre: null,
    value: value,
    next: null
  }
}

function insert(head, node) {
  let temp = head;

  if (!head) {
    head = node;
    head.next = head;
    head.pre = head;
  } else {
    if (head.pre == head) {
      head.pre = node;
      head.next = node;
      node.pre = head;
      node.next = head;
    } else {
      node.pre = head.pre;
      head.pre.next = node;
      head.pre = node;
      node.next = head;
    }
  }

  return head;
}

function delNode(head, num) {
  let temp = head;
  if (!temp) {
    return null;
  }

  while (temp.next!=head && temp.value!=num) {
    temp = temp.next;
  }

  if (temp.value == num) {
    if (temp == head && temp.next == head){
      head = null;
    } else {
      if (temp == head){
        head = temp.next;
      }
      temp.pre.next = temp.next;
      temp.next.pre = temp.pre;
      temp = null;
    }
  }

  return head
}

function print(head) {
  let temp = head;

  while (temp && temp.next != head) {
    console.log(temp);
    temp = temp.next;
  }
  console.log(temp);
}

let node = create(1);
let head = null;
head = insert(head, node)
// console.log(head);
head = insert(head, create(2))
head = insert(head, create(3))
head = insert(head, create(4))
print(head)
console.log("===========================")
// head = delNode(head, 1);
// head = delNode(head, 2);
head = delNode(head, 3);
// head = delNode(head, 4);
// console.log(head);
print(head);