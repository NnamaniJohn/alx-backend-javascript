export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let i = 0;
  for (const employee of reportWithIterator) {
    if (i > 0) {
      str += ' | ';
    }
    i = 1;
    str += `${employee}`;
  }

  return str;
}
