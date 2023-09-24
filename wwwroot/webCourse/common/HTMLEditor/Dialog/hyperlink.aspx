<%@ Page language="c#"%>

<script language="C#" runat="server">
	public string sHyperlinkPath;
	void Page_Load(object sender, EventArgs e)
	{
	  sHyperlinkPath=Request.QueryString["sHyperlinkPath"].Replace("\\","\\\\");
	}
</script>
<HTML>
<HEAD>
<META content="text/html; charset=gb2312" http-equiv=Content-Type>

<style type="text/css">
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "宋体", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>

<Script Language=JavaScript>

function CreateHyperlink(sUrl){

	sTarget = d_target.options[d_target.selectedIndex].value;
	if (sUrl != ""){
	dialogArguments.HtmlEdit.document.execCommand("CreateLink",false,sUrl);			
		
	        oRange = dialogArguments.HtmlEdit.document.selection.createRange();
			sType = dialogArguments.HtmlEdit.document.selection.type;

			if (sType == "Control") {
				oSel = oRange(0).parentNode;
			}else{
				oSel = oRange.parentElement();
			}

			if (sTarget != ""){
				oSel.target = sTarget;
			}else{
				oSel.removeAttribute("target");
			}
			window.returnValue = null;
		
		
	} else {
		alert("链接地址不能为空");
		d_url.focus();
		return;
	}
	window.close();
	
	}

</Script>



<title>超级链接属性</title>

<SCRIPT event=onclick for=Ok language=JavaScript>
	oHyperlink.Form1.Button1.click();
</SCRIPT>

</HEAD>

<body bgcolor=menu >

<table border=0 cellpadding=0 cellspacing=0 align=center width="386">
<tr>
	<td height="79">
	<fieldset>
	<legend>超级链接信息</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="377" height="58">
	<tr><td colspan=5 height=2></td></tr>
	<tr>
		<td width=1 height="32"></td>
		<td noWrap width="82" height="32">上传链接文件:</td>
		<td width=3 height="32"></td>
		<td width="288" height="32">
		<iframe id="oHyperlink" name="oHyperlink" src="uploadhyperlink.aspx?sHyperlinkPath=<%=sHyperlinkPath%>" width="300" height="22" border="0" frameborder="0" scrolling="no"></iframe></td>
	</tr>
	<tr><td colspan=5 height=6></td></tr>
	<tr>
		<td width=1 height="18"></td>
		<td height="18" width="82" align="right">链接目标:</td>
		<td width=3 height="18"></td>
		<td height="18"><select id=d_target style="width:72px" name="D1"><option value=''>默认(无)</option><option value='_self'>相同框架</option><option value='_top'>整页</option><option value='_blank'>新建窗口</option><option value='_parent'>父框架</option></select></td>
		<td width=4 height="18"></td>
	</tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=3></td></tr>
<tr><td align=right><input type=submit value='  确定  ' id=Ok>&nbsp;&nbsp;<input type=button value='  取消  ' onclick="window.close();"></td></tr>
</table>

</BODY>
</HTML>
