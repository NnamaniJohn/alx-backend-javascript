export default function createIteratorObject(report) {
  let count = 0;

  return {
    [Symbol.iterator]() {
      const departments = Object.values(report.allEmployees);
      const employees = departments.reduce((acc, item) => {
        acc.push(...item);
        return acc;
      }, []);

      return {
        next() {
          const value = employees[count];
          count += 1;

          return {
            value,
            done: count > employees.length,
          };
        },
      };
    },
  };
}
