// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import {
  getDatabase,
  ref,
  get,
  child,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWHYn160O4oSFEPbrc7WRCIKjU7fO0008",
  authDomain: "iotwebbased-32566.firebaseapp.com",
  databaseURL: "https://iotwebbased-32566-default-rtdb.firebaseio.com",
  projectId: "iotwebbased-32566",
  storageBucket: "iotwebbased-32566.appspot.com",
  messagingSenderId: "836120121218",
  appId: "1:836120121218:web:c2af111255095812d4499b",
  measurementId: "G-XRLV876YJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const dbRef = ref(getDatabase());

const tempData = document.getElementById("temp-data");
const humidData = document.getElementById("humid-data");
const forceData = document.getElementById("force-data");
var getdata = get(child(dbRef, `/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

document.getElementById("read-temp-btn").onclick = async () => {
  const a = await getdata;
  tempData.innerHTML = Object.values(a)[2] + "°C";
};

document.getElementById("read-humid-btn").onclick = async () => {
  const a = await getdata;
  humidData.innerHTML = Object.values(a)[1] + "%";
};

document.getElementById("read-force-btn").onclick = async () => {
  const a = await getdata;
  forceData.innerHTML = Object.values(a)[0] + "F";
};
console.log({ tempData, humidData });
// function getTempData(data) {
//   return tempData.innerHTML = Object.values(data)[1];
// }
