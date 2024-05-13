//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

// objects
interface person{
    name : string,
    age :number,
    course :string,
    student :boolean,
}

let person :person= {
    name : "Ali",
    age : 20,
    course :"python",
    student :true,
}
console.log(person);