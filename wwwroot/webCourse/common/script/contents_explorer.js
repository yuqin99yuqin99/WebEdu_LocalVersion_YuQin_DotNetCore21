function iniContents(){
window.oSrcLi=new Object();
window.sColorCurrent="rgb(255,0,0)";
window.sColorOver="rgb(0,255,0)";
window.sColorOut="rgb(0,102,153)";
window.sColorDefault="default";
window.sPath="";
}

function fnDynOpen(){
var oTemp=new Object();
oTemp=event.srcElement.parentNode;
window.sPath="";
while(oTemp.parentNode.tagName!="DIV"){  //this may be changed!
	if(oTemp.parentNode.tagName=="UL"){
		window.sPath=window.sPath+"\\"+oTemp.childNodes.item(1).childNodes.item(0).nodeValue;
			}
		oTemp=oTemp.parentNode;
	}
	var aTemp=new Array();
	aTemp=window.sPath.split("\\");
	var iLength=aTemp.length;
	window.sPath="";
	for(var i=iLength-1;i>=0;i--){
	window.sPath=window.sPath+"\\"+aTemp[i];
	}
var sColorTemp=window.sColorCurrent;
var cTemp=document.getElementsByTagName("SPAN");
var iLength=cTemp.length;
for(var i=0;i<iLength;i++){
	if(cTemp.item(i).style.color==sColorTemp){
	cTemp.item(i).style.color=window.sColorOut;
	break;
		}
}
event.srcElement.style.color=window.sColorCurrent;
parent.document.getElementById("sPath").value=window.sPath;
parent.document.getElementById("sForm").action="returnSubfoldersAndSubFiles.asp";
parent.document.getElementById("sForm").target="sIframeContent";
parent.document.getElementById("sForm").submit();
}


function fnDynOutline(){
event.cancelBubble=true;
event.returnValue=false;

var oTemp=new Object();
oTemp=event.srcElement.parentNode;
window.sPath="";

while(oTemp.parentNode.tagName!="DIV"){  //this may be changed!
	if(oTemp.parentNode.tagName=="UL"){
		window.sPath=window.sPath+"\\"+oTemp.childNodes.item(1).childNodes.item(0).nodeValue;
					}
		oTemp=oTemp.parentNode;
	}
	var aTemp=new Array();
	aTemp=window.sPath.split("\\");
	var iLength=aTemp.length;
	window.sPath="";
	for(var i=iLength-1;i>=0;i--){
	window.sPath=window.sPath+"\\"+aTemp[i];
	}

oSrcLi=event.srcElement.parentNode;

if(event.srcElement.src.lastIndexOf("plus-folder.gif")>0){
	event.srcElement.src="../common/image/plusTran-folder.gif";
	//alert(oSrcLi.childNodes.item(1).childNodes.item(0).nodeValue);
	//parent.document.getElementById("sPath").value=oSrcLi.childNodes.item(1).childNodes.item(0).nodeValue+"\\"+window.sPath;
	parent.document.getElementById("sPath").value=window.sPath;
	parent.document.getElementById("sForm").action="returnSubfolders.asp";
	parent.document.getElementById("sForm").target="sIframeTemp";
	parent.document.getElementById("sForm").submit();
}

else if(event.srcElement.src.lastIndexOf("plusTran-folder.gif")>0){
	event.srcElement.src="../common/image/plus-folder.gif";
	if(oSrcLi.childNodes.length>=3){
	var oRemovedNode=oSrcLi.getElementsByTagName("UL").item(0).removeNode(true);
	}
	/*var cRemovedSpan=oRemovedNode.getElementsByTagName("Span");
	var iLenghtSpan=cSpan.length;
	var sColor=window.sColorCurrent;
	var window.bIfColoredItemExist=false;
	for(var i=0;i<iLenghtSpan;i++){
		if(cSpan.item(i).childNodes.item(0).style.color==sColor){
		window.bIfColoredItemExist=true;
			}
		else{
		window.bIfColoredItemExist=false;
		}
}
	if(!window.bIfColoredItemExist){
	parent.frames.item("explorer_content.asp").document.getElementsByTagName("BODY").item(0).innerHTML="Selected item deleted!";
}*/
}

}


function fnChangeColor(){
//event.srcElement.style.color="rgb(0,255,0)";
}

function fnResumeColor(){
//event.srcElement.style.color="default";
}
