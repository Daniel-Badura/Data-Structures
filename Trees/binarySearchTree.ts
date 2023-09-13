// class Node {
//     left: Node | null;
//     right: Node | null;
//     value: number;
  
//     constructor(value: number) {
//       this.left = null;
//       this.right = null;
//       this.value = value;
//     }
//   }
  
//   class BinarySearchTree {
//     root: Node | null;
  
//     constructor() {
//       this.root = null;
//     }
  
//     // Recursive Function
//     insert(value: number): BinarySearchTree {
//       function insertNode(next: Node, cur: Node | null): void {
//         if (cur === null) {
//           cur = next;
//         } else if (cur.value <= next.value) {
//           if (!cur.right) {
//             cur.right = next;
//           } else {
//             insertNode(next, cur.right);
//           }
//         } else {
//           if (!cur.left) {
//             cur.left = next;
//           } else {
//             insertNode(next, cur.left);
//           }
//         }
//       }
  
//       const nextNode = new Node(value);
//       let curNode = this.root;
  
//       if (this.root === null) {
//         this.root = nextNode;
//       } else {
//         insertNode(nextNode, curNode);
//       }
  
//       return this;
//     }
  
//     // Recursive While Loop
//     lookup(value: number): Node | null {
//       let currentNode = this.root;
  
//       while (currentNode) {
//         if (value === currentNode.value) {
//           return currentNode;
//         } else if (value < currentNode.value) {
//           // Go left
//           currentNode = currentNode.left;
//         } else {
//           // Go right
//           currentNode = currentNode.right;
//         }
//       }
  
//       return null; // Value not found
//     }
  
//     // remove
//   }
  
//   const tree = new BinarySearchTree();
//   tree.insert(9);
//   tree.insert(4);
//   tree.insert(6);
//   tree.insert(20);
//   tree.insert(170);
//   tree.insert(15);
//   tree.insert(1);
//   console.log(JSON.stringify(traverse(tree.root)));
  
  
//   function traverse(node: Node | null): any {
//     if (node === null) return null;
//     const tree: any = { value: node.value };
//     tree.left = traverse(node.left);
//     tree.right = traverse(node.right);
//     return tree;
//   }
  