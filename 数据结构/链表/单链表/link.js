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
  } else {
    while (temp.next) {
      temp = temp.next
    }
    temp.next = node;
  }

  return head;
}

function delNode(head, num) {
  let temp = head;
  let tempPre = head;
  if (!temp) {
    return null;
  }
  if (temp.value == num) {
    return head.next;
  }

  while (temp.next != null && temp.value != num) {
    tempPre = temp;
    temp = temp.next;
  }

  if (temp.value == num) {
    if (temp == head){
      head = temp.next;
    } else {
      tempPre.next = temp.next;
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
head = delNode(head, 0)
print(head);