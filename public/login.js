
////////////////////////////////////////////////////////////////////
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//        YOU SHOULD NOT BE HERE.... BUT ANYWAYS... FOR           //
//        YOUR CURIOSITY... I GIVE YOU THE ACCESS CODE...         //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
//                                                                //
////////////////////////////////////////////////////////////////////
if(localStorage.getItem('count')==null){
  localStorage.setItem('count',0);
}


function validate(){
  
  // firebase.initializeApp({
  //   apiKey: "AIzaSyCUhgTOrDeKB4A0eLBEu6udv6u8a2cVdWg",
  //   authDomain: "ece-directory.firebaseapp.com",
  //   projectId: "ece-directory"
  // });
  var db = firebase.firestore();
  // var passcode = document.getElementById('passcode').value;
  // if(passcode=="Kudos#Hacker:P"){
  //   window.location.href='home.html';
  // }
  // else{
  // var counter = parseInt(localStorage.getItem('count'));
  // localStorage.setItem('count',counter+1);
  // if(localStorage.getItem('count')>3){
  //   alert('Your IP is noted and is blocked for the next 48 hours... Please do not try VPNs. That will be useless...');
  // }
  // }
  db.collection("Basics").add({
    attempt : "+1"
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}
