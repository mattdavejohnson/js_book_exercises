// Create a function that creates and returns a copy of an object. The
// function takes two arguments: the object to copy and an array of the
// keys that you want to copy. You can omit the array of keys, in which
// case you should copy all the keys of the object.

let objToCopy = {
  foo: 1,
  bar: 2,
  baz: 3
};

function copyObj(obj, arr) {
  let newObj = {};
  if (!arr) {
    return Object.assign(newObj, obj);
  } else {
    arr.forEach(function(element) {
      newObj[element] = obj[element];
    });
  }

  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);

let newObj2 = copyObj(objToCopy, ['foo', 'baz']);
console.log(newObj2.foo);
console.log(newObj2.bar);
console.log(newObj2.baz);
