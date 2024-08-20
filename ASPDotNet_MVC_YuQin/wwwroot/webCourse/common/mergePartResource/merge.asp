<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>合并外部资源</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<% 
var bIsCopyed=false;

var sOriginPath=Request.queryString("sOriginPath")()+"\\wwwroot";
var sContentsPath=Server.mapPath("../../lessons/contents.htm");
var sPathFromRootToContents=sContentsPath.substring(Server.mapPath("/").length,sContentsPath.substring(0,sContentsPath.lastIndexOf("\\")).length);
var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//使用相对路径，虚拟目录改变后将不用修改代码。
if(sDriveType!=2){
	Response.write("您现在可能在光盘上运行，无法写入数据，在硬盘上运行该“网络课程基本模型”才能写入数据！！");//网络？
					}
else{
	try{//如果已复制部分文件,重新复制时,有时无法删除旧文件,出错时提示
		//oFSO.copyFile(sOriginPath+"\\"+sPathFromRootToContents+"\\"+"contents.asp",sContentsPath.substring(0,sContentsPath.lastIndexOf("\\")+1)+"contentsFormergePartResource.asp",true);
		var oFolder_content=oFSO.getFolder(sOriginPath+"\\"+sPathFromRootToContents+"\\"+"content\\");
		var eFoldersOfContent=new Enumerator(oFolder_content.subfolders);
		for(; !eFoldersOfContent.atEnd(); eFoldersOfContent.moveNext()){//复制源content下的所有文件夹到目标content下
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
	window.alert('已成功合并，请在主窗口中编辑！');
	window.close();
}
else{
	alert('未知的原因，未能正常合并！请重新启动"网络远程教学系统"!然后重试。');
	window.close();
}
</script>

</body>

</html>
