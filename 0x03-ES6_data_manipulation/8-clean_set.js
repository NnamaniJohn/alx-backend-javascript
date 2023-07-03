export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || startString === '') {
    return '';
  }
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}
