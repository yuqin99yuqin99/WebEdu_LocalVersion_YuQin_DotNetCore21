function fnOnLoad(){
window.sImageElementPlus='<img src="../common/image/plus.gif" unselectable="on" onclick="fnDynOutline();"  style="cursor:default;"></img>';//注意，好象onclick="fnDynOutline();"这样的事件特性转化为innerHTML属性中的字符，而onclick="event.returnValue=false;"这样的会。
window.sImageElementNo='<img src="../common/image/no.gif" unselectable="on" onclick="fnRemoveDefaultEventHandler();" style="cursor:default;"></img>';
window.sWillInsertedCheckbox='<input type="checkbox" onclick="fnOnchecked();" value="ON"/>';
window.sColorNormal=document.body.currentStyle.color;//从currentStyle获得css文件中定义的字体颜色；
window.sColorMouseOver="rgb(0,255,0)";
window.sColorClicked="rgb(255,0,0)";
window.sDocURL=document.URL;//将来去除！！
window.sDocPath=sDocURL.substring(7,sDocURL.length);//将来去除！！
window.sPath=sDocPath.substring(0,sDocPath.lastIndexOf("\\")+1);//将来去除！！
document.body.oncontextmenu=fnPopup;//不能有括号
document.body.onmousemove=fnPane;
document.body.onmousewheel=fnMouseWheel;
document.body.onmousedown=fnMouseDown;
document.body.onmouseup=fnMouseUp;
window.oSrcElement=new Object();
window.bMovable=false;
window.iMouseX;
window.iMouseY;
window.oMoveStartSrc=new Object();
document.body.style.zoom="100%";
document.getElementById("sDiv").style.zoom="100%";
if(document.body.style.fontSize==""){
document.body.style.fontSize=document.body.currentStyle.fontSize;
}
document.getElementById("sDiv").style.position="relative";
document.getElementById("sDiv").style.left=-30;
document.body.scroll="no";
window.sWillInsertedSpan='<SPAN style="font-size:15;color:rgb(0,0,0)" disabled="true">'+
'<input type="checkbox" value="ON"/><SPAN>国语课文</SPAN><input type="checkbox" value="ON"/><SPAN>国语课文源文件</SPAN>'+
'<input type="checkbox" value="ON"/><SPAN>外语课文</SPAN><input type="checkbox" value="ON"/><SPAN>外语课文源文件</SPAN>'+
'<input type="checkbox" value="ON"/><SPAN>国语教案</SPAN><input type="checkbox" value="ON"/><SPAN>国语教案源文件</SPAN>'+
'<input type="checkbox" value="ON"/><SPAN>外语教案</SPAN><input type="checkbox" value="ON"/><SPAN>外语教案源文件</SPAN>'+
'<input type="checkbox" value="ON"/><SPAN>国语动画</SPAN><input type="checkbox" value="ON"/><SPAN>国语动画源文件</SPAN>'+
'<input type="checkbox" value="ON"/><SPAN>外语动画源文件</SPAN><input type="checkbox" value="ON"/><SPAN>外语动画源文件</SPAN>'+
'</SPAN>';
fnInitailContents();//初始化目录
}

function fnOnchecked(){
//alert(event.srcElement.parentNode.getElementsByTagName("SPAN").item(2).attributes.getNamedItem("disabled").nodeValue=="true");
if(event.srcElement.checked){
	event.srcElement.parentNode.getElementsByTagName("SPAN").item(2).attributes.getNamedItem("disabled").nodeValue=false;
	var cInput=event.srcElement.parentNode.getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT");
	var iInputLength=cInput.length;
	for(var i=0;i<iInputLength;i++){
		cInput[i].checked=true;
	}
}
else{
	event.srcElement.parentNode.getElementsByTagName("SPAN").item(2).attributes.getNamedItem("disabled").nodeValue=true;
	}
}


function fnInitailContents(){
var oWillInsertedCheckbox=document.createElement(window.sWillInsertedCheckbox);
var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
if(cLi[0].childNodes.length>2){
	var oWillInsertedIMG=window.document.createElement(sImageElementPlus);
}
else{
	var oWillInsertedIMG=document.createElement(sImageElementNo);
}
var oInsertedCheckbox=cLi[0].insertBefore(oWillInsertedCheckbox.cloneNode(true),cLi[0].getElementsByTagName("A").item(0));
var oInsertedImage=cLi[0].insertBefore(oWillInsertedIMG,cLi[0].getElementsByTagName("A").item(0));
oInsertedImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
cLi[0].getElementsByTagName("A").item(0).outerHTML=cLi[0].getElementsByTagName("A").item(0).outerHTML+window.sWillInsertedSpan;
//alert(cLi[0].getElementsByTagName("A").item(0).outerHTML+window.sWillInsertedSpan);return;
//alert(cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=="");

cLi[0].setAttribute("unselectable","on");
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);//注意函数不能有引号！这些事件特性好象无法在复制节点时复制，也不出现在innerHTML属性中。
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
cLi[0].getElementsByTagName("A").item(0).setAttribute("sN",cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//设置国语属性值等于节点值sN必须用setAttribute;sN=""必须用getNamedItem("sN"),sF,text,textF等也要注意该问题?好象要将如sN(无"")属性值与元素文本值交换时就要用setAttribute.
//cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
cLi[0].getElementsByTagName("A").item(0).setAttribute("sFId","");//设置语言Id,默认为"",国语
cLi[0].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//禁止自动编号的单击默认事件响应，因为其父节点是A
cLi[0].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1.";


if(iLiLength>1){
	for(i=1;i<iLiLength-1;i++){
		var oLi=cLi[i];
		if(oLi.childNodes.length>2){
			var oWillInsertedIMG=document.createElement(sImageElementPlus);
									}
		else{
			var oWillInsertedIMG=document.createElement(sImageElementNo);
			}
		var oInsertedCheckbox=oLi.insertBefore(oWillInsertedCheckbox.cloneNode(true),oLi.getElementsByTagName("A").item(0));
		var oInsertedImage=oLi.insertBefore(oWillInsertedIMG,oLi.getElementsByTagName("A").item(0));
		oInsertedImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
		oLi.getElementsByTagName("A").item(0).outerHTML=oLi.getElementsByTagName("A").item(0).outerHTML+window.sWillInsertedSpan;
		oLi.setAttribute("unselectable","on");
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
		oLi.getElementsByTagName("A").item(0).setAttribute("sN",oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//设置国语属性值等于节点值
		//oLi.getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
		oLi.getElementsByTagName("A").item(0).setAttribute("sFId","");//设置语言Id,默认为"",国语
		oLi.getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//禁止自动编号的单击默认事件响应，因为其父节点是A

		if(oLi.previousSibling!=null){

			if(oLi.parentNode.parentNode.nodeName!="DIV"){
				var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				var aPreviousSiblingAutoNumber=sPreviousSiblingAutoNumber.split(".");
				var iLength=aPreviousSiblingAutoNumber.length;
				var iLastNum=parseInt(aPreviousSiblingAutoNumber[iLength-2])+1;
				var sPre="";
					for(j=0;j<=iLength-3;j++){
						sPre=sPre+aPreviousSiblingAutoNumber[j]+".";
											}
					oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sPre+iLastNum+".";
															}


			else{
				var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				var sPreviousSiblingAutoNumberPre=sPreviousSiblingAutoNumber.substring(0,sPreviousSiblingAutoNumber.lastIndexOf("."));
				var sAutoNumber=(parseInt(sPreviousSiblingAutoNumberPre)+1).toString()+".";
				oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sAutoNumber;
				}

									}

		else{
			var sParentParentAutoNumber=oLi.parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
			sParentParentAutoNumberPre=sParentParentAutoNumber.substring(0,sParentParentAutoNumber.lastIndexOf("."));
			oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sParentParentAutoNumberPre+".1.";
			}

					}

	var oWillInsertedIMG=document.createElement(sImageElementNo);
	var oInsertedCheckbox=cLi[iLiLength-1].insertBefore(oWillInsertedCheckbox.cloneNode(true),cLi[iLiLength-1].getElementsByTagName("A").item(0));
	var oInsertedImage=cLi[iLiLength-1].insertBefore(oWillInsertedIMG,cLi[iLiLength-1].getElementsByTagName("A").item(0));
	oInsertedImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
	cLi[iLiLength-1].getElementsByTagName("A").item(0).outerHTML=cLi[iLiLength-1].getElementsByTagName("A").item(0).outerHTML+window.sWillInsertedSpan;
	
	cLi[iLiLength-1].setAttribute("unselectable","on");
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("sN",cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//设置国语属性值等于节点值,sN必须用setAttribute;sN=""必须用getNamedItem("sN")?
	//cLi[iLiLength-1].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("sFId","");//设置语言Id,默认为"",国语
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//禁止自动编号的单击默认事件响应，因为其父节点是A

	if(cLi[iLiLength-1].previousSibling!=null){
		if(cLi[iLiLength-1].parentNode.parentNode.nodeName!="DIV"){
			var sPreviousSiblingAutoNumber=cLi[iLiLength-1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
			var aPreviousSiblingAutoNumber=sPreviousSiblingAutoNumber.split(".");
			var iLength=aPreviousSiblingAutoNumber.length;
			var iLastNum=parseInt(aPreviousSiblingAutoNumber[iLength-2])+1;
			var sPre="";
			for(j=0;j<=iLength-3;j++){
				sPre=sPre+aPreviousSiblingAutoNumber[j]+".";
									}
			cLi[iLiLength-1].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sPre+iLastNum+".";
																	}	
		else{
			var sPreviousSiblingAutoNumber=cLi[iLiLength-1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
			var sPreviousSiblingAutoNumberPre=sPreviousSiblingAutoNumber.substring(0,sPreviousSiblingAutoNumber.lastIndexOf("."));
			var sAutoNumber=(parseInt(sPreviousSiblingAutoNumberPre)+1).toString()+".";
			cLi[iLiLength-1].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sAutoNumber;
			}	
												}
	else{
		var sParentParentAutoNumber=cLi[iLiLength-1].parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
		sParentParentAutoNumberPre=sParentParentAutoNumber.substring(0,sParentParentAutoNumber.lastIndexOf("."));
		cLi[iLiLength-1].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sParentParentAutoNumberPre+".1.";
		}
}
else{
;
}
cLi[0].getElementsByTagName("SPAN").item(1).click();
}



function fnDynOutline(){
event.cancelBubble=true;
event.returnValue=false;
if(event.srcElement.src.lastIndexOf("plus.gif")>0){
	event.srcElement.src="../common/image/plusTran.gif";
	var iLength=event.srcElement.parentNode.getElementsByTagName("UL").item(0).children.length;
	for(var i=0;i<iLength;i++){
		if(event.srcElement.parentNode.getElementsByTagName("UL").item(0).children[i].nodeName=="LI"){
		event.srcElement.parentNode.getElementsByTagName("UL").item(0).children[i].style.display="list-item";
						}
													}
}

else if(event.srcElement.src.lastIndexOf("plusTran.gif")>0){
	event.srcElement.src="../common/image/plus.gif";
	var iLength=event.srcElement.parentNode.getElementsByTagName("UL").item(0).children.length;
	for(var i=0;i<iLength;i++){
		if(event.srcElement.parentNode.getElementsByTagName("UL").item(0).children[i].nodeName=="LI"){
			event.srcElement.parentNode.getElementsByTagName("UL").item(0).children[i].style.display="none";
																				}
								}
															}
}

function fnDynOpen(){	 
	event.returnValue=false;
	return;	
}

function fnAOnMouseOn(){
var oObject=event.srcElement;
if(oObject.style.color!=window.sColorClicked){
oObject.style.color=window.sColorMouseOver;
}

event.srcElement.setAttribute("title",event.srcElement.childNodes.item(0).nodeValue);
}

function fnAOnMouseOut(){
var oObject=event.srcElement;
if(oObject.style.color==window.sColorMouseOver){
	oObject.style.color=window.sColorNormal;
												}
}

function fnPane(){
if(window.bMovable){
event.returnValue=false;
window.scrollTo(document.body.scrollLeft+event.x-iMouseX,document.body.scrollTop+event.y-iMouseY);
}
}

function fnMouseDown(){
if(event.button==1){
if(event.srcElement.tagName=="BODY"||event.srcElement.tagName=="LI"||event.srcElement.tagName=="UL"||event.srcElement.tagName=="DIV"){
window.bMovable=true;
oMoveStartSrc=event.srcElement;
event.srcElement.style.cursor="move";
iMouseX=event.x;
iMouseY=event.y;
}
}
}

function fnMouseUp(){
window.bMovable=false;
//alert(event.fromElement.tagName);
if(event.srcElement.tagName=="IMG"){
	event.srcElement.style.cursor="default";
}
else if(event.srcElement.tagName=="A"){
	event.srcElement.style.cursor="hand";
}
else if(event.srcElement.tagName=="INPUT"){
	event.srcElement.style.cursor="default";
}

else{
	event.srcElement.style.cursor="default";
}
try{
	oMoveStartSrc.style.cursor="text";
}
catch(e){
	return;
}
}

function fnMouseWheel(){
	event.returnValue=false;
	if(event.shiftKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollLeft+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
	}
	
	else if(event.ctrlKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
	}
	
	else if(event.altKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollTop+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
	}
	else{
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollTop+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
	}
}

function fnPopup(){
	event.returnValue=false;
	return;
}

function fnRemoveDefaultEventHandler(){
	event.returnValue=false;
}

function fnUncheckAll(){
	var cAllCheckbox=document.getElementsByTagName("INPUT");
	var iAllCheckboxLength=cAllCheckbox.length;
	for(var i=0;i<iAllCheckboxLength;i++){
		cAllCheckbox[i].checked=false;
	}
}

function fnCopyResource(){
   // window.open("copying.asp", "sCopying","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+window.screen.width*0.8+",height="+window.screen.height*0.8);//显示窗口
	var sPath=parent.frames("sIframeTitle").document.getElementById("sPathSelect").value;
	if(sPath==""){
		alert("请选择要复制到的目标文件夹!");
		return;
	}
	else if(sPath.substring(sPath.length-1,sPath.length)!="\\"){
		alert('文件夹的最后一个字符必须是"\\"');
		return;
	}
	else{
   		 window.open("copying.asp", "sCopying","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
		var sFiles_text="";
		var sFiles_text_origin="";
		var sFiles_text_foreign="";
		var sFiles_text_foreign_origin="";
		var sFiles_teachingPlan="";
		var sFiles_teachingPlan_origin="";
		var sFiles_teachingPlan_foreign="";
		var sFiles_teachingPlan_foreign_origin="";
		var sFiles_animation="";
		var sFiles_animation_origin="";
		var sFiles_animation_foreign="";
		var sFiles_animation_foreign_origin="";
		var cLi=document.getElementsByTagName("LI");
		var cLiLength=cLi.length;
		for(var i=0;i<cLiLength;i++){
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(0).checked){
				sFiles_text=sFiles_text+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(1).checked){
				sFiles_text_origin=sFiles_text_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(2).checked){
				sFiles_text_foreign=sFiles_text_foreign+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("textF").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(3).checked){
				sFiles_text_foreign_origin=sFiles_text_foreign_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("textF").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(4).checked){
				sFiles_teachingPlan=sFiles_teachingPlan+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(5).checked){
				sFiles_teachingPlan_origin=sFiles_teachingPlan_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(6).checked){
				sFiles_teachingPlan_foreign=sFiles_teachingPlan_foreign+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(7).checked){
				sFiles_teachingPlan_foreign_origin=sFiles_teachingPlan_foreign_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(8).checked){
				sFiles_animation=sFiles_animation+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(9).checked){
				sFiles_animation_origin=sFiles_animation_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(10).checked){
				sFiles_animation_foreign=sFiles_animation_foreign+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue+";";
			}
			if(cLi[i].getElementsByTagName("SPAN").item(2).getElementsByTagName("INPUT").item(11).checked){
				sFiles_animation_foreign_origin=sFiles_animation_foreign_origin+cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue+";";
			}
									}
	
		
		var oForm=parent.frames("sIframeTitle").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Title框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
		var oInput_text=parent.frames("sIframeTitle").document.createElement('<input type="text" name="text" id="text"></input>');
		var oInput_text_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="text_origin" id="text_origin"></input>');
		var oInput_text_foreign=parent.frames("sIframeTitle").document.createElement('<input type="text" name="text_foreign" id="text_foreign"></input>');
		var oInput_text_foreign_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="text_foreign_origin" id="text_foreign_origin"></input>');
		var oInput_teachingPlan=parent.frames("sIframeTitle").document.createElement('<input type="text" name="teachingPlan" id="teachingPlan"></input>');
		var oInput_teachingPlan_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="teachingPlan_origin" id="teachingPlan_origin"></input>');
		var oInput_teachingPlan_foreign=parent.frames("sIframeTitle").document.createElement('<input type="text" name="teachingPlan_foreign" id="teachingPlan_foreign"></input>');
		var oInput_teachingPlan_foreign_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="teachingPlan_foreign_origin" id="teachingPlan_foreign_origin"></input>');
		var oInput_animation=parent.frames("sIframeTitle").document.createElement('<input type="text" name="animation" id="animation"></input>');
		var oInput_animation_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="animation_origin" id="animation_origin"></input>');
		var oInput_animation_foreign=parent.frames("sIframeTitle").document.createElement('<input type="text" name="animation_foreign" id="animation_foreign"></input>');
		var oInput_animation_foreign_origin=parent.frames("sIframeTitle").document.createElement('<input type="text" name="animation_foreign_origin" id="animation_foreign_origin"></input>');
		var oInput_path=parent.frames("sIframeTitle").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
		var oInputSubmit=parent.frames("sIframeTitle").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
		var oInsertForm=parent.frames("sIframeTitle").document.body.appendChild(oForm);
		oInsertForm.appendChild(oInput_text);
		oInsertForm.appendChild(oInput_text_origin);
		oInsertForm.appendChild(oInput_text_foreign);
		oInsertForm.appendChild(oInput_text_foreign_origin);
		oInsertForm.appendChild(oInput_teachingPlan);
		oInsertForm.appendChild(oInput_teachingPlan_origin);
		oInsertForm.appendChild(oInput_teachingPlan_foreign);
		oInsertForm.appendChild(oInput_teachingPlan_foreign_origin);
		oInsertForm.appendChild(oInput_animation);
		oInsertForm.appendChild(oInput_animation_origin);
		oInsertForm.appendChild(oInput_animation_foreign);
		oInsertForm.appendChild(oInput_animation_foreign_origin);
		oInsertForm.appendChild(oInput_path);
		var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
		parent.frames("sIframeTitle").document.getElementById("text").value=sFiles_text;
		parent.frames("sIframeTitle").document.getElementById("text_origin").value=sFiles_text_origin;
		parent.frames("sIframeTitle").document.getElementById("text_foreign").value=sFiles_text_foreign;
		parent.frames("sIframeTitle").document.getElementById("text_foreign_origin").value=sFiles_text_foreign_origin;
		parent.frames("sIframeTitle").document.getElementById("teachingPlan").value=sFiles_teachingPlan;
		parent.frames("sIframeTitle").document.getElementById("teachingPlan_origin").value=sFiles_teachingPlan_origin;
		parent.frames("sIframeTitle").document.getElementById("teachingPlan_foreign").value=sFiles_teachingPlan_foreign;
		parent.frames("sIframeTitle").document.getElementById("teachingPlan_foreign_origin").value=sFiles_teachingPlan_foreign_origin;
		parent.frames("sIframeTitle").document.getElementById("animation").value=sFiles_animation;
		parent.frames("sIframeTitle").document.getElementById("animation_origin").value=sFiles_animation_origin;
		parent.frames("sIframeTitle").document.getElementById("animation_foreign").value=sFiles_animation_foreign;
		parent.frames("sIframeTitle").document.getElementById("animation_foreign_origin").value=sFiles_animation_foreign_origin;
	
		parent.frames("sIframeTitle").document.getElementById("sPath").value=sPath;
		parent.frames("sIframeTitle").document.getElementById("sCopyPartResourceForm").action="copyPartResource.asp";
		parent.frames("sIframeTitle").document.getElementById("sCopyPartResourceForm").target="sCopying";
		parent.frames("sIframeTitle").document.getElementById("sCopyPartResourceForm").submit();
		//alert(parent.frames("sIframeTitle").document.body.innerHTML);
		parent.frames("sIframeTitle").document.getElementById("sCopyPartResourceForm").removeNode("true");
		
		//alert(parent.frames("sIframeTitle").document.getElementById("sPath").value);
		//alert(parent.frames("sIframeTitle").document.body.innerHTML);
	}
}




