/* returns true only if they are the same value or
are objects with the same properties */

function deepEqual(value1, value2) {

  if (value1 === value2) return true;

  if (value1 == null || typeof value1 != "object" ||
      value2 == null || typeof value2 != "object") return false;

  let keysValue1 = Object.keys(value1), keysValue2 = Object.keys(value2);

  if (keysValue1.length != keysValue2.length) return false;

  for (let key of keysValue1) {
    if (!keysValue2.includes(key)
        || !deepEqual(value1[key], value2[key])) return false;
  }

  return true;
}
