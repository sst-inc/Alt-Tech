import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDbk8rfH80RBRWCy7pxphnQjrQwY9dWMcg",
  authDomain: "alternate-tech.firebaseapp.com",
  databaseURL: "https://alternate-tech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alternate-tech",
  storageBucket: "alternate-tech.appspot.com",
  messagingSenderId: "1057930360277",
  appId: "1:1057930360277:web:b03619aa1fca5d7002f95c",
  measurementId: "G-4H0N4SPPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service


//Add the google specific sign-in


const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user's info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



  //sign out user
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});




//Get Currently Signed in User
import { getAuth, onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


//Get User's Profile

const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with backend server, if
  // we ever have one. Use User.getToken() instead.
  const uid = user.uid;


  var userInfo = {
    name: displayName,
    User_Lessons_Completed: 0,
    User_Points: 0,
    User_Quiz_Points: 0,
    User_Rank: 0,
    uid: uid,
  }
  writeUserData(user)
  
  function writeUserData(user) {
    firebase.database().ref('User/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });
  }

}






/*jslint sub: true, maxerr: 50, indent: 4, browser: true */

(function (global) {
  document.getElementById("displayName").addEventListener("click", function () {
      global.localStorage.setItem("mySharedData", document.getElementById("output").value);
  }, false);
}(window));