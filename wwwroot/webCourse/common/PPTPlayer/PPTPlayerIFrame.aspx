<%@ Page language="c#"%>

<script language="C#" runat="server">
	public string sTeachingPlan;
	public string fs;
	
	void Page_Load(object sender, EventArgs e)
	{
		sTeachingPlan=Request.QueryString["sTeachingPlan"];
	 	fs=Request.QueryString["fs"];
	}
</script>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>PowerPiont��ʾ</title>
<style type="text/css">
body{margin:0;}
</style>
</head> 

<body  scroll="no">
<iframe name="I1" height="100%" width="100%" border="0" frameborder="0" src="PPTPlayer.aspx?sTeachingPlan=<%=sTeachingPlan%>&fs=<%=fs%>" target="_self">
�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe>
</body>

</html>
