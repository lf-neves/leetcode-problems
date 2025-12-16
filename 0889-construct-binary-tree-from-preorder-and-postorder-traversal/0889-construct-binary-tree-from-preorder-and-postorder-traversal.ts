function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);

  // Leaf node
  if (preorder.length === 1) return root;

  // The next node in preorder is the left child root
  const leftRootVal = preorder[1];

  // Find left subtree size using postorder
  const leftSubtreeSize = postorder.indexOf(leftRootVal) + 1;

  // Split traversals
  const leftPre = preorder.slice(1, 1 + leftSubtreeSize);
  const rightPre = preorder.slice(1 + leftSubtreeSize);

  const leftPost = postorder.slice(0, leftSubtreeSize);
  const rightPost = postorder.slice(leftSubtreeSize, postorder.length - 1);

  root.left = constructFromPrePost(leftPre, leftPost);
  root.right = constructFromPrePost(rightPre, rightPost);

  return root;
}
