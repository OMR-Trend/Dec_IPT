//printing statement :

//console.log()

// console.log("23 hello world");

//two ways
//extension - code runner
//terminal - node "filename"

//how to write the javascript code :

//syntax [formula]:

//variable ? => is a container to store the data's

//variable_type variable_name  = value
//console.log(Variable_name)

//  const sugarbox = "sugar"
//  console.log(sugarbox)

//variable_type

//var

//  var  a = 10   //redeclare
//       a = 5    //reassign
//  console.log(a);

// //let

//  let b = 10  //it can't redeclare
//      b = 5    //it can reassign
//  console.log(b);

// //const

// const c = 10; //it can't redeclare
// const c = 5;  // it can't reassign
// console.log(c);

//Datatypes :

//prmitive datatype

//string - "hello" or 'hai'
// var str = "vijay"
// console.log(str);

// //number - 1212 & 12.23
// var num = 10.5
// console.log(num);

// //boolean - true or false

// // var a = 10
// // var b = 5
// // console.log(a<b);
// //null

// var n = null
// console.log(n);

// //undefined
// var a
// console.log(a);

//non-primitive datatype

//array  - [] - collection of values and datas within the square brackets

// const arr = ["hello",10,10.9,false,null]
// console.log(arr[3]);

//length - starts with 1
//index - starts with 0

//length-1 = index

//object - { } - collection of key and value pairs

// const obj = {
//     //key  :  value
//      name : "jai",
//      age : 18,
//      std : "XII"
// }

// console.log(obj);

//function :  block of code

//function statement or declaration

//syntax:

//function var_name(){
//code
//}
//var_name()

// function house(){
//     var boy = "birthdayboy"
//     console.log(boy);

//     var relative = "Relatives&friends"
//     console.log(relative);
// }
// house()

//parameter & Arguments :

//Parameter => is like an variable_name
//Arguments => is like an value

// function box(x){ //parameter <=> variable_name

//     console.log(x);  //10
// }

// box(10) //arguments <=> value

//return
// function box(x){
//   return x
// }
// console.log(box("hello js"))

//function expression

// var bigbox = function(){ //anonymous function
//     console.log("Teddy bear here");

// }
// console.log(bigbox)

//op :

//hello [name] how are you [?]

// function test(x,y,z){
// console.log("hello "+x+" how are you "+y + z);

// }
// test("jai","?")

//Immediate invoke function  Expression

// var name = (function(x){
//     console.log(x);

// })("java")

//Arrow function : short hand syntax :

//syntax:
//()=>{ }

// var arrow = (x)=>{console.log(x)}
// arrow("happy")

//Operators:
//Arithmetic operator
//+add, -sub, *mul , /div[returns quotient],%modulus[returns remainder],
// **exponent[power of values],Increment ++[+1] , decrement --[-1]

// var num = 2
// var num1 = 5
// console.log(num**num1);//2**5 //2^5 = 2x2x2x2x2=32

// var inc = 10
// inc++  //10+1
// console.log(inc);

// var dec = 10
// dec--  //10-1
// console.log(dec);

//Assignment operator

// var num = 10
// num += 50 //15+=5
// console.log(num);

//Logical operator :

// && =>And
// || => or
// ! => not

// var num = 10
// var num2 = "10"
// console.log(num != num2);

//Equality operator [interview question]

//double equals == [Loose equality]
//it only check the values not the datatype
// var de = 10
// var de2 = "10"
// console.log(de==de2);

//tripe equals === [Strict equality]
//it will check both the values and datatype
// var te = 10
// var te2 = "10"
// console.log(te===te2);

//comparsion operator
//less than < , greater than > , lessthanorequal <= , greaterthanorequal >=

// var a = 10
// var b = 10
// console.log(a<=b);

//Ternary operator

//syntax :

//(condition)? "statement_true" : "statement_false"

// var age  = 1000
// var limit = (age>=18 && age<=70)? "He is eligible to vote" : "he is not eligible to vote"
// console.log(limit);

//Task
//Assignment
// function

//LOOP:
//for loop
//syntax:

//for(initialization ; condition ; iteration[increment++,decrement--]){
//code
//}

// for(var i = 5 ; i>0 ; i--){
//     console.log(i);//5

// }

//steps :

//step1 => i = 0 => 0<5[true]=> print = 0 =>0++ = 0+1 = 1
//step2 => i = 1 => 1<5[true] => print = 1 => 1++ = 1+1 = 2
//step 3 => i = 2 => 2<5[true] => print = 2 => 2++ = 2+1 = 3
//step 4 => i = 3 => 3<5[true] => print = 3 => 3++ = 3+1 = 4
//step 5 => i = 4 => 4<5[true] => print = 4 => 4++ = 4+1 = 5
//step 6 => i = 5 => 5<5[false] // loop will stop

//string

// var str = "happy"

// for(var i = str.length-1; i>=0 ; i--){
//     console.log(str[i]);

// }

//o/p
//yppah
// 0 to 10 =>55

//while loop  - Entry level condition checking

// var count = 0 // intialization
// while(count<5){ //condition
//     console.log(count); //printing
//     count++ //iteration

// }

//do-while :  exit level conditinoal checking

// var docount = 5
// do{
//     console.log(docount); // 0 1
//     docount++

// }while(docount<5)

//for-loop

//syntax

//for(initalization ; condition ; iterarion[increment,decrement]){

//}

// for(var i = 0 ; i<5 ; i++){ // 2
//     console.log(i); // 0 //1

// }

//if - else
//syntax :
//if(condition){

//}else{

//}
// var age = 17
// if(age>=18){
//     console.log("He is eligible to vote");

// }else{
//     console.log("He is not eligible to vote");

// }

// //else-if

// var mark = 45

// if(mark>=90 && mark<=100){ //false
//     console.log("Grade A");

// }else if(mark>=80){ //false
//     console.log("GRade B");

// }else if(mark >=70){ //false
//     console.log("Grade C");

// }else if(mark >= 60){ //false
//     console.log("Grade D");

// }else if(mark >= 50){ //false
//     console.log("Grade E");

// }else{
//     console.log("Fail");

// }

//for loop  : even number prints  0 to 10
//hint : if , double eqauls , modulus

//ifelse :
// share auto  8 => "auto will move"
// less than 8 = "auto will wait for passengers"
// greater than 8 = "drop the passengers"

//Array methods :
//push  - it will add the values in the last of an array

// let bc = ["vignesh","sakthi","mani"]
// bc.push("sabari")
// console.log(bc);
// //pop  - it will remove the last value in the array
// bc.pop()
// console.log(bc);

// //unshift :  it will add the values in the beginning of the array

// let rollcoster = ["vignesh","sakthi","mani"]
// rollcoster.unshift("sabari")
// console.log(rollcoster);

// //shift: it will remove the values in the beginning
// rollcoster.shift()
// console.log(rollcoster);

//concat :

// var frutis = ["banana","apple","iceapple"]
// var veg = ["carrot","betroot","cucumber"]
// var cos = ["powder","scent"]
// var cover = frutis.concat(veg,cos)
// console.log(cover);

// //sort :

// var num = [5,3,1,2,7,8,9,6,10,4]
// num.sort((a,b)=>b-a)
// console.log(num);

// var char = ["Zendya","Lokesh","anbu","John","bala"] //Ascii - American standard code for information interchange
// char.sort()
// console.log(char);

//slice

// var birds = ["Eagle","pigeon","vuluture","peacock","crow"]
// var slice = birds.slice(2,-2)
// console.log(slice);

//splice
//syntax :
//var_name.splice(index , counter[0&1] , value)
// 0 => push and update the value
// 1 => replace and update the value

// const weeks = ["sunday","monday","tuesday","thursday","saturday"]
// weeks.splice(3,0,"Wednesday")
// weeks.splice(5,1,"Friday")
// console.log(weeks);

//string methods :

//split :
//string => array
// var str = "Hello world !"
// var spl = str.split(" ")
// console.log(spl);

// //join
//array => string

// var join = spl.join("-")
// console.log(join);

//reverse :

// var rev = "javascript"
// var rev2 = rev.split("").reverse().join("")
// console.log(rev2);

//toUppercase

// var up = "cHENNAI"
// console.log(up.toUpperCase());

// //toLowerCase

// var low = "NEWYORK"
// console.log(low.toLowerCase());

// //indexOf //first occurrence

// var idx = "javascript"
// console.log(idx.indexOf("a"));

// //lastindexOf  - last occurrence

// var ldx = "Chennai"
// console.log(ldx.lastIndexOf("n"));

// //include

// var inc = "happy"
// var inc2 = inc.includes("H")
// console.log(inc2);

// //replace

// var word = "Helloo world"
// console.log(word.replace("H","h"));

// //repeat :
// var rep = "hi"
// console.log(rep.repeat(4));

// //substring

// var sub = "goodmorning"
// console.log(sub.substring(4));

// //startswith

// var sw = "morning"
// console.log(sw.startsWith("m"));

// //endswith

// var ew = "evening"
// console.log(ew.endsWith("g"));

// //trim

// var tr = " nope "
// console.log(tr.trimStart());

// //charAt -

// var char = "happy"
// console.log(char.charAt(1));

//Object : collection of key and value pairs
//json - javascript Object Notation

// const obj = {

//      name : "jai",
//      age : 20,
//      dep : "IT"

// }

//update the values :
// obj.name = "gopal"
// console.log(obj);

//to read the value in obj
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.dep);

//Nested array and object :

// const stdobj = [

//      {
//         name : "hari",
//         age : 10,
//         std : "V"
//      },

//      {
//         name : "gopsl",
//         age : 11,
//         std : "VI"
//      },

//      {
//         name : "sakthi",
//         age : 13,
//         std : "VII"
//      },

//      {
//         name : "lavanya",
//         age : 14,
//         std : "X"
//      }
// ]

// console.log(stdobj[2].name);

// //Task :

// //office id card - name,dep,id.no,b-grp - 5 obj - 2obj[details] - 4obj[details][id.no,dep]

// //Object destructuring :

// var obj1 = [

//    {

//      name : "jai",
//      age : 20,
//      dep : "non-IT"

// },
// {

//    name : "hari",
//    age : 21,
//    dep : "IT"

// },
// ]
// var {name,age,dep} = obj1[0]
// console.log(name,age,dep);

// //array destructure

// var arr = ["sunday","monday","tuesday","wednesday"]

// var[day1,day2,day3,day4] = arr

// console.log(day1);

///For methods :
//forEach - to read the array
//syntax:
//var_name.forEach((value,index,acctualarray)=>)

// var arr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];

// arr.forEach((val, idx, accarr) => console.log(val, idx, accarr));

//forin  - object loop and read 
//syntax : 
//for(var_type var_name in obj_name){
    //code
//}

var obj = {
 
    name : "sakthi",
    city : "newyork",
    country : "America"

}
for(var x in obj){
  console.log(obj[x]);
  
   
}

//task 
//o/p : 
// name <=> sakthi 
// city <=> newyork 
// country <=> america


//forof - string loop and read 

//for(var_type var_name of str_name){

//}

// let str = "java"
// for(var x of str){
//    console.log(x);
   
// }


//MRF
//Map,reduce,filter  

//syntax: 

//var_name.Map((value,index,acctualarray)=>) 

   var num = [1,2,3,4,5,6,7,8,9,10]
   var map = num.map((val,idx,accarr)=>accarr*2) 
   console.log(map);
   
//reduce 
//syntax: 
//var_name.reduce((accumulator,value,index,acctualarray)) 

var reduce = num.reduce((acc,val)=>acc+val,5) //5+1=6+2=8+3
console.log(reduce); 

//filter :  
//syntax: 

//var_name.filter((value,index,acctualarray)=>) 

   var filter = num.filter((val,idx,accarr)=>val%2==0)
   console.log(filter);
   

