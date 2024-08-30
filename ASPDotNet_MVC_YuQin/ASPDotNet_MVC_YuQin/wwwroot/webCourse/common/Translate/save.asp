<%
   sDocument = Request.form("Text")
   sFilePath = Server.mapPath("../../lessons")
   sFilePath = sFilePath+"\\content\\book"
   sTextID = Request("textID") 
   sFilePath = sFilePath & "\" & sTextID & "\" & sTextID & ".asp"
   CreateFile(sFilePath)
   
   Response.write("<script>alert(""保存完成!"")</script>")
    Response.write("<script>window.close();</script>")
    	
  Sub   CreateFile(sPath)   
    Dim   stm   
    Set   stm=Server.CreateObject("ADODB.Stream")   
    stm.Type=2   
    stm.Mode=3   
    stm.Charset="gb2312"   
    stm.Open()   
    stm.WriteText sDocument   
    stm.SaveToFile  sPath,2   
    stm.Close()   
    Set   stm=Nothing   
  End   Sub 

  	
  
%>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>正在保存</title>
</head>

<body>

<p align="center"><span id="pross" >正在保存...</span></p>
</body>

</html>