<%@ Page language="c#" %>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϲ���Դ</title>
<script>
function fnContents(){
	var sFile=document.getElementById("F1").value.substring(document.getElementById("F1").value.lastIndexOf("\\")+1,document.getElementById("F1").value.length).toLowerCase();
	if(sFile=="index.hta"){
		open("../doing.htm?sString=����Ԥ��Ŀ¼...","sPreviewingContents","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
		open("PreviewContents.aspx?sOriginPath="+document.getElementById("F1").value.substring(0,document.getElementById("F1").value.lastIndexOf("\\")),"sPreviewingContents");
	}
	else{
		alert("ѡ���ı�����һ��������Զ�̽�ѧϵͳ_�����桱ϵͳ�е�index.hta�ļ�!ϵͳ�����ݸ��ļ�ȷ�������ϲ���Դ��Ŀ¼��");
	}
}
function fnMerge(){
	open("../doing.htm?sString=���ںϲ�...","sMerging","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
	parent.dialogArguments.fnForUndo();
	parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML=parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML+parent.frames("sIframeContents").document.getElementsByTagName("UL").item(0).innerHTML;
	parent.dialogArguments.fnContentsRefreshAFromAlreadyAutoNumbered();
	parent.dialogArguments.fnContentsRefreshImage();
	parent.dialogArguments.oPopup.document.getElementById("sIdUndo").disabled=false;
	open("merge.aspx?sOriginPath="+document.getElementById("F1").value.substring(0,document.getElementById("F1").value.lastIndexOf("\\")),"sMerging");
}
</script>
<base target="sIframeContents">
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td width="99%">
	<p align="left">��ѡ�񽫱��ϲ���Դ��index.hta�ļ���
	<input type="file" name="F1" id="F1" size="20" title="ѡ�񽫱��ϲ���Դ��index.hta�ļ���ϵͳ�����ݸ��ļ�ȷ�������ϲ���Դ��Ŀ¼��Ȼ�����Ŀ¼���кϲ�">&nbsp;
	<input type="button" value="Ԥ��Ŀ¼" name="sContents" id="sContents" onclick='fnContents();' title="����߱�Ŀ¼�ṹ��Word�ĵ����ܲ��Ϊ����,���ȱ���Ԥ��Ŀ¼���,���ܽ�һ����ֿ���">
	<input type="button" value="��ʼ�ϲ�" name="sMerge" id="sMerge" onclick='fnMerge();' title="����ʼ�ϲ����ϲ���������Ŀ¼�ĵ�ǰ��Ŀ�£�Ȼ����������������±༭Ŀ¼��" disabled></p></form>
	</p>
	</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
