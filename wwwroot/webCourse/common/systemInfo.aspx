<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sPromptString;
	void Page_Load(object sender, EventArgs e)
	{
	  sPromptString=Request.QueryString["sPromptString"];
	}
</script>


<HTML>
<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Page-Enter" content="revealTrans(Duration=2.0,Transition=2)">
<title>系统信息</title>

<base target="main">
</head>

<body scroll="no">

<div align="center">
  <center>
  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td width="100%" height="20%">
        <p style="font-size:18px" align="left">
        <script>
        var sPromptString="<% =sPromptString %>";
        document.write("<p>下面是关于系统信息的提示,更多信息请参看主界面提供的帮助:</p>"+"<ol>"+sPromptString+"</ol>");
        </script>
        </p>
        </td>
    </tr>
  </table>
  </center>
</div>
</body>

</html>
