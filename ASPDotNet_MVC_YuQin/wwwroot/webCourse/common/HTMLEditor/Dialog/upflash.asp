 <%
   sFlashPath=Request("sFlashPath")
   sFlashPath=sPathToClient(sFlashPath,"\")
   'Response.write "<script>alert('"+sFlashPath+"')</script>"
   
   ' 输出客户端时"\\"转换函数
  Function sPathToClient(sPath,symbol)
   dim aTemp
   sTemp=sPath
   aTemp=split(sTemp,symbol)
   sPathContentshtmNowNow=""
   iLength=Ubound(aTemp)-Lbound(aTemp)
   for i=Lbound(aTemp) to Ubound(aTemp)-1
	  sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp(i)+"\\"
    next
    sPathContentshtmNowNow = sPathContentshtmNowNow+aTemp(Ubound(aTemp))
    sPath = sPathContentshtmNowNow
    sPathToClient = sPath	
  End Function
 %>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>新建网页 1</title>
<style type="text/css">
body{margin:0}
</style>
</head>

<body>

<form method="POST" id="myform" action="upflash.asp?sFlashPath=<%=sFlashPath%>">
	<p><input type="file" name="FlashName" size="28"></p>
	
</form>
<% 
  '提交后把它拷贝到指定目录下,并返回在线编辑的值
  
   If Not Request("FlashName")="" Then
   
      Set fso = Server.CreateObject("Scripting.FileSystemObject")
      sFilePath = Server.mapPath("../../../"+sFlashPath)
       sFilePath=fso.GetParentFolderName(sFilePath)
      'Response.write "<script>alert('" + sFilePath + "')</script>"
      sFlashName = Request("FlashName")
      sFileType = GetFileType(sFlashName)
      sRndFileName = GetRndFileName(sFileType)
      sFilePath = sFilePath+"\" + sRndFileName '目录+随机生成目标文件名
       
      ' Response.write "<script>alert('" + sRndFileName + "');</script>"

  
      fso.CopyFile sFlashName,sFilePath 
     Response.write "<script>parent.ReturnValue('" + sRndFileName + "');</script>"
   End If
  
  ' 取随机文件名
 Function GetRndFileName(sExt)
	Dim sRnd
	Randomize
	sRnd = Int(900 * Rnd) + 100
	GetRndFileName = year(now) & month(now) & day(now) & hour(now) & minute(now) & second(now) & sRnd & "." & sExt
 End Function

  '自定义一个取文件名的函数  
 Function GetFileName(PathString) 
   GetFileName = PathString
   For p = Len(PathString) To 0 Step -1
   If Mid(PathString,p,1) = "\" then 
   GetFileName = Right(PathString,Len(PathString)-p)
   Exit Function
  End If
  Next 
 End Function

'自定义一个取文件扩展名的函数  
 Function GetFileType(PathString) 
   GetFileType = PathString
   For p = Len(PathString) To 0 Step -1
   If Mid(PathString,p,1) = "." then 
   GetFileType = Right(PathString,Len(PathString)-p)
   Exit Function
  End If
  Next 
 End Function

%>

</body>

</html>
