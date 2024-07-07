<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>新建网页 1</title>
</head>

<body>
<%
counter = counter + 1
response.redirect "download.asp?n=" & trim(request("n"))
'response.end
%>
</body>

</html>
