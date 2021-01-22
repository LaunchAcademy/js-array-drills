let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"];

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"],
];

//List all the teachers with an even index number (including 0)
let teachersEvenIndex = teachers.filter((teacher, index) => {
  return index % 2 === 0;
});

console.log(teachersEvenIndex);

//List all of the teachers with the letter i in their name
let teachersWithI = teachers.filter((teacher) => {
  return teacher.toLowerCase().includes("i");
});

console.log(teachersWithI);
let teachersString = teachersWithI.join(", ");

//Return the number of teachers
console.log(teachers.length);

//Return the number of rooms of students
console.log(rooms.length);

//Return the number of students in all the rooms
let sum = 0;
rooms.forEach((room) => {
  sum += room.length;
});

// let studentCounts = rooms.map((room => {
//   return room.length
// }))

// let sum = studentCounts.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

//Return the students who have an i in their names
let studentsWithI = [];

rooms.forEach((room) => {
  room.forEach((student) => {
    if (student.toLowerCase().includes("i")) {
      studentsWithI.push(student);
    }
  });
});

// let allStudents = rooms.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue)
// })

// let studentsWithI = allStudents.filter((student => {
//   return student.toLowerCase().includes('i')
// }))

//Return the teacher who has the given student in their room
let student = "Lynn";
let teacher;

rooms.forEach((room, index) => {
  if (room.includes(student)) {
    console.log(index);
    teacher = teachers[index];
  }
});
