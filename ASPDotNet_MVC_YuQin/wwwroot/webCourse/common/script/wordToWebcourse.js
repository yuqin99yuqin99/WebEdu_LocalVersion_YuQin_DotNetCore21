var sContentPath="book/";//���ܸı�!
var oFSO=new ActiveXObject("Scripting.FileSystemObject");
var sCurrentPath=oFSO.getFile("wordToWebcourseContents.js").parentFolder.path;
var wordApp = new ActiveXObject("Word.Application");//
wordApp.visible =true;//make word application visible;
var wordDocument= wordApp.documents.open(sCurrentPath+"/book.doc") //���ܸı�!
//���ǰ��Ctrl+Aȫѡ��Ȼ��F9�����������������������õ����������ĳ��������ʵ�֣�

var iSubdocumentsCount=wordDocument.Subdocuments.Count;
if(iSubdocumentsCount>=1){ 
    wordDocument.Subdocuments.Expanded=true;
    for(var i=0;i<iSubdocumentsCount;i++){
		wordDocument.Subdocuments(i+1).Locked=false; 
	}
}

wordDocument.select();
wordApp.Selection.Fields.Update();
  //wordDocument.saveAs("try1.htm","msoEncodingSimplifiedChineseGBK");  
 //wordApp.run(MacroName="Macro1");
 //wordApp.displayAlerts=false;
 //wordApp.screenUpdating=true;
var cPara=wordDocument.Paragraphs;
var iParaCount=wordDocument.Paragraphs.count;
var sString="";
//var aParagraph=new Array();
//WScript.echo(cPara.item(1).range.text);
//WScript.echo(cPara.item(iParaCount-1+1).OutlineLevel);

if(cPara.item(1).OutlineLevel==10){//iParaCount begin with 1!!??
	WScript.echo("��һ�α����Ǵ�ټ���,��������ǵ�һ�����!");
	WScript.quit();
	wordApp.quit();
}


if(cPara.item(iParaCount-1+1).OutlineLevel!=10){//���,ʹ��"iParaCount"�滻iParaCount-1+1����
	WScript.echo("���һ�β����Ǵ��!" );
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
			if(iOutlineNextPosition==1){//�������֮��û�����ĵ�����,text="",��AԪ�ص�text����Ϊ��;
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
						WScript.echo(cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"����!���ѯ����ԭ��.���Խ��������ɺ���Ŀ¼!");
						continue;
					}
				}
			
			}
			else{//�������֮�������ĵ�����,text=һ��ϵͳʱ��ֵ,��AԪ�ص�text���Բ�Ϊ��;
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
						WScript.echo(cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"����!���ѯ����ԭ��.���Խ��������ɺ���Ŀ¼!");
						continue;
					}
				}
		
			}
		try{
			var oRange=wordDocument.Range( wordDocument.Paragraphs(i).Range.Start, wordDocument.Paragraphs(i+iOutlineNextPosition-1).Range.End);
		    oRange.Select();
			//WScript.echo(wordApp.Selection.text);
			//WScript.Quit();
		
			wordApp.Selection.Copy();
			var oDocument=wordApp.Documents.Add();
		 	wordApp.Selection.PasteAndFormat(0);
		 	var sNewListString=cPara.item(i).range.listFormat.ListString;
		 	oDocument.Paragraphs.item(1).range.text=sNewListString+oDocument.Paragraphs.item(1).range.text;//oDocument.Paragraphs.item(1).range.listFormat.ListString ֻ�ɶ�!
		 	
		 		//var wordDocument= wordApp.documents.open(sCurrentPath+"/book.doc") //���ܸı�;
		     oDocument.WebOptions.RelyOnCSS =true;
		     oDocument.WebOptions.OptimizeForBrowser =true;//Ϊ������Ż�
		     oDocument.WebOptions.OrganizeInFolder =true;
		     oDocument.WebOptions.UseLongFileNames =true;
		     oDocument.WebOptions.RelyOnVML =true;
		      //wordDocument.WebOptions.AllowPNG = false;
		     oDocument.WebOptions.ScreenSize = 3;//800*600
		     oDocument.WebOptions.PixelsPerInch = 96;
		     oDocument.WebOptions.Encoding = 20127;//us-ascii����
		        
		 	wordApp.ChangeFileOpenDirectory(sCurrentPath);
		 	var sFileName=cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text;
		 	//WScript.echo(sFileName.substr(0,sFileName.length-1));
		 	oDocument.saveAs(sFileName.substr(0,sFileName.length-1)+".asp",8); 	
			oDocument.close();
			}
		catch(e){
			WScript.echo(cPara.item(i).range.listFormat.ListString+cPara.item(i).range.text+"���ִ������ѯ���󣬵��Խ��������У�");
			continue;
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
oTextStream.write(sHeader+" <LI><A "+sAttributesOfANoText+">"+"<SPAN>1</SPAN><SPAN>��������Զ�̽�ѧϵͳ</SPAN></A></LI> "+sStringRemoveEnters+sRear);
oTextStream.close();

WScript.echo("Ŀ¼������!");
