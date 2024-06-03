let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})

const firebaseConfig = {
    apiKey: "AIzaSyC7fCApKFrmpO7v0FMPVFl0H1yaV78PSiI",
    authDomain: "baguiobud2.firebaseapp.com",
    databaseURL: "https://baguiobud2-default-rtdb.firebaseio.com",
    projectId: "baguiobud2",
    storageBucket: "baguiobud2.appspot.com",
    messagingSenderId: "57183964761",
    appId: "1:57183964761:web:25f7061c62b5e4fc96eb48"
}

firebase.initializeApp(firebaseConfig);

var addNewPlaceDB = firebase.database().ref('baguiobud');

 document.getElementById('addNewPlace').addEventListener("submit", submitForm);

 function submitForm(e){
	e.preventDefault();

	var destination = getElementVal('placename');
	var description = getElementVal('ddescription');
	var location = getElementVal('location');
	var locationLink = getElementVal('locationlink');
	var entranceFee = getElementVal('efee');
	var openHours = getElementVal('ohours');

	saveNew(destination, description, location, locationLink, entranceFee, openHours);

	document.querySelector('.alert').style.display = "block";

	setTimeout(() => {
		document.querySelector('.alert').style.display = "none";
	}, 3000);

	document.getElementById('addNewPlace').reset();

 }

 const saveNew = (destination, description, location, locationLink, entranceFee, openHours) => {
	var newBagBud = addNewPlaceDB.push();

	newBagBud.set({
		destination : destination,
		description : description,
		location : location,
		locationLink : locationLink,
		entranceFee : entranceFee,
		openHours : openHours
	});
 };

 const getElementVal = (id) => {
	return document.getElementById(id).value;
 }