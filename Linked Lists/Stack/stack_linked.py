class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, element):
        new_node = Node(element)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        if self.is_empty():
            return "Underflow"
        popped_element = self.head.data
        self.head = self.head.next
        return popped_element

    def peek(self):
        if self.is_empty():
            return "Stack is empty"
        return self.head.data

    def is_empty(self):
        return self.head is None

    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def print_stack(self):
        current = self.head
        stack_elements = []
        while current:
            stack_elements.append(current.data)
            current = current.next
        print(stack_elements)


stack = Stack()
stack.push(911)
stack.push(112)
stack.push(997)

print("Stack elements:")
stack.print_stack()

print("Top element:", stack.peek())

print("Popped element:", stack.pop())

print("Stack size:", stack.size())
