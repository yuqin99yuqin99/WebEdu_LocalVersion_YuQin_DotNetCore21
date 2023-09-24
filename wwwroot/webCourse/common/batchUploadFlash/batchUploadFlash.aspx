<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>复制系统部分资源</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<% 
var bIsCopyed=false;
var sFiles_text=Request.form("text")();
var sFiles_text_origin=Request.form("text_origin")();
var sFiles_text_foreign=Request.form("text_foreign")();
var sFiles_text_foreign_origin=Request.form("text_foreign_origin")();
var sFiles_teachingPlan=Request.form("teachingPlan")();
var sFiles_teachingPlan_origin=Request.form("teachingPlan_origin")();
var sFiles_teachingPlan_foreign=Request.form("teachingPlan_foreign")();
var sFiles_teachingPlan_foreign_origin=Request.form("teachingPlan_foreign_origin")();
var sFiles_animation=Request.form("animation")();
var sFiles_animation_origin=Request.form("animation_origin")();
var sFiles_animation_foreign=Request.form("animation_foreign")();
var sFiles_animation_foreign_origin=Request.form("animation_foreign_origin")();
var sFiles_note=Request.form("note")();

var sPathSelected=Request.form("sPath")();
var sPath=sPathSelected+"wwwroot\\";
var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//使用相对路径，虚拟目录改变后将不用修改代码。
if(sDriveType!=2){
	Response.write("您现在可能在光盘上运行，无法写入数据，在硬盘上运行该“网络课程基本模型”才能写入数据！！");//网络？
}
else{//今后要改写为循环,便于维护
	try
	{//如果已复制部分文件,重新复制时,有时无法删除旧文件,出错时提示
		var sPathSource=Server.mapPath("/");
		var oFolderWebEduSystemRoot=oFSO.getFolder(sPathSource);
		var oParentFolderOfWebEduSystemRoot=oFolderWebEduSystemRoot.parentFolder;//准备拷贝wwwroot父文件下的所有文件到选定的文件夹下
		if(oFSO.folderExists(sPath)){
			;
	}
	else
	{
		oFSO.createFolder(sPath);//创建wwwroot目标文件夹,准备复制wwwroot下的文件和文件;
	}											
		var eFilesOfParentFolderOfWebEduSystemRoot=new Enumerator(oParentFolderOfWebEduSystemRoot.files);
		for(; !eFilesOfParentFolderOfWebEduSystemRoot.atEnd();eFilesOfParentFolderOfWebEduSystemRoot.moveNext()){
				eFilesOfParentFolderOfWebEduSystemRoot.item().copy(sPathSelected,true);
																												}
		
		var eSubFoldersOfWebEduSystemRoot=new Enumerator(oFolderWebEduSystemRoot.subfolders);
		var eFilesOfWebEduSystemRoot=new Enumerator(oFolderWebEduSystemRoot.files);
		for(; !eSubFoldersOfWebEduSystemRoot.atEnd(); eSubFoldersOfWebEduSystemRoot.moveNext()){//复制除webCourse文件夹的所有文件夹
			if(eSubFoldersOfWebEduSystemRoot.item().name=="webCourse"){
			 	;
			}
			else{
				eSubFoldersOfWebEduSystemRoot.item().copy(sPath,true);
			}
																								}
		for(; !eFilesOfWebEduSystemRoot.atEnd(); eFilesOfWebEduSystemRoot.moveNext()){//复制教学系统根文件夹下的所有文件
				eFilesOfWebEduSystemRoot.item().copy(sPath,true);
																						}
		if(oFSO.folderExists(sPath+"webCourse\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\");//创建webCourse目标文件夹,准备复制webCourse下的文件和文件
		}
		var oFolderOfWebCourse=oFSO.getFolder(sPathSource+"webCourse\\");
		var eSubFoldersOfWebCourseFolder=new Enumerator(oFolderOfWebCourse.subfolders);
		for(; !eSubFoldersOfWebCourseFolder.atEnd(); eSubFoldersOfWebCourseFolder.moveNext()){//复制webCourse下的文件夹
			if(eSubFoldersOfWebCourseFolder.item().name=="lessons"){
			 	;
			}
			else{
				eSubFoldersOfWebCourseFolder.item().copy(sPath+"webCourse\\",true);
			}
																	}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\")){
			oFSO.deleteFolder(sPath+"webCourse\\lessons",true);//先删除,再创建,以免保留有原来的。deleteFolder(sPath+"webCourse\\lessons\\",true)出错！！！
			oFSO.createFolder(sPath+"webCourse\\lessons\\");//创建webCourse\lessons目标文件夹,准备复制webCourse\lessons下的文件和文件
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\");
			}
		var oFolderOfLessons=oFSO.getFolder(sPathSource+"webCourse\\lessons\\");//复制webCourse\lessons下的文件
		var eFilesOfLessons=new Enumerator(oFolderOfLessons.files);
		for(; !eFilesOfLessons.atEnd(); eFilesOfLessons.moveNext()){//复制webCourse\lessons下的文件
				eFilesOfLessons.item().copy(sPath+"webCourse\\lessons\\",true);
																	}
		
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\")){//创建webCourse\lessons\content目标文件夹及其下面的子文件夹,准备复制
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\");
			}
			
			
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\book\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\book\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\book_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\book_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\book_origin\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\book_origin\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\book_origin_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\book_origin_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\play\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\play\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\play_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\play_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\play_origin\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\play_origin\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\play_origin_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\play_origin_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\teachingPlan\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\teachingPlan\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\teachingPlan_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\teachingPlan_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\teachingPlan_origin\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\teachingPlan_origin\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\teachingPlan_origin_foreign\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\teachingPlan_origin_foreign\\");
		}
		if(oFSO.folderExists(sPath+"webCourse\\lessons\\content\\note\\")){
			;
		}
		else{
			oFSO.createFolder(sPath+"webCourse\\lessons\\content\\note\\");
		}
		
		var oFolder_book=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\book\\");
		var oFolder_book_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\book_foreign\\");
		var oFolder_book_origin=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\book_origin\\");
		var oFolder_book_origin_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\book_origin_foreign\\");
		var oFolder_play=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\play\\");
		var oFolder_play_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\play_foreign\\");
		var oFolder_play_origin=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\play_origin\\");
		var oFolder_play_origin_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\play_origin_foreign\\");
		var oFolder_teachingPlan=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\teachingPlan\\");
		var oFolder_teachingPlan_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\teachingPlan_foreign\\");
		var oFolder_teachingPlan_origin=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\teachingPlan_origin\\");
		var oFolder_teachingPlan_origin_foreign=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\teachingPlan_origin_foreign\\");
		var oFolder_note=oFSO.getFolder(sPathSource+"webCourse\\lessons\\content\\note\\");
		
		var eSubFolders_book=new Enumerator(oFolder_book.subfolders);
		var eSubFolders_book_foreign=new Enumerator(oFolder_book_foreign.subfolders);
		var eSubFolders_book_origin=new Enumerator(oFolder_book_origin.subfolders);
		var eSubFolders_book_origin_foreign=new Enumerator(oFolder_book_origin_foreign.subfolders);
		var eSubFolders_play=new Enumerator(oFolder_play.subfolders);
		var eSubFolders_play_foreign=new Enumerator(oFolder_play_foreign.subfolders);
		var eSubFolders_play_origin=new Enumerator(oFolder_play_origin.subfolders);
		var eSubFolders_play_origin_foreign=new Enumerator(oFolder_play_origin_foreign.subfolders);
		var eSubFolders_teachingPlan=new Enumerator(oFolder_teachingPlan.subfolders);
		var eSubFolders_teachingPlan_foreign=new Enumerator(oFolder_teachingPlan_foreign.subfolders);
		var eSubFolders_teachingPlan_origin=new Enumerator(oFolder_teachingPlan_origin.subfolders);
		var eSubFolders_teachingPlan_origin_foreign=new Enumerator(oFolder_teachingPlan_origin_foreign.subfolders);
		var eSubFolders_note=new Enumerator(oFolder_note.subfolders);
		
		for(; !eSubFolders_book.atEnd(); eSubFolders_book.moveNext()){//复制webCourse\\lessons\\content\\book\\被选定的文件夹
			if(sFiles_text.indexOf(eSubFolders_book.item().name+";")>=0){
				eSubFolders_book.item().copy(sPath+"webCourse\\lessons\\content\\book\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_book_foreign.atEnd(); eSubFolders_book_foreign.moveNext()){
			if(sFiles_text_foreign.indexOf(eSubFolders_book_foreign.item().name+";")>=0){
				eSubFolders_book_foreign.item().copy(sPath+"webCourse\\lessons\\content\\book_foreign\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_book_origin.atEnd(); eSubFolders_book_origin.moveNext()){
			if(sFiles_text_origin.indexOf(eSubFolders_book_origin.item().name+";")>=0){
				eSubFolders_book_origin.item().copy(sPath+"webCourse\\lessons\\content\\book_origin\\",true);
			}
			else{
				;
			}
		}
		
		for(; !eSubFolders_book_origin_foreign.atEnd(); eSubFolders_book_origin_foreign.moveNext()){
			if(sFiles_text_foreign_origin.indexOf(eSubFolders_book_origin_foreign.item().name+";")>=0){
				eSubFolders_book_origin_foreign.item().copy(sPath+"webCourse\\lessons\\content\\book_origin_foreign\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_teachingPlan.atEnd(); eSubFolders_teachingPlan.moveNext()){
			if(sFiles_teachingPlan.indexOf(eSubFolders_teachingPlan.item().name+";")>=0){
				eSubFolders_teachingPlan.item().copy(sPath+"webCourse\\lessons\\content\\teachingPlan\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_teachingPlan_foreign.atEnd();eSubFolders_teachingPlan_foreign.moveNext()){
			if(sFiles_teachingPlan_foreign.indexOf(eSubFolders_teachingPlan_foreign.item().name+";")>=0){
				eSubFolders_teachingPlan_foreign.item().copy(sPath+"webCourse\\lessons\\content\\teachingPlan_foreign\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_teachingPlan_origin.atEnd();eSubFolders_teachingPlan_origin.moveNext()){
			if(sFiles_teachingPlan_origin.indexOf(eSubFolders_book.item().name+";")>=0){
				eSubFolders_teachingPlan_origin.item().copy(sPath+"webCourse\\lessons\\content\\teachingPlan_origin\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_teachingPlan_origin_foreign.atEnd(); eSubFolders_teachingPlan_origin_foreign.moveNext()){
			if(sFiles_teachingPlan_foreign_origin.indexOf(eSubFolders_teachingPlan_origin_foreign.item().name+";")>=0){
				eSubFolders_teachingPlan_origin_foreign.item().copy(sPath+"webCourse\\lessons\\content\\teachingPlan_foreign_origin\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_play.atEnd(); eSubFolders_play.moveNext()){
			if(sFiles_animation.indexOf(eSubFolders_play.item().name+";")>=0){
				eSubFolders_play.item().copy(sPath+"webCourse\\lessons\\content\\play\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_play_foreign.atEnd(); eSubFolders_play_foreign.moveNext()){
			if(sFiles_animation_foreign.indexOf(eSubFolders_play_foreign.item().name+";")>=0){
				eSubFolders_play_foreign.item().copy(sPath+"webCourse\\lessons\\content\\play_foreign\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_play_origin.atEnd(); eSubFolders_play_origin.moveNext()){
			if(sFiles_animation_origin.indexOf(eSubFolders_play_origin.item().name+";")>=0){
				eSubFolders_play_origin.item().copy(sPath+"webCourse\\lessons\\content\\play_origin\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_play_origin_foreign.atEnd(); eSubFolders_play_origin_foreign.moveNext()){
			if(sFiles_animation_foreign_origin.indexOf(eSubFolders_play_origin_foreign.item().name+";")>=0){
				eSubFolders_play_origin_foreign.item().copy(sPath+"webCourse\\lessons\\content\\play_foreign_origin\\",true);
			}
			else{
				;
			}
		}
		for(; !eSubFolders_note.atEnd(); eSubFolders_note.moveNext()){
			if(sFiles_note.indexOf(eSubFolders_note.item().name+";")>=0){
				eSubFolders_note.item().copy(sPath+"webCourse\\lessons\\content\\note\\",true);
			}
			else{
				;
			}
		}
		bIsCopyed=true;
	}
	catch(e){
		bIsCopyed=false;
	}
}

var aTemp=new Array();
aTemp=sPathSelected.split("\\");//strange!! have to transform "\" to "/",otherwise can't to pass to client!!!
var iLength=aTemp.length;
var sPathNow="";
for(var i=0;i<iLength;i++){
sPathNow=sPathNow+aTemp[i]+"/";
}

%>
<script>
var bIsCopyed='<% =bIsCopyed %>';
var sPath='<% =sPathNow %>';
aTemp=sPath.split("/");//strange!! have to transform "\" to "/",otherwise can't to pass to client!!!
var iLength=aTemp.length;
var sPathNow="";
for(var i=0;i<iLength;i++){
sPathNow=sPathNow+aTemp[i]+"\\";
}
if(bIsCopyed=="True"){
	window.alert('已复制到"'+sPathNow.substring(0,sPathNow.length-2)+'"文件夹！');
	window.close();
}
else{
	alert("未知的原因，未能正常复制！请将"+sPathNow.substring(0,sPathNow.length-2)+'"文件夹下原来已复制的部分文件全部删除!然后重试。');
	window.close();
}
</script>

</body>

</html>
