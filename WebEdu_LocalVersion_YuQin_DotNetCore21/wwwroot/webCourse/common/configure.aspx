<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>系统配置</title>
</head>
<script>
function fnReturnSettingMarquee(){
dialogArguments.sReturnOrganization=document.getElementById("sOrganization").value;
dialogArguments.sReturnContact=document.getElementById("sContact").value;
dialogArguments.sReturnThinking=document.getElementById("sThinking").value;
dialogArguments.fnSettingMarquee();
dialogArguments.fnSaveSettings();
}

function fnOriginSetting(){//欲获得滚动字幕的值,还未编写
	;
}
</script>

<body onload="fnOriginSetting();">

<table border="0" width="100%" id="table1">
	<tr>
		<td>配置项：<p>一.滚动字幕：</p>
		<ol>
			<li>
			<p style="line-height: 150%; margin-top: 0">组织机构（如学校）&nbsp; 
			<input type="text" name="sOrganization" id="sOrganization" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px">
			</li>
			<li>
			<p style="line-height: 150%; margin-top: 0">联系方式（如E-Mail）<input type="text" name="sContact" id="sContact" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px"></li>
			<li>
			<p style="line-height: 150%; margin-top: 0">其他（如感言）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
			<input type="text" name="sThinking" id="sThinking" size="20" style="border-style: solid; border-width: 1px; padding-left: 4px; padding-right: 4px; padding-top: 1px; padding-bottom: 1px"></li>
		</ol>
		</td>
	</tr>
	<tr>
		<td>
			<p style="line-height: 150%; margin-top: 0" align="center">
			<input type="button" value="确定" name="sOK" id="sOK" onclick="fnReturnSettingMarquee();window.close();">&nbsp;
			<input type="button" value="取消" name="sCancel" id="sCancel" onclick="window.close();"></p>
		</td>
	</tr>
</table>

</body>

</html>

