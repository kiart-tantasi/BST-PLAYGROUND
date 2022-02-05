//--- Implementing Node Class ---//

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.left === null && value < this.value) {
      this.left = new Node(value);
      return;
    } else if (this.right === null && value >= this.value) {
      this.right = new Node(value);
      return;
    }
    if (this.left !== null && value < this.value) {
      this.left.insert(value);
    } else if (this.right !== null && value >= this.value) {
      this.right.insert(value);
    }
  }
}

// class Node {
//     constructor(data) {
//       this.value = data;
//       this.left = null;
//       this.right = null;
//     }
//     insert(data) {
//       if (data < this.value && this.left) {
//         this.left.insert(data);
//       } else if (data < this.value) {
//         this.left = new Node(data);
//       } else if (data > this.value && this.right) {
//         this.right.insert(data);
//       } else if (data > this.value) {
//         this.right = new Node(data);
//       }
//     }
// }

    //--- function for validating Version 1.0 --- //

/*
function validate(node, min = null, max = null) {
    //Checking Min Max
    if (max !== null && node.left !== null && node.left.value > max ||
        max !== null && node.right !== null && node.right.value > max ||
        min !== null && node.left !== null && node.left.value < min ||
        min !== null && node.right !== null && node.right.value < min) {
        return false;
    }
    //Checking Left < Node and Right > Node (Basic Binary Search Tree Rules)
    if (node.left !== null && node.left.value > node.value || node.right !== null && node.right.value < node.value) {
        return false;
    }
    //Root of the tree
    if (!node.left && !node.right) {
        return true;
    }
    //Spread recursion from the top to the bottom
    if (node.left && node.right) {
        return validate(node.left, min, node.value) && validate(node.right, node.value, max)
    }
    if (node.left) {
        return validate(node.left, min, node.value);
    }
    if (node.right) {
        return validate(node.right, node.value, max);
    }
}
*/
    //--- function for validating Version 2.0 --- //

function validate(node,min = null, max = null) {
  if (max !== null && node.value >= max || min !== null && node.value < min) {
    return false;
  }
    if (node.left && node.right) {
    return validate(node.left, min, node.value) && validate(node.right, node.value, max);
  } else if(node.left) {
    return validate(node.left, min, node.value);
  } else if(node.right) {
    return validate(node.right, node.value, max);
  }
  return true;
}

    //--- function for validating Version 2.0 with description --- //

// function validate(node, min = null, max = null) {
//   // --- failed --- //
//   //over max
//   if (max !== null && node.value > max) {
//       return false;
//   }
//   //above min
//   if (min !== null && node.value < min) {
//       return false;
//   }
//   // --- passed --- //
//   //have both left and right nodes
//   if (node.left && node.right) {
//       return validate(node.left, min, node.value) && validate(node.right, node.value, max)
//   }
//   //have only left node
//   else if (node.left) {
//       return validate(node.left,min,node.value);
//   }
//   //have only right node
//   else if (node.right) {
//       return validate(node.right, node.value, max);
//   }
//   //no nodes at all (return true from roots up to the top)
//   else if (!node.right && !node.left) {
//       return true;
//   }
// }


// --- For Testing --- //
const testNode = new Node(10);
testNode.insert(0);
testNode.insert(12);
testNode.insert(-1);
testNode.insert(4);
testNode.insert(11);
testNode.insert(20);
testNode.insert(17);
testNode.insert(99);
//--- If you uncomment one of the belows, the result should be false. ---/
//--- If you keep all of the belows stay comments, the result should be true. ---/
// testNode.left.left = new Node(1);
// testNode.right.right = new Node(11);
// testNode.left.right = new Node(11);
// testNode.right.left = new Node(9);
// testNode.left.left.right = new Node(1);
// testNode.left.left.left = new Node(-1);
// testNode.right.right.left = new Node(11);
// testNode.right.right.right = new Node(11);
console.log(validate(testNode));
// ------   See the result at index.html in console (Press F12)   ----- //







// ---- This is the function that I learned from a course in Udemy. Hopefully, he won't sue me. ---//

// function validate(node, min = null, max = null) {
//     if (max !== null && node.value > max) {
//         return false;
//     }
//     if (min !==null && node.value < min) {
//         return false;
//     }
//     if (node.left && validate(node.left, min, node.value) === false) {
//         return false;
//     }
//     if (node.right && validate(node.right, node.value, max) === false) {
//         return false;
//     }
//     return true;
// }
