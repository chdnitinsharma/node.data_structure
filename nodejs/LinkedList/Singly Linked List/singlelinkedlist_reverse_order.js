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
    const cu = new Node(data);  
    head = cu;
    console.log(cu)
  }else{ 
  
     const cu =  new Node(data);
     
      // cu.next = head;
    let current = cu;
   let  current_next = cu;
   while(current_next){
          current=current_next;
       current_next=current_next.next;
   }
       console.log(current)
   if(current){
     current.next =  head;
     head = current;
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

//   245->1145->145->45
  
  displayList();
  
  