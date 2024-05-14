// VAR

function biodata(){
    var myFirstName = "Aditi";
    console.log(myFirstName);

    if(true){
        var myLastName = "Garg";
        console.log("inner " + myLastName);
        console.log("inner " + myFirstName);
    }

    console.log("innerOuter " + myLastName);
}
biodata();

// LET

/*
function biodata(){
    let myFirstName = "Aditi";
    console.log(myFirstName);

    if(true){
        let myLastName = "Garg";
        console.log("inner " + myLastName);
        console.log("inner " + myFirstName);
    }

    console.log("innerOuter " + myLastName); // ReferenceError: myLastName is not defined
}
biodata();
*/

// CONST

/*
function biodata(){
    const myFirstName = "Aditi";
    console.log(myFirstName);

    if(true){
        const myLastName = "Garg";
        console.log("inner " + myLastName);
        console.log("inner " + myFirstName);
    }

    console.log("innerOuter " + myLastName); // ReferenceError: myLastName is not defined
}
biodata();
*/