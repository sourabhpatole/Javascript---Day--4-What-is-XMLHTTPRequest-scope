var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
if (obj1.name == obj2.name && obj1.age == obj2.age) {
    console.log("Both object are equal")
} else {
    console.log("Both object are not equal")
}