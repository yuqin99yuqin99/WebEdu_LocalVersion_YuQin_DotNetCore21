 <%
   sMusicPath=Request("sMusicPath")
   sMusicPath=sPathToClient(sMusicPath,"\")
  ' Response.write "<script>alert('"+sMusicPath+"')</script>"
   
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
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title >���¼���ļ�</title>
<style type="text/css">
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "����", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>
<script language ="javascript">
function fnInsertMusic(sUrl){
 var objectHtml="";

 switch (D1.value)
 {
  	case "1": //������
  	{
  		
  		var oP=dialogArguments.document.frames(0).document.createElement("p");
  		objectHtml+='<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="250" height="45">';
 		objectHtml+='<param name="URL" value="'+sUrl+'">';
 		objectHtml+='<param name="autoStart" value="0"></object>';
 		buttonHtml='<input type="button" onclick="ReduceRate()"   value="����"><input type="button" onclick="IncreaseRate()"  value="����">';
 		buttonHtml+='<a href="" style="color:blue" onclick="window.event.returnValue=false;DownLoadmp3(\''+sUrl+'\')">����mp3</a>&nbsp;'
 		// alert(objectHtml+buttonHtml);
 		oP.innerHTML=objectHtml+buttonHtml;
 		
 		dialogArguments.document.frames(0).document.body.insertBefore(oP,dialogArguments.document.frames(0).document.body.childNodes(0))
 		//dialogArguments.insertHTML(objectHtml+buttonHtml);
 		break;
 	}
 	case "2": //��Ť
 	{
 		objectHtml+='<p align="center"><span style="display:none"><object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="20" height="1">';
 		objectHtml+='<param name="URL" value="'+sUrl+'">';
 		objectHtml+='<param name="autoStart" value="0"></object></span>';
 		buttonHtml='<input type="button" onclick="WindowsMediaPlayer1.Controls.play();" value="��ʼ����"></p>'
 		// alert(objectHtml+buttonHtml);
 		dialogArguments.insertHTML(objectHtml+buttonHtml);
 		break;

 	}
 	case "3"://��������
 	{
 		objectHtml+='<p align="center"><span style="display:none"><object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="20" height="1">';
 		objectHtml+='<param name="URL" value="'+sUrl+'">';
 		objectHtml+='<param name="autoStart" value="-1"></object></span>';
 		buttonHtml='';
 		// alert(objectHtml+buttonHtml);
 		dialogArguments.insertHTML(objectHtml+buttonHtml);
 		break;

 	}
 }
 close();
 }
 </script>
</HEAD> 
<body >

<p>
&nbsp;&nbsp;&nbsp;
����¼���ļ�</p>
<p align="center">
<iframe name="I1" src="uploadMusic.aspx?sMusicPath=<%=sMusicPath%>" width="297" height="51" border="0" frameborder="0" scrolling="no">
�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; ѡ�񲥷ŷ�ʽ:
<select size="1" id="D1" name="D1">
<option value="1">��ʾ������</option>
<option value="2">���Ű�Ť</option>
<option value="3">��������</option>
</select>&nbsp;&nbsp; �Ƿ��ṩ����?<select size="1" id="D2" name="D2">
<option value="1">�ṩ</option>
<option value="2">���ṩ</option>
</select></p>

</p>


<p align="center">
<input type="button" onclick="I1.document.getElementById('Button').click();" value="ȷ��" name="OK">
</p>
</body>
</html>