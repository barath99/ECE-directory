<<<<<<< HEAD

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
  var passcode = document.getElementById('passcode').value;
  if(passcode=="Kudos#Hacker:P"){
    window.location.href='home.html';
  }
  else{
  var counter = parseInt(localStorage.getItem('count'));
  localStorage.setItem('count',counter+1);
  if(localStorage.getItem('count')>3){
    alert('Your IP is noted and is blocked for the next 48 hours... Please do not try VPNs. That will be useless...');
  }
  }
}
=======

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
  var passcode = document.getElementById('passcode').value;
  if(passcode=="Kudos#Hacker:P"){
    window.location.href='home.html';
  }
  else{
  var counter = parseInt(localStorage.getItem('count'));
  localStorage.setItem('count',counter+1);
  if(localStorage.getItem('count')>3){
    alert('Your IP is noted and is blocked for the next 48 hours... Please do not try VPNs. That will be useless...');
  }
  }
}
>>>>>>> c3c0de47cd93b7764646d6f7599549442c440c07
