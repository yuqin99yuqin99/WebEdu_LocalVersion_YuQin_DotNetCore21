function fnOnload(){
window.sBody=document.body.innerHTML;//�������жϸõײ�����Ƿ������߱༭�����˸ı䣬�Ӷ��������û����档
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
event.returnValue='����ͨ���������ܡ����������ˡ��ײ���ܡ�������û����󱣴�!������ȷ������ť�����������Ҳ������ѱ༭����Ŀ¼;������ȡ������ť������,���غ󣬡������ܡ��һ��˵���ѡ��"����"�˵���ɱ��棡';
}
}
