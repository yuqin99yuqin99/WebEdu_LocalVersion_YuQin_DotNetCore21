
<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sFlashPath;
	void Page_Load(object sender, EventArgs e)
	{
	  sFlashPath=Request.QueryString["sFlashPath"].Replace("\\","\\\\");
	
	}
</script>
<HTML>
<HEAD>
<TITLE>Flash动画属性</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<style type="text/css">
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "宋体", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>


<script language="JavaScript">

// 图片来源单先点击事件
function RadioClick(what){
	if (what=="url"){
		d_checkfromfile.checked=false;
		d_fromurl.disabled=false;
		d_checkfromurl.checked=true;
		d_file.myform.uploadfile.disabled=true;
	}else{
		d_checkfromurl.checked=false;
		d_file.myform.uploadfile.disabled=false;
		d_checkfromfile.checked=true;
		d_fromurl.disabled=true;
	}
}

// 上传帧调入完成时执行
function UploadLoaded(){
	// 初始radio
	RadioClick('file');
}

// 上传错误
function UploadError(sErrDesc){
	AbleItems();
	RadioClick('file');
	divProcessing.style.display="none";
	try {
		BaseAlert(d_file.myform.uploadfile,sErrDesc);
	}
	catch(e){}
}


// 本窗口返回值
function ReturnValue( sFromUrl ){
	//var sFromUrl = d_fromurl.value;
	var sWidth = d_width.value;
	var sHeight = d_height.value;
	
	var sHTML = "<OBJECT codeBase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0 classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
	if (sWidth!="") sHTML+=" width="+sWidth;
	if (sHeight!="") sHTML+=" height="+sHeight;
	sHTML+="><PARAM NAME=movie VALUE='"+sFromUrl+"'><PARAM NAME=quality VALUE=high><embed src='"+sFromUrl+"' quality=high pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash'";
	if (sWidth!="") sHTML+=" width="+sWidth;
	if (sHeight!="") sHTML+=" height="+sHeight;
	sHTML+=">"+sFromUrl+"</embed></OBJECT>";
	
	dialogArguments.insertHTML(sHTML);

	window.returnValue = null;
	window.close();
}

// 点确定时执行
function ok(){

		d_file.form1.Button1.click();

}

// 使所有输入框无效
function DisableItems(){
	d_checkfromfile.disabled=true;
	d_checkfromurl.disabled=true;
	d_fromurl.disabled=true;
	d_width.disabled=true;
	d_height.disabled=true;
	Ok.disabled=true;
}

// 使所有输入框有效
function AbleItems(){
	d_checkfromfile.disabled=false;
	d_checkfromurl.disabled=false;
	d_fromurl.disabled=false;
	d_width.disabled=false;
	d_height.disabled=false;
	Ok.disabled=false;
}

</script>
</HEAD>

<BODY bgColor=menu>

<table border=0 cellpadding=0 cellspacing=0 width="304">
<tr>
	<td>
	<fieldset>
	<legend>Flash来源</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="368">
	<tr><td colspan=2 height=4></td></tr>
	<tr>
		<td colspan="2" height="32" valign="top">:flash文件:<iframe name="d_file" id="d_file" width="282" height="25" src="UploadFlash.aspx?sFlashPath=<%=sFlashPath%>" scrolling="no" border="0" frameborder="0">浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>
		
		</td>
	</tr>
	<tr>
		<td width=7></td>
		<td width=361></td>
	</tr>
	<tr><td colspan=2 height=5></td></tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=5></td></tr>
<tr>
	<td>
	<fieldset>
	<legend>显示效果</legend>
	<table border=0 cellpadding=0 cellspacing=0>
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td noWrap>显示宽度:</td>
		<td width=5></td>
		<td><input type=text id=d_width size=10 value="" maxlength=4></td>
		<td width=40></td>
		<td noWrap>显示高度:</td>
		<td width=5></td>
		<td><input type=text id=d_height size=10 value="" maxlength=4></td>
		<td width=7></td>
	</tr>
	<tr><td colspan=9 height=5></td></tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=5></td></tr>
<tr><td align=center><input type=submit value=' 确定 ' id=Ok onclick="ok()">&nbsp;&nbsp;<input type=button value='  取消  ' onclick="window.close();"></td></tr>
</table>

</body>
</html>

