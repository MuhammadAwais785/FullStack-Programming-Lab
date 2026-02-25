// 1. Create 3 student objects
// Each object must contain name, age, semester, and courses (array of course names)
const student1 = {
    name: "Alex Mercer",
    age: 20,
    semester: "3rd",
    courses: ["Web Programming", "Data Structures", "UI/UX Design"]
};

const student2 = {
    name: "Sophia Carter",
    age: 22,
    semester: "7th",
    courses: ["Machine Learning", "Cloud Computing", "Ethics in AI"]
};

const student3 = {
    name: "Ethan Hunt",
    age: 21,
    semester: "5th",
    courses: ["Operating Systems", "Computer Networks", "Database Systems"]
};

// Store all students inside an array.
const students = [student1, student2, student3];

// 2. Convert the array of student objects into a JSON string using JSON.stringify()
const studentsJSONString = JSON.stringify(students);
console.log("----- 1. Converted to JSON String -----");
console.log(studentsJSONString);

// 3. Convert the JSON string back into JavaScript objects using JSON.parse()
const parsedStudents = JSON.parse(studentsJSONString);
console.log("----- 2. Parsed back to JS Array of Objects -----");
console.log(parsedStudents);

// 4. Reference to our HTML container
const container = document.getElementById("student-container");

// 5. Loop through all students using map() (forEach() can also be used)
const generatedHTML = parsedStudents.map(student => {

    // 6. Use Object Destructuring to extract: name, age, semester, courses
    const { name, age, semester, courses } = student;

    // Loop through the courses array using map() to create list items <li>
    const coursesHTML = courses.map(course => `<li>${course}</li>`).join('');

    // 7. Display all student information dynamically in HTML using template literals
    return `
        <div class="card">
            <div class="card-header">
                <h2>${name}</h2>
                <span class="badge">Semester ${semester}</span>
            </div>
            <div class="card-body">
                <p><strong>Age:</strong> ${age}</p>
                <div class="courses-section">
                    <h3>Enrolled Courses</h3>
                    <ul class="courses-list">
                        ${coursesHTML}
                    </ul>
                </div>
            </div>
        </div>
    `;
}).join(''); // Join the array into a single massive string to assign to innerHTML

// 8. Update HTML DOM using innerHTML
container.innerHTML = generatedHTML;
