var id, name, imgurl, email, sessionKey, sessionVal;
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  id = profile.getId();
  name = profile.getName();
  imgurl = profile.getImageUrl();
  email = profile.getEmail();
  sessionKey = email;
  sessionVal = localStorage.getItem(sessionKey);
  localStorage.setItem(sessionKey, "in");
  if (onLoginRedir != undefined){
    window.location=onLoginRedir;
  }
  else {console.log("Login Successful")}
}
//
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      localStorage.setItem(sessionKey, null);
      name = "Guest";
      window.location.reload();
    });
}


//ATTENTION! Use this fuction for click to check ONLY!
function doIsAuth(){
  if (sessionVal == "in"){
    return true;
  }
  else {
    return false;
  }
}