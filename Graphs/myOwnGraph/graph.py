class Graph:
    def __init__(self, directed=False):
        self.graph = {}
        self.directed = directed

    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, vertex1, vertex2, weight=None):
        self.add_vertex(vertex1)
        self.add_vertex(vertex2)

        if weight is not None:
            self.graph[vertex1].append((vertex2, weight))
            if not self.directed:
                self.graph[vertex2].append((vertex1, weight))
        else:
            self.graph[vertex1].append(vertex2)
            if not self.directed:
                self.graph[vertex2].append(vertex1)

    def get_vertices(self):
        return list(self.graph.keys())

    def get_edges(self):
        edges = []
        for vertex, neighbors in self.graph.items():
            if neighbors:
                if isinstance(neighbors[0], tuple):  # Check if it's a weighted edge
                    edges.extend([(vertex, v, weight) for v, weight in neighbors])
                else:
                    edges.extend([(vertex, v) for v in neighbors])
            else:
                edges.append((vertex,))  # Add isolated vertices
        return edges


# Example:
if __name__ == "__main__":
    g = Graph()
    g.add_edge("A", "B")
    g.add_edge("B", "C")
    g.add_edge("C", "A")
    g.add_edge("D", "A", 5)
    g.add_edge("D", "B", 3)

    print("Vertices:", g.get_vertices())
    print("Edges:", g.get_edges())
    print("Graph:")
    print(g)
