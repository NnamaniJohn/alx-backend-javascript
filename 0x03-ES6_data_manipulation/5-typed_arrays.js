export default function createInt8TypedArray(length, position, value) {
  const view = new DataView(new ArrayBuffer(length));
  try {
    view.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return view;
}
