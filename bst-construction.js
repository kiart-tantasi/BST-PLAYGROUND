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
    const node = found ? found.found : null;
    const parent = found ? found.from : null;
    if (!node) {
      console.log("not found");
      return;
    }

    // 1: THE REMOVING NODE GOT NO RIGHT NODE AND PARENT
    if (!node.right && !parent) {
      if (!node.left.right) {
        node.value = node.left.value;
        node.left = node.left.left;
      } else if (node.left.right) {
        // find min from node.left.right side and swap with the removing idea
      }
      return;
    }

    //2: THE REMOVING NODE GOT NO RIGHT NODE BUT GOT PARENT
    if (!node.right && parent) {
      if (parent.left && parent.left.value === value) {
        parent.left = node.left;
        return;
      }
      if (parent.right && parent.right.value === value) {
        parent.right = node.left;
        return;
      }
    }

    //3: THE REMOVING NODE GOT RIGHT NODE (BOTH CASES: WITH PARENT AND NO PARENT)
    if ((node.right && parent) || (node.right && !parent)) {
      const min = node.right.getMin(node);
      const minNode = min.min;
      const minParent = min.from;

      if (minParent.left && minParent.left.value === minNode.value) {
        node.value = minNode.value;
        if (minNode.right) {
          minParent.left = minNode.right;
          minNode.right.left = minNode.left;
        } else minParent.left = minNode.left;
        return;
      } else {
        // if (minParent.right && minParent.right.value === minNode.value) {
        node.value = minNode.value;
        minParent.right = minNode.right;
        return;
      }
    }
  }

  getMin(from) {
    if (this.left !== null) return this.left.getMin(this);
    else return { min: this, from: from };
  }

  find(value, from = null) {
    if (this.value === value) return { found: this, from: from };
    if (value > this.value) {
      if (this.right === null) return false;
      else return this.right.find(value, this);
    } else if (value < this.value) {
      if (this.left === null) return false;
      else return this.left.find(value, this);
    }
  }
}