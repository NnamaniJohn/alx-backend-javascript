export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      let count = 0;
      const employees = Object.values(report.allEmployees);
      return {
        next() {
          if (count < employees[index].length) {
            count += 1;
            return { value: employees[index][count - 1], done: false };
          }
          count = 1;
          index += 1;
          if (index >= employees.length) {
            return { done: true };
          }
          return { value: employees[index][count - 1], done: false };
        },
      };
    },
  };
}
