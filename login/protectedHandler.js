var email, sessionKey, sessionVal;
function onSignIn(googleUser){
  var profile = googleUser.getBasicProfile();
  email = profile.email;
  //
  sessionKey = email;
  sessionVal = localStorage.getItem(sessionKey);
}

function doAuthCheck(){
  if (sessionVal != "in") {
      alert("authError!");
  } else {alert("auth successful")}
}

$(window).load(function ()
{
    var i = setInterval(function ()
    {
        if ($('#foo').length)
        {
            clearInterval(i);
            // safe to execute your code here
            doAuthCheck();
            
        }
    }, 2000);
});