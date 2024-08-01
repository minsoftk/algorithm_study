class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []

        for char in s:
            if char in ['(', '[', '{']:
                stack.append(char)
            else:
                if char == ')':
                    if not stack or stack.pop() != '(':
                        return False
                elif char == ']':
                    if not stack or stack.pop() != '[':
                        return False
                elif char == '}':
                    if not stack or stack.pop() != '{':
                        return False
        if len(stack) > 0:
            return False
        return True
