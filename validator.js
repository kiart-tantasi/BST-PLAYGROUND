    
    //--- Implementing Node Class ---//

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
    insert(data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
}

    //--- function for validating Version 1.0 --- //

function validate(node, min = null, max = null) {
    //Checking Min Max
    if (max !== null && node.left !== null && node.left.data > max ||
        max !== null && node.right !== null && node.right.data > max ||
        min !== null && node.left !== null && node.left.data < min ||
        min !== null && node.right !== null && node.right.data < min) {
        return false;
    }
    //Checking Left < Node and Right > Node (Basic Binary Search Tree Rules)
    if (node.left !== null && node.left.data > node.data || node.right !== null && node.right.data < node.data) {
        return false;
    }
    //Root of the tree
    if (!node.left && !node.right) {
        return true;
    }
    //Spread recursion from the top to the bottom
    if (node.left && node.right) {
        return validate(node.left, min, node.data) && validate(node.right, node.data, max)
    }
    if (node.left) {
        return validate(node.left, min, node.data);
    }
    if (node.right) {
        return validate(node.right, node.data, max);
    }
}

    //--- function for validating Version 2.0 --- //

// function validate(node,min=null,max=null) {
//   if (max !== null && node.data > max) {
//     return false;
//   }
//   if (min !== null && node.data < min) {
//     return false;
//   }
//   if (!node.left && !node.right) {
//     return true;
//   }
//   else if (node.left && node.right) {
//     return validate(node.left, min, node.data) && validate(node.right, node.data, max);
//   }
//   else if(node.left) {
//     return validate(node.left, min, node.data);
//   }
//   else if(node.right) {
//     return validate(node.right, node.data, max);
//   }
// }

    //--- function for validating Version 2.0 with description --- //

// function validate(node, min = null, max = null) {
//   // --- failed --- //
//   //over max
//   if (max !== null && node.data > max) {
//       return false;
//   }
//   //above min
//   if (min !== null && node.data < min) {
//       return false;
//   }
//   // --- passed --- //
//   //have both left and right nodes
//   if (node.left && node.right) {
//       return validate(node.left, min, node.data) && validate(node.right, node.data, max)
//   }
//   //have only left node
//   else if (node.left) {
//       return validate(node.left,min,node.data);
//   }
//   //have only right node
//   else if (node.right) {
//       return validate(node.right, node.data, max);
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
// testNode.right.right.left = new Node(11);
// testNode.right.right.right = new Node(11);
console.log(validate(testNode));
// ------   See the result at index.html in console (Press F12)   ----- //







// ---- This is the function that I learned from a course in Udemy. Hopefully, he won't sue me. ---//

// function validate(node, min = null, max = null) {
//     if (max !== null && node.data > max) {
//         return false;
//     }
//     if (min !==null && node.data < min) {
//         return false;
//     }
//     if (node.left && validate(node.left, min, node.data) === false) {
//         return false;
//     }
//     if (node.right && validate(node.right, node.data, max) === false) {
//         return false;
//     }
//     return true;
// }
