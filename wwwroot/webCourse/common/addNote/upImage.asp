<%
  Dim sImagePath
  Dim sFilePath
  Dim sFileType
  Dim sImageName
  
 sImagePath = Request("sImagePath") '部分保存路径
 'sImagePath = sPathToClient(sImagePath,"\") '不用转,但保留在此
  
 ' Response.write "<script>alert('"+sImagePath+"')</script>"
  
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

<form method="POST" id="form1" action="upImage.asp?sImagePath=<%=sImagePath%>" >
	<p><input onclick="parent.AbleItems()" type="file" name="ImageName" size="28"></p>

</form>
<% 
  '提交后把它拷贝到指定目录下,并返回在线编辑的值

  
   If Not Request("ImageName")="" Then
   
      Set fso = Server.CreateObject("Scripting.FileSystemObject")
      sFilePath = Server.mapPath("../../lessons/content/book/"+sImagePath+"/")
       'sFilePath=fso.GetParentFolderName(sFilePath)
      'Response.write "<script>alert('" + sFilePath + "')</script>"
      sImageName = Request("ImageName")
      sFileType = GetFileType(sImageName)
      sRndFileName = GetRndFileName(sFileType)
      sFilePath = sFilePath+"\" + sRndFileName '目录+随机生成目标文件名
         
      fso.CopyFile sImageName,sFilePath 
      ' Response.write "<script>alert('" + sRndFileName + "');</script>"
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

