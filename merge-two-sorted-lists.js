const list1 = [1, 2, 3,]
const list2 = [1, 5, 6]

var mergeTwoLists = function (list1, list2) {
    // If either list is empty, return the other list's node
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If list1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If list2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

console.log(
    mergeTwoLists(list1, list2)
)