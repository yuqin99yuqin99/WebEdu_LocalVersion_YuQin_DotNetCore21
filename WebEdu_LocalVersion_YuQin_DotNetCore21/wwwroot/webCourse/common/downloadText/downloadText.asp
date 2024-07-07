<% @language="JScript"%>
<% 
   var sText = Request("sText")();
   var sFId = Request("sFId")();
   var sItemName = Request("sItemName")();
 
  var  sFilePath = Server.mapPath("../../lessons");
     if(sFId == "1") {
      var sFileSourse = sFilePath+"\\content\\book_origin_foreign\\" + sText;
      var sFilePath = sFilePath+"\\content\\book_foreign\\" + sText;
     }
     else {
      var sFileSourse = sFilePath+"\\content\\book_origin\\" + sText;
      var sFilePath = sFilePath+"\\content\\book\\" + sText;
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

