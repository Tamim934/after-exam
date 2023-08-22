let number="Hello my name is tamim";
let text='hello my name is safi';
var tamim="used for replasing something like is is";
const local="new ,text for, using some ";
let new1='using legnthh how many thins in in text';
let sub="sub string what is it ";
let trim="    trim is used for triming text    "
let inc="what is include idk"
let num=1122213;

//                                                        string meathods are done


let str=num.toString();// changes a number to string and we can use this to include to see if a number is true or false 
// let change=number(str)
console.log(number.charAt(2));//cant use - usied for slecting pesefic letter from text
console.log(text.at(-3)); //can use - usied for slecting pesefic letter from text
console.log(number.concat(" ",text," ","bye"))// is uesed for adding two text form diffrent vars toghether
console.log(tamim.replace("is","are"));//is used for replacing a text form inside a veribel
console.log(tamim.replaceAll("is","all"));//same as replace but replaces all charecters ina veribel
console.log(local.split(","))//is used for spliting elements into sections array
console.log(new1.length);//is used for how much is leagth 
console.log(sub.substring(0,10));//is used for going form one letter to another letter;
console.log(sub.slice(-20,-10))// we can use - here it is like substing
console.log(number.toLowerCase());//is used for making text to small like HELLO to hello
console.log(number.toUpperCase());//is used for making text to big l like hello to HELLO
console.log(trim.trim())//is used for triming all the sides of text
console.log(inc.includes("what"))// sees if the "" is the text 
console.log(str.includes("1"))// makes a number tosting and see if its true or false
console.log(number.indexOf("my"))// shows the poaition of a text like my is indexof 6
console.log(number.repeat(2));// repeating a text how many times you want 

//                                                     math moathdes
let nan=2+"2a"
console.log(Math.floor(1.2))//removes the extra numbers
console.log(Math.ceil(1.2))//
console.log(Math.ceil(1.2))//
console.log(Math.pow(3,1))
console.log(Math.round(2.2))//takes the number which is the closet
console.log(Math.random()*10)//takes a random number 
console.log(Math.abs(-2))//abs - to +
console.log(isNaN(nan))
console.log(Math.min(1,2,34,222))//findng min in a numebr
console.log(Math.max(123,1414,4134))// fiding the biggest number

//                                               practice
let strr=" iam tamim learing java script";
function cap(strr) {
    return strr.replace(/\a[a-z]/g, (letter) => letter.toUpperCase());// chaging the frist letter of a sentece to big
  }
  console.log(cap(strr))
                      
