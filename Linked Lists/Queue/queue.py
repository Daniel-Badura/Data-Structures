class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def peek(self):
        if self.is_empty():
            return None
        return self.first.value

    def enqueue(self, value):
        newNode = Node(value)
        if self.first == None:
            self.first = newNode
            self.last = newNode
        else:
            self.last.next = newNode
            self.last = newNode
        self.length += 1

    def dequeue(self):
        if self.is_empty():
            return None
        if self.length == 1:
            dequeued_value = self.first.value
            self.first = None
            self.last = None
        else:
            dequeued_value = self.first.value
            self.first = self.first.next
        self.length -= 1
        return dequeued_value

    def is_empty(self):
        return self.length == 0


myQueue = Queue()

myQueue.enqueue("Dan")
myQueue.enqueue("Tom")
myQueue.enqueue("Kim")
myQueue.enqueue("Roman")

print("Peek:", myQueue.peek())

print("Dequeue:", myQueue.dequeue())
print("Dequeue:", myQueue.dequeue())

print("Is Empty:", myQueue.is_empty())

print("Queue length:", myQueue.length)
