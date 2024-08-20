var sContentPath="book/";//可能改变!
var oFSO=new ActiveXObject("Scripting.FileSystemObject");
var sCurrentPath=oFSO.getFile("wordToWebcourseContents.js").parentFolder.path;
var wordApp = new ActiveXObject("Word.Application");//
wordApp.visible =true;//make word application visible;
var wordDocument= wordApp.documents.open(sCurrentPath+"/book.doc") //可能改变!
//输出前按Ctrl+A全选，然后按F9更新域再输出。（和输出设置等最好在输出的程序代码中实现）
var cPara=wordDocument.Paragraphs;
var iParaCount=wordDocument.Paragraphs.count;
var sString="";
//var aParagraph=new Array();
//WScript.echo(cPara.item(1).range.text);
//WScript.echo(cPara.item(iParaCount-1+1).OutlineLevel);

if(cPara.item(1).OutlineLevel==10){//iParaCount begin with 1!!??
	WScript.echo("第一段必须是大纲级别,而且最好是第一级大纲!");
	WScript.quit();
	wordApp.quit();
}


if(cPara.item(iParaCount-1+1).OutlineLevel!=10){//奇怪,使用"iParaCount"替换iParaCount-1+1出错
	WScript.echo("最后一段不能是大纲!" );
	WScript.quit();
	wordApp.quit();
}
else{
	var sAttributesOfANoText='href="content/" sNote sN sFId text="" teachingPlan="" play="" sF="" textF="" teachingPlanF="" playF=""';
	var sAttributesOfAHasTextFront='href="content/" sNote sN sFId text="';
	var sAttributesOfAHasTextEnd='" teachingPlan="" play="" sF="" textF="" teachingPlanF="" playF=""';
	for(var i=1;i<iParaCount;i++){
	//WScript.echo(cPara.item(i).OutlineLevel);
	if(cPara.item(i).OutlineLevel!=10){
		var iOutlineNextPosition=0;
		for(var j=i+1;j<iParaCount;j++){
			if(cPara.item(j).OutlineLevel==10){
				iOutlineNextPosition=iOutlineNextPosition+1;
			}
			else{
				iOutlineNextPosition=iOutlineNextPosition+1;
				break;
			}
		}
		if(iOutlineNextPosition==1){//两个大纲之间没有正文的情形,text="",即A元素的text特性为空;
			switch(cPara.item(i+iOutlineNextPosition).OutlineLevel-cPara.item(i).OutlineLevel){
				case 0: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI>"; 
					break;
				}
				case 1: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A> <UL> ";
					break;
				}
				case -1: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI>";
					break;
				}
				case -2: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -3: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
		
				case -4: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -5: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -6: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -7: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -8: {
					sString=sString+"<LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				default: {
					WScript.echo(cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"出错!请查询出错原因.但仍将继续生成后续目录!");
					continue;
				}
			}
		
		}
		else{//两个大纲之间有正文的情形,text=一个系统时间值,即A元素的text特性不为空;
			var oDate=new Date();
			var sValueOfTextAtt=oDate.getTime();
			switch(cPara.item(i+iOutlineNextPosition).OutlineLevel-cPara.item(i).OutlineLevel){
				case 0: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI>"; 
					break;
				}
				case 1: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A> <UL> ";
					break;
				}
				case -1: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI>";
					break;
				}
				case -2: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -3: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
		
				case -4: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -5: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -6: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -7: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				case -8: {
					sString=sString+"<LI><A "+sAttributesOfAHasTextFront+sValueOfTextAtt+sAttributesOfAHasTextEnd+">"+"<SPAN>1</SPAN><SPAN>"+cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"</SPAN></A></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI></UL></LI>";
					break;
				}
				
				default: {
					WScript.echo(cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"出错!请查询出错原因.但仍将继续生成后续目录!");
					continue;
				}
			}
	
		}
		
		}
	}
}

var sStringRemoveEnters="";
var oRegExp=new RegExp("\r","g");
sStringRemoveEnters=sString.replace(oRegExp,"");

var sHeader='<?xml version="1.0" encoding="gb2312"?><html><head><xml:namespace prefix="IE" /><IE:download id="downLoad" style="behavior:url(#default#download)" /><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contents.js"></script><title>file1</title><base target="sIframeContent"/></head><body unselectable="on" onload="fnOnLoad();" style="background-image:url(background_contents.gif);" scroll="no" id="sBody"><div unselectable="on" id="sDiv"> <UL> ';
var sRear='</UL></div></body></html>';
var oTextStream=oFSO.createTextFile(sCurrentPath+"\\contents.asp");
oTextStream.write(sHeader+" <LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>关于网络远程教学系统</SPAN></A></LI> "+sStringRemoveEnters+sRear);
oTextStream.close();

WScript.echo("目录已生成!");
