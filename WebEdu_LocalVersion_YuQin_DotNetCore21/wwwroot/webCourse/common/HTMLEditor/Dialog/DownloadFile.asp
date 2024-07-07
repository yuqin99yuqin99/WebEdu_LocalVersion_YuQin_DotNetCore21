<%
   sFilePath=Request("sFilePath")
   
   sFilePath=sPathToClient(sFilePath,"\")
   
   returnFilePartPath=sPathToClient1(Request("sFilePath"),"\")
   
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
  
   ' 输出客户端时"\\"转换函数,没要文件名.
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
<title>上传提供下载的文件</title>
<script language="javascript">
function fnDownloadFile(sUrl)
{
	var objectHtml="";
	objectHtml='[<a  onclick="window.event.returnValue=false;window.open(\'../../../../common/download/download.asp?n='+'<%=returnFilePartPath%>'+sUrl+'\');" href="">下载</a>]';
	dialogArguments.insertHTML(objectHtml);
}
</script>
</head>

<body>
&nbsp;&nbsp;&nbsp;&nbsp; 选择文件:<p align="center">
<iframe name="I1" src="upfile.asp?sDownFilePath=<%=sFilePath%>" width="379" height="51" border="0" frameborder="0" scrolling="no">
浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe></p>
</p>
<p align="center">
<input type="button" onclick="I1.form1.submit();" value="确定" name="OK">
</p>


</body>

</html>