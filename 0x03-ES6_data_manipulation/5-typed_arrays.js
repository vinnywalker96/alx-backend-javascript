export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  } else {
    const buffer = new ArrayBuffer(length);
    const arr = new DataView(buffer);
    arr.setInt8(position, value);
    return arr;
  }
}
