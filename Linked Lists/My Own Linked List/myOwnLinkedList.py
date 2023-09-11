class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # Add a new node to the end of the list
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    # Insert a new node at a specific position
    def insert(self, data, position):
        new_node = Node(data)
        if position < 0:
            position = 0
        if position == 0:
            new_node.next = self.head
            self.head = new_node
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

    # Remove a node at a specific position
    def remove_at(self, position):
        if not self.head or position < 0:
            return None
        if position == 0:
            removed = self.head
            self.head = self.head.next
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
            return current
        return None

    # Find the index of a specific value
    def index_of(self, data):
        current = self.head
        index = 0
        while current:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1

    # Check if the list is empty
    def is_empty(self):
        return not self.head

    # Get the size of the list
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    # Convert the linked list to a Python list
    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result


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
