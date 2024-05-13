//assignment 42

//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. Call show_magicians() to see that 
//the list has actually been modified.


const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
 function make_great(magicianarray:string []){
    for (let i =0 ;i < magicians.length; i ++){
        console.log("the great",magicians[i]);
    }
}

function show_magicians(magicians:string []){

    magicians.forEach(element =>
        {
            console.log(element);
        }
    )
}
make_great(magicians);
show_magicians(magicians);


