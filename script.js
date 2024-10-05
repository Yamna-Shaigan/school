// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Handle student form submission
document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    const studentName = document.getElementById('studentName').value;
    if (studentName) {
        addStudentToList(studentName);
        document.getElementById('studentName').value = '';  // Clear the input
    }
});

// Add student to the list
function addStudentToList(name) {
    const studentList = document.getElementById('studentList');
    const li = document.createElement('li');
    li.textContent = name;
    studentList.appendChild(li);
}

// Handle teacher form submission
document.getElementById('teacherForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    const teacherName = document.getElementById('teacherName').value;
    if (teacherName) {
        addTeacherToList(teacherName);
        document.getElementById('teacherName').value = '';  // Clear the input
    }
});

// Add teacher to the list
function addTeacherToList(name) {
    const teacherList = document.getElementById('teacherList');
    const li = document.createElement('li');
    li.textContent = name;
    teacherList.appendChild(li);
}

