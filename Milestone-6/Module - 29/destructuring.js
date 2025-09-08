const student = {name : 'Alamgir', age : 22, job : 'student', gfName : 'Apu'};

delete student.gfName;

const {name , age, job: jobb} = student;
console.log(student);
console.log(name, age, jobb);