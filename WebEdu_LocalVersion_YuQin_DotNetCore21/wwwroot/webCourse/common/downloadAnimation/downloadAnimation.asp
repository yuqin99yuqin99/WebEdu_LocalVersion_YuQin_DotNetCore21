<% @language="JScript"%>
<% 
   var sAnimation = Request("sAnimation")();
   var sFId = Request("sFId")();
   var sItemName = Request("sItemName")();
   var  sFilePath = Server.mapPath("../../lessons");
 
  // Response.write("<script>alert('"+ sFilePath +"');</script>");
     if ( sFId == "1") { 
      var sFileSourse = sFilePath+"\\content\\play_origin_foreign\\" + sAnimation;
      var sFilePath = sFilePath+"\\content\\play_foreign\\" + sAnimation;
      }
      else {
      var sFileSourse = sFilePath+"\\content\\play_origin\\" + sAnimation;
      var sFilePath = sFilePath+"\\content\\play\\" + sAnimation;
     }
     
   sFilePath = sPathToClient(sFilePath,"\\");
   sFileSourse = sPathToClient(sFileSourse,"\\");

  function sPathToClient(sPath,symbol) {   
    var aString=sPath.split(symbol);
	var iLength=aString.length;
	var sNewPath="";
	for(var i=0;i<iLength;i++){
	 if (i==iLength-1) {
	    sNewPath+=aString[i];
	   }
	   else {
	   sNewPath+=aString[i]+"\\\\";
	   }
	} 
	return sNewPath;
   }
 // Response.write("<script>alert('"+sFileSavedPath1+"');</script>");

  %>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title></title>
<script language="JavaScript">
 function SetFilePath () {
  oDownload.FilePath = "<%=sFilePath%>";
  oDownload.FileSourse = "<%=sFileSourse%>";
  oDownload.ItemName = "<%=sItemName%>";
  }
</script>
</head>

<body onload="SetFilePath ()" scroll="no">

<p>
<!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
 <script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">DownloadActiveX();</script>
</p>

</body>

</html>

