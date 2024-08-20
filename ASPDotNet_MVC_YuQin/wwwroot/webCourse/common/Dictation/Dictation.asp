<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>正在处理...</title>
</head>

<body>
<%
	sText=Request("sText")

    sPath=Server.MapPath("..\..\lessons\content\book\" & sText & "\" & sText & ".htm")
    Set fso=Server.CreateObject("Scripting.FileSystemObject") 

    Set oTextStream = fso.OpenTextFile(sPath)
    sFileString = oTextStream.ReadAll()
    oTextStream.Close
    Set oTextStream = Nothing
    sFileString = Replace(sFileString, "document.body.onload=fnOnLoad;", "document.body.onload=fnNewsDictation;")
          
    call CreateFile
 
    Sub   CreateFile()   
    Dim   stm   
    Set   stm=Server.CreateObject("ADODB.Stream")   
    stm.Type=2   
    stm.Mode=3   
    stm.Charset="gb2312"   
    stm.Open()   
    stm.WriteText sFileString   
    stm.SaveToFile  sPath ,2   
    stm.Close()   
    Set   stm=Nothing   
    End   Sub 

    Response.write "已保存!"
 


%>
</body>

</html>
