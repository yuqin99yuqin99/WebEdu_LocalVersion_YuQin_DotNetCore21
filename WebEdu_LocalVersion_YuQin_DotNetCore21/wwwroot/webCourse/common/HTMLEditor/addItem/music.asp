 <%
   sMusicPath=Request("sMusicPath")
   sMusicPath=sPathToClient(sMusicPath,"\")
  ' Response.write "<script>alert('"+sMusicPath+"')</script>"
   
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
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title >添加录音文件</title>
<style type="text/css">
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "宋体", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>
<script language ="javascript">
function fnInsertMusic(sUrl){
 var objectHtml="";

 switch (D1.value)
 {
  	case "1": //播放器
  	{
  		
  		var oP=dialogArguments.document.frames(0).document.createElement("p");
  		objectHtml+='<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="250" height="45">';
 		objectHtml+='<param name="URL" value="'+sUrl+'">';
 		objectHtml+='<param name="autoStart" value="0"></object>';
 		buttonHtml='<input type="button" onclick="ReduceRate()"   value="减速"><input type="button" onclick="IncreaseRate()"  value="加速">';
 		buttonHtml+='<a href="" style="color:blue" onclick="window.event.returnValue=false;DownLoadmp3(\''+sUrl+'\')">下载mp3</a>&nbsp;'
 		// alert(objectHtml+buttonHtml);
 		oP.innerHTML=objectHtml+buttonHtml;
 		
 		dialogArguments.document.frames(0).document.body.insertBefore(oP,dialogArguments.document.frames(0).document.body.childNodes(0))
 		//dialogArguments.insertHTML(objectHtml+buttonHtml);
 		break;
 	}
 	case "2": //按扭
 	{
 		objectHtml+='<p align="center"><span style="display:none"><object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="20" height="1">';
 		objectHtml+='<param name="URL" value="'+sUrl+'">';
 		objectHtml+='<param name="autoStart" value="0"></object></span>';
 		buttonHtml='<input type="button" onclick="WindowsMediaPlayer1.Controls.play();" value="开始听力"></p>'
 		// alert(objectHtml+buttonHtml);
 		dialogArguments.insertHTML(objectHtml+buttonHtml);
 		break;

 	}
 	case "3"://背景音乐
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
插入录音文件</p>
<p align="center">
<iframe name="I1" src="uploadMusic.aspx?sMusicPath=<%=sMusicPath%>" width="297" height="51" border="0" frameborder="0" scrolling="no">
浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 选择播放方式:
<select size="1" id="D1" name="D1">
<option value="1">显示播放器</option>
<option value="2">播放按扭</option>
<option value="3">背景音乐</option>
</select>&nbsp;&nbsp; 是否提供下载?<select size="1" id="D2" name="D2">
<option value="1">提供</option>
<option value="2">不提供</option>
</select></p>

</p>


<p align="center">
<input type="button" onclick="I1.document.getElementById('Button').click();" value="确定" name="OK">
</p>
</body>
</html>