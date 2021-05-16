$(document).ready(function () {
  if (sessionStorage.getItem("AuthenticationState") === null) {
    alert("You must have to login first.");
    window.open("./login.html", "_self");
  } else if (
    Date.now > new Date(sessionStorage.getItem("AuthenticationExpires"))
  ) {
    alert("Login expired. Please login again.");
    window.open("./login.html", "_self");
  } else {
  }
});

function logout() {
  sessionStorage.removeItem("AuthenticationState");
  sessionStorage.removeItem("userProfile");
  window.open("./login.html", "_self");
}
//declearing html elements

const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");
const username1 = document.getElementById("username");
//const username = localStorage.getItem("userDetails");

var userProfile = new Image();
userProfile.src = "";
// const img = document.getElementById("photo");

//if user hover on img div

// imgDiv.addEventListener("mouseenter", function () {
//   uploadBtn.style.display = "block";
// });

// //if we hover out from img div

// imgDiv.addEventListener("mouseleave", function () {
//   uploadBtn.style.display = "block";
// });

// file.addEventListener("change", function () {
//   const choosedFile = this.files[0];
//   if (choosedFile) {
//     const reader = new FileReader(); //FileReader is a predefined function of JS

//     reader.addEventListener("load", function () {
//       img.setAttribute("src", reader.result);
//     });

//     reader.readAsDataURL(choosedFile);
//   }
// });

// $(document).ready(function () {
//   $("#but_upload").click(function () {
//     //  var fd = new FormData();
//     //  var files = $("#file")[0].files;
//     var userdata = localStorage.getItem("userDetails");
//     var userdata = JSON.parse(localStorage.getItem("userAllDetails"));
//     var img = document.getElementById("photo");
//     img.src = localStorage.getItem("userProfile");

//if (files.length > 0) {
//  JSON.stringify(fd.append("userProfile", files[0]));

//     $.ajax({
//       url: "http://localhost:3000/users",
//       type: "post",
//       data: { thefile: img.getAttribute("src") },
//       dataType: "json",
//       contentType: false,
//       processData: false,
//       Cache: false,
//       enctype: "multipart/form-data",
//       sucess: function (response) {
//         if (response != 0) {
//           $("#photo").attr("src", response);
//           $(".preview photo").show();
//         } else {
//           alert("file not uploaded");
//         }
//       },
//     });
//   });
// });

function upload() {
  window.location.href = "http://127.0.0.1:5500/html/userProfilePage.html";
}

var user1 = localStorage.getItem("userDetails");
user1 = user1 + "profilePicture";
document.querySelector("#fileimg").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem(user1, reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});
document.addEventListener("DOMContentLoaded", () => {
  const recentImg = localStorage.getItem(user1);
  if (recentImg) {
    document.querySelector("#photo").setAttribute("src", recentImg);
  }
});
