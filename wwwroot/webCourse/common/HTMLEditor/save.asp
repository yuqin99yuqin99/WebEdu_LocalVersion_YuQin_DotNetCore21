

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>保存</title>
<script language="jscript">

function fnTimeClose(){
 setTimeout("WinClose()",500);
}

function WinClose(){
 	window.returnValue = null;
	window.close();
}
</script>
</head>

<body onload="fnTimeClose()">
 <table width="100%" height="100%" ><tr><td align="center">
<%
   sDocument=Request.form("docContent")
   sDocument=Replace(sDocument,"http://localhost:8000","../../../../../")
   sDocument=Replace(sDocument,"charset=us-ascii","charset=gb2312")
     sPath=Request("docPath")
     Set fso=Server.CreateObject("Scripting.FileSystemObject") 
     
    ' Response.write Server.mapPath("../../"+sPath)
    ' Set oTextStream = fso.CreateTextFile(Server.mapPath("../../"+sPath))
    ' oTextStream.Write (sDocument)
    ' oTextStream.Close
    ' Set oTextStream = Nothing
           
    call CreateFile
 
    Sub   CreateFile()   
    Dim   stm   
    Set   stm=Server.CreateObject("ADODB.Stream")   
    stm.Type=2   
    stm.Mode=3   
    stm.Charset="gb2312"   
    stm.Open()   
    stm.WriteText sDocument   
    stm.SaveToFile  Server.mapPath("../../"+sPath),2   
    stm.Close()   
    Set   stm=Nothing   
    End   Sub 

    Response.write "已保存!"
    
    mode=Request("mode")
    If mode = "IsSaveAndExit" Then
      Response.write "<script>opener.Exit1();</script>"
     End If
    
 %>
 
</td></tr></table>

</body>

</html>

