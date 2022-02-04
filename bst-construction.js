class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // installed
    if (this.left === null && value < this.value) {
      this.left = new BST(value);
      return this;
    } else if (this.right === null && value >= this.value) {
      this.right = new BST(value);
      return this;
    }
    // passed on
    if (this.left !== null && value < this.value) {
      this.left.insert(value);
    } else if (this.right !== null && value >= this.value) {
      this.right.insert(value);
    }
    return this;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value >= this.value && this.right === null) {
      return false;
    } else if (value < this.value && this.left === null) {
      return false;
    }
    if (value >= this.value) {
      return this.right.contains(value);
    } else if (value < this.value) {
      return this.left.contains(value);
    }
  }

  remove(value) {
    if (!this.left && !this.right) return;
    const found = this.find(value);
    if (found === null) return; //not found
    if (found.found.value === null) return; // value is null
    const getMin = found.found.getMinFromRightSide();
    const newNode = getMin !== null ? getMin.min : null;
    const newNodesParent = getMin !== null ? getMin.from : null;

    // delete the root and got only left nodes
    if (!newNode && !found.from && !this.right) {
      console.log("no parent and no min from right");
      if (found.found.left.right === null) {
        found.found.value = found.found.left.value;
        found.found.left = found.found.left.left;
      }
      return;
    }

    if (!newNode && found.from) { //cant find new node from the right side but no parent
      if (found.from.left !== null && found.from.left.value === value) {
        if (found.found.left) {
          found.from.left = found.found.left;
        } else found.from.left = null;
        return;
      } else if (
        found.from.right !== null &&
        found.from.right.value === value
      ) {
        if (found.found.left) {
          found.from.left = found.found.left;
        } else found.from.right = null;
        return;
      }
    } else if (newNode) { // can find new node from right side
      found.found.value = newNode.value;
      if (
        newNodesParent !== null &&
        newNodesParent.left !== null &&
        newNodesParent.left.value === newNode.value
      ) {
        newNodesParent.left = newNode.left;
        return;
      } else if (
        newNodesParent !== null &&
        newNodesParent.right !== null &&
        newNodesParent.right.value === newNode.value
      ) {
        newNodesParent.right = newNode.right;
        return;
      }
    }
  }

  getMinFromRightSide(initialized = false, from = null) {
    if (initialized === false && !this.right) return null; // no right nodes at all
    if (initialized === true) {
      if (this.left !== null) return this.left.getMinFromRightSide(true, this);
      else if (this.left === null) return { min: this, from: from };
    } else {
      return this.right.getMinFromRightSide(true, this);
    }
  }

  find(value, from = null) {
    if (this.value === value) return { found: this, from: from };
    if (value > this.value) {
      if (this.right === null) return null; // not found
      else return this.right.find(value, this);
    } else if (value < this.value) {
      if (this.left === null) return null; // not found
      else return this.left.find(value, this);
    }
  }
}