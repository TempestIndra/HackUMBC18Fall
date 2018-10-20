(function() {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAubXSeNxL0NLKyKF2A1V3B_hiYLQqEcwU",
    authDomain: "hackumbc18fall.firebaseapp.com",
    databaseURL: "https://hackumbc18fall.firebaseio.com",
    projectId: "hackumbc18fall",
    storageBucket: "hackumbc18fall.appspot.com",
    messagingSenderId: "398311049534"
  };
  firebase.initializeApp(config);


  // Get the DOM elements from index page.
  var txtEmail = document.getElementById("txtEmail");
  var txtPassword = document.getElementById("txtPassword");
	var btnLogin = document.getElementById("btnLogin");
  var btnSignup = document.getElementById("btnSignup");
  var btnLogout = document.getElementById("btnLogout");

  // Add login event, with callback function e.
  btnLogin.addEventListener("click", e => {
  	// Get email and password values.
  	var email = txtEmail.value;
  	var password = txtPassword.value;
  	// Store Firebase authentication namespace.
  	var auth = firebase.auth();
  	// Sign in user using Firebase Authentication methods.
  	var promise = auth.signInWithEmailAndPassword(email, password);
  	// Use the promise to resolve the user,
  	// or catch any errors that occur and log them to console.
  	promise.catch(e => console.log(e.message));
  	// Clear the email and password input fields.
  	txtEmail.value = "";
  	txtPassword.value = "";
  })

  // Add signup event, with callback function e.
  btnSignup.addEventListener("click", e => {
  	// Get email and password values.
  	var email = txtEmail.value;
  	var password = txtPassword.value;
  	// Store Firebase authentication namespace.
  	var auth = firebase.auth();
  	// Sign in user using Firebase Authentication methods.
  	var promise = auth.createUserWithEmailAndPassword(email, password);
  	// Use the promise to resolve the user,
  	// or catch any errors that occur and log them to console.
  	promise.catch(e => console.log(e.message));
  	// Clear the email and password input fields.
  	txtEmail.value = "";
  	txtPassword.value = "";
  });

  // Add logout event, with callback function e.
  btnLogout.addEventListener("click", e => {
  	firebase.auth().signOut();
  	console.log("Logged out.")
  })

  // Add a real-time authentication listener.
  firebase.auth().onAuthStateChanged(firebaseUser => {
  	// Checks if user exists (is logged in).
  	// Show the "Log out" button if logged in.
  	if (firebaseUser)
  	{
  		console.log("Logged in as: " + firebaseUser["email"]);
  		console.log(firebaseUser);
  		btnLogout.classList.remove("hide");
		texts.classList.remove("hide");		
  	}
  	// Hide the "Log out" button if not logged in.
  	else
  	{
  		console.log("Not logged in.")
  		btnLogout.classList.add("hide");
		texts.classList.add("hide");

  	}
  });

}());