class BST {
    constructor(value) {
      this.value = value;
      this.left = null; // only < this.value
      this.right = null; // can be equal and greater
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
  
          if ( value >= this.value && this.right === null) {
              return false;
          } else if ( value < this.value && this.left === null) {
              return false;
          }
          
          if (value >= this.value) {
              return this.right.contains(value);
          } else if (value < this.value) {
              return this.left.contains(value);
          }
    }
      //---------------------------
    remove(value) {
          const found = this.find(value);
          if (found === "not found") {
              console.log("NODE NOT FOUND");		
          } else {
              const foundMin = found.getMinFromRightSide();
              console.log(foundMin);
          }
      }
      //-----------------------------------------
      
      getMinFromRightSide(initialized = false) {
          if (initialized === false && !this.left && !this.right) return "This node does not have any children nodes.";
      if (initialized === false && !this.right) return "This node does not have any nodes on the right side";
          
          if (initialized === true) {
      
              if (this.left !== null) return this.left.getMinFromRightSide(true);
              else if (this.left === null) return this.value;
        
          } else { //right side first
          return this.right.getMinFromRightSide(true); 
          }
    }
      
    find(value) {
      if (this.value === value) return this;
      
      if (value > this.value) {
              if (this.right === null) return "not found";
        else return this.right.find(value);
      } else if (value < this.value) {
              if (this.left === null) return "not found";
        else return this.left.find(value);
      }
    }
  }
  
  exports.BST = BST;
  