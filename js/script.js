let container = document.querySelector(".container");
let inputtxt = document.getElementById("input-text");
let generatebtn = document.getElementById("generate-btn");
let img = document.getElementById("qr-img");
let errormsg = document.getElementById("error");
let downloadbtn = document.getElementById("download-btn");
let preInput;

// function for generating qr code 
generatebtn.addEventListener("click",() => {
    let input = inputtxt.value.trim();
    if(!input || input === preInput){
        errormsg.style.display = "block";
        errormsg.style.backgroundColor = "#fedfe1"; 
        errormsg.style.color = "#cd4243";
        errormsg.innerText = "This Field should not be Empty and different with previous input"
    }else{
        errormsg.innerText = " Congrats!! Your QR Code has been created Successfully";  
        errormsg.style.display = "block";
        errormsg.style.backgroundColor = "#def0d8"; 
        errormsg.style.color = "#416b47";
        preInput = input;
        generatebtn.innerText = "Generating QR Code...";
        // for creating qr code we will use an api 
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload = function(){
            container.classList.add("active");
            generatebtn.innerText = "Generate Code";
        }
        downloadbtn.style.display = "block";
        downloadbtn.href = img.src;
        downloadbtn.download = "QR-Code"
    }
})