class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      // return Math.max(...this.items);
      // return this.items.pop();  // mutates the array
      return this.items[this.items.length - 1]; // no mutation of array
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      // return Math.min(...this.items);
      // return this.items.shift(); // mutates the array
      return this.items[0]; // return value at index 0;
    }
  }

  sum() {
    const sumOfItems = this.items.reduce((accu, item) => {
      return accu + item;
    }, 0);
    return sumOfItems;
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
