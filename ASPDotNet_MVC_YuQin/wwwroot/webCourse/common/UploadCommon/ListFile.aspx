<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<download id=sIdDownloadFilesForDynFunctions style="BEHAVIOR: url(#default#download)" />
<title>�½���ҳ 1</title>
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
  	////���¶����¼����
  	document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("popup.asp",fnOnDownLoad);
 	document.oncontextmenu=fnPopup;
 }
function fnReName()
{



}

function fnDelete()
{
	if(confirm('ȷ��Ҫɾ��\"'+oSelectedElem.innerHTML+'\"?'))
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

	'�о��ļ���
	Set objFolder = fso.GetFolder(Path) '�����ļ��ж���  
    Set objSubFolders = objFolder.SubFolders '���������ļ��ж���
    For Each objSubFolder In objSubFolders
    	Response.write("<image src=""Image\Folder.gif""><span onclick='fnSelected(""folder"")' oncontextmenu='fnSelected(""folder"")' ondblclick='parent.fnPartPath(""" & objSubFolder.Name & """)'>" & objSubFolder.Name & "</span>   " & objSubFolder.Size & "  " & objSubFolder.Type & "  " & objSubFolder.DateLastModified & "<br>")
    Next
    '�о��ļ�
 	Set objFiles = objFolder.Files
  	For Each objFile In objFiles
  		If objFile.Type="Flash �ĵ�" Then
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