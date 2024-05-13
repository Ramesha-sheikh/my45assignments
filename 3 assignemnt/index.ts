//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

//lowercase

let  person_name  : string = "Ramesha sheikh";
console.log(person_name.toLowerCase())

//uppercase
console.log(person_name.toUpperCase())

//titlecase.
console.log("Titlecase:", person_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
