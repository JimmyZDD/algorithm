function create(value) {
  return {
    value: value,
    next: null
  }
}

function insert(head, node) {
  let temp = head;

  if (!head) {
    head = node;
    head.next = head;
  } else {
    while(temp.next!=head){
      temp = temp.next;
    }

    temp.next = node;
    node.next = head;
  }

  return head;
}

function delNode(head, num) {
  let temp = head;
  let headNext = head.next;
  let tempPre = head;
  if (!temp) {
    return null;
  }

  temp = temp.next;
  while (temp.next!=headNext && temp.value!=num) {
    tempPre = temp;
    temp = temp.next;
  }
  // console.log(tempPre, "---------", temp)

  if (temp.value == num) {
    if (temp == head && temp.next == head){
      head = null;
    } else {
      if (temp == head){
        head = temp.next;
      }
      tempPre.next = temp.next;
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
head = delNode(head, 1);
head = delNode(head, 2);
head = delNode(head, 3);
head = delNode(head, 4);
// console.log(head);
print(head);