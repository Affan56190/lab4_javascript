
var name = "Affan";
var age = 22;
var isStudent = true;
var university = "Air University";
var semester = 5;

var biography = {
    name: name,
    age: age,
    isStudent: isStudent,
    university: university,
    semester: semester,

    address: {
        city: "Mandi Bahauddin",
        country: "Pakistan"
    },

    degreeProgram: {
        degree: "BS Computer Science",
        department: "Computer Science"
    }
};

console.log("===== My Biography =====");
console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Student: " + biography.isStudent);
console.log("University: " + biography.university);
console.log("Semester: " + biography.semester);

console.log("City: " + biography.address.city);
console.log("Country: " + biography.address.country);

console.log("Degree: " + biography.degreeProgram.degree);
console.log("Department: " + biography.degreeProgram.department);
