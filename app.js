// chapter 21 to 30

// var a=prompt("Enter Your Name : ");
// console.log(a.toLocaleUpperCase());
// console.log(a.toLowerCase());

// var mobile=prompt("enter You Favourite Mobile phone");
// var length=mobile.length;
// console.log(length);
// console.log(mobile[length-1]);

// var index;
// var country="pakistani";
// for(var i=0;i<country.length;i++){
//     if(country[i]=="n"){
//       index=i;
//          break;
//     }

// }
// console.log(index);


// var statement;
// var username;
// username=prompt("enter Your Username");
// for(var i=0;i<username.length;i++){

//     if(username[i]=="@" || username[i]=="." || username[i]=="!"){
//         statement=true;
//         break;
//     }
//     else{
//         statement=false;
//     }
// }

// if(statement==true){

//     username=prompt("Enter Valid Username")
// }


// var count=0;
// var sentence="the quick brown fox jumps over the lazy";
// for(var i=0;i<sentence.length;i++){
// if(sentence.slice(i,i+3)=="the"){
//     count++;

// }
// }
// console.log(" Times the is coming "+count);


// var a="pakistani";
// console.log(a.charAt(3))


// var word="hyderabad";
// var newword=word.replace("hyder","islam");
// console.log(newword);


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var newmessage=message.replace(/and/g  ,"&")
// console.log(newmessage);


// var num=+prompt("enter A number")
// num=Math.abs(num);
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));



// var num=+prompt("enter A number")
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));



// var dice=Math.ceil(Math.random()*6)
// console.log(dice);
// var toss=Math.ceil(Math.random()*2);
// if(toss==1){
//     console.log("Tails");
// }
// else{
//     console.log("Heads");
// }

// var guess=prompt("enter a number between 1 to 10");
// var num=Math.ceil(Math.random()*10);
// console.log(num)
// if(num==guess){
//     console.log("wow congragulation")
// }
// else{
//     console.log("Sorry no win")
// }


// var input=parseInt(prompt("enter Your weight"));
// console.log(input);

// var num="472";
// console.log(typeof(num));
// num=parseInt(num);
// console.log(num);
// console.log(typeof(num))

// var num=35.36;
// String=num.toString();

// console.log(String);
// console.log(String.replace(".",""))

// var percentage=30/45*100;
// var fixed=percentage.toFixed(2);
// console.log(fixed)

// ----------------------------------------------------------------------------------


// chapter 31 to 34


var date=new Date();
// console.log(date);
// var monthindex=date.getMonth();
// var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(mL[monthindex])
// var day=date.getDay();
// day++;
// daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// alert("Today is "+daysInWeek[day]);
// if(day==0 || day==6){
//     console.log("Its a fun day")
// }

// var datenum=date.getDate();
// if(datenum<16){
//     console.log("First Fifteen days of month ")

// }else{
//     console.log("Last days of month")
// }
 
// var timeInSec=date.getTime();
// console.log("Elapsed milliseconds since January 1 ,1970 :  " + timeInSec);
// var min=(timeInSec/1000)*60;
// console.log("Elapsed Minutes since January 1 ,1970 :  " + min );


// var time=date.getHours();
// if(time>=0 && time<12){
//     console.log("AM")

// }
// else{
//     console.log("PM")
// }


// var dates=new Date();
// dates.setDate(30);
// dates.setFullYear(2020);
// dates.setMonth(11);
// console.log(dates);


// var date=new Date("06-18-2015");
// const dateMs=date.getTime();
// console.log(dateMs);
// // date.setDate(18);
// // date.setFullYear(2015);
// // date.setMonth(5);    
// // console.log(date);

// var todayDate=new Date();
// // console.log(todayDate);
// const todayDateMs=todayDate.getTime();
// console.log(todayDateMs);

// let difference=todayDateMs-dateMs;
// console.log(difference);
// let days=difference/ 8.64e+7;
// console.log(Math.floor(days)+ " days passed since 1st Ramadan,2015");

// var date=new Date("01-01-2015");
// var dateMs=date.getTime();
//  var nxtdate=new Date("12-05-2015");
//  nxtdate.setHours(22);
//  nxtdate.setMinutes(50);
 
 
//   var nxtDateMs = nxtdate.getTime();
//   let difference=nxtDateMs-dateMs;
//   console.log(difference);
//   const seconds=difference/1000;
//   console.log(seconds);


// var date =new Date();
// console.log("Current date :  "+date);
// var hour=date.getHours();

// date.setHours(--hour);
// console.log("1 hour ago,it was "+date);

// var date=new Date();
// console.log("current date : "+date);
// var year=date.getFullYear();
// year=year-100;
// date.setFullYear(year);
// console.log("100 years back , it was "+date);


// var age=+prompt("Enter Your Age in number : ");
// var date=new Date();
// var year=date.getFullYear();
// var birthYear=year-age;
// console.log("Your Birthyear is : "+birthYear)


// document.write("Customer Name : Muhammad Shoaib<br>");
// document.write("Month : September<br>");
// var units =410;
// var charges=16;
// var amount=charges*units;
// document.write("Number of Units : "+units+"<br>");
// document.write("Charges per Unit : "+charges+"<br>");
// var dueDate=new Date("09-30-2022");
// var dueDateMs=dueDate.getTime();
// var todayDate=new Date();
// var todayDateMs=todayDate.getTime();
// var difference=dueDateMs-todayDateMs;
// if(difference<0){

//     amount=amount+350;

// }
// document.write("Net Amount payable within Due Date : "+(units*charges)+"<br>")
// document.write("Gross Payment Payable : "+(units*charges+350))

// ---------------------------------------------------------------------------------------------------------------

// chapter 35-38

// var date=new Date();

/*
function greet(x,y){

    console.log("Hello and Welcome "+ x+" "+y)
}

greet("Ahmed","Ali")
*/


/*
var add;
function sum(x,y){
add=x+y;
    
}
var num1=+prompt("enter a number");

var num2=+prompt("enter a number");
sum(num1,num2);

document.write(add); */

/*
var answer;
var num1,num2,operator;
num1=+prompt("Enter A First number ");
num2=+prompt("Enter A Second number ");
operator=prompt("enter an Operation to be perfommed ","+ - * /");
function calculator(x,y,z){
if(z=="+"){
    answer=x+y;
}
else if(z=="-"){
    answer=x-y;
}
else if(z=="*"){
    answer=x*y;
}
else if(z=="/"){
    answer=x/y;
}
return answer;


}

console.log(calculator(num1,num2,operator));
*/


/*
function square(x){

    return x*x;
}
console.log(square(5))
*/



/*
var num=prompt("enter")
var a=1;
function factorial(x){

    for(var i=1;i<=x;i++){

        a=a*i;
       
    }
    return a;
}
 var answer=factorial(num);
console.log(answer);
*/


/*
var start=+prompt("Start Number : ");
var end=+prompt("end number : ")
function abc(x,y){
for(var i=x;i<=y;i++){
document.write(i+"<br>");

}
}
abc(start,end);
*/

/*
var add,perp,base;
base=prompt("enter Base : ");
perp=+prompt("enter perpendicular");

function squareadd(x,y){

    return (x*x)+(y*y);
}

function hyp(x,y){

   add= squareadd(x,y);
   
   answer=Math.sqrt(add);
   
   return answer.toFixed(2);
}

document.write(hyp(base,perp));
*/

/*
function areaOfRectangle(w,h){

    var A=w*h;
   return A;
}


// console.log(areaOfRectangle(4,7));
var width=4;
var height=7;
console.log(areaOfRectangle(width,height));
*/


/*
----------------------------------------------------------
 THIS is palindrome code but without function

 var value=false;
word ="ABCDCBA";
l=word.length;

for(var i=0;i<word.length;i++){
    if(word[i]==word[l=l-1]){
        value=true;
    }
    else{
        value=false;
        break;
    }
}

console.log(value);

----------------------------------------------------------------
*/

/*
var value;
function palindrome(word){

    var l=word.length;
for(var i=0;i<word.length;i++)
{
   if(word[i]==word[l=l-1]){
     value=true;
   }
   else{
    value=false;
    break;
   
}
}

console.log(value);
}

palindrome("repaper");
*/



/*
var position,f;
word="the crazy brown fox ";
 for(var i=0;i<word.length;i++){

if(word[i]==" "){

    position=i+1;
    f=word.slice(position,position+1).toUpperCase();
    document.write(f);
}
else{
    l=word.slice(i+1,i+2);
    document.write(l)

}
 }
 */
 

/*
var position,f;

function firstletteruppercase(word){
    document.write(word[0].toUpperCase());
 for(var i=0;i<word.length;i++){

if(word[i]==" "){

    position=i+1;
    f=word.slice(position,position+1).toUpperCase();
    document.write(f);
}
else{
    l=word.slice(i+1,i+2);
    document.write(l)

}
 }
}
var inputsentence=prompt("Enter The sentence ")
firstletteruppercase(inputsentence);
*/


/*
function longest(word){
var greater=0;
var length=[];
var arr=word.split(" ");
for(var i=0;i<arr.length;i++){

length[i]=arr[i].length;

}
for(var i=0;i<length.length;i++){

    if(length[i]>greater){
     var greater=length[i];
    }

}
for(var i=0;i<length.length;i++){


    if(length[i]==greater){
        index=i;
    }
}
document.write(arr[index]);

}

longest("the web development course")
*/


/*
var word1,occourence1,count;
count=0;


function occour(word,occourence){
for(var i=0;i<word.length;i++){
if(word[i]==occourence){
    count++;
}
}
return count;
}
word1=prompt("Enter The Word");
occourence1=prompt("Enter the letter to be find its occourence");
Answer=occour(word1,occourence1);
document.write(Answer);
*/

/*
function calcCircumference(radius)
{

    document.write("The circumference of a circle is : "+(2*3.142*radius)+"<br>");
}
function area(radius){
    document.write("The area of a circle is : "+(3.142*radius*radius))
}

function both(Radius){

    calcCircumference(Radius);
    area(Radius);

}

both(9);
*/



