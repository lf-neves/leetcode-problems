function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) return head;

    // Get list size
    let listSize = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        listSize++;
    }

    // Connect tail to head (make it circular)
    current.next = head;

    // Find new tail: (listSize - (k % listSize)) steps from head
    let stepsToNewHead = listSize - (k % listSize);
    current = head;
    for (let i = 0; i < stepsToNewHead - 1; i++) {
        current = current.next;
    }

    // Break the circle
    const newHead = current.next;
    current.next = null;

    return newHead;
}
