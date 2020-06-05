class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        //insert the node into BST.
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;  // check if duplicate value entered in BST.
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else if( val > current.val){
                if(current.right === null){
                    current.right =newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    contains(val){
        //check if the value is present in BST.
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(current &&  !false){
            if(val < current.val){
                current = current.left
            }else if(val > current.val){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
        
}

let tree = new BinarySearchTree();