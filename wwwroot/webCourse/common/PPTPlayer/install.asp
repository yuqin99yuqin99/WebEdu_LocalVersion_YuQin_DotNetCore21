<% @language="JScript" %>
<%
  var sTeachingPlan=Request.queryString("sTeachingPlan")();
%>

<html>

<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>您还没安装PPT播放器</title>
</head>

<body>

<table border="0" width="100%" id="table1" height="100%">
	<tr>
		<td align="center">您还没安装PPT播放器<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<font face="方正舒体" size="5" color="#0000FF"><b><i>
		<a href="../../../../../../../../../../../../../plugIns/webedu_local.exe">点击安装</a></i></b></font></p>
		<p>　</td>
	</tr>
	<tr>
		<td align="right" height="20"><a href="PPTPlayer.asp?sTeachingPlan=<%=sTeachingPlan%>">返回播放页面</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</td>
	</tr>
</table>

</body>

</html>
