console.log("this is second class.");


//this is function creating syntex-
function p35(){
    console.log("function called");
    let num1 = 5;
    let num2 = 10;
    console.log(num1 + num2);
}


//this is function calling-
// p35();


function promptt(){
    //when we take input from user it will initate it with string so 
    //we will use parseInt before window.promt
    
    let num3 =parseInt(window.prompt("Enter a number"));

    console.log(num3);
    console.log(typeof(num3));

    let num4 =parseInt (window.prompt("Enter number 2"));

    console.log(num4);
    console.log(typeof(num4));

    console.log(num3 + num4);
}

promptt();

//HTML
//DOM - document object model

//Browser
//BOM - Browser object model