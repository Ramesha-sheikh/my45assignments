//Changing Guest List: You just heard that one of your 
//guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//Exercise 15
let  guest_name : string [] =['imran khan','waseem badami','rabiya anum'];
const message : string ="it is your pleasure to invite you in our party ! ";

 let absent_guest :string = "imran khan";
 let new_guest : string = "Allama Iqbal";
 guest_name[0] =new_guest;
 for(let i=0 ; i<guest_name.length ;i++){
     console.log(message+guest_name[i]);
 }
console.log(`${absent_guest} is not coming to the dinner`);