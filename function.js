const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const message3 = document.getElementById("message-3");
const message4 = document.getElementById("message-4");

const jake = document.getElementById("name");
const num = document.getElementById("numbers");
const cvv = document.getElementById("cvv");
const btn = document.getElementById("btn");
const myForm = document.forms.myForm;
const section = document.querySelector(".thank-you");
const expiry= document.getElementById("month");
const expiry2 = document.getElementById("year");
const cont = document.getElementById("btn-2")


myForm.onsubmit = function validateForm(e){
    e.preventDefault()
    
 
    if(myForm.fname.value == ""){
        message1.innerHTML = "Can't be blank";
        myForm.fname.style.borderColor = "hsl(0, 100%, 66%)"
    }
    else{
        jake.innerHTML =myForm.fname.value;
    }

    if(isNaN(myForm.cnumber.value)){
        message2.innerHTML = "Wrong format,numbers only";
        myForm.cnumber.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    }
    else{
         message2.innerHTML = ""
    }
     
    if(myForm.cnumber.value == ""){
        message2.innerHTML = "Can't be blank";
        myForm.cnumber.style.borderColor = "hsl(0, 100%, 66%)"
    }
    else{
        num.innerHTML =myForm.cnumber.value;
    }

    if(myForm.month.value == ""){
        message3.innerHTML = "Can't be blank";
        myForm.month.style.borderColor = "hsl(0, 100%, 66%)"
        return false
    }
    else{
        expiry.innerHTML =myForm.month.value;
     }

    if(myForm.year.value == ""){
        myForm.year.style.borderColor = "hsl(0, 100%, 66%)"
    }
    else{
        expiry2.innerHTML =myForm.year.value;
    }

    if(myForm.cvv.value == ""){
         message4.innerHTML = "Can't be blank";
        myForm.cvv.style.borderColor = "hsl(0, 100%, 66%)"
    }
    else{
        cvv.innerHTML =myForm.cvv.value;
    }
     section.classList.remove("hidden");
    myForm.style.display = "none";
     myForm.fname.value.style.color = "hsl(278, 68%, 11%)";
}

 

cont.addEventListener("click", ()=>{
    section.classList.add("hidden");
    myForm.style.display = "block";
    myForm.cvv.value = ""
    myForm.fname.value =""
    myForm.month.value = ""
    myForm.year.value = ""
    myForm.cnumber.value = ""
})


