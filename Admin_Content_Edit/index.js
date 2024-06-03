let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

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

// var addNewPlaceDB = firebase.database().ref('baguiobud');

// function writeUserData(placename, description, location, locationlink, efee, ohours) {
// 	addNewPlaceDB.ref('baguiobud/').set({
// 	  destination: placename,
// 	  description: description,
// 	  location: location,
// 	  locationLink: locationlink,
// 	  entrancefee: efee,
// 	  openHours: ohours
// 	}).then((onFullFilled)=>{
// 		console.log("writed");
// 	},(onRejected)=> {
// 		console.log(onRejected);
// 	});
//   }

  var firebaseRef = firebase.database().ref("baguiobud");
// firebaseRef.on('value', (snapshot) => {
//     const baguiobud = snapshot.val();

//     console.log(baguiobud);

    // for(user in baguiobud)
    //   {
    //     // console.log(baguiobud[user]);

    //     let tr =`
    //     <tr>
    //                     <td>${baguiobud[user].destination}</td>

    //                     <td style="text-align: end;">
    //                       <button id="edit" class="edit">Edit</button>
    //                       <button id="delete" class="delete">Delete</button>
    //                     </td>
    //     </tr>
    //     `

    //     tablebody.innerHTML += tr;
    //   }
  
     

  