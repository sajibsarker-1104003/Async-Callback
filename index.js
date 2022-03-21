console.log("LINE 1");

getStudent(1104003,(studentName)=>{
  console.log(studentName);
})

console.log("Line 2");


function getStudent(id,callback){
  setTimeout(()=>{
    console.log("Featching From Database....");
    callback ({id:id,name:"Sajib Sarker"})
  },2000)
}