class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
	push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
	pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function bracketCheck(str){
	// needs a fix for the overwriting of the location of opening brackets, but works otherwise.
	let openBracket=new Stack;
	let openLocation;
	let closeLocation;
	for(i=0;i<str.length;i++){
		if(str.charAt(i)==='('||str.charAt(i)==='['||str.charAt(i)==='{'){
			openBracket.push(str.charAt(i));
			openLocation=i;
		}
		else if(openBracket.top!==null){
			if(openBracket.top.data==='('){
				console.log('( - is currently open');
				if(str.charAt(i)===')'){
					console.log('closing ) found');
					openBracket.pop();
					closeLocation=i;
				}
			}
			else if(openBracket.top.data==='['){
				console.log('[ - is currently open');
				if(str.charAt(i)===']'){
					console.log('closing ] found');
					openBracket.pop();
					closeLocation=i;
				}
			}
			else if(openBracket.top.data==='{'){
				console.log('{ - is currently open');
				if(str.charAt(i)==='}'){
					console.log('closing } found');
					openBracket.pop();
					closeLocation=i;
				}
			}
		}
		if(i===str.length-1&&openBracket.top!==null){
			return `No closing bracket for '${openBracket.top.data}' found at location: ${openLocation}`;
		}
		else if(i===str.length-1&&openBracket.top===null){return `Syntax intact`}
	}
}
console.log(bracketCheck('({1+1)'));