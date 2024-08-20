<%
	text_id=Request("textid")
	wd=Request("wd")
	
	Set fso=Server.CreateObject("Scripting.FileSystemObject")
	Set oTextStream = fso.OpenTextFile(Server.MapPath("..\..\..\..\lessons\content\book\" & text_id & "\" & text_id & ".htm"))
    sFileString = oTextStream.ReadAll()
    oTextStream.Close
	sFileString=Replace(sFileString,wd,"<font color=red>" & wd & "</font>")
	response.write(sFileString)
	
	
%>