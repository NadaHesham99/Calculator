/*global document , window , console*/


var myBtns = document.querySelectorAll(".btn"),
    
    myRes = document.querySelector("#content"),
    
    myDel = document.getElementById("del-last-item"),
    
    myClear = document.getElementById("clear"),
    
    myPlusBtn = document.getElementById("plus"),
    
    myDivideBtn = document.getElementById("divide"),
    
    mySubBtn = document.getElementById("sub"),
    
    myMultiBtn = document.getElementById("multi"),
    
    myEqual = document.getElementById("equal"),
        
    i;

for (i = 0; i < myBtns.length; i++) {
    
    myBtns[i].addEventListener("click", function (event) {
        "use strict";
        
        event.preventDefault();
        
        myRes.value += this.value;
                
    console.log(typeof (myRes.value));
    });
}

var allNumber = [];

myPlusBtn.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    var MyPlus = parseFloat(myRes.value),
        
        mysum = 0;
    
    myRes.value = "";
    
    if(isNaN(MyPlus)){
        
        console.log("sorry can not added");
         
    }else{
        allNumber.push(MyPlus);
    }
    
    console.log(allNumber);
    
    for (i=0 ; i < allNumber.length ; i++) {
        
        mysum += allNumber[i];
        
        console.log(mysum);
    }
       
      myEqual.addEventListener("click" , function(){
      
       myRes.value = mysum;
       
       allNumber.pop();
       
   });
    
});



mySubBtn.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    var mySub = parseFloat(myRes.value),
        
        mySubRes = 0;
    
    myRes.value = "";
    
    if(isNaN(mySub)){
        
        console.log("NAN");
         
    }else{
        allNumber.push(mySub);
    }
    
    console.log(allNumber);
    
    for (i=0 ; i < allNumber.length ; i++) {
        
        mySubRes = allNumber[i]- mySubRes ;
        
        console.log(mySubRes);
    }
       
      myEqual.addEventListener("click" , function(){
      
       myRes.value = -mySubRes;
       
       allNumber.pop();
       
   });
    
});



myMultiBtn.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    var myMulti = parseFloat(myRes.value),
        
        myMuliRes = 1;
    
    myRes.value = "";
    
    if(isNaN(myMulti)){
        
        console.log("sorry can not added");
         
    } else {
        allNumber.push(myMulti);
    }
    
    console.log(allNumber);
    
    for (i=0 ; i < allNumber.length ; i++) {
        
        myMuliRes *= allNumber[i];
        
        console.log(myMuliRes);
    }
       
      myEqual.addEventListener("click" , function(){
      
       myRes.value = myMuliRes;
       
       allNumber.pop();
       
   });
    
});



myDivideBtn.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    var MyDivide = parseFloat(myRes.value),
        
        myDivRes = 1;
    
    myRes.value = "";
    
    if(isNaN(MyDivide)){
        
        console.log("sorry can not added");
         
    } else{
        allNumber.push(MyDivide);
    }
    
    console.log(allNumber);
    
    for (i=0 ; i < allNumber.length ; i++) {
        
        myDivRes = allNumber[i] / myDivRes ;
        
        //console.log(myDivRes);
    }
       
      myEqual.addEventListener("click" , function(){
      
       myRes.value = myDivRes;
       
       allNumber.pop();
       
   });
    
});





myDel.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    var myDelNum = myRes.value.slice(0, -1);
    
    myRes.value = myDelNum;
    
});



myClear.addEventListener("click", function (event) {
    
    "use strict";
    
    event.preventDefault();
    
    allNumber = []
    
    var myClearNum = myRes.value.replace(myRes.value.slice(0), "");
        
    myRes.value = myClearNum;
    
});






