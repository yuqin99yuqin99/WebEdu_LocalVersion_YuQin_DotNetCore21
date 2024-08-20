<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<download id=sIdDownloadFilesForDynFunctions style="BEHAVIOR: url(#default#download)" />
<title>新建网页 1</title>
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
  	document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("popup.asp",fnOnDownLoad);
 	document.oncontextmenu=fnPopup;
 }
function fnReName()
{



}

function fnDelete()
{
	if(confirm('确定要删除\"'+oSelectedElem.innerHTML+'\"?'))
	{
		
		document.location.href="ListFile.asp?Command=Delete&type="+type+"&file="+oSelectedElem.innerHTML;
	}

}

</script>
</head>

<body  onload=fnOnLoad() onclick="fnBodyClick()">
<%
	PartPath=Request("PartPath")
	RootPath=Server.MapPath("..\..\lessons\content\webCourseCommon")
	Path = RootPath & "\" & PartPath
	Set fso=Server.CreateObject("Scripting.FileSystemObject")
	If Not Request("Command")="" And Request("type")="file" then
		fso.DeleteFile Path & "\" & Request("file")
	ElseIf Not Request("Command")="" And Request("type")="folder" Then
		fso.DeleteFolder Path & "\" & Request("file"),True
	End if

	'列举文件夹
	Set objFolder = fso.GetFolder(Path) '创建文件夹对象  
    Set objSubFolders = objFolder.SubFolders '创建的子文件夹对象
    For Each objSubFolder In objSubFolders
    	Response.write("<image src=""Image\Folder.gif""><span onclick='fnSelected(""folder"")' oncontextmenu='fnSelected(""folder"")' ondblclick='parent.fnPartPath(""" & objSubFolder.Name & """)'>" & objSubFolder.Name & "</span>   " & objSubFolder.Size & "  " & objSubFolder.Type & "  " & objSubFolder.DateLastModified & "<br>")
    Next
    '列举文件
 	Set objFiles = objFolder.Files
  	For Each objFile In objFiles
  		If objFile.Type="Flash 文档" Then
  			Picture="fla.gif"
  		ElseIf objFile.Type="Shockwave Flash Object" Then
  			Picture="swf.gif"
  		Else
  			Picture="other.gif"
  		End If
  		Response.write("<image src=""Image\" & Picture &"""><span onclick='fnSelected(""file"")' oncontextmenu='fnSelected(""file"")'>" & objFile.Name & "</span>   " & (objFile.Size\1024) & "KB  " & objFile.Type & "  " & objFile.DateLastModified & "<br>")
 	Next
   
%>

</body>

</html>