export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const arr = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) arr.push(item.replace(startString, ''));
  }
  return arr.join('-');
}
