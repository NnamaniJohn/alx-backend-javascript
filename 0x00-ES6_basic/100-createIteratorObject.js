export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      const keys = Object.keys(report);
      const { length } = keys;
      return {
        next() {
          if (index < length) {
            const key = keys[index];
            index += 1;
            return { value: report[key], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
