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
	removeDupes=()=>{
		let prev=this.head;
        let current=this.head.next;
        let hash={};
        while(current!=null){
            if(!hash[current.value]){
                hash[current.value]=true;
            }else{
                prev.next=current.next;
            }
            prev=current;
            current=current.next;
        }
	}
	printList=()=>{
		let listArr=[];
		var head=this.head;
		while(head.next!==null){
			listArr.push(`val:${head.value} / next:${head.next.value}`);
			head=head.next;
		}
		listArr.forEach(node=>console.log(node));
	}
}

let characters=new LinkedList();
let names=['Ash','Kelly','Pablo','Kelly','Ruby'];
names.forEach((name,index)=>{
	if(index===0){characters.insertFirst(name,null);}
	else{characters.insertLast(name,null)}
});

// console.log(characters.find(names[3]));
characters.printList();
characters.removeDupes();
characters.printList();
