/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const nodeWithAncestorsStack: [TreeNode, TreeNode[]][] = [[root, []]]
    let pAncestors: TreeNode[] | null = null;
    let qAncestors: TreeNode[] | null = null;

    while (nodeWithAncestorsStack.length && (!pAncestors || !qAncestors)) {
        const [node, ancestors] = nodeWithAncestorsStack.pop()!;

        if (node === p) pAncestors = [...ancestors, node];
        if (node === q) qAncestors = [...ancestors, node];

        if (node.left) nodeWithAncestorsStack.push([node.left, [...ancestors, node]]);
        if (node.right) nodeWithAncestorsStack.push([node.right, [...ancestors, node]]);
    }

    if (!pAncestors || !qAncestors) return null;

    let i = 0;
    while (i < pAncestors.length && i < qAncestors.length && pAncestors[i] === qAncestors[i]) {
        i++;
    }

    return pAncestors[i - 1] || null;
};