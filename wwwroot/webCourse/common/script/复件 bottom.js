function fnOnload(){
window.sBody=document.body.innerHTML;//可用于判断该底部框架是否因在线编辑而有了改变，从而可提醒用户保存。
document.body.oncontextmenu=fnContextmenu;
document.body.scroll="no"
document.body.onbeforeunload=fnIsSaved;
}

function fnIsTitleChanged(){
if(document.body.innerHTML===window.sBody){
return false;
}
else{
return true;
}
}

function fnContextmenu(){
event.returnValue=false;
}

function fnIsSaved(){
if(!fnIsTitleChanged()){
//event.returnValue="";
;
}
else{
event.returnValue='您已通过“标题框架”重新配置了“底部框架”，但还没有最后保存!单击“确定”按钮将继续，而且不保存已编辑过的目录;单击“取消”按钮将返回,返回后，“标题框架”右击菜单中选择"保存"菜单项可保存！';
}
}
