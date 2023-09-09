class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItemsLeft(index);
    return item;
  }
  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const ricky = new MyArray();

function never(array) {
  array.push("never");
  array.push("gonna");
  array.push("!");
}
function letDown(array) {
  array.push("let");
  array.push("you");
  array.push("down");
  array.push("!");
}
function giveUp(array) {
  array.push("give");
  array.push("you");
  array.push("up");
  array.push("!");
}

never(ricky);
ricky.pop();
giveUp(ricky);
ricky.pop();
ricky.push("always");
never(ricky);
ricky.pop();
letDown(ricky);
ricky.deleteAtIndex(5);

console.log(ricky);
