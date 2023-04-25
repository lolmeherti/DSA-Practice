// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head === null || head.next  === null) {
        return false
    }

    let slowPointer = head
    let fastPointer = head.next

    while(slowPointer !== fastPointer) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next
        if(fastPointer === null) {
            return false
        }
        fastPointer = fastPointer.next
        if(fastPointer === null) {
            return false
        }
    }

    return true
};



class ListNode {
    constructor(value, next = null) {
        this.val = val;
        this.next = null;
    }
}

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
const node4 = new ListNode(-4, node2)
const node3 = new ListNode(0, node4)
const node2 = new ListNode(2, node3)
const head1 = new ListNode(3, node2)


// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
const head2 = new ListNode(1)
