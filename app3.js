let input = document.querySelector("#text");
let para = document.querySelector("p");

input.addEventListener("change", function(){
    console.log(this.value);
    para.innerText = this.value;
});

input.addEventListener("input", function(){
    console.log(this.value);
    para.innerText = this.value;
});
