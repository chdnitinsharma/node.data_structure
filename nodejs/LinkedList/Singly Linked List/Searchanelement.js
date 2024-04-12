// Search an element in a Linked List (Iterative and Recursive)

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

  function findElement(element){
    let  current_next = head;
while(current_next){
    
     console.log(current_next.data)
     if(current_next.data == element){
        return true;
     }
       current=current_next;
    current_next=current_next.next;
}
return false;
}
  
  addData(45);
  addData(145);
  addData(1145);
  addData(245);
  addData(45);
  
  displayList();

  console.log( findElement(1145));
  
  
  