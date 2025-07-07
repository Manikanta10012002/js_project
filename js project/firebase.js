// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

//  // Your web app's Firebase configuration
//   const firebaseConfig = {
//   apiKey: "AIzaSyDg36o9pMiazgoVjST0K7ulxL5Ja3vBduc",
//   authDomain: "javascript-project-2895d.firebaseapp.com",
//   projectId: "javascript-project-2895d",
//   storageBucket: "javascript-project-2895d.firebasestorage.app",
//   messagingSenderId: "509498394000",
//   appId: "1:509498394000:web:37973002c62b4bbd3a5f15",
//   measurementId: "G-V3PW5E0S0M"
// };
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// //   const getEmail = document.getElementById("email");
// //  const getPassword = document.getElementById("password");
//   const getSignup = document.getElementById("sign-up");

//   getSignup.addEventListener("click",(event)=> {
//     event.preventDefault();
//      const getEmail = document.getElementById("email").value;
//  const getPassword = document.getElementById("password").value;
//  const getConfirmPassword = document.getElementById("confirm-password")
//  const auth = getAuth();
//  createUserWithEmailAndPassword(auth, getEmail, getPassword,getConfirmPassword)
//  .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // const userData = {
//     //     email : getEmail,
//     //     password : getPassword
//     // }; 
//     alert("Account Created Sucessfully");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.error(error);
//     alert("Aleady have an Account")
//   });
//   }); 
//   // sign in page 

//   const signIn = document.getElementById("sign-in");
//   signIn.addEventListener("click",(e) => {
//     e.preventDefault();
//     const email1 = document.getElementById("lemail").value;
//     const password1 = document.getElementById("lpassword").value;
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth,email1,password1)
//     .then((user) => {
//     //    const name = console.log(user?.user.email);
//         alert("welcome back " + user?.user.email);
//         const userData = user.user;
//         localStorage.setItem("loggedInSetId", userData.uid);
//         window.location.href = "./profileMangement.html"
//     }).catch((error) => {
//         const errorCode = error.code;
//         if(errorCode == "auth/invalid-credential"){
//             alert("Invalid Email / Password");
//         }else{
//             alert("User NotExisted ")
//         }
//     const errorMessage = error.message;
//     // ..
//         console.error(error);
//     })
//   })/
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg36o9pMiazgoVjST0K7ulxL5Ja3vBduc",
  authDomain: "javascript-project-2895d.firebaseapp.com",
  projectId: "javascript-project-2895d",
  storageBucket: "javascript-project-2895d.firebasestorage.app",
  messagingSenderId: "509498394000",
  appId: "1:509498394000:web:37973002c62b4bbd3a5f15",
  measurementId: "G-V3PW5E0S0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", () => {
  const getSignup = document.getElementById("sign-up");
  const signIn = document.getElementById("sign-in");

  if (getSignup) {
    getSignup.addEventListener("click", (event) => {
      event.preventDefault();
      const getEmail = document.getElementById("email").value;
      const getPassword = document.getElementById("password").value;
      const getConfirmPassword = document.getElementById("confirm-password").value;

      if (getPassword !== getConfirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, getEmail, getPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account Created Successfully");
          window.location.href ="./login.html"
        })
        .catch((error) => {
          console.error(error);
          alert("Already have an Account or invalid input.");
        });
    });
  }

  if (signIn) {
    signIn.addEventListener("click", (e) => {
      e.preventDefault();
      const email1 = document.getElementById("lemail").value;
      const password1 = document.getElementById("lpassword").value;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email1, password1)
  .then((user) => {
    const userData = user.user;

    // Check if profile is already completed
    const profileCompleted = localStorage.getItem(`profileCompleted_${userData.uid}`);

    localStorage.setItem("loggedInSetId", userData.uid);

    if (profileCompleted === "true") {
      window.location.href = "postSharing.html";
    } else {
      window.location.href = "profileMangement.html";
    }
  })

    });
  }
});
