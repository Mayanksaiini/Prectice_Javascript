// btn is button which is show case but fileinp is the real logic based button

let btn = document.querySelector("#btn"); //  Cosmetic
let fileinp = document.querySelector("#fileinp"); // Mechanism
btn.addEventListener("click", function(){
    // btn.textContent = "CLICKED"
    fileinp.click();
});

//  lets create actaull mechanism

fileinp.addEventListener("change", function(dets){

    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});