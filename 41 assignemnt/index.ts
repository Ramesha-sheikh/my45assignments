//assignment 42

//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. Call show_magicians() to see that 
//the list has actually been modified.


const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
 function show_magicians(){
    for (let i =0 ;i < magicians.length; i ++){
        console.log("the great",magicians[i]);
    }
}
show_magicians()


