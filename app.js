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
   

    // validation
    if (name === "" || email === "" || phone === "" || dob === "" || gender === "" || course === "") {
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

    console.log({name, email, phone, dob, gender, course});
});


// let sports = document.createElement("div");
// sports.setAttribute("class","form-group");
// form.appendChild(sports);
