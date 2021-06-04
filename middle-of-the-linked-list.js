/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head, count = 1;
    while(current.next){
        current = current.next;
        count++;
    }
    let mid = parseInt(count/2);
    while(mid){
        head = head.next;
        mid--;
    }
    return head;
};