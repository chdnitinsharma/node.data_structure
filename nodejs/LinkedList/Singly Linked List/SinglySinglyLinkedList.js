// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


let head = null;

if(!head){
  head = new Node(12);
}

console.log(head)
if(head){
    let  current = new Node(14);
 head.next = current;  
}
console.log(head)
if(head){
//     let  current = new Node(16);
//  head.next.next = current;  
 
   let current = head;
    let  current_next = head;
   while(current_next){
       
       console.log("current_next.data")
        console.log(current_next.data)
        console.log("current_next.data")
          current=current_next;
       current_next=current_next.next;
     
   }
   console.log("current");
   console.log(current);
   console.log("current");
      
   if(current){
     current.next =  new Node(16);
    console.log(current);   
   }
 
}
console.log(head);


if(head){
//     let  current = new Node(16);
//  head.next.next = current;  
 
   let current = head;
    let  current_next = head;
   while(current_next){
       
       console.log("current_next.data")
        console.log(current_next.data)
        console.log("current_next.data")
          current=current_next;
       current_next=current_next.next;
     
   }
   console.log("current");
   console.log(current);
   console.log("current");
      
   if(current){
     current.next =  new Node(18);
    console.log(current);   
   }
 
}
console.log(JSON.stringify(head))

