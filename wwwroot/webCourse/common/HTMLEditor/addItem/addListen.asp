<html>

<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�����Ŀ</title>
<script language="javascript">
function addListen() {
 if(document.getElementById("itemA").value==""){
  alert("����дѡ��A!");
  }
 else if(document.getElementById("itemB").value==""){
   alert("����дѡ��B!");
  }
   else if(document.getElementById("itemC").value==""){
   alert("����дѡ��C!");
  }
   else if(document.getElementById("itemD").value==""){
   alert("����дѡ��D!");
  }
 else{
  //ȡ��
 var skey;
 var iRLen=document.getElementsByName("R1").length;
 for(var i=0;i<iRLen;i++) {
  if(document.getElementsByName("R1").item(i).checked) {
     skey=document.getElementsByName("R1").item(i).value;
     break;
    }
  }

 if(i<iRLen){
 var sInsertHtml="";
 var oDate=new Date();
 var Rid=oDate.getTime();
 sInsertHtml+=document.getElementById("title").value+'<BR>';
 sInsertHtml+='<input type="radio" value="A"  name="R'+Rid+'">'+document.getElementById("itemA").value+'<br>';
 sInsertHtml+='<input type="radio" value="B"  name="R'+Rid+'">'+document.getElementById("itemB").value+'<br>';
 sInsertHtml+='<input type="radio" value="C"   name="R'+Rid+'">'+document.getElementById("itemC").value+'<br>';
 sInsertHtml+='<input type="radio" value="D"  name="R'+Rid+'">'+document.getElementById("itemD").value+'<br>';
 sInsertHtml+='<span style="display:none;color:red">';
 sInsertHtml+='Key:'+skey+" "+document.getElementById("exp").value;
 sInsertHtml+='</span>';

 dialogArguments.insertHTML(sInsertHtml);
 window.close(); 
 // alert(sInsertHtml);
   }
   else {
   alert("����д��!")
   }
  }
 }
</script>
</head>

<body>
<form >
<table border="0" width="100%" id="table1">
	<tr>
		<td width="52" align="right">��Ŀ:</td>
		<td><textarea rows="4" name="S1" id="title" cols="62"></textarea></td>
	</tr>
	<tr>
		<td width="52" align="right">A.</td>
		<td><textarea rows="3" name="S2" id="itemA"  cols="62"></textarea></td>
	</tr>
	<tr>
		<td width="52" align="right">B.</td>
		<td><textarea rows="3" name="S3" id="itemB" cols="62"></textarea></td>
	</tr>
	<tr>
		<td width="52" align="right">C.</td>
		<td><textarea rows="4" name="S4" id="itemC" cols="62"></textarea></td>
	</tr>
	<tr>
		<td width="52" align="right">D.</td>
		<td><textarea rows="3" name="S5" id="itemD" cols="62"></textarea></td>
	</tr>
	<tr>
		<td width="52" id="key" align="right">��:</td>
		<td><input type="radio" value="A"  name="R1">A
		<input type="radio"  name="R1" value="B">B
		<input type="radio" name="R1" value="C">C
		<input type="radio" name="R1" value="D">D&nbsp; <font color="#919191">|</font> 
		ѡ�����з�ʽ: 
		<select size="1" name="D1">
		<option value="����">����</option>
		<option value="����">����</option>
		</select></td>
	</tr>
	<tr>
		<td width="52" align="right"  height="76">����:</td>
		<td height="76"><textarea rows="5" id="exp" name="S6" cols="62"></textarea></td>
	</tr>
	<tr>
		<td align="center" colspan="2">
		<input type="button" value="ȷ��" onclick="addListen()" name="B1"></td>
	</tr>
</table>
</form>
</body>

</html>