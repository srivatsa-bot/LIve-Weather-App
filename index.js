// console.log(`hello`);
// console.log("i like pizza");
// window.alert("this ia an alert");
// console.log("damm");
// window.alert("i like pizza");
//this si comment
// document.getElementById(`myh1`).textContent=`hello`;
// document.getElementById(`myp`).textContent=`i like pizza`;
// let age=25;
// let price = 10.99;
// let gpa = 9.3;
// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof gpa);
// console.log(`you are ${age} years old and your cgpa is ${gpa}, which is poor`);
// console.log(`i will sell you for $ ${price}`);

// let online = true;
// let offline = false;
// console.log(`bro is online: ${online}`);

// let fullname = `srivatsa`;
// let age = 18;
// let srudent = true;
// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`you are ${age} year old`;
// document.getElementById("p3").textContent=`are you a student ${srudent}`;

//arithmetic
/*
operator precidence
1) paranthesis
2) exponents
3) x or / or %
4) + or -
*/

//accepting user input
// let username = window.prompt("what is your name?");
// console.log(username);
//or
//using html text box(professional way)
/*let username;
document.getElementById("mybut").onclick = function(){
    username=document.getElementById("mytext").value 
    //we are getting the value from the text box with id "mytext"
    console.log(username);
}*/
/* html
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my website</title>
    <link href="style.css" rel="stylesheet">
 </head>
 <body>
    <h1 id="myh1">welcome</h1>
    <label>username</label>
    <input id="mytext"><br><br>
    <button id="mybut">submit</button>
    <script src="index.js"></script>
 </body>
 </html>
 */

// let username; //most imp for project
// document.getElementById("mybut").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent=`welcome ${username}`;
// }


//typeconversion
// let age= window.prompt("your age"); //promt only takes string as input
// age=Number(age);
// age+=1;
// console.log(age);
// console.log(typeof age);
// let x= ``;
// let y= ``;
// let z= ``;
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log( x,typeof x);
// console.log( y,typeof y);
// console.log( z,typeof z); // if there is anything in the variable, bollean iwii display true, empty string will give false
// //typecasting empty string to number gives zero


//constnt = a variable that cannot be changed
// const PI=3.14; //capitilizing your constants is done for primitve data types like numbers and bool. reference data types likes dont need it
// let radius;
// let circumderence;
// radius = window.prompt("eter radius of circle")
// radius1 = Boolean(radius);
// PI=4;
// if(radius1==false){
//    console.log(`type something`);
// }
// else{
//    circumderence=2*pi*radius;
//    console.log(`perimeter is ${circumderence}`);
// }

//using html

// const PI= 3.14;
// let radius;
// let circ;
// document.getElementById("mysub").onclick=function(){
//    radius = document.getElementById("mytext").value; //text will be in string
//    radius = Number(radius);
//    circ = 2*PI*radius;
//    document.getElementById("myp").textContent=`circumference is ${circ}`

// }

//html
/*
<h1 id="myh1">welcome</h1>
    <label>radius:</label>
    <input type="text" id="mytext"><br><br>
    <button id="mysub">submit</button>
    <p id="myp"></p>
*/



//math is a build in js object that provides a collection of properties and methods
/*
console.log(Math.PI);
console.log(Math.E);
let x = 3.544;
console.log(Math.round(x));
console.log(Math.floor(x));//floor always roubnds down
console.log(Math.ceil(x));//ceil always rounds up
console.log(Math.trunc(x));//removes decimal portion
console.log(Math.pow(3,2));//pow(x,y) x^y
console.log(Math.sqrt(9));
console.log(Math.log(10));
console.log(Math.abs(x));//givs positive num
console.log(Math.sign(10));
console.log(Math.max(1,2,3));
console.log(Math.min(x,y,z));
*/

//checked property of radio and checkbox buttons
//html
/*<input type="checkbox" name="card" id="c1"><label for="c1">subscribe</label><br><br>
    <input type="radio" name="card" id="r1"> <label for="r1 ">visa</label><br> 
    <input type="radio" name="card" id="r2"> <label for="r2">mastercard</label><br>
    <input type="radio" name="card" id="r3"> <label for r3>paypal</label><br><br>
    <button type="submit" id="mysub">submit</button>
    <P id="subres"></P>
    <P id="butres"></P>
*/
/*
const checkbox1 = document.getElementById("c1");
const visa = document.getElementById("r1");
const master =  document.getElementById("r2");
const paypal = document.getElementById("r3");
const sub = document.getElementById("mysub");
const subres = document.getElementById("subres");
const butres = document.getElementById("butres");

sub.onclick =function(){
    if(checkbox1.checked){
        subres.textContent=`you are subscribed`;
    }
    else{
        subres.textContent=`not subscribed`;
    }
    if(visa.checked){
        butres.textContent=`you are paying with visa`;
    }
    else if(master.checked){
        butres.textContent=`paying with mastercard`;
    }
    else if(paypal.checked){
        butres.textContent=`you ar epayibg with paypal`
    }
    else{
        butres.textContent=`you must select a payment type`
    }
}
*/

//ternary operator = shortcut to if and else operator
//condition ? codeiftrue : codeif

// let age=15;
// let message = age>=18 ? `you are an adult` : `not an adult`;
// console.log(message);

//switch case


//string methods allow you to manipulate text
// let a = `brocode     `;
// console.log(a.charAt(0));
// console.log(a.indexOf(`o`));
// console.log(a.length);
// console.log(a.trim());//removes white space
// console.log(a.replaceAll(" ","0"));
// console.log(a.padEnd(15,"0"));
// console.log(a.padStart(15,"0"));
// console.log(a.slice(0,3));

// to get first name and last name
// let username = `srivatsa reddy`;
// let firstname = username.slice(0,username.indexOf(" "));
// let lastname = username.slice(username.indexOf(" ")+1);
// console.log(firstname);
// console.log(lastname);

//method chaining = calling one method after another in one continous line of code
//  let usernmae = window.prompt("type user name");
//  let first = usernmae.charAt(0);
//  first = first.toUpperCase();
//  let last = usernmae.slice(1);
//  last= last.toLowerCase();
//  usernmae = first+last;
//  console.log(usernmae);

 //USING METHOD CHAINING
//  let username = window.prompt("type user name");
//  username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
//  console.log(username);

//logical used to combine or manipulate boolean values
// and = &&
// or = ||
// not = !

/*
= assignment operator
== comparison operator (compare if vaues are equal)
=== stict equality operatoe(compares if values and data types are equal)
!= inequality operatoe
!== strict in equality operator
*/
// let a=`1`;
// let b=1;
// console.log(a!==b);

//do-while and while loop to get usename
// let username=``;
// while(username===``||username=== null){
//     username = window.prompt("enter your name");
// }
// console.log(username);

// let username;
// do{
//     username=window.prompt("name");
// }while(username===``||username=== null);
// console.log(username);

// for(let i=0;i<10;i++){
//     console.log(`hello`);
// }
//to skip a iteration continue is used
//to skip the entire loop break is used



//functions
// function dam(x,y){
//     let result=x+y;
//     return result;
// }
// console.log(dam(30,25));

// array , just put data in []
/*
let fruits =[`apple`,`odnkey`,`guvaa`]
console.log(fruits[0 ]);
fruits.push(`cocunut`);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift(`damm`);//adds to beging
console.log(fruits);
fruits.shift();//removes fromn the start
console.log(fruits);
let numoffruit = fruits.length;
console.log(numoffruit);
console.log(fruits.indexOf("appl"));//if not there in the list gives -1 as output. useful when trying to fiind i the elemnt is present using if,else statement;
for (let i=0; i<fruits.length;i++){
    console.log(fruits[i]); 
}
for (let i=fruits.length-1; i>=0;i--){
    console.log(fruits[i]); 
}
fruits.sort();//used to sort in alphbetic order
fruits.sort().reverse();//backward order
console.log(fruits);
*/

//spread operator = `...` -  allows an iterable such as array or string to be expanded into seperate elemnts(unpacks the elemnts)

// let number = [1,2,3,4,5];
// let max = Math.max(number);
// console.log(max); // gives NaN as output, so we use ... operator, to unpacks all elemnts so max() method can compare each elemnt
// max = Math.max(...number);
// console.log(max);
// let min = Math.min(...number);
// console.log(min);

//spread operator on strings
/*
let username ="srivatsa";
let letters = [...username];
console.log(letters);
letters = [...username].join("-");
console.log(letters);
*/

// let fruits = ["dam1","dam2","dam3"];
// let spread_fruits=[...fruits];
// console.log(typeof fruits);
// console.log( typeof spread_fruits); // both are same

// ... is used to append two arrays or you can also use array1.concact(array2)
/*
let a =[1,2,3];
let b =[4,5,6];
let combined = a.concat(b);
console.log(combined);
//or
let combined2 = [...a,...b,"damm"];
console.log(combined2);
*/

//rest parameters = `...rest` allows a function work with a variable number of argumnets by bundleing then into an array
//spread(...) = expands an array into seperate elemnts
//rest(...)=  bundle seperate elemnts into an array
//rest is used in arguments

// const food1='1';
// const food2='2';
// const food3='3';
// const food4='4';
// console.log(food1,food2,food3,food4);


//callbacks =  a function that is passed as an argumnet to another function
/* used to handle asynchronus operations
1)reading a file
2)network requests
3)interacting with databaces
when these are done, then onlyu next operations will be performed
*/


// hello(goodbye);
// function hello(callback){
//     console.log(`hello`);
//     callback();
// }
// function goodbye(){
//     console.log(`goodbye`);
// }


//forEach() -  method used to iterate over the elements of an array and apply a specified function (callback) to each element.
//array.forEach(callback)
//foreach methoad will provide following arguments for callbacks - element,index,array location
//here index will be incremented for every iteration
/*
let num = [1,2,3,4,5];
num.forEach(square);
num.forEach(display);
function double(element,index,array){
    array[index] = element*2;

}
function square(element,index,array){
    array[index] = element*element;

}
function display(element3){
    console.log(element3);
}
*/
//practical eg
/*
let fruits =[`apple`,`banana`,`guva`];
fruits.forEach(firstcap);
fruits.forEach(display); 
function upper(element,index,array){
    array[index] = element.toUpperCase();

}
function firstcap(element,index,array){
    array[index]= element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element){
    console.log(element);
}
*/

//.map() = accepts a callback and applies that function to each elemnt of an array, then returns new array
//forEach() doesnt return an new array, it will change the existing array

// const num =[1,2,3,4,5];
// const squares = num.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element,2)
// }
 
//other array methods refer them


/*
function declaration  - declaring a block of resuable code that performs a specific task
eg- function (){
    //code
}
function expression - a way to define function as values or variables
let hello = function(){
    console.log("hello");
}
hello();
*/

//passing function as value, it is leagal in js
/*
setTimeout(function(){
    console.log("hello");
},3000)

const num=[1,2,3,4,5];
const square = num.map(function(element){
    return Math.pow(element,2);
});
console.log(square);
*/















/*
DOM = DOCUMENT OBJECT MODEL
      Object{} that represents the page you see in the web browser and provides you with an API to interact with it. Web browser constructs the DOM when it loads an HTML document,
      and structures all the elements in a tree-like representation.
      JavaScript can access the DOM to dynamically
      change the content, structure, and style of a web page.

      note - if your are changing scc through dom, it has camelcase naming convention, where css has '-' hyphenated naming convention
      */

//console.log(document); //provides you with html
//console.dir(document); //provides you with properties in html
// document.head.title=`zamm`;//you can acces main compomnents by using the window by dir command
// document.body.style.backgroundColor = 'red';
// const username = 'sri';
// const msg = document.getElementById("myh1");
//     if(username===''){
//         msg.textContent= `welcome -guest`;
//     }
//     else{
//         msg.textContent= `welcome-${username}`;
//     }
 

/*
element selectors = Methods used to target and manipulate HTML elements They allow you to select one or multiple HTML elements from the DOM (Document Object Model)
// 1. document.getElementById() // ELEMENT OR NULL if cant find elemnt
// 2. document.getElementsClassName() // HTML COLLECTION,similar to array but limited in built in methods
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL if no matching elements
// 5. document.querySelectorAll() //node lsit

*/

// document.getElementById("myh1").style.backgroundColor = 'yellow';
// document.getElementById("myh1").style.textAlign = 'center';

// const fruits = document.getElementsByClassName("fruits");
// for(let i=0;i<fruits.length;i++){
// fruits[i].style.backgroundColor = 'yellow'; //hylights all elemnts in array

// }
//html collection cant use forEach() menthod, we could typecast our html colleaction as an array
// const fruits = document.getElementsByClassName("fruits");
// Array.from(fruits).forEach(function(fruits){
//     fruits.style.backgroundColor = 'red';
// });// same for html tags as there are part of html collections

//same shit using arrow operator
/*
const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruits => {
    fruits.style.backgroundColor = 'red';
}
);
*/

//document.querySelector(".fruits").style.backgroundColor='red'; // can change the first elemnt
//argument can be class and tags.if elmnt not there returns null
//document.querySelectorAll("class or tag")
//this returns a node list, it is simailar to html collections, but node lust has its own methods.
//node list is staic(doesnt automatically update in dom), html collections are live

/*
const fruits = document.querySelectorAll(".fruits");
// fruits[2].style.backgroundColor = "yellow";
console.log(fruits);
fruits.forEach(fruits=> {
    fruits.style.backgroundColor = 'yellow';
})
*/

/*
//DOM Navigation =  The process of navigating through the structure of an HTML document using JavaScript.
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/

// const element = document.getElementById("deserts");
// const firstchild = element.firstElementChild;
// firstchild.style.backgroundColor = 'yellow';


//const ulelements = document.querySelectorAll("ul");
// ulelements.forEach(element => {
//     const firstChild = element.lastElementChild;
//     firstChild.style.backgroundColor = 'red';
// });

// const element = document.getElementById("apple");
// element.parentElement.style.backgroundColor='red';

//.childer is html collectiosn, so convert to array
// const element = document.getElementById("fruits");
// const children = element.children;
// Array.from(children).forEach(element=>{
//     element.style.backgroundColor = 'yellow';
// })

// var d = new Date(2024,0,1,2,3,4);  //(yera,month(in num),day,hours,inutes,seconds)
// d=new Date("2024-01-02 T 12:00:00")
// console.log(d);

// const date = new Date(); // these methods can be used to set dates too, in paranthesis just givbe the num you want 
// const year = date.getFullYear();
// const month = date.getMonth();
// const hours = date.getHours();
// const min = date.getMinutes();
// const day = date.getDay();//gives in index values 0-monday
// console.log(year);
// console.log(month);
// console.log(hours);
// console.log(day);
// date1 = new Date("2024-03-01");
// date2 = new Date("2024-03-13");
// if(date2>date1){
//     console.log("horray");
// }

// var points = ["40", "100", "1", "5", "25","10","304","203"];
//  let point = points.sort(function(a, b){return b-a});//compare functions
//  document.write(point);//1,5,10,25,40,100,203,30

// let b=NaN;
// console.log( b==false ? "true" :"false");

// class product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     display(){
//         console.log(this.name);
//         console.log(this.price);
//     }
// }

// let prod1 = new product("freya",20);
// prod1.display();

// class mathu {
//     constructor() {
//         this.pi = 3;
//     }
// }

// let new1 = new mathu();
// console.log(new1.pi);


//promise
//i promise to return a value
//penddiing -> resolved or rejected\
//usually arrow function
//new Promise((resolve,rejected) => {asynchronus code});

//do chors in order
//walkdog,clean kitchen,take out trash

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("you walked the dog");
//         callback();
//     },1500);
// }
// function cleanKit(callback){
//     setTimeout(()=>{
//         console.log("kitchen cleaned");
//         callback();
//     },2500);
// }
// function takeTrash(callback){
//     setTimeout(()=>{
//         console.log("take trash");
//         callback();
//     },500);
// }
// //using callbackhell
// walkDog(()=>{
//     cleanKit(()=>{
//         takeTrash(()=>{
//             console.log("finsed all chores");
//         });
//     });
// });

//same process with method chanining our promise 

// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("you walked the dog");//resolve will be stored in value
//         },1500);
//     });
// }
// function cleanKit(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("cleaned kitchen")
//         },2500);
//     });
// }
// function takeTrash(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("wtake out trash")
//         },500);
//     });
    
// }

// //using method chaning from promise method

// // walkDog().then( value => console.log(value));
// // cleanKit().then( value => console.log(value));
// // takeTrash().then( value => console.log(value));
// //the above method still gives asynchronus output

// //cooreect way, is to chain them
// walkDog().then( (value) => {console.log(value); return cleanKit()})
//             .then((value) => {console.log(value); return takeTrash() })
//             .then((value) =>{console.log(value); console.log("you finised all the chores");} );


//with reject argument included

// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve("you walked the dog");//resolve will be stored in value
//             }
//             else{
//                 reject("you didnt walk the dog");
//             }
            
//         },1500);
//     });
// }
// function cleanKit(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cleanKit = true;
//             if(cleanKit){
//                 resolve("cleaned kitchen");
//             }
//             else{
//                 reject("didnt cleaned kitchen");
//             }

            
//         },2500);
//     });
// }
// function takeTrash(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trash =false;
//             if(trash){
//                 resolve("wtake out trash");
//             }
//             else{
//                 reject("didnt take trash"); //catch will catch the rejected values
//             }
//         },500);
//     });
    
// }
// // //cooreect way, is to chain them
// walkDog().then( (value) => {console.log(value); return cleanKit()})
//             .then((value) => {console.log(value); return takeTrash() })
//             .then((value) =>{console.log(value); console.log("you finised all the chores");} )
//             .catch((error)=> {console.log(error);});

//if walking task = false, we will not attempt to resolve other promises, ot will be pending until its done



//Async/Await = Allows you to write asynchronus code in synchronus manner
//              Async doesnt have resolve or reject keywoard
//              everthing after await is placed in event queue

//Async - makes a function return a promise
//Awiat - makes an async function wait for promise
//fucntion satrting with async returns promise shouldent have arguments
//no method chaing nedded


// function walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve("you walked the dog");//resolve will be stored in value
//             }
//             else{
//                 reject("you didnt walk the dog");
//             }
            
//         },1500);
//     });
// }
// function cleanKit(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cleanKit = true;
//             if(cleanKit){
//                 resolve("cleaned kitchen");
//             }
//             else{
//                 reject("didnt cleaned kitchen");
//             }

            
//         },2500);
//     });
// }
// function takeTrash(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trash =false;
//             if(trash){
//                 resolve("wtake out trash");
//             }
//             else{
//                 reject("didnt take trash"); //catch will catch the rejected values
//             }
//         },500);
//     });
    
// }

// async function doChores(){
//async function dochores(){
//     try{
//         const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitResult = await cleanKit();
//     console.log(cleanKitResult);

//     const tashResult = await takeTrash();
//     console.log(tashResult);

//     console.log("you finsihed all the chores");
//     }
//     catch(error){
//         console.log(error);
//     }

// }
// doChores();

//await isonly valid in async functions
//json = (JavaScript Object Notation) data-interchange format Used for exchanging data between a server and a web application JSON files can be objects {key: value) OR [value1, value2, value3] or array of objects
//JSON.stringify() converts a JS object to a JSON string.
//JSON.parse() = converts a JSON string to a JS object


// const names =["aa","BB","CC"];
// const jsonString =  JSON.stringify(names);

//fetch() is used to get json files
//fetch returns a promise
// fetch("person.json")
//             .then((response) => response.json())
//             .then((value) => console.log(value));
 
//for each vale doubt
// fetch("person.json")
//             .then(response => response.json())
//             .then(values => values.forEach(value => console.log(value)))
 


/*
fetch = Function used for making HTTP requests to fetch resources.
(JSON style data, images, files)
Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
 fetch("url", {options}
*/

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         .then(response => response.json())//response retuns data
//         .then(data => console.log(data.id))
//         .catch(error => console.log(error));

//weather app


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "635dc948bd6ef9cf8557afa7eb5d65ec";

weatherForm.addEventListener("submit",async (event)=>{
        event.preventDefault();//prevents the default reload of submit
        const city = cityInput.value;
        if(city){
            // console.log("YES");
            try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);


            }
            catch(error){
            console.log(error);
            displayError(error);
         }
        }
        else{
            displayError("plese enter a city");
            // console.log("NO");
        }

});

async function getWeatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiurl);
    // console.log(response);
    if(!response.ok){
        throw new Error("could not fetch weather details")
    }
    return await response.json();

}
function displayWeatherInfo(data){
    // console.log(data);
    const {name: city,
        main: {temp,humidity}, 
        weather : [{description,id}]} =data;
    
        card.textContent="";
        card.style.display='flex';
        const cityDisp = document.createElement("h1");
        const tempDisp = document.createElement("p");
        const humDisp = document.createElement("p");
        const descDisp = document.createElement("p");
        const emojiDisp = document.createElement("p");

        cityDisp.textContent = city;
        cityDisp.classList.add("city");
        card.appendChild(cityDisp);

        tempDisp.textContent = `${(temp-273.15).toFixed(1)}॰C`;
        tempDisp.classList.add("temp");
        card.appendChild(tempDisp);

        humDisp.textContent = `Humidity: ${humidity}%`;
        humDisp.classList.add("hum");
        card.appendChild(humDisp);

        descDisp.textContent = description;
        descDisp.classList.add("desc");
        card.appendChild(descDisp);

        emojiDisp.textContent=getEmoji(id);
        emojiDisp.classList.add("emoji");
        card.appendChild(emojiDisp);

}

function getEmoji(weatherId){

    switch(true){
        case(weatherId >=200 && weatherId < 300):
            return "⛈️";
        case(weatherId >=300 && weatherId < 400):
            return "🌧️";
        case(weatherId >=500 && weatherId < 600):
            return "🌧️";
        case(weatherId >=600 && weatherId < 700):
            return "❄️";
        case(weatherId >=700 && weatherId < 800):
            return "🌫️";  
        case(weatherId === 800):
            return "☀️";  
        case(weatherId >=801 && weatherId < 810):
            return "🌤️";
        default:
            return "unknow";
        
        
    }

}
function displayError(error1){
    const errorDisp = document.createElement("p");
     errorDisp.textContent = error1;
     errorDisp.classList.add("error");

     card.textContent="";
     card.style.display="flex";
     card.appendChild(errorDisp);

}










