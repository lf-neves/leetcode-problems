function findTheWinner(n: number, k: number): number {
    if (k === 1) return n;

    const circularListHead = new ListNode(1)
    let prev = circularListHead

    for(let i=2;i<=n;i++){
        const newNode = new ListNode(i)
        prev.next = newNode;
        prev = newNode;
    }

    prev.next = circularListHead;

    const executeRound = (node: ListNode, numberOfNodes: number) => {
        if(numberOfNodes === 1){
            return node.val;
        }

        let currentNode = node;
        for(let i=1;i<k-1;i++){
            currentNode = currentNode.next;
        }

        currentNode.next = currentNode.next!.next;

        return executeRound(currentNode.next, numberOfNodes - 1)
    }

    return executeRound(circularListHead, n)
};