<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϴ����������ļ�</title>
<style >
	td{font-size:12px}
	body{margin:0}
</style>
<script >
function fnPartPath(path)
{

	PartPath.options[0].text+=path;
	document.frames("I1").document.location.href="FilesList.aspx?PartPath="+PartPath.options[0].text;
 
}
function fnUp()
{
	PartPath.options[0].text="\\"+PartPath.options[0].text.substring(0,PartPath.options[0].text.lastIndexOf("\\"));
	document.frames("I1").document.location.href="FilesList.aspx?PartPath="+PartPath.options[0].text;
}
</script>
</head>

<body>

<table border="0" width="100%" id="table2" height="100%">
	<tr>
		<td height="27" bgcolor="#EBEADB">
		
			<select id="PartPath" style="width:287; height:19" size="1" name="D1">
			<option>\</option>
			</select>

		<img border="0" src="image/up.png" onclick="fnUp()" width="23" height="20"></td>
	</tr>
	<tr>
		<td height="32">
		<table border="0" width="100%" id="table3" height="30">
			<tr>
				<td background="image/Im.png" align="center">����</td>
				<td background="image/Im.png" align="center">��С</td>
				<td background="image/Im.png" align="center">����</td>
				<td background="image/Im.png" align="center">�޸�����</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr>
		<td><iframe name="I1" height="100%" width="100%" src="Fileslist.aspx">
		�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe></td>
	</tr>
</table>

</body>

</html>