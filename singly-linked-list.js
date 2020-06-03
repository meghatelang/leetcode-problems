class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //push the value at end
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        //remove the value from end
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            console.log("new",newTail)
            current = current.next;
            console.log("new curr",current.val)
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.heade = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        //remove the value from beginning
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;     
        return currentHead;

    }
    unshift(val){
        //push the value at beginning
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        //get the value at particular index
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        //update the value at particular index
        let found = this.get(index);
        if(found){
            found.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        //insert the node at particular index
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        //removes the node from particular index
        if(index < 0 || index > this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length) return this.pop();

        let prevNode = this.get(index - 1);
        let removed = this.get(index)
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}

let list = new SinglyLinkedList();