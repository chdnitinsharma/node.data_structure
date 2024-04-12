// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}


let head = null;

function addData(data){
 if(!head){
  head = new Node(data);  
}else{ 

 let current = head;
  let  current_next = head;
 while(current_next){
     
     console.log("data")
      console.log(current_next.data)
      console.log("data")
        current=current_next;
     current_next=current_next.next;
   
 }
 console.log("current");
 console.log(current);
 console.log("current");
    
 if(current){
   current.next =  new Node(data);
  console.log(current);   
 }

} 

}

addData(45);
addData(145)
addData(1145)
addData(245)
addData(45)
console.log( JSON.stringify(head ));

