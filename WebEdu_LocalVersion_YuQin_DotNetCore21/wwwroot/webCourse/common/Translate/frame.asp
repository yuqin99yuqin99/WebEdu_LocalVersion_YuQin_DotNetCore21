<% @language="JScript"%>
<%
	var sText=Request("sText")();
%>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>添加中文翻译</title>
</head>

<frameset rows="81">
	
	<frame name="main" src="Translate.asp?sText=<%=sText%>">

</frameset>
</html>
