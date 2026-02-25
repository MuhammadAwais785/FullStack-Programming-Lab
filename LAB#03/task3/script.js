// ============================================================
// Task 3 – Simulate Server Data Loading Using Promises (ES6)
// ============================================================

// ---------- DOM Element References ----------
const fetchBtn = document.getElementById('fetchBtn');
const loader = document.getElementById('loader');
const userList = document.getElementById('userList');
const errorMsg = document.getElementById('errorMsg');

// ---------- Boolean flag to control success / failure ----------
// Set to `true`  → Promise resolves with user data
// Set to `false` → Promise rejects with an error message
const isSuccess = true;

// ============================================================
// fetchUsers()
// Returns a Promise that simulates a 3-second server request.
// On success it resolves with an array of user objects.
// On failure it rejects with a descriptive error string.
// ============================================================
const fetchUsers = () => {
    return new Promise((resolve, reject) => {

        // Simulate a 3-second network delay using setTimeout
        setTimeout(() => {

            if (isSuccess) {
                // ------- Resolve: return an array of user objects -------
                const users = [
                    { id: 1, name: 'Muhammad Awais' },
                    { id: 2, name: 'Ali Hassan' },
                    { id: 3, name: 'Sara Ahmed' },
                    { id: 4, name: 'Zainab Fatima' },
                    { id: 5, name: 'Usman Khan' }
                ];
                resolve(users);
            } else {
                // ------- Reject: return an error message -------
                reject('❌ Server Error: Unable to fetch user data. Please try again later.');
            }

        }, 3000); // 3-second delay
    });
};

// ============================================================
// renderUsers(users)
// Dynamically builds <li> elements for each user and appends
// them to the <ul> element on the page.
// ============================================================
const renderUsers = (users) => {
    // Clear any previous content
    userList.innerHTML = '';
    errorMsg.style.display = 'none';

    // Loop through each user and create a list item
    users.forEach((user) => {
        const li = document.createElement('li');

        // Badge showing user ID
        const badge = document.createElement('span');
        badge.classList.add('id-badge');
        badge.textContent = user.id;

        // User name text
        const nameSpan = document.createElement('span');
        nameSpan.textContent = user.name;

        li.appendChild(badge);
        li.appendChild(nameSpan);
        userList.appendChild(li);
    });
};

// ============================================================
// showError(message)
// Displays an error message inside the <p id="errorMsg"> element.
// ============================================================
const showError = (message) => {
    userList.innerHTML = '';              // Clear any previous user list
    errorMsg.textContent = message;       // Set the error text
    errorMsg.style.display = 'block';     // Make the error paragraph visible
};

// ============================================================
// Event Listener – Fetch Button Click
// Calls fetchUsers() and handles the result with .then() / .catch()
// ============================================================
fetchBtn.addEventListener('click', () => {

    // Reset previous results
    userList.innerHTML = '';
    errorMsg.style.display = 'none';

    // Show loading spinner & disable button while waiting
    loader.style.display = 'block';
    fetchBtn.disabled = true;

    // Call fetchUsers() and handle the Promise
    fetchUsers()
        .then((users) => {
            // Promise resolved → render the user list in the HTML page
            renderUsers(users);
        })
        .catch((error) => {
            // Promise rejected → display the error message in the HTML page
            showError(error);
        })
        .finally(() => {
            // Always hide the loader and re-enable the button
            loader.style.display = 'none';
            fetchBtn.disabled = false;
        });
});
