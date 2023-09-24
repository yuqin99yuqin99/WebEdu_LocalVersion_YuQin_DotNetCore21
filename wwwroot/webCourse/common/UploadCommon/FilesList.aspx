<%@ Page language="c#" Codebehind="FilesList.aspx.cs" AutoEventWireup="false" Inherits="bailuwebedusystem.FilesList" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>FilesList</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<download id=sIdDownloadFilesForDynFunctions style="BEHAVIOR: url(#default#download)" />
		<style>
body{font-size:12px}
</style>
<script src="popup.js"></script>
<script >
var oSelectedElem;
var type
function fnSelected(sType)
{
	oSelectedElem=event.srcElement;
	for(var i=0;i<document.getElementsByTagName("SPAN").length;i++)
	{
		document.getElementsByTagName("SPAN").item(i).style.backgroundColor="";
		document.getElementsByTagName("SPAN").item(i).style.color="";
	}
	oSelectedElem.style.backgroundColor="#316AC5";
	oSelectedElem.style.color="#FFFFFF";
	type=sType;

}
function fnBodyClick()
{
	var oElem=event.srcElement;
	if(oElem.nodeName!="SPAN")
	{
		for(var i=0;i<document.getElementsByTagName("SPAN").length;i++)
		{
			document.getElementsByTagName("SPAN").item(i).style.backgroundColor="";
			document.getElementsByTagName("SPAN").item(i).style.color="";
		}
	}


}
function fnOnLoad(){
  
  	window.oPopup=new Object();
 	 window.oPopup=window.createPopup();
  	////以下定义事件句柄
  	document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("popup.htm",fnOnDownLoad);
 	document.oncontextmenu=fnPopup;
 }
function fnReName()
{



}

function fnDelete()
{
	if(confirm('确定要删除\"'+oSelectedElem.innerHTML+'\"?'))
	{
		
		document.location.href="FilesList.aspx?Command=Delete&type="+type+"&file="+oSelectedElem.innerHTML;
	}

}

</script>

	</HEAD>
	<body MS_POSITIONING="GridLayout" onload=fnOnLoad() onclick="fnBodyClick()">
		<form id="Form1" method="post" runat="server">
		</form>
	</body>
</HTML>
