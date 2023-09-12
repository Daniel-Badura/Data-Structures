// class Stack<Type> {
//     private items: Type[];
  
//     constructor() {
//       this.items = [];
//     }
  
//     push(element: Type): void {
//       this.items.push(element);
//     }
  
//     pop(): Type | undefined {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return this.items.pop();
//     }
  
//     peek(): Type | undefined {
//       if (this.isEmpty()) {
//         return undefined;
//       }
//       return this.items[this.items.length - 1];
//     }
  
//     isEmpty(): boolean {
//       return this.items.length === 0;
//     }
  
//     size(): number {
//       return this.items.length;
//     }
  
//     print(): void {
//       console.log(this.items);
//     }
//   }
  
//   const stack = new Stack<number>();
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
  
//   console.log("Stack elements:");
//   stack.print();
  
//   console.log("Top element:", stack.peek());
  
//   console.log("Popped element:", stack.pop());
  
//   console.log("Stack size:", stack.size());
  