 <%
   sFlashPath=Request("sFlashPath")
   sFlashPath=sPathToClient(sFlashPath,"\")
   'Response.write "<script>alert('"+sFlashPath+"')</script>"
   
   ' ����ͻ���ʱ"\\"ת������
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
<title>�½���ҳ 1</title>
<style type="text/css">
body{margin:0}
</style>
</head>

<body>

<form method="POST" id="myform" action="upflash.asp?sFlashPath=<%=sFlashPath%>">
	<p><input type="file" name="FlashName" size="28"></p>
	
</form>
<% 
  '�ύ�����������ָ��Ŀ¼��,���������߱༭��ֵ
  
   If Not Request("FlashName")="" Then
   
      Set fso = Server.CreateObject("Scripting.FileSystemObject")
      sFilePath = Server.mapPath("../../../"+sFlashPath)
       sFilePath=fso.GetParentFolderName(sFilePath)
      'Response.write "<script>alert('" + sFilePath + "')</script>"
      sFlashName = Request("FlashName")
      sFileType = GetFileType(sFlashName)
      sRndFileName = GetRndFileName(sFileType)
      sFilePath = sFilePath+"\" + sRndFileName 'Ŀ¼+�������Ŀ���ļ���
       
      ' Response.write "<script>alert('" + sRndFileName + "');</script>"

  
      fso.CopyFile sFlashName,sFilePath 
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
