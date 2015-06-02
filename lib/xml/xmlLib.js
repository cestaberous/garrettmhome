function getInternalXML(url){
    var xhttp, xmlDoc;
    if (window.XMLHttpRequest)
      {
      xhttp=new XMLHttpRequest();
      }
    else // code for IE5 and IE6
      {
      xhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xhttp.open("GET",url,false);
    xhttp.send();
    xmlDoc=xhttp.responseXML;
    return xmlDoc;
}