// Common events : Mouseover & out & move

let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function () {
  abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout", function () {
  abcd.style.backgroundColor = "brown";
});

// let abcd = document.querySelector("#abcd");

// // Create image
// let img = document.createElement("img");

// img.setAttribute("src", "https://picsum.photos/200"); // using the dom
// abcd.appendChild(img);

// // Show image on hover
// abcd.addEventListener("mouseover", function () {
//     img.style.display = "block";
// });

// // Hide image when mouse leaves
// abcd.addEventListener("mouseout", function () {
//     img.style.display = "none";
// });
// let abcd = document.querySelector("#abcd");

// let img = document.createElement("img");

// img.setAttribute("src", "https://picsum.photos/200"); // set but not implented

// abcd.appendChild(img);

// abcd.addEventListener("mouseover", function () {
//     img.style.display = "block";
// });

// abcd.addEventListener("mouseout", function () {
//     img.style.display = "none";
// });



window.addEventListener("mousemove", function (dets) {

    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";

});
