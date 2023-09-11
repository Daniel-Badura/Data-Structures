class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None  # added previous link


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
        new_node.prev = current  # added previous link

    def insert(self, data, position):
        new_node = Node(data)
        if position < 0:
            position = 0
        if position == 0:
            new_node.next = self.head
            self.head = new_node
            new_node.next.prev = new_node  # added previous link
            return
        current = self.head
        prev = None
        index = 0
        while current and index < position:
            prev = current
            current = current.next
            index += 1
        prev.next = new_node
        new_node.next = current
        if current:  # Check if current is not None
            current.prev = new_node  # added previous link

    def remove_at(self, position):
        if not self.head or position < 0:
            return None
        if position == 0:
            removed = self.head
            self.head = self.head.next
            if self.head:
                self.head.prev = None  # Update the previous link
            return removed
        current = self.head
        prev = None
        index = 0
        while current and index < position:
            prev = current
            current = current.next
            index += 1
        if current:
            prev.next = current.next
            if current.next:
                current.next.prev = prev  # Update the previous link
            return current
        return None

    def index_of(self, data):
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1

    def is_empty(self):
        return not self.head

    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result

    def reverse(self):
        if not self.head or not self.head.next:
            return  # Empty list or a single element, nothing to reverse

        prev_node = None
        current_node = self.head
        while current_node:
            next_node = current_node.next
            current_node.next = prev_node
            current_node.prev = next_node  # Update the previous link
            prev_node = current_node
            current_node = next_node

        # After the loop, prev_node will be the new head
        self.head = prev_node


# Example usage:
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.insert(0, 0)
removed_node = linked_list.remove_at(2)
print(linked_list.to_list())  # [0, 1, 3, 2]
print(linked_list.size())  # 4
print(linked_list.index_of(3))  # 2
print(linked_list.is_empty())  # False

linked_list.reverse()
print(linked_list.to_list())
