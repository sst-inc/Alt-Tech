import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//read UserData
import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "User"));
querySnapshot.forEach((User_Rank) => {
  console.log(`${User_Rank.id} => ${User_Rank.data()}`);
});




import { doc, getDoc } from "firebase/firestore";

var docRef = doc(db, "User", "User_Lessons_Completed");
var docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let User_Lessons_Completed = docSnap.data()
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


var docRef = doc(db, "User", "User_Points");
var docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let User_Points = docSnap.data()
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


var docRef = doc(db, "User", "User_Quiz_Points");
var docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let User_Quiz_Points = docSnap.data()
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


var docRef = doc(db, "User", "User_Rank");
var docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let User_Rank = docSnap.data()
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}