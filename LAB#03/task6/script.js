// ============================================================
// Task 6 – Mini University Portal (ES6)
// Demonstrates: Class · Map · Set · Promise
// ============================================================

// ============================================================
// 1. STUDENT CLASS
// Defines a student with id, name, age, and department.
// ============================================================
class Student {
    constructor(id, name, age, department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
    }
}

// ============================================================
// 2. MAP — stores students   (Key = ID, Value = Student)
// 3. SET — stores unique course names
// ============================================================
const studentMap = new Map();
const registeredCourses = new Set();

// ============================================================
// DOM REFERENCES
// ============================================================
// -- Add Student --
const addIdInput = document.getElementById('addId');
const addNameInput = document.getElementById('addName');
const addAgeInput = document.getElementById('addAge');
const addDeptInput = document.getElementById('addDept');
const addBtn = document.getElementById('addBtn');
const addStatus = document.getElementById('addStatus');

// -- Search / Delete --
const queryIdInput = document.getElementById('queryId');
const searchBtn = document.getElementById('searchBtn');
const deleteBtn = document.getElementById('deleteBtn');
const totalBtn = document.getElementById('totalBtn');
const queryStatus = document.getElementById('queryStatus');
const queryResult = document.getElementById('queryResult');

// -- Courses --
const courseInput = document.getElementById('courseInput');
const addCourseBtn = document.getElementById('addCourseBtn');
const showCoursesBtn = document.getElementById('showCoursesBtn');
const courseStatus = document.getElementById('courseStatus');
const courseOutput = document.getElementById('courseOutput');

// -- All Students Table --
const showAllBtn = document.getElementById('showAllBtn');
const studentTableArea = document.getElementById('studentTableArea');

// ============================================================
// HELPER — set status text with class
// ============================================================
const setStatus = (el, text, type = 'info') => {
    el.innerHTML = text;
    el.className = `status s-${type}`;  // e.g. s-ok, s-warn, s-err, s-info, s-load
};

// ============================================================
// 4. PROMISE — Simulate saving data with a 2-second delay
// Returns a Promise that resolves after setTimeout.
// ============================================================
const saveData = (studentName) => {
    return new Promise((resolve, reject) => {
        // Simulate a 2-second server save
        setTimeout(() => {
            resolve(`✅ "${studentName}" saved successfully!`);
        }, 2000);
    });
};

// ============================================================
// FEATURE: Add Student
// Creates a Student, stores it in the Map, and uses a Promise
// to simulate saving data to a server.
// ============================================================
const addStudent = () => {
    // --- Gather & validate inputs ---
    const id = parseInt(addIdInput.value.trim(), 10);
    const name = addNameInput.value.trim();
    const age = parseInt(addAgeInput.value.trim(), 10);
    const dept = addDeptInput.value.trim();

    if (!id || !name || !age || !dept) {
        setStatus(addStatus, '⚠️ Please fill in all fields.', 'warn');
        return;
    }

    // Check for duplicate ID in the Map
    if (studentMap.has(id)) {
        setStatus(addStatus, `⚠️ Student ID ${id} already exists.`, 'warn');
        return;
    }

    // Create a new Student object and add to Map
    const student = new Student(id, name, age, dept);
    studentMap.set(id, student);

    // Show a loading message (Promise pending)
    setStatus(addStatus, '<span class="loader-inline"></span> Saving data...', 'load');
    addBtn.disabled = true;

    // Use Promise to simulate async save
    saveData(name)
        .then((message) => {
            // Promise resolved — show success
            setStatus(addStatus, message, 'ok');
        })
        .catch((error) => {
            // Promise rejected — show error (safety net)
            setStatus(addStatus, `❌ ${error}`, 'err');
        })
        .finally(() => {
            addBtn.disabled = false;
            // Clear input fields
            addIdInput.value = '';
            addNameInput.value = '';
            addAgeInput.value = '';
            addDeptInput.value = '';
        });
};

// ============================================================
// FEATURE: Search Student by ID
// Uses Map .has() and .get()
// ============================================================
const searchStudent = () => {
    const id = parseInt(queryIdInput.value.trim(), 10);

    if (!id) {
        setStatus(queryStatus, '⚠️ Enter a valid Student ID.', 'warn');
        queryResult.innerHTML = '';
        return;
    }

    if (studentMap.has(id)) {
        const s = studentMap.get(id);
        queryResult.innerHTML = `
            <div class="search-card">
                <p><strong>ID:</strong> ${s.id}</p>
                <p><strong>Name:</strong> ${s.name}</p>
                <p><strong>Age:</strong> ${s.age}</p>
                <p><strong>Department:</strong> <span class="dept-tag">${s.department}</span></p>
            </div>`;
        setStatus(queryStatus, `✅ Student #${id} found.`, 'ok');
    } else {
        queryResult.innerHTML = '';
        setStatus(queryStatus, `❌ No student with ID ${id}.`, 'err');
    }
};

// ============================================================
// FEATURE: Delete Student by ID
// Uses Map .delete()
// ============================================================
const deleteStudent = () => {
    const id = parseInt(queryIdInput.value.trim(), 10);

    if (!id) {
        setStatus(queryStatus, '⚠️ Enter a valid Student ID.', 'warn');
        queryResult.innerHTML = '';
        return;
    }

    if (studentMap.has(id)) {
        const name = studentMap.get(id).name;
        studentMap.delete(id);
        queryResult.innerHTML = '';
        setStatus(queryStatus, `🗑️ "${name}" (ID ${id}) deleted. Remaining: ${studentMap.size}`, 'ok');
    } else {
        setStatus(queryStatus, `❌ Cannot delete — ID ${id} not found.`, 'err');
    }
};

// ============================================================
// FEATURE: Show Total Students using .size
// ============================================================
const showTotal = () => {
    queryResult.innerHTML = `<div class="total-badge">📊 Total Students: ${studentMap.size}</div>`;
    setStatus(queryStatus, '', 'info');
};

// ============================================================
// FEATURE: Show All Students in a Table
// Iterates over the Map with .forEach()
// ============================================================
const showAllStudents = () => {
    if (studentMap.size === 0) {
        studentTableArea.innerHTML = '<p class="status s-warn" style="margin-top:10px">📭 No students yet.</p>';
        return;
    }

    let html = `<div class="table-wrap fade-in"><table>
        <thead><tr>
            <th>ID</th><th>Name</th><th>Age</th><th>Department</th>
        </tr></thead><tbody>`;

    studentMap.forEach((s) => {
        html += `<tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td><span class="dept-tag">${s.department}</span></td>
        </tr>`;
    });

    html += `</tbody></table></div>`;
    studentTableArea.innerHTML = html;
};

// ============================================================
// FEATURE: Add Course to Set (prevents duplicates)
// ============================================================
const addCourse = () => {
    const course = courseInput.value.trim();

    if (course === '') {
        setStatus(courseStatus, '⚠️ Enter a course name.', 'warn');
        return;
    }

    // Check for duplicate using .has()
    if (registeredCourses.has(course)) {
        setStatus(courseStatus, `⚠️ "${course}" is already registered — duplicate ignored.`, 'warn');
    } else {
        registeredCourses.add(course);
        setStatus(courseStatus, `✅ "${course}" registered!`, 'ok');
    }

    courseInput.value = '';
};

// ============================================================
// FEATURE: Display All Courses from the Set
// Uses a for...of loop and .size property.
// ============================================================
const showCourses = () => {
    if (registeredCourses.size === 0) {
        courseOutput.innerHTML = '';
        setStatus(courseStatus, '📭 No courses registered yet.', 'warn');
        return;
    }

    let html = '<div class="fade-in" style="margin-top:10px">';

    // for...of loop to iterate over the Set
    for (const course of registeredCourses) {
        html += `<span class="course-tag">${course}</span>`;
    }

    // Display total unique courses using .size
    html += `<p style="margin-top:10px;color:#9ca3af;font-size:0.88rem">
                Total unique courses: <strong style="color:#34d399">${registeredCourses.size}</strong>
             </p></div>`;

    courseOutput.innerHTML = html;
    setStatus(courseStatus, '', 'info');
};

// ============================================================
// EVENT LISTENERS
// ============================================================
addBtn.addEventListener('click', addStudent);
searchBtn.addEventListener('click', searchStudent);
deleteBtn.addEventListener('click', deleteStudent);
totalBtn.addEventListener('click', showTotal);
showAllBtn.addEventListener('click', showAllStudents);
addCourseBtn.addEventListener('click', addCourse);
showCoursesBtn.addEventListener('click', showCourses);

// Enter key shortcuts
queryIdInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchStudent(); });
courseInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addCourse(); });

// ============================================================
// SEED DATA — pre-populate a few students & courses for demo
// ============================================================
[
    new Student(1, 'Muhammad Awais', 21, 'Computer Science'),
    new Student(2, 'Ali Hassan', 22, 'Electrical Engineering'),
    new Student(3, 'Sara Ahmed', 20, 'Business Administration')
].forEach((s) => studentMap.set(s.id, s));

['Web Development', 'Data Structures', 'Database Systems'].forEach((c) => registeredCourses.add(c));

// Show pre-loaded data on page load
showAllStudents();
showCourses();
