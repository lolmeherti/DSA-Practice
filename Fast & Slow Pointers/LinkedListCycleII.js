 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode} | null
 */
var detectCycle = function(head) {
    let visited = new Set();

    while (head != null && !visited.has(head)) {
        visited.add(head);

        head = head.next;
    }

    return head;
};

//two pointer solution
const getIntersect = (head) => {
    let tortoise = head;
    let hare = head;
  
    while(hare !== null && hare.next !== null) {
      tortoise = tortoise.next
      hare = hare.next.next
      if(tortoise === hare) {
        return tortoise
      }
    }
    return null;
  }
  
  var detectCycle = function(head) {
    if(head === null) {
      return null
    }
    intersect = getIntersect(head)
    if(intersect === null) {
      return null;
    }
  
    ptr1 = head
    ptr2 = intersect
    while(ptr1 != ptr2) {
      ptr1 = ptr1.next
      ptr2 = ptr2.next
    }
    return ptr1
  };