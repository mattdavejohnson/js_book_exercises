// Create a new object named myObj that uses myProtoObj as its prototype

let myProtoObj = {
  foo: 1,
  bar: 2
};

let myObj = Object.create(myProtoObj);

// Add a qux property with value 3 to myObj.

myObj.qux = 3;
