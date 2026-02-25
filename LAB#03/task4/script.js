// ============================================================
// Task 4 – Prevent Duplicate Course Registration Using Set (ES6)
// ============================================================

// ---------- Step 1: Create a Set to store unique course names ----------
const registeredCourses = new Set();

// ---------- Step 2: Add multiple courses using the .add() method ----------
// Adding initial courses to the Set
registeredCourses.add('Web Development');
registeredCourses.add('Data Structures');
registeredCourses.add('Database Systems');
registeredCourses.add('Operating Systems');
registeredCourses.add('Artificial Intelligence');

// ---------- Step 3: Attempt to add duplicate courses ----------
// Duplicates are silently ignored by the Set — no error, no second entry
registeredCourses.add('Web Development');       // duplicate — will NOT be added
registeredCourses.add('Data Structures');        // duplicate — will NOT be added
registeredCourses.add('Database Systems');       // duplicate — will NOT be added

// ---------- Step 4: Display all courses using a for...of loop ----------
console.log('========================================');
console.log('   📚 Registered Courses (from Set)');
console.log('========================================');

let courseNumber = 1;
for (const course of registeredCourses) {
    console.log(`  ${courseNumber}. ${course}`);
    courseNumber++;
}

// ---------- Step 5: Display total unique courses using .size ----------
console.log('----------------------------------------');
console.log(`  Total Unique Courses: ${registeredCourses.size}`);
console.log('========================================');

// ============================================================
// DOM References
// ============================================================
const courseInput = document.getElementById('courseInput');
const addBtn = document.getElementById('addBtn');
const statusMsg = document.getElementById('statusMsg');
const courseList = document.getElementById('courseList');
const totalBadge = document.getElementById('totalBadge');

// ============================================================
// renderCourses()
// Uses a for...of loop to iterate over the Set and dynamically
// render each course as a <li> inside the <ul>.
// Also updates the total count badge using .size.
// ============================================================
const renderCourses = () => {
    // Clear the current list
    courseList.innerHTML = '';

    // Use for...of to iterate over the Set
    let index = 1;
    for (const course of registeredCourses) {
        const li = document.createElement('li');
        li.style.animationDelay = `${index * 0.05}s`;

        // Number badge
        const numSpan = document.createElement('span');
        numSpan.classList.add('num');
        numSpan.textContent = index;

        // Course name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = course;

        li.appendChild(numSpan);
        li.appendChild(nameSpan);
        courseList.appendChild(li);

        index++;
    }

    // Update total unique courses using .size property
    totalBadge.textContent = `Total Unique Courses: ${registeredCourses.size}`;
};

// ============================================================
// addCourse()
// Adds a course from the input field to the Set.
// If the course already exists, a warning is shown instead.
// ============================================================
const addCourse = () => {
    const courseName = courseInput.value.trim();

    // Validate input
    if (courseName === '') {
        statusMsg.textContent = '⚠️ Please enter a course name.';
        statusMsg.className = 'status-dup';
        return;
    }

    // Check if the course already exists in the Set
    if (registeredCourses.has(courseName)) {
        // Duplicate detected — Set will not add it again
        statusMsg.textContent = `⚠️ "${courseName}" is already registered — duplicate ignored.`;
        statusMsg.className = 'status-dup';
        console.log(`Duplicate attempt: "${courseName}" — not added.`);
    } else {
        // New course — add to Set
        registeredCourses.add(courseName);
        statusMsg.textContent = `✅ "${courseName}" registered successfully!`;
        statusMsg.className = 'status-added';
        console.log(`Added: "${courseName}"`);
    }

    // Clear the input field
    courseInput.value = '';

    // Re-render the course list and update total
    renderCourses();
};

// ============================================================
// Event Listeners
// ============================================================

// Click the Add button
addBtn.addEventListener('click', addCourse);

// Press Enter inside the input field
courseInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addCourse();
    }
});

// ============================================================
// Initial Render — show the pre-loaded courses on page load
// ============================================================
renderCourses();
