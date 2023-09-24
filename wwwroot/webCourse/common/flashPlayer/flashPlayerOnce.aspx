<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sAnimation;
	public string page;
	
	void Page_Load(object sender, EventArgs e)
	{
	  	  sAnimation=Request.QueryString["sAnimation"];
  		  page=sAnimation.Substring(0,sAnimation.LastIndexOf('.'))+".htm";
	}
</script>


<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>动画播放窗口</title>
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

<body  scroll="no">
<p>

<iframe name="I1" height="100%" width="100%" src="<%=page%>?sAnimation=<%=sAnimation%>&IsLoop=false" ></iframe>

</p>

</body>
</html>