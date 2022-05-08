console.log("LINE 1");

getStudent(1104003).then((student)=>{
  console.log(student)
  return getCourses(student)

})
.then((courses)=>{
  console.log(courses.courses)
  return getQuizMarks(courses.courses)

})
.then((marks)=>{
  console.log(marks)
})

console.log("Line 2");


function getStudent(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Featching From Database....");
      resolve ({id:id,name:"Sajib Sarker"})
    },2000)
  })
 
}

function getCourses(studentName){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Student courses from database...")
      resolve ({id:studentName.id,name:studentName.name,courses:["Javascript","Python"]}) 
      },3000)

  })
  
}

function getQuizMarks(courses,callback){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Student Courses Marks From Database..");
      resolve ({[courses[0]]:5,[courses[1]]:4})
      },4000)

  })
  
}