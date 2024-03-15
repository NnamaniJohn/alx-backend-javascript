export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queries = weakMap.get(endpoint);
  if (!queries || Number.isNaN(queries)) {
    queries = 0;
    weakMap.set(endpoint, 0);
  }
  // console.log(queries);
  // console.log('queries');
  // console.log(weakMap);
  if (queries >= 5) throw Error('Endpoint load is high');
  weakMap.set(endpoint, queries + 1);
}
