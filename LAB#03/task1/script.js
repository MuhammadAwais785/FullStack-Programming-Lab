// ═══════════════════════════════════════════════════════════
//  Task 1 – Student Management System  (ES6 Classes)
// ═══════════════════════════════════════════════════════════

// ── Student Class (ES6) ────────────────────────────────────
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;             // const-safe property
        this.name = name;
        this.semester = semester;
        this.courses = courses;   // array of course names
    }

    // Returns initials for the avatar
    getInitials() {
        const parts = this.name.split(' ');
        return parts.map(p => p[0]).join('').toUpperCase();
    }

    // Returns an HTML card using template literals
    getCard() {
        const badges = this.courses
            .map(c => `<span class="course-badge">${c}</span>`)
            .join('');

        return `
            <div class="student-card">
                <div class="avatar">${this.getInitials()}</div>
                <div class="card-body">
                    <div class="name">${this.name}</div>
                    <div class="meta">
                        <strong>ID:</strong> ${this.id} &nbsp;&bull;&nbsp;
                        <strong>Semester:</strong> ${this.semester} &nbsp;&bull;&nbsp;
                        <strong>Courses:</strong> ${this.courses.length}
                    </div>
                    <div class="courses-list">${badges}</div>
                </div>
            </div>
        `;
    }
}

// ── Create at least 3 Student objects (const) ──────────────
const student1 = new Student(101, "Muhammad Awais", 4, [
    "Web Development",
    "Data Structures",
    "OOP"
]);

const student2 = new Student(102, "Ali Ahmed", 3, [
    "Database Systems",
    "Operating Systems",
    "Linear Algebra"
]);

const student3 = new Student(103, "Sara Khan", 5, [
    "Software Engineering",
    "Artificial Intelligence",
    "Computer Networks",
    "Cloud Computing"
]);

// ── Store in array (const – reference won't change) ────────
const students = [student1, student2, student3];

// ── Dynamically display all students using innerHTML ───────
let cardsHTML = '';   // let – value updates inside the loop

for (let i = 0; i < students.length; i++) {
    cardsHTML += students[i].getCard();
}

document.getElementById('students-container').innerHTML = cardsHTML;

// ── Stats bar (using template literals + const) ────────────
const totalStudents = students.length;

let totalCourses = 0;
for (let i = 0; i < students.length; i++) {
    totalCourses += students[i].courses[i] ? 1 : 0;
}
// Count unique courses
const allCourses = [];
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].courses.length; j++) {
        if (!allCourses.includes(students[i].courses[j])) {
            allCourses.push(students[i].courses[j]);
        }
    }
}

document.getElementById('stats-bar').innerHTML = `
    <div class="stat-item">
        <div class="number">${totalStudents}</div>
        <div class="label">Students</div>
    </div>
    <div class="stat-item">
        <div class="number">${allCourses.length}</div>
        <div class="label">Courses</div>
    </div>
    <div class="stat-item">
        <div class="number">${Math.max(...students.map(s => s.semester))}</div>
        <div class="label">Max Semester</div>
    </div>
`;
