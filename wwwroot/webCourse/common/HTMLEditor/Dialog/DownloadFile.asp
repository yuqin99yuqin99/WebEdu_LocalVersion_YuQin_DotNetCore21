<%
   sFilePath=Request("sFilePath")
   
   sFilePath=sPathToClient(sFilePath,"\")
   
   returnFilePartPath=sPathToClient1(Request("sFilePath"),"\")
   
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
  
   ' ����ͻ���ʱ"\\"ת������,ûҪ�ļ���.
  Function sPathToClient1(sPath,symbol)
   dim aTemp
   sTemp=sPath
   aTemp=split(sTemp,symbol)
   sPathContentshtmNowNow=""
   iLength=Ubound(aTemp)-Lbound(aTemp)
   for i=Lbound(aTemp) to Ubound(aTemp)-1
	  sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp(i)+"\\\\"
    next
   
    sPath = sPathContentshtmNowNow
    sPathToClient1 = sPath	
  End Function

 %>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϴ��ṩ���ص��ļ�</title>
<script language="javascript">
function fnDownloadFile(sUrl)
{
	var objectHtml="";
	objectHtml='[<a  onclick="window.event.returnValue=false;window.open(\'../../../../common/download/download.asp?n='+'<%=returnFilePartPath%>'+sUrl+'\');" href="">����</a>]';
	dialogArguments.insertHTML(objectHtml);
}
</script>
</head>

<body>
&nbsp;&nbsp;&nbsp;&nbsp; ѡ���ļ�:<p align="center">
<iframe name="I1" src="upfile.asp?sDownFilePath=<%=sFilePath%>" width="379" height="51" border="0" frameborder="0" scrolling="no">
�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe></p>
</p>
<p align="center">
<input type="button" onclick="I1.form1.submit();" value="ȷ��" name="OK">
</p>


</body>

</html>