//Promises//

console.log("LINE 1");

// getStudent(1104003).then((student)=>{
//   console.log(student)
//   return getCourses(student)

// })
// .then((courses)=>{
//   console.log(courses.courses)
//   return getQuizMarks(courses.courses)

// })
// .then((marks)=>{
//   console.log(marks)
// })

//Async and Await


async function studentData(){
  const student=await getStudent(1104003);
  const courses=await getCourses(student);
  const marks= await getQuizMarks(courses.courses);

  console.log(marks);
}

studentData();

console.log("Line 2");


function getStudent(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Featching From Database....");
      const student={id:id,name:"Sajib Sarker"}
      console.log(student)
      resolve (student)
    },2000)
  })
 
}

function getCourses(studentName){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Student courses from database...")
      const courses={id:studentName.id,name:studentName.name,courses:["Javascript","Python"]}
      console.log(courses)
      resolve (courses) 
      },3000)

  })
  
}

function getQuizMarks(courses,callback){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Student Courses Marks From Database..");
      const marks={[courses[0]]:5,[courses[1]]:4}
      console.log(marks)
      resolve (marks)
      },4000)

  })
  
}