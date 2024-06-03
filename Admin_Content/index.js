let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 
let tablebody = document.querySelector("tbody");

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})


var firebaseConfig = {
    apiKey: "AIzaSyC7fCApKFrmpO7v0FMPVFl0H1yaV78PSiI",
    authDomain: "baguiobud2.firebaseapp.com",
    databaseURL: "https://baguiobud2-default-rtdb.firebaseio.com",
    projectId: "baguiobud2",
    storageBucket: "baguiobud2.appspot.com",
    messagingSenderId: "57183964761",
    appId: "1:57183964761:web:25f7061c62b5e4fc96eb48"
  };

  firebase.initializeApp(firebaseConfig);

  var addNewPlaceDB = firebase.database().ref('baguiobud');

 document.getElementById('addNewPlace');

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

// var usersRef = firebase.database().ref('baguiobud/')

// var firebaseRef = firebase.database().ref("baguiobud");

// firebaseRef.on("value", function(snapshot){
// 	snapshot.forEach(function(element){
// 		document.querySelector('#root').innerHTML += `
// 		<tr>
// 			<td>${element.val()}</td>
//         <td style="text-align: center;">
//           <td style="flex-direction: column;">
//             <button class="edit">Edit</button>
//             <button class="delete">Delete</button>
//           </td>

			
// 		</tr>

// 		`
// 	})
// })

var firebaseRef = firebase.database().ref("baguiobud");
firebaseRef.on('value', (snapshot) => {
    const baguiobud = snapshot.val();

    console.log(baguiobud);

    for(user in baguiobud)
      {
        // console.log(baguiobud[user]);

        let tr =`
        <tr data-id=${user}>
                        <td>${baguiobud[user].destination}</td>

                        <td style="text-align: end;">
                          <button id="edit" class="edit">Edit</button>
                          <button id="delete" class="delete">Delete</button>
                        </td>
        </tr>
        `

        tablebody.innerHTML += tr;
      }
  
      let editbtn = document.querySelectorAll(".edit");

      editbtn.forEach(edit =>{
        edit.addEventListener("click", ()=>{
          window.location = "file:///C:/xampp/htdocs/BaguioBUD/Admin_Content_Edit/index.html";
        })
      })

  })