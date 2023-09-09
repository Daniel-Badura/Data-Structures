class HashTable:
    def __init__(self, size):
        self.size = size
        self.data = [None] * size

    def _hash(self, key):
        hash_value = 0
        for i in range(len(key)):
            hash_value = (hash_value + ord(key[i]) * i) % self.size
        return hash_value

    def set(self, key, value):
        address = self._hash(key)
        if self.data[address] is None:
            self.data[address] = []
        self.data[address].append([key, value])

    def get(self, key):
        address = self._hash(key)
        current_bucket = self.data[address]
        if current_bucket:
            for item in current_bucket:
                if item[0] == key:
                    return item[1]
        return None

    def keys(self):
        keysArray = []
        for i in range(0, len(self.data)):
            if self.data[i]:
                keysArray = keysArray + [self.data[i][0][0]]
        return keysArray


# Create a HashTable instance
myHashTable = HashTable(50)

# Add some key-value pairs
myHashTable.set("mangos", 2741)
myHashTable.set("bananas", 2137)
myHashTable.set("kiwis", 3322)

# Retrieve a value by key
result = myHashTable.get("bananas")
keys = myHashTable.keys()
print(keys)
