<%
  Dim sImagePath
  Dim sFilePath
  Dim sFileType
  Dim sImageName
  
 sImagePath = Request("sImagePath") '���ֱ���·��
 'sImagePath = sPathToClient(sImagePath,"\") '����ת,�������ڴ�
  
 ' Response.write "<script>alert('"+sImagePath+"')</script>"
  
 %>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�½���ҳ 1</title>
<style type="text/css">
body{margin:0}
</style>
</head>

<body>

<form method="POST" id="form1" action="upImage.asp?sImagePath=<%=sImagePath%>" >
	<p><input onclick="parent.AbleItems()" type="file" name="ImageName" size="28"></p>

</form>
<% 
  '�ύ�����������ָ��Ŀ¼��,���������߱༭��ֵ

  
   If Not Request("ImageName")="" Then
   
      Set fso = Server.CreateObject("Scripting.FileSystemObject")
      sFilePath = Server.mapPath("../../lessons/content/book/"+sImagePath+"/")
       'sFilePath=fso.GetParentFolderName(sFilePath)
      'Response.write "<script>alert('" + sFilePath + "')</script>"
      sImageName = Request("ImageName")
      sFileType = GetFileType(sImageName)
      sRndFileName = GetRndFileName(sFileType)
      sFilePath = sFilePath+"\" + sRndFileName 'Ŀ¼+�������Ŀ���ļ���
         
      fso.CopyFile sImageName,sFilePath 
      ' Response.write "<script>alert('" + sRndFileName + "');</script>"
      Response.write "<script>parent.ReturnValue('" + sRndFileName + "');</script>"
   End If
  
  ' ȡ����ļ���
 Function GetRndFileName(sExt)
	Dim sRnd
	Randomize
	sRnd = Int(900 * Rnd) + 100
	GetRndFileName = year(now) & month(now) & day(now) & hour(now) & minute(now) & second(now) & sRnd & "." & sExt
 End Function

  '�Զ���һ��ȡ�ļ����ĺ���  
 Function GetFileName(PathString) 
   GetFileName = PathString
   For p = Len(PathString) To 0 Step -1
   If Mid(PathString,p,1) = "\" then 
   GetFileName = Right(PathString,Len(PathString)-p)
   Exit Function
  End If
  Next 
 End Function

'�Զ���һ��ȡ�ļ���չ���ĺ���  
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

