<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϲ��ⲿ��Դ</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<% 
var bIsCopyed=false;

var sOriginPath=Request.queryString("sOriginPath")()+"\\wwwroot";
var sContentsPath=Server.mapPath("../../lessons/contents.htm");
var sPathFromRootToContents=sContentsPath.substring(Server.mapPath("/").length,sContentsPath.substring(0,sContentsPath.lastIndexOf("\\")).length);
var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//ʹ�����·��������Ŀ¼�ı�󽫲����޸Ĵ��롣
if(sDriveType!=2){
	Response.write("�����ڿ����ڹ��������У��޷�д�����ݣ���Ӳ�������иá�����γ̻���ģ�͡�����д�����ݣ���");//���磿
					}
else{
	try{//����Ѹ��Ʋ����ļ�,���¸���ʱ,��ʱ�޷�ɾ�����ļ�,����ʱ��ʾ
		//oFSO.copyFile(sOriginPath+"\\"+sPathFromRootToContents+"\\"+"contents.asp",sContentsPath.substring(0,sContentsPath.lastIndexOf("\\")+1)+"contentsFormergePartResource.asp",true);
		var oFolder_content=oFSO.getFolder(sOriginPath+"\\"+sPathFromRootToContents+"\\"+"content\\");
		var eFoldersOfContent=new Enumerator(oFolder_content.subfolders);
		for(; !eFoldersOfContent.atEnd(); eFoldersOfContent.moveNext()){//����Դcontent�µ������ļ��е�Ŀ��content��
			eFoldersOfContent.item().copy(sContentsPath.substring(0,sContentsPath.lastIndexOf("\\")+1)+"content\\",true);
																		}
		bIsCopyed=true;
		}
	catch(e){
		bIsCopyed=false;
			}
}

%>
<script>
var bIsCopyed='<% =bIsCopyed %>';
if(bIsCopyed=="True"){
	window.alert('�ѳɹ��ϲ��������������б༭��');
	window.close();
}
else{
	alert('δ֪��ԭ��δ�������ϲ�������������"����Զ�̽�ѧϵͳ"!Ȼ�����ԡ�');
	window.close();
}
</script>

</body>

</html>
