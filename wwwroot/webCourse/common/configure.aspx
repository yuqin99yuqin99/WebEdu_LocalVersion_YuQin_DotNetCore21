<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>ϵͳ����</title>
</head>
<script>
function fnReturnSettingMarquee(){
dialogArguments.sReturnOrganization=document.getElementById("sOrganization").value;
dialogArguments.sReturnContact=document.getElementById("sContact").value;
dialogArguments.sReturnThinking=document.getElementById("sThinking").value;
dialogArguments.fnSettingMarquee();
dialogArguments.fnSaveSettings();
}

function fnOriginSetting(){//����ù�����Ļ��ֵ,��δ��д
	;
}
</script>

<body onload="fnOriginSetting();">

<table border="0" width="100%" id="table1">
	<tr>
		<td>�����<p>һ.������Ļ��</p>
		<ol>
			<li>
			<p style="line-height: 150%; margin-top: 0">��֯��������ѧУ��&nbsp; 
			<input type="text" name="sOrganization" id="sOrganization" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px">
			</li>
			<li>
			<p style="line-height: 150%; margin-top: 0">��ϵ��ʽ����E-Mail��<input type="text" name="sContact" id="sContact" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px"></li>
			<li>
			<p style="line-height: 150%; margin-top: 0">����������ԣ�&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
			<input type="text" name="sThinking" id="sThinking" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px"></li>
		</ol>
		</td>
	</tr>
	<tr>
		<td>
			<p style="line-height: 150%; margin-top: 0" align="center">
			<input type="button" value="ȷ��" name="sOK" id="sOK" onclick="fnReturnSettingMarquee();window.close();">&nbsp;
			<input type="button" value="ȡ��" name="sCancel" id="sCancel" onclick="window.close();"></p>
		</td>
	</tr>
</table>

</body>

</html>

