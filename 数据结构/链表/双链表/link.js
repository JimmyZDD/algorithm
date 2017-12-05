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
  } else {
    while (temp.next) {
      temp = temp.next
    }
    temp.next = node;
    node.pre = temp;
  }

  return head;
}

function delNode(head, num) {
  let temp = head;
  if (!temp) {
    return null;
  }

  if (temp.value == num) { //第一个节点
    if (temp.next) {
      head = temp.next;
      head.pre = null;
      temp = null;
    } else {
      head = null
    }
    return head;
  }

  while (temp.next != null && temp.value != num) {
    temp = temp.next;
  }

  if (temp.value == num) {
    if (temp == head){
      head = temp.next;
      if (head){
        head.pre = null;      
      }
    } else {
      temp.pre.next = temp.next;
      if (temp.next){
        temp.next.pre = temp.pre;
      }
    }

    temp = null;
  }

  return head
}

function print(head) {
  let temp = head;

  while (temp) {
    console.log(temp);
    temp = temp.next;
  }
}

let node = create(1);
let head = null;
head = insert(head, node)
head = insert(head, create(2))
head = insert(head, create(3))
head = insert(head, create(4))
print(head)
print("===========================")
head = delNode(head, 1);
head = delNode(head, 2);
head = delNode(head, 3);
head = delNode(head, 4);
print(head);