//let myName ;  --Variable intialization.
//let myName ="siri"  -- variable declaration


//Data types
//Primitive data type
// 1) String 
let myName="siri";
let rollNumber="1090";

let busNumber ='E70N9';

let checkTheData = typeof(myName);
console.log(checkTheData);
//nmber data type
let rollNo =104;
let emergency=209;
let siri=2;
let checkNumberData = typeof(siri);
console.log(checkNumberData);

 //boolean data type TRUE OR False
 let x =true;
 let y=false;


  let checkX =typeof(x);
  console.log(checkX);


 let isHeGood =0;// False value;
 let isTheGood =1;//True value;
 let checkisHeGoodData=typeof(isHeGood);
 console.log( checkisHeGoodData);


 //BigInt  
 let number=98687638726827524;
 let checkNumber = typeof(number);
 console.log(checkNumber);

 //Null;

 let name=null ;
 let checkNull = typeof(name);
 console.log(checkNull);

 //undefined;

 let fatherName;   //variable intialization  
let checkfatherName=typeof(fatherName);
console.log(checkfatherName);
//Non-Primitive
 //objects

 let student = {
    name : "jaanu",  //string
    age : 23,  //number
     isHeGoodPerson : true,
     isHeGoingToInterview : null,
     bankbalence :8700,
     village : "Hyd",
 }
     let checkTheStudent = typeof(student);

     console.log(checkTheStudent)
    


     let employee = {
        name : "Gangothri",  //string
        age : 23,  //number
         isHeGoodPerson : false,
         isHeGoingToInterview : null,  //we dont know 
         salary :8700,
         company : 'google',
     }
         let checkTheEmployee = typeof(employee)
    
         console.log(checkTheEmployee)

   


     // Array :

    //  const cars = ["abc", "bba" ,"sujuki"];

    //  let checkTheCars = typeof(cars)

    //  console.log(checkTheCars)

    //non-primitive data type

     const cars = ["suzuki","volva" , "Blender"];

     document.getElementById("demo") .innerHTML=cars;


     const car =[];
     car[0] ="suzuki";
     car[1] ="blender";
     car[2] =" abc";
     car[3] =" Toyata";
     document.getElementById("demo") .innerHTML=car;

