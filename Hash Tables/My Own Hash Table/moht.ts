// class HashTable {
//     private data: Array<Array<[string, any] | undefined>>;
  
//     constructor(size: number) {
//       this.data = new Array(size);
//     }
  
//     private _hash(key: string): number {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//       }
//       return hash;
//     }
  
//     set(key: string, value: any): void {
//       const address = this._hash(key);
//       if (!this.data[address]) {
//         this.data[address] = [];
//       }
//       this.data[address].push([key, value]);
//     }
  
//     get(key: string): any | undefined {
//       const address = this._hash(key);
//       const currentBucket = this.data[address];
//       console.log(currentBucket);
//       if (currentBucket) {
//         for (let i = 0; i < currentBucket.length; i++) {
//           if (currentBucket[i][0] === key) {
//             return currentBucket[i][1];
//           }
//         }
//       }
//     }
  
//     keys(): string[] | undefined {
//       if (!this.data.length) {
//         return undefined;
//       }
//       const result: string[] = [];
//       for (let i = 0; i < this.data.length; i++) {
//         if (this.data[i] && this.data[i].length) {
//           if (this.data.length > 1) {
//             for (let j = 0; j < this.data[i].length; j++) {
//               result.push(this.data[i][j][0]);
//             }
//           } else {
//             result.push(this.data[i][0][0]);
//           }
//         }
//       }
//       return result;
//     }
//   }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set("mangos", 2741);
//   myHashTable.set("bananas", 2137);
//   myHashTable.get("bananas");
  