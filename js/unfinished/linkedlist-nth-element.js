// Design an algorithm to find the nth element in a linked list.
// func(A->B->C->D, 2) => B OR C, depending on 0 indexing or 1 indexing
// func(A->B->C->D, 1) => either A or B

class _Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LinkedList{
	constructor(){this.head=null;}
	insertFirst=item=>{this.head=new _Node(item,this.head);}
	insertLast=item=>{
		// Check for empty list.
		if(this.head===null){this.insertFirst(item);}
		// Iterate through list to last node.
		else{
            let tempNode=this.head;
            while(tempNode.next!==null){
				tempNode=tempNode.next;
			}
            tempNode.next=new _Node(item,null);
        }
	}
	find=nodeToFind=>{
		// Start at the head
        let currNode=this.head;
        // If the list is empty
        if(!this.head){return null;}
        // Check for the item 
        while (currNode.value!==nodeToFind){
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next===null){return null;}
            else {
                // Otherwise, keep looking 
                currNode=currNode.next;
            }
        }
        // Found it
        return currNode;
	}
}

let characters=new LinkedList();
let names=['Ash','Pablo','Kelly','Ruby'];
names.forEach((name,index)=>{
	if(index===0){characters.insertFirst(name,null);}
	else{characters.insertLast(name,null)}
});

console.log(characters.find(names[3]));