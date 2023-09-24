 <%
   sImagePath=Request("sImagePath")
   sImagePath=sPathToClient(sImagePath,"\")
   'Response.write "<script>alert('"+sImagePath+"')</script>"
   
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
<style type="text/css">
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "宋体", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>

<script language="JavaScript">
var sAction = "INSERT";
var sTitle = "插入";

var oControl;
var oSeletion;
var sRangeType;

var sFromUrl = "http://";
var sAlt = "";
var sFilter = "";
var sAlign = "";
var sWidth = "";
var sHeight = "";


var sCheckFlag = "file";

oSelection = dialogArguments.document.selection.createRange();
sRangeType = dialogArguments.document.selection.type;

// 初始值
function InitDocument(){
	SearchSelectValue(d_filter, sFilter);
	SearchSelectValue(d_align, sAlign.toLowerCase());
	d_alt.value = sAlt;
	d_width.value = sWidth;
	d_height.value = sHeight;
}

// 搜索下拉框值与指定值匹配，并选择匹配项
function SearchSelectValue(o_Select, s_Value){
	for (var i=0;i<o_Select.length;i++){
		if (o_Select.options[i].value == s_Value){
			o_Select.selectedIndex = i;
			return true;
		}
	}
	return false;
}

// 只能输入数字
function IsDigit(){
  return ((event.keyCode >= 48) && (event.keyCode <= 57));
}

// 本窗口返回值
function ReturnValue( sFromUrl ){
    sFromUrl = "http://localhost:8000/webCourse/lessons/content/book/<%=sImagePath%>/"+sFromUrl;
	sAlt = d_alt.value;
	sFilter = d_filter.options[d_filter.selectedIndex].value;
	sAlign = d_align.value;
	sWidth = d_width.value;
	sHeight = d_height.value;

		var sHTML = '';
		if (sFilter!=""){
			sHTML=sHTML+'filter:'+sFilter+';';
		}

		if (sHTML!=""){
			sHTML=' style="'+sHTML+'"';
		}
		sHTML = '<img  src="'+sFromUrl+'"'+sHTML;
		
		if (sAlt!=""){
			sHTML=sHTML+' alt="'+sAlt+'"';
		}
		if (sAlign!=""){
			sHTML=sHTML+' align="'+sAlign+'"';
		}
		if (sWidth!=""){
			sHTML=sHTML+' width="'+sWidth+'"';
		}
		if (sHeight!=""){
			sHTML=sHTML+' height="'+sHeight+'"';
		}
		sHTML=sHTML+' align="left"';
		sHTML=sHTML+'>';
		dialogArguments.insertHTML(sHTML);

		//var oTempElement = dialogArguments.document.getElementById("eWebEditor_TempElement_Img");
		//oTempElement.src = sFromUrl;
		//oTempElement.removeAttribute("id");

	window.returnValue = null;
	window.close();
}

// 点确定时执行
function ok(){

		// 使各输入框无效
		//DisableItems();
		// 显示正在上传图片
		//divProcessing.style.display="";
		// 上传表单提交
		d_uploadiframe.form1.submit();
}

// 使所有输入框无效
function DisableItems(){
	d_alt.disabled=true;
	d_filter.disabled=true;
	d_align.disabled=true;
	d_width.disabled=true;
	d_height.disabled=true;
	Ok.disabled=true;
}

// 使所有输入框有效
function AbleItems(){

	d_alt.disabled=false;
	d_filter.disabled=false;
	d_align.disabled=false;
	d_width.disabled=false;
	d_height.disabled=false;
	Ok.disabled=false;
}




</script>

<BODY bgColor=menu onload="InitDocument()">

<table border=0 cellpadding=0 cellspacing=0 align=center>
<tr>
	<td height="79">
	<fieldset>
	<legend>图片来源</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="293">
	<tr><td colspan=3 height=19>上传图片:</td></tr>
	<tr>
		<td width=7></td>
		<td align=right >
		
		</td>
		<td width=7></td>
	</tr>
	<tr><td colspan=3 height=33>
		<iframe name="I1" width="300" height="23" id="d_uploadiframe" src="upImage.asp?sImagePath=<%=sImagePath%>" scrolling="no" border="0" frameborder="0">
		浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe></td></tr>
	<tr><td colspan=3 height=1></td></tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=5></td></tr>
<tr>
	<td>
	<fieldset>
	<legend>显示效果</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="310">
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td>说明文字:</td>
		<td width=8></td>
		<td colspan=5>
		<input type=text id=d_alt size=38 value="" style="width:223; height:18"></td>
		<td width=7></td>
	</tr>
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td width=60></td>
	</tr>
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td>特殊效果:</td>
		<td width=8></td>
		<td width="72">
			<select id=d_filter style="width:72px" size=1>
			<option value='' selected>无</option>
			<option value='Alpha(Opacity=50)'>半透明</option>
			<option value='Alpha(Opacity=0, FinishOpacity=100, Style=1, StartX=0, StartY=0, FinishX=100, FinishY=140)'>线型透明</option>
			<option value='Alpha(Opacity=10, FinishOpacity=100, Style=2, StartX=30, StartY=30, FinishX=200, FinishY=200)'>放射透明</option>
			<option value='blur(add=1,direction=14,strength=15)'>模糊效果</option><option value='blur(add=true,direction=45,strength=30)'>风动模糊</option>
			<option value='Wave(Add=0, Freq=60, LightStrength=1, Phase=0, Strength=3)'>正弦波纹</option>
			<option value='gray'>黑白照片</option><option value='Chroma(Color=#FFFFFF)'>白色透明</option>
			<option value='DropShadow(Color=#999999, OffX=7, OffY=4, Positive=1)'>投射阴影</option>
			<option value='Shadow(Color=#999999, Direction=45)'>阴影</option>
			<option value='Glow(Color=#ff9900, Strength=5)'>发光</option>
			<option value='flipv'>垂直翻转</option>
			<option value='fliph'>左右翻转</option>
			<option value='grays'>降低彩色</option>
			<option value='xray'>X光照片</option>
			<option value='invert'>底片</option>
            </select>		
		</td>
		<td width=25></td>
		<td width="54">对齐方式:</td>
		<td width=5></td>
		<td width="72">
			<select id=d_align size=1 style="width:72px">
			<option value='' selected>默认</option>
			<option value='left'>居左</option>
			<option value='right'>居右</option>
			<option value='top'>顶部</option>
			<option value='middle'>中部</option>
			<option value='bottom'>底部</option>
			<option value='absmiddle'>绝对居中</option>
			<option value='absbottom'>绝对底部</option>
			<option value='baseline'>基线</option>
			<option value='texttop'>文本顶部</option>
			</select>
		</td>
		<td width=7></td>
	</tr>
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td>图片宽度:</td>
		<td width=8></td>
		<td width="72"><input type=text id=d_width size=10 value="" ONKEYPRESS="event.returnValue= IsDigit();" maxlength=4></td>
		<td width=25></td>
		<td width="54">图片高度:</td>
		<td width=5></td>
		<td width="72"><input type=text id=d_height size=10 value="" ONKEYPRESS="event.returnValue= IsDigit();" maxlength=4></td>
		<td width=7></td>
	</tr>
	<tr><td colspan=9 height=16 valign="top">
		
			</td></tr>
	<tr>
		<td width=7></td>
		<td width=60></td>
	</tr>
	<tr><td colspan=9 height=1></td></tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=5></td></tr>
<tr><td align=right><input type=submit value='  确定  ' id=Ok onclick="ok()">&nbsp;&nbsp;<input type=button value='  取消  ' onclick="window.close();"></td></tr>
</table>

</body>
</html>
