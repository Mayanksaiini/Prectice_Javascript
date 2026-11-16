// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   // h1.style.color = "green";
//   h1.textContent = "Done_1";
// });

// // h1.addEventListener("dblclick", function () {
// //   // h1.style.color = "green";
// //   h1.textContent = "Done_2";
// // });

// h1.addEventListener("dblclick", function () {
//   console.log("removed");
// });

let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
  //console.dir(dets.key);
  //h1.textContent = dets.key;
  if (dets.key===" ") {
    h1.textContent = "SPC";
  } else {
    h1.textContent = dets.key;
  }
});
