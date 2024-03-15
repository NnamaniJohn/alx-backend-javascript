interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Paul",
    lastName: "Sam",
    age: 32,
    location: "London"
};
const student2: Student = {
    firstName: "James",
    lastName: "Snow",
    age: 24,
    location: "Spain"
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);