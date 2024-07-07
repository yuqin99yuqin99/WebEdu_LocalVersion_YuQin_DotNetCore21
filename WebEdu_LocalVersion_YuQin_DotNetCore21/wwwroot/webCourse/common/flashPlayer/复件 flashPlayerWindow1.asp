<% @language="JScript" %>
<%
  var sAnimation=Request.queryString("sAnimation")();
%>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>flash播放器</title>
<style type="text/css">
 body{margin:0}
</style>
<SCRIPT language="jscript">
  var sPlayFileName='<%=sAnimation%>';
 function InitContent() {
  jgskjwflashPlayer.Movie = sPlayFileName;
  }
</SCRIPT>

</head>

<body  onload="InitContent()" scroll="no">
<script language="javascript" src="../script/showActiveX.js"></script><script language="javascript">flashPlayerActiveX();</script> 
</body>
</html>
