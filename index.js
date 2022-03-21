console.log("LINE 1");

getStudent(1104003,(studentName)=>{
  console.log(studentName);
  getCourses(studentName,(courses)=>{
  console.log(courses); 
  getQuizMarks(courses.courses,(marks)=>{
    console.log(marks);
  })
  })
})

console.log("Line 2");


function getStudent(id,callback){
  setTimeout(()=>{
    console.log("Featching From Database....");
    callback ({id:id,name:"Sajib Sarker"})
  },2000)
}

function getCourses(studentName,callback){
  setTimeout(()=>{
  console.log("Student courses from database...")
  callback ({id:studentName.id,name:studentName.name,courses:["Javascript","Python"]}) 
  },2000)
}

function getQuizMarks(courses,callback){
  setTimeout(()=>{
  console.log("Student Courses Marks From Database..");
  callback ({[courses[0]]:5,[courses[1]]:4})
  },3000)
}