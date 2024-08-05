# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root == None:
            return None

        left = self.lowestCommonAncestor(root, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if root == p or root == q:
            return root
        elif left and right:
            return root
        return left or right
