//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

//excerise 19
let  guest_name : string [] =['imran khan','waseem badami','rabiya anum'];
const message : string = "it is your pleasure to invite you in our dinner ! ";
//const new_message : string = "sorry you are not invited in today dinner";

 let absent_guest :string = "imran khan";
 let new_guest : string = "Allama Iqbal";
 guest_name[0] =new_guest;
//  for(let i=0 ; i<guest_name.length ;i++){
//      console.log(message+guest_name[i]);
//  }
// console.log(`${absent_guest} is not coming to the dinner`);
// console.log("good news we find big table so we are inviting  three more guest");
guest_name.unshift("hiba bukari");
guest_name.splice(2,0,'maryam nawaz');
guest_name.push('nida yasir');
// for(let i=0 ; i<guest_name.length ;i++){
//     console.log(message+guest_name[i]);
// }
// console.log("\nsorry we can not arrange big table, only two people will be invited.");
 while (guest_name.length > 2){
    let remove_guest = guest_name.pop();
    // console.log("sorry you are not invited in today dinner"+remove_guest);
    }
// for(let i = 0 ; i<guest_name.length ;i++){
//     console.log(message+guest_name[i]);
// }
guest_name.splice(0 ,2);
// console.log(guest_name);
console.log(`total number of guest is : ${guest_name.length}`);