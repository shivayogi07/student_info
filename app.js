let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let skill = document.getElementById("skill").value.trim();
   

    // validation
    if (name === "" || email === "" || phone === "" || dob === "" || gender === "" || course === "" || skill === "") {
        alert("Please fill all fields ❗");
        return;
    }

    // email check
    if (!email.includes("@")) {
        alert("Enter valid email ❗");
        return;
    }

    // phone check
    if (phone.length < 10) {
        alert("Enter valid phone number ❗");
        return;
    }

    // success message
    document.getElementById("output").innerText =
        "✅ Welcome " + name + "! Your registration is successful.";

    console.log({name, email, phone, dob, gender, course,skill});
});
// Adding event listner
let btn2 = document.querySelector("button");

btn2.addEventListener("click", function (){
    alert("The form is submitted!")
});


let input = document.querySelector("input");

input.addEventListener("keydown",function (){
    console.log("the key was pressed!")
});

input.addEventListener("keyup",function (){
    console.log("the key was realesed!")
});

//para color changes when u click after filling the form
let pera1 = document.querySelector("p");

pera1.addEventListener("click", function(){
    console.log(this.style.color = "red");
    console.log("you changed the color my clicking the para after filling the form")
})



