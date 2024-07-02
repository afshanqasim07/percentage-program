// Percentage Calculator
alert("Welcome back / Calculate your percentage")



var totalnumber = 400;

var englishmarks = Number(prompt("Enter English Marks")) ;
console.log(englishmarks) ;

var physicsmarks = +prompt("ENTER PHYSICS MARKS") ;
console.log(physicsmarks) ;

var computermarks = +prompt("ENTER Computer MARKS") ;
console.log(computermarks) ;


var mathsmarks = +prompt("ENTER  Maths MARKS") ;
console.log(mathsmarks)  ;

var obtainedmarks = englishmarks+physicsmarks+computermarks+mathsmarks;
console.log("your obtainedmarks are" + obtainedmarks);
 
var percentage = obtainedmarks /totalnumber *100 ;

console.log("your percentage is"+ percentage + "%");