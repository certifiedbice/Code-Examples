// Given 2 linked lists, where each node in each linked list represents a 
// character in a string, write a function compare() that compares the 2 
// strings, i.e., it returns 0 if both strings are the same, 1 if the 1st 
// linked list is lexicographically greater, and -1 if the 2nd string is 
// lexicographically greater.

// Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`

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
}

let characters=[];

let listA=new LinkedList();
// characters=['B','i','l','b','o','a'];
// characters=['B','i','l','b','o'];
characters=['B','i','l','b','o','a'];
characters.forEach((character,index)=>{
	if(index===0){listA.insertFirst(character,null);}
	else{listA.insertLast(character,null)}
});

let listB=new LinkedList();
// characters=['B','i','l','b','o'];
// characters=['B','i','l','b','o'];
characters=['B','i','l','b','o','b'];
characters.forEach((character,index)=>{
	if(index===0){listB.insertFirst(character,null);}
	else{listB.insertLast(character,null)}
});

function LexCompare(){
	let headA=listA.head;
	let headB=listB.head;
	let strA='';
	let strB='';
	while(headA!==null){
		strA+=headA.value;
		headA=headA.next;
	}
	while(headB!==null){
		strB+=headB.value;
		headB=headB.next;
	}
	return strA.localeCompare(strB)
}
console.log(LexCompare());