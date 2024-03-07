export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (typeof students !== 'object') throw TypeError('Students must be a object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (typeof value === 'object') {
      this._students = value;
    } else {
      throw TypeError('Students must be a object');
    }
  }

  get students() {
    return this._students;
  }
}
