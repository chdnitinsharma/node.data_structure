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
        current=current_next;
     current_next=current_next.next;
 }
    
 if(current){
   current.next =  new Node(data);
 }

} 

}

function displayList(){
     let  current_next = head;
 while(current_next){
     
      console.log(current_next.data)
        current=current_next;
     current_next=current_next.next;
 }
}

addData(45);
addData(145);
addData(1145);
addData(245);
// 45 -> 145 -> 1145 -> 245
displayList();

