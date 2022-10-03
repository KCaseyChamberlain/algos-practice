// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

var head = [1, 2, 3, 4, 5, 6]

var middleNode = function (head) {
    if (head === null) return null;
    let count = 0;
    let current = head;
    while (current != null) {
        count++;
        current = current.next;
    }
    const middle = Math.floor(count / 2) + 1;
    //return the nodes after the middle one
    let count1 = 1;
    let temp = head;
    while (count1 != middle) {
        temp = temp.next;
        count1++;
    }
    return temp;
};

console.log(
    middleNode(head)
)