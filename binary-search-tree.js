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
    BFS() {
        //Breadth first search traversal
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        return data;
    }
    DFSPreOrder(){
        //Depth First Search - Pre order traversal
        let data = [];
        let node = this.root;

        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

        }
        traverse(node);
        return data;
    }
    DFSPostOrder(){
        //Depth First Search - Post order traversal
        let data=[];
        let node = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(node);
        return data;
    }
    DFSInOrder(){
        //Depth First Search - In order traversal
        let data = [];
        let node = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(node);
        return data;
    }
        
}

let tree = new BinarySearchTree();