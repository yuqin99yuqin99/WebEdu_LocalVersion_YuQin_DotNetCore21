<% @language="JScript"%>
<%

  var sTitle="";
  if ( Request("sText") !="") 
  {
  		var  sTextID=Request("sText")();
  }

  var  	sFilePath = Server.mapPath("../../lessons");
     	sFilePath = sFilePath+"\\content\\book";
     	sFilePath = sPathToClient(sFilePath,"\\");
 
// \�ڿͻ������ʱ����ת���\    
 function sPathToClient(sPath,symbol) 
 {   
    var aString=sPath.split(symbol);
	var iLength=aString.length;
	var sNewPath="";
	for(var i=0;i<iLength;i++)
	{
	 	if (i==iLength-1) 
	 	{
	    	sNewPath+=aString[i];
	   	}
	   	else 
	   	{
	   		sNewPath+=aString[i]+"\\\\";
	   	}
	} 
	return sNewPath;
 }
 // Response.write("<script>alert('"+sFileSavedPath1+"');</script>");
%>


<html>

<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>������ķ���</title>
<script >
function fnInit()
{
	oTranslate.BookPath="<%=sFilePath%>";
	oTranslate.TextID="<%=sTextID%>";

}
function fnTranslate()
{
	filename.value=oTranslate.getfile();

}
function fnStartTranslate()
{
	if(document.getElementById("filename").value=="")
	{
		alert("����ѡ�����ķ����word�ĵ�!");
	}
	else
	{
		pross.style.display="block";
		oTranslate.toHTML();
	}

}
function fnAddChina()
{
	document.location.href="AddChina.asp?sTextID=<%=sTextID%>";

}

</script>
<base target="_self">

</head>

<body onload="fnInit()">

<p  align="center">  <span id="pross" style="display:none">���ڽ��з���ǰ�Ĵ���...</span></p>
<p align="center">
<input type="text " size="30" id="filename">&nbsp; <input type="button" onclick="fnTranslate()" value="���...">
</p>
<p align="center"><input onclick="fnStartTranslate()" type="button" value="��ʼ">��</p>
<p align="center" style="display:none">
<object classid="clsid:1E1ED240-5381-4F6B-8FA0-2C0B644AC0E3" id="oTranslate" width="202" height="33">
</object>
</p>
<p align="center">��</p>
</body>

</html>