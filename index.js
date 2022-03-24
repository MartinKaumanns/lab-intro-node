class SortedList {
  constructor(items) {
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
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      // return Math.max(...this.items);
      return this.items.pop();
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      // return Math.min(...this.items);
      return this.items.shift();
    }
  }

  sum() {
    const sumOfItems = this.items.reduce((accu, item) => {
      return accu + item;
    }, 0);
    return sumOfItems;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const avgOfItems = this.items.reduce((accu, item) => {
        return accu + item;
      }, 0);
      return avgOfItems / this.items.length;
    }
  }
}

module.exports = SortedList;
