 <%
   sImagePath=Request("sImagePath")
   sImagePath=sPathToClient(sImagePath,"\")
   'Response.write "<script>alert('"+sImagePath+"')</script>"
   
   ' ����ͻ���ʱ"\\"ת������
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
body, a, table, div, span, td, th, input, select{font:9pt;font-family: "����", Verdana, Arial, Helvetica, sans-serif;}
body {padding:5px}
</style>

<script language="JavaScript">
var sAction = "INSERT";
var sTitle = "����";

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

// ��ʼֵ
function InitDocument(){
	SearchSelectValue(d_filter, sFilter);
	SearchSelectValue(d_align, sAlign.toLowerCase());
	d_alt.value = sAlt;
	d_width.value = sWidth;
	d_height.value = sHeight;
}

// ����������ֵ��ָ��ֵƥ�䣬��ѡ��ƥ����
function SearchSelectValue(o_Select, s_Value){
	for (var i=0;i<o_Select.length;i++){
		if (o_Select.options[i].value == s_Value){
			o_Select.selectedIndex = i;
			return true;
		}
	}
	return false;
}

// ֻ����������
function IsDigit(){
  return ((event.keyCode >= 48) && (event.keyCode <= 57));
}

// �����ڷ���ֵ
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

// ��ȷ��ʱִ��
function ok(){

		// ʹ���������Ч
		//DisableItems();
		// ��ʾ�����ϴ�ͼƬ
		//divProcessing.style.display="";
		// �ϴ����ύ
		d_uploadiframe.form1.submit();
}

// ʹ�����������Ч
function DisableItems(){
	d_alt.disabled=true;
	d_filter.disabled=true;
	d_align.disabled=true;
	d_width.disabled=true;
	d_height.disabled=true;
	Ok.disabled=true;
}

// ʹ�����������Ч
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
	<legend>ͼƬ��Դ</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="293">
	<tr><td colspan=3 height=19>�ϴ�ͼƬ:</td></tr>
	<tr>
		<td width=7></td>
		<td align=right >
		
		</td>
		<td width=7></td>
	</tr>
	<tr><td colspan=3 height=33>
		<iframe name="I1" width="300" height="23" id="d_uploadiframe" src="upImage.asp?sImagePath=<%=sImagePath%>" scrolling="no" border="0" frameborder="0">
		�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe></td></tr>
	<tr><td colspan=3 height=1></td></tr>
	</table>
	</fieldset>
	</td>
</tr>
<tr><td height=5></td></tr>
<tr>
	<td>
	<fieldset>
	<legend>��ʾЧ��</legend>
	<table border=0 cellpadding=0 cellspacing=0 width="310">
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td>˵������:</td>
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
		<td>����Ч��:</td>
		<td width=8></td>
		<td width="72">
			<select id=d_filter style="width:72px" size=1>
			<option value='' selected>��</option>
			<option value='Alpha(Opacity=50)'>��͸��</option>
			<option value='Alpha(Opacity=0, FinishOpacity=100, Style=1, StartX=0, StartY=0, FinishX=100, FinishY=140)'>����͸��</option>
			<option value='Alpha(Opacity=10, FinishOpacity=100, Style=2, StartX=30, StartY=30, FinishX=200, FinishY=200)'>����͸��</option>
			<option value='blur(add=1,direction=14,strength=15)'>ģ��Ч��</option><option value='blur(add=true,direction=45,strength=30)'>�綯ģ��</option>
			<option value='Wave(Add=0, Freq=60, LightStrength=1, Phase=0, Strength=3)'>���Ҳ���</option>
			<option value='gray'>�ڰ���Ƭ</option><option value='Chroma(Color=#FFFFFF)'>��ɫ͸��</option>
			<option value='DropShadow(Color=#999999, OffX=7, OffY=4, Positive=1)'>Ͷ����Ӱ</option>
			<option value='Shadow(Color=#999999, Direction=45)'>��Ӱ</option>
			<option value='Glow(Color=#ff9900, Strength=5)'>����</option>
			<option value='flipv'>��ֱ��ת</option>
			<option value='fliph'>���ҷ�ת</option>
			<option value='grays'>���Ͳ�ɫ</option>
			<option value='xray'>X����Ƭ</option>
			<option value='invert'>��Ƭ</option>
            </select>		
		</td>
		<td width=25></td>
		<td width="54">���뷽ʽ:</td>
		<td width=5></td>
		<td width="72">
			<select id=d_align size=1 style="width:72px">
			<option value='' selected>Ĭ��</option>
			<option value='left'>����</option>
			<option value='right'>����</option>
			<option value='top'>����</option>
			<option value='middle'>�в�</option>
			<option value='bottom'>�ײ�</option>
			<option value='absmiddle'>���Ծ���</option>
			<option value='absbottom'>���Եײ�</option>
			<option value='baseline'>����</option>
			<option value='texttop'>�ı�����</option>
			</select>
		</td>
		<td width=7></td>
	</tr>
	<tr><td colspan=9 height=5></td></tr>
	<tr>
		<td width=7></td>
		<td>ͼƬ���:</td>
		<td width=8></td>
		<td width="72"><input type=text id=d_width size=10 value="" ONKEYPRESS="event.returnValue= IsDigit();" maxlength=4></td>
		<td width=25></td>
		<td width="54">ͼƬ�߶�:</td>
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
<tr><td align=right><input type=submit value='  ȷ��  ' id=Ok onclick="ok()">&nbsp;&nbsp;<input type=button value='  ȡ��  ' onclick="window.close();"></td></tr>
</table>

</body>
</html>
