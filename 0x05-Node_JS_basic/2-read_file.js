const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    // Initialize counters for each field
    let SWECount = 0;
    let CSCount = 0;

    const SWEStudents = [];
    const CSStudents = [];

    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');

      if (firstName && lastName && age && field) {
        if (field.trim() === 'SWE') {
          SWECount += 1;
          SWEStudents.push(firstName.trim());
        } else if (field.trim() === 'CS') {
          CSCount += 1;
          CSStudents.push(firstName.trim());
        }
      }
    }

    // Log the number of students in each field and their first names
    console.log(`Number of students: ${SWECount + CSCount}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${CSStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${SWEStudents.join(', ')}`);
  } catch (error) {
    // Log an error if the database is not available
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
