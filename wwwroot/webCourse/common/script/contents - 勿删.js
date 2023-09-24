function fnOnLoad(){
window.bIsEditingNote=false;//用于判断是否正在编辑教/学笔记
try{//为了适合于标题框架中没有“编辑目录”按钮的情形。
	if(parent.frames.item('sIFrameTitle').document.getElementById("sContentsEditable").style.backgroundColor==parent.frames.item('sIFrameTitle').sBackgroundColorForsContentsEditable){
		window.sContentsPopUpState=1;//用于判断目录右击状态；
	}
	else{
		window.sContentsPopUpState=0
	}
}
catch(e){
	window.sContentsPopUpState=0
}
window.sTeachingPlan="";
window.sAnimation="";
window.sCurrentLanguageForPlayAll="";
window.sClonedDivTempInnerHTML="";//判断是否已保存用
//window.sForEmptyAttributeValue="90BBCBCC-BE82-4AAA-A7F6-264FEF03C061"//由于浏览器的原因,所有特性不能设置""!!!!!!若使用了"",通过IE设置""后保存innerHTML,会丢失两个"号,从而不遵守XML规则,还容易崩溃浏览器.href属性没按规定设置好象也会崩溃IE.
window.sPathPartForForeign="_foreign";
window.sPathPartForOrigin="_origin";
window.sPathPartForBook="book";//还未使用
window.sPathPartForteachingPlan="teachingPlan";//还未使用
window.sPathPartForplay="play";//还未使用
window.sImageElementPlus='<img src="../common/image/plus.gif" unselectable="on" onclick="fnDynOutline();"  style="cursor:default;"></img>';//注意，好象onclick="fnDynOutline();"这样的事件特性转化为innerHTML属性中的字符，而onclick="event.returnValue=false;"这样的会。
window.sImageElementNo='<img src="../common/image/no.gif" unselectable="on" onclick="fnRemoveDefaultEventHandler();" style="cursor:default;"></img>';
window.sNativeLanguage="国语";
window.sForeignLanguage="英语";
window.sDiv=document.getElementById("sDiv").innerHTML;//可用于判断该目录是否因在线编辑而有了改变，从而可提醒用户保存有改变的目录。
window.sColorNormal=document.body.currentStyle.color;//从currentStyle获得css文件中定义的字体颜色；
window.sColorMouseOver="rgb(0,255,0)";
window.sColorClicked="rgb(255,0,0)";
window.sDocURL=document.URL;//将来去除！！
window.sDocPath=sDocURL.substring(7,sDocURL.length);//将来去除！！
window.sPath=sDocPath.substring(0,sDocPath.lastIndexOf("\\")+1);//将来去除！！
document.body.onbeforeunload=fnIsSaved;//检查目录是否因编辑而有变化而提示保存等
window.sTempForCopy="";//用来保存复制操作数据的变量，以便启用或不启用粘贴等右击菜单项,用对象好象更不好通过innerHTML属性来实现还原。
window.sTempForUndo="";//用来保存撤消前一次操作数据的变量，以便进行撤消操作和启用或不启用撤消等右击菜单项，目前只支持撤消一次。
window.sTempForRedo=""//用来保存重做前一次操作数据的变量
//已不再支持，需要新的解决方案！！！！downLoad.startDownload(parent.sHTTPHeader+"common/popupContents.htm",fnOnDownLoad);//在没有父框架的情形下无法使用；
//downLoad.startDownload("hppt://localhost:8000+"common/popupContents.asp",fnOnDownLoad);//不适合网站版本的移动。

window.oPopup=new Object();
//window.createPopup()方法已不内置支持，改用 div 或 iframe（zIndex 值很高）
if (!window.createPopup) {  
    var __createPopup = function() {  
        var SetElementStyles = function( element, styleDict ) {  
            var style = element.style ;  
            for ( var styleName in styleDict )style[ styleName ] = styleDict[ styleName ] ;   
        }  
        var eDiv = document.createElement( 'div' );   
        SetElementStyles( eDiv, { 'position': 'absolute', 'top': 0 + 'px', 'left': 0 + 'px', 'width': 0 + 'px', 'height': 0 + 'px', 'zIndex': 1000, 'display' : 'none', 'overflow' : 'hidden' } ) ;  
        eDiv.body = eDiv ;  
        var opened = false ;  
        var setOpened = function( b ) {  
            opened = b;   
        }  
        var getOpened = function() {  
            return opened ;   
        }  
        var getCoordinates = function( oElement ) {  
            var coordinates = {x:0,y:0} ;   
            while( oElement ) {  
                coordinates.x += oElement.offsetLeft ;  
                coordinates.y += oElement.offsetTop ;  
                oElement = oElement.offsetParent ;  
            }  
            return coordinates ;  
        }  
        return {htmlTxt : '', document : eDiv, isOpen : getOpened(), isShow : false, hide : function() { SetElementStyles( eDiv, { 'top': 0 + 'px', 'left': 0 + 'px', 'width': 0 + 'px', 'height': 0 + 'px', 'display' : 'none' } ) ; eDiv.innerHTML = '' ; this.isShow = false ; }, show : function( iX, iY, iWidth, iHeight, oElement ) { if (!getOpened()) { document.body.appendChild( eDiv ) ; setOpened( true ) ; } ; this.htmlTxt = eDiv.innerHTML ; if (this.isShow) { this.hide() ; } ; eDiv.innerHTML = this.htmlTxt ; var coordinates = getCoordinates ( oElement ) ; eDiv.style.top = ( iX + coordinates.x ) + 'px' ; eDiv.style.left = ( iY + coordinates.y ) + 'px' ; eDiv.style.width = iWidth + 'px' ; eDiv.style.height = iHeight + 'px' ; eDiv.style.display = 'block' ; this.isShow = true ; } }  
    }  
    window.createPopup = function() {  
        return __createPopup();   
    }  
}  
//
window.oPopup=window.createPopup();//window.createPopup()方法已不内置支持，改用 div 或 iframe（zIndex 值很高）。
document.body.oncontextmenu=fnPopup;//不能有括号
//document.body.ondblclick=fnOnDBLClick;
document.body.onmousemove=fnPane;
document.body.onmousewheel=fnMouseWheel;
document.body.onmousedown=fnMouseDown;
document.body.onmouseup=fnMouseUp;
window.oSrcElement=new Object();
window.bMovable=false;
window.iMouseX;
window.iMouseY;
window.oMoveStartSrc=new Object();
if(document.getElementById("sDiv").style.zoom==""){
document.getElementById("sDiv").style.zoom="100%";
}
if(document.body.style.fontSize==""){
document.body.style.fontSize=document.body.currentStyle.fontSize;
}
document.getElementById("sDiv").style.position="relative";
document.getElementById("sDiv").style.left=-30;
document.body.scroll="no";
fnInitailContents();//初始化目录

}

function fnRemoveDefaultEventHandler(){
	event.returnValue=false;
}

function fnInitailContents(){
var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
if(cLi[0].childNodes.length>2){
	//var oInsertImage=window.document.createElement("img");
        //oInsertImage.outerHTML=sImageElementPlus;//不可修改而放弃。
        var oInsertImage=new DOMParser().parseFromString(sImageElementPlus,"text/html").getElementsByTagName("img").item(0);
}
else{
	//var oInsertImage=document.createElement("img");
       // oInsertImage.outerHTML=sImageElementNo;
        var oInsertImage=new DOMParser().parseFromString(sImageElementNo,"text/html").getElementsByTagName("img").item(0);
}
cLi[0].insertBefore(oInsertImage,cLi[0].firstChild);
oInsertImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
//alert(cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=="");

cLi[0].setAttribute("unselectable","on");
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);//注意函数不能有引号！这些事件特性好象无法在复制节点时复制，也不出现在innerHTML属性中。
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
//临时注释调，必须修改！！！cLi[0].getElementsByTagName("A").item(0).setAttribute("sN",cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//设置国语属性值等于节点值sN必须用setAttribute;sN=""必须用getNamedItem("sN"),sF,text,textF等也要注意该问题?好象要将如sN(无"")属性值与元素文本值交换时就要用setAttribute.
//cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
cLi[0].getElementsByTagName("A").item(0).setAttribute("sFId","");//设置语言Id,默认为"",国语
cLi[0].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//禁止自动编号的单击默认事件响应，因为其父节点是A
//临时注释调，必须修改！！！cLi[0].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1.";


if(iLiLength>1){
	for(i=1;i<iLiLength-1;i++){
		var oLi=cLi[i];
		if(oLi.childNodes.length>2){


	//var oInsertImage=window.document.createElement("img");
       // oInsertImage.outerHTML=sImageElementPlus;
	var oInsertImage=new DOMParser().parseFromString(sImageElementPlus,"text/html").getElementsByTagName("img").item(0);								}
		else{

	//var oInsertImage=window.document.createElement("img");
        //oInsertImage.outerHTML=sImageElementNo;
         var oInsertImage=new DOMParser().parseFromString(sImageElementNo,"text/html").getElementsByTagName("img").item(0);
			}
		oLi.insertBefore(oInsertImage,oLi.firstChild);
		oInsertImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
		
		oLi.setAttribute("unselectable","on");
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
		//临时注释调，必须修改！！！oLi.getElementsByTagName("A").item(0).setAttribute("sN",oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//设置国语属性值等于节点值
		//oLi.getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
		oLi.getElementsByTagName("A").item(0).setAttribute("sFId","");//设置语言Id,默认为"",国语
		oLi.getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//禁止自动编号的单击默认事件响应，因为其父节点是A

		if(oLi.previousSibling!=null){

			if(oLi.parentNode.parentNode.nodeName!="DIV"){
				//临时注释调，必须修改！！！var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				//临时注释调，必须修改！！！var aPreviousSiblingAutoNumber=sPreviousSiblingAutoNumber.split(".");
				var iLength=aPreviousSiblingAutoNumber.length;
				var iLastNum=parseInt(aPreviousSiblingAutoNumber[iLength-2])+1;
				var sPre="";
					for(j=0;j<=iLength-3;j++){
						sPre=sPre+aPreviousSiblingAutoNumber[j]+".";
											}
					oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sPre+iLastNum+".";
															}


			else{
				//临时注释调，必须修改！！！var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				//临时注释调，必须修改！！！var sPreviousSiblingAutoNumberPre=sPreviousSiblingAutoNumber.substring(0,sPreviousSiblingAutoNumber.lastIndexOf("."));
				//临时注释调，必须修改！！！var sAutoNumber=(parseInt(sPreviousSiblingAutoNumberPre)+1).toString()+".";
				//临时注释调，必须修改！！！oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sAutoNumber;
				}

									}

		else{
			//临时注释调，必须修改！！！var sParentParentAutoNumber=oLi.parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
			//临时注释调，必须修改！！！sParentParentAutoNumberPre=sParentParentAutoNumber.substring(0,sParentParentAutoNumber.lastIndexOf("."));
			//临时注释调，必须修改！！！oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sParentParentAutoNumberPre+".1.";
			}

					}

	//var oInsertImage=document.createElement(sImageElementNo);
       // var oInsertImage=window.document.createElement("img");
       // oInsertImage.outerHTML=sImageElementNo;
      var oInsertImage=new DOMParser().parseFromString(sImageElementNo,"text/html").getElementsByTagName("img").item(0);
	cLi[iLiLength-1].insertBefore(oInsertImage,cLi[iLiLength-1].firstChild);
	oInsertImage.style.zoom=parseInt(document.body.style.fontSize)/16*100+"%";
	
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

function fnContentsRefreshAFromAlreadyAutoNumbered(){//准备改为fnContentsRefreshAFromAlreadyAutoNumbered,因为刷新了编号,还刷新了A的事件特性。
var cLi=window.document.getElementsByTagName("li");
var iLiLength=cLi.length;
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
cLi[0].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);
cLi[0].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1.";


if(iLiLength>1){
	for(i=1;i<iLiLength-1;i++){
		var oLi=cLi[i];
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
		oLi.getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
		oLi.getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);
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

	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("unselectable","on");
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
	cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);



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
}

function fnContentsRefreshImage(){//刷新了图象源,还刷新了图象的事件特性
var cLi=window.document.getElementsByTagName("LI");
var iLiLength=cLi.length;
if(iLiLength==1){
	cLi[0].getElementsByTagName("IMG").item(0).src="../common/image/no.gif";
	cLi[0].getElementsByTagName("IMG").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);
}
else{
	for(var i=0;i<iLiLength;i++){
		if(cLi[i].getElementsByTagName("UL").length>0){//对于<LI><A href="contentStart.asp">关于网络远程教学系统</A>  <UL><LI><A href="content/">新建条目</A></LI></UL></LI>的<li>的childNodes.length好象报告为4，其中childNodes（1）好象是白空！！！！！！所以用childNodes.item(i)来获取节点不是很好，而用getElementsByTagName("tagName").item(i)较好（即使没有该节点名，不报错，而是报告.length为0)。
			var cLiChildNodes=cLi[i].getElementsByTagName("UL").item(0).childNodes;
			var bDisplayed=false;	
			for(var j=0;j<cLiChildNodes.length;j++){
				if(cLiChildNodes[j].style.display=="list-item"){
					bDisplayed=true;
					break;																							}
				else{
					;
					}
												}
			if(bDisplayed){
				cLi[i].getElementsByTagName("IMG").item(0).src="../common/image/plusTran.gif"
							}
			else{
				cLi[i].getElementsByTagName("IMG").item(0).src="../common/image/plus.gif"
					}
			cLi[i].getElementsByTagName("IMG").item(0).setAttribute("onclick",fnDynOutline);
	
										}
		else{
			cLi[i].getElementsByTagName("IMG").item(0).src="../common/image/no.gif";
			cLi[i].getElementsByTagName("IMG").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);
			}
									}
}
}

function fnIsContentsChanged(){
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
											}
	//alert(oClonedDivTemp.innerHTML);
	//alert(window.sDiv);
	if(oClonedDivTemp.innerHTML===window.sDiv){
		return false;
	}
	else{
		return true;
	}
}


function fnSave(){
	var sDocURL=document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++){
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}

	var sHeader='<?xml version="1.0" encoding="gb2312"?><html><head><xml:namespace prefix="IE" /><IE:download id="downLoad" style="behavior:url(#default#download)" /><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contents.js"></script><title>file1</title><base target="sIframeContent"/></head><body unselectable="on" onload="fnOnLoad();" style="background-image:url(background_contents.gif);" scroll="no" id="sBody"><div unselectable="on" id="sDiv">';
	var sEnd='</div></body></html>';

	//var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.length-2)+"contents.htm"+'"');
	var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contents.htm"+'"');

	if(bWillSaved){
		var win=window.open("../common/saving.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
		win.focus();
		var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
		//window.sClonedDivTempInnerHTML=oClonedDivTemp.innerHTML;//该全局变量可由saveContents.asp调用
		var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
		for(var i=0;i<cLiClonedTemp.length;i++){
	 		cLiClonedTemp.item(i).removeAttribute("unselectable");
			cLiClonedTemp.item(i).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
			// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
			//cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sFId").nodeValue="";
			//cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue="";
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");//attributes.getNamedItem("sFId").nodeValue=""失败
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");//
		}
		window.sClonedDivTempInnerHTML=oClonedDivTemp.innerHTML;//该全局变量可由saveContents.asp调用
		var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
		var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
		var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
		var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");
		
		//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sSaveContentsForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
                var oForm=parent.frames("sIframeBottom").document.createElement("form");
                oForm.outerHTML='<form method="POST" action="" target="" id="sSaveContentsForm"></form>';
		//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
                var oInput1=parent.frames("sIframeBottom").document.createElement('input');
                oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
		//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docPath" id="docPath"></input>');
                 var oInput2=parent.frames("sIframeBottom").document.createElement('input');
                oInput2.outerHTML='<input type="text" name="docPath" id="docPath"></input>';
		//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
		 var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
                oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
		var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
		var oInsertInput1=oInsertForm.appendChild(oInput1);
		var oInsertInput2=oInsertForm.appendChild(oInput2);
		var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
		parent.frames("sIframeBottom").document.getElementById("docContents").value=sHeader+sAfterURLHeaderReplaced+sEnd;
		parent.frames("sIframeBottom").document.getElementById("docPath").value="contents.htm";
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").action="../common/saveContents.aspx";
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").target="saving";//目标窗口为一直显示“正在保存...”的窗口，如果保存成功将显示“已保存”并自动关闭。
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").submit();
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").removeNode("true");
		//alert(oClonedDivTemp.innerHTML);
		//alert(window.sClonedDivTempInnerHTML);//saveContents.asp中调用.
		//alert(window.sDiv);
	}
	else{
		return;
	}
}

function fnCopyPartResource(){
	var sDocURL=document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++){
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}
	var sPhysicPath=sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.htm"))+"contentsForCopyPartResource.htm";
	var sWidth=screen.width-10;
	var sHeight=screen.height*0.8;
	var sLeft=(screen.width-sWidth)/2;
	var sTop=(screen.height-sHeight)/2;
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//显示窗口
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
        var oForm=parent.frames("sIframeBottom").document.createElement('form');
        oForm.outerHTML='<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
	//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
        var oInput1=parent.frames("sIframeBottom").document.createElement('input');
        oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
	//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
        var oInput2=parent.frames("sIframeBottom").document.createElement('input');
        oInput2.outerHTML='<input type="text" name="sPath" id="sPath"></input>';
	//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
        var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
        oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInput2=oInsertForm.appendChild(oInput2);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docContents").value=sAfterURLHeaderReplaced;
	parent.frames("sIframeBottom").document.getElementById("sPath").value=sPhysicPath;
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/copyPartResource/copyPartResourceSaveContents.aspx";
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target="sCopyPartResource";
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
	//alert(parent.frames("sIframeBottom").document.body.innerHTML);
}


function fnReplaceUL(sString){//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此专门定义一个插入一个空格字符的函数。
var sWillReplacedUL="<UL>";
var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
var sAfterULReplaced=sString.replace(oRegExpReplaceUL," <UL>");
return sAfterULReplaced;
}

function fnDynOutline(){
event.cancelBubble=true;
event.returnValue=false;
if(event.srcElement.src.lastIndexOf("plus.gif")>0){
event.srcElement.src="../common/image/plusTran.gif";
var iLength=event.srcElement.parentNode.children[2].children.length;
for(var i=0;i<iLength;i++){
if(event.srcElement.parentNode.children[2].children[i].nodeName=="LI"){
event.srcElement.parentNode.children[2].children[i].style.display="list-item";
}
}
}

else if(event.srcElement.src.lastIndexOf("plusTran.gif")>0){
event.srcElement.src="../common/image/plus.gif";
var iLength=event.srcElement.parentNode.children[2].children.length;
for(var i=0;i<iLength;i++){
if(event.srcElement.parentNode.children[2].children[i].nodeName=="LI"){
event.srcElement.parentNode.children[2].children[i].style.display="none";
}
}
}
}

function fnDynOpen(){
 
 //如果是于编辑状态的离开,则判断提示是否做了修改
 if( parent.frames.item("sIframecontent").IsFirst == false ) 
 {
 	if (parent.frames.item("sIframecontent").document.URL.indexOf("\?")>0) 
 	{
   		sUrl=parent.frames.item("sIframecontent").document.URL.substring(0,parent.frames.item("sIframecontent").document.URL.indexOf("?"));
  		// alert(parent.frames.item("sIframecontent").document.URL.substring(0,parent.frames.item("sIframecontent").document.URL.indexOf("?")));
   		sUrl=sUrl.substring(sUrl.lastIndexOf("/")+1); 
  		if ( sUrl.toUpperCase()=="WEBEDITOR.ASP" ) 
  		{
   			parent.frames.item("sIframeContent").HtmlEdit.focus();
   			parent.frames.item("sIframeContent").Exit1();
   		}
  	}
}
event.returnValue=false;
window.oSrcElement=event.srcElement;
try{//为内容框架修改又没有保存而刷新的程序被打断而设置！！！
	try{
		if(parent.frames.item('sIFrameTitle').document.getElementById('sContentEditable').style.backgroundColor==parent.frames.item('sIFrameTitle').sBackgroundColorForsContentsEditable){
			parent.frames.item('sIFrameTitle').document.getElementById('sContentEditable').style.backgroundColor="";
		}
	}
	catch(e){
		;
	}
	if(event.srcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="")
	{
		try
		{
			parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
		}
		catch(e)
		{
			;
		}
		if(event.srcElement.parentNode.parentNode===event.srcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&event.srcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
		{
			window.open("../options/contentStart.aspx","sIframeContent",false);
		}
		else
		{
			var sText=event.srcElement.parentNode.attributes.getNamedItem("text").nodeValue;
			if(sText=="")
			{
					var oDate=new Date();
					var sFileName=oDate.getTime();
					event.srcElement.parentNode.setAttribute("text",sFileName);
					window.open("../common/createText.aspx?sFileName="+sFileName,"sIframeContent",false);
			}
			else
			{
				window.open("content/book/"+sText+"/"+sText+".htm","sIframeContent",true);	
			}
		}
	}
	else{
		try
		{
			parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		}
		catch(e)
		{
			;
		}
		if(event.srcElement.parentNode.parentNode===event.srcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&event.srcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
		{
			window.open("../options/contentStart"+window.sPathPartForForeign+".asp","sIframeContent",false);
		}
		else
		{
			var sTextF=event.srcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
			if( sTextF=="")
			{
					var oDate=new Date();
					var sFileName=oDate.getTime();
					event.srcElement.parentNode.setAttribute("textF",sFileName);
					window.open("../common/createTextForeign.aspx?sFileName="+sFileName,"sIframeContent",false);
			}
			else{
				window.open("content/book_foreign/"+ sTextF+"/"+ sTextF+".htm","sIframeContent",true);
				}
			}
	}	
	//var sGroup=event.srcElement.attributes.getNamedItem("sGroup").nodeValue;
	var cSPAN=document.getElementsByTagName("SPAN");
	var iSPANLength=cSPAN.length;
	for(i=0;i<iSPANLength;i++)
	{
		if(cSPAN.item(i).style.color==window.sColorClicked)
		{
			cSPAN.item(i).style.color=window.sColorNormal;
			break;
		}
		else
		{
			;
		}
	}
	event.srcElement.style.color=window.sColorClicked;//不能放到函数开始部分是因为“内容框架”编辑后没有保存离开而提示是否保存而选择“取消”后当前事件条目不应该变色。
	}
catch(e)
{
	return;
}

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
if(oObject.style.color==window.sColorMouseOver)
oObject.style.color=window.sColorNormal;
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
else{
event.srcElement.style.cursor="text";
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
document.getElementById("sDiv").style.zoom=parseInt(document.getElementById("sDiv").style.zoom)+iCount+"%";
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
if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("vertical.gif")>0){
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
if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("horizontal.gif")>0){
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
if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("zoom.gif")>0){
var iCount=0;
if (event.wheelDelta>=120)
        iCount-=10;
else if(event.wheelDelta<=-120)
        iCount+=10;
document.getElementById("sDiv").style.zoom=parseInt(document.getElementById("sDiv").style.zoom)+iCount+"%";
}
}
}


function fnOnDBLClick(){
try{
window.event.returnValue=false;//去除双击时的默认选定文本效果
}
catch(e){//考虑目录框架的右键菜单中的命令。
return;
}
finally{
	if(parent.document.getElementById("sFramesetMiddle").cols=="1022,*"){
		parent.document.getElementById("sFramesetMiddle").cols=parent.sFramesetMiddleColsTemp;
																		}
	else{
		parent.sFramesetMiddleColsTemp=parent.document.getElementById("sFramesetMiddle").cols;
		parent.document.getElementById("sFramesetMiddle").cols="1022,*";
	}
}
}
function fnOnDownLoad(src){
window.oPopup.document.write(src);
}

function fnPopup(){
//try{
	event.returnValue=false;
	if(event.srcElement.tagName.toUpperCase()=="SPAN"){
		if(event.srcElement===event.srcElement.parentNode.getElementsByTagName("SPAN").item(1)){
			var cSPAN=document.getElementsByTagName("SPAN");
			var iSPANLength=cSPAN.length;
			for(i=0;i<iSPANLength;i++){
				if(cSPAN.item(i).style.color==window.sColorClicked){
				cSPAN.item(i).style.color=window.sColorNormal;
				break;
																	}
				else{
					;
					}
									}
			event.srcElement.style.color=window.sColorClicked;
			var oDiv=window.oPopup.document.getElementById("popupDiv");
			var iChildNumber=oDiv.childNodes.length;
		 	 	if(window.sContentsPopUpState==1){//编辑目录状态的右击菜单；
		 	 		for(var i=0;i<iChildNumber;i++){
						if(oDiv.childNodes.item(i).id.lastIndexOf("_div")>0){
		        			oDiv.childNodes.item(i).style.display="none";
																		}
						else{
							oDiv.childNodes.item(i).style.display="";
							}
													}
				}
		 	 	if(window.sContentsPopUpState==0){//非编辑目录状态的右击菜单；
					for(var i=0;i<iChildNumber;i++){
							if(oDiv.childNodes.item(i).id.lastIndexOf("_div")>0){
			        			oDiv.childNodes.item(i).style.display="";
																			}
							else{
							oDiv.childNodes.item(i).style.display="none";
								}
														}
				}
		}
		window.oSrcElement=event.srcElement;
		var iLeft = event.screenX+10;
		var iTop = event.screenY+10;
		window.oPopup.document.body.style.backgroundColor="lightyellow";
		window.oPopup.document.body.style.border="solid black 1px";
		window.oPopup.document.body.style.fontSize=11;
		window.oPopup.document.body.style.cursor="default";
		
		var iMaxLength=0;
		var sString="";
		for(var i=0; i<iChildNumber; i++){
			if(oDiv.childNodes.item(i).style.display==""){
			sString=oDiv.childNodes[i].innerHTML;
				if(sString.length>iMaxLength&&oDiv.childNodes[i]){
		        	 iMaxLength=sString.length;
				}
			}
		}
		
		var iChildNumberDisplay=0;
		for(var i=0; i<iChildNumber; i++){
			if(oDiv.childNodes.item(i).style.display==""){
			iChildNumberDisplay=iChildNumberDisplay+1;
		}
		}
		
		window.oPopup.show(iLeft,iTop,iMaxLength*13,iChildNumberDisplay*14+11);
		
		
		if(window.sTempForUndo===""){
			window.oPopup.document.getElementById("sIdUndo").disabled=true;
		}
		else{
			window.oPopup.document.getElementById("sIdUndo").disabled=false;
		}
		
		if(window.sTempForRedo===""){
			window.oPopup.document.getElementById("sIdRedo").disabled=true;
		}
		else{
			window.oPopup.document.getElementById("sIdRedo").disabled=false;
		}
		
		if(window.sTempForCopy===""){
			window.oPopup.document.getElementById("sIdInsertCopied").disabled=true;
			window.oPopup.document.getElementById("sIdAppendCopied").disabled=true;
		}
		else{
			window.oPopup.document.getElementById("sIdInsertCopied").disabled=false;
			window.oPopup.document.getElementById("sIdAppendCopied").disabled=false;
		}
		
		
		if(window.oSrcElement.tagName.toUpperCase()=="SPAN"){
			if(window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif")>0){//使用window.oSrcElement.parentNode.childNodes.length==2)时出现奇怪现象，只好改用判断图标
				window.oPopup.document.getElementById("sIdPromote").childNodes.item(0).nodeValue="升级该条目一级";
				window.oPopup.document.getElementById("sIdDemote").childNodes.item(0).nodeValue="降级该条目一级";
				window.oPopup.document.getElementById("sIdDel").childNodes.item(0).nodeValue="删除该条目";
				window.oPopup.document.getElementById("sIdCopy").childNodes.item(0).nodeValue="复制该条目";
				window.oPopup.document.getElementById("sIdCut").childNodes.item(0).nodeValue="剪切该条目";
			}
			else{
				window.oPopup.document.getElementById("sIdPromote").childNodes.item(0).nodeValue="升级该条目及子条目一级";
				window.oPopup.document.getElementById("sIdDemote").childNodes.item(0).nodeValue="降级该条目及子条目一级";
				window.oPopup.document.getElementById("sIdDel").childNodes.item(0).nodeValue="删除该条目及子条目";
				window.oPopup.document.getElementById("sIdCopy").childNodes.item(0).nodeValue="复制该条目及子条目";
				window.oPopup.document.getElementById("sIdCut").childNodes.item(0).nodeValue="剪切该条目及子条目";
			}
			}
		else{//没实现
			alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");
		}
	}
	else{
		alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");
	}
//}
//catch(e){
//	alert("右击菜单已被禁用！");
//}
}


function fnCreateChild(){
fnForUndo();
if(window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif")>0){//使用window.oSrcElement.parentNode.childNodes.length==2)时出现奇怪现象，只好改用判断图标
	var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);//由于LI元素将动态生成一些特性，所以复制更方便,在此复制第一条目
	oLiCloned.removeAttribute("style");//去除动态生成的一些特性；
	oLiCloned.style.display="list-item";
	var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//由于IMG元素将动态生成一些特性，所以复制更方便
	var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(true);//由于A元素将动态生成一些特性，所以复制更方便
	var oSpanClonedNumber=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
	var oSpanClonedItem=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
	oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
	//var oUl=document.createElement("<UL></UL>");
        var oUl=document.createElement("UL");
	var oInsertUl=window.oSrcElement.parentNode.parentNode.appendChild(oUl);
	var oInsertLi=oInsertUl.appendChild(oLiCloned);
	oInsertLi.appendChild(oImageCloned);
	var oInsertA=oInsertLi.appendChild(oACloned);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="新建条目";//奇怪,不能直接使用oInsertSpan,oInsertA等
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//添加一个国语属性,属性值等于节点值
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");//第一条目可能有外语,必须清除;
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");//第一条目可能已切换为外语,必须清除;
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
																										}
else{
	alert("该条目已有子条目,不需要创建!");
	return;
}
}


function fnInsertBefore(){//参看fnCreateChild()
fnForUndo();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目,前面不能插入其它条目!");
	return;
}
else{
	var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);
	oLiCloned.removeAttribute("style");
	oLiCloned.style.display="list-item";
	var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);
	var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(false);
	var oSpanClonedNumber=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
	var oSpanClonedItem=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
	oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
	//oACloned.href=parent.sLessonsPath;
	var oInsertedLi=window.oSrcElement.parentNode.parentNode.parentNode.insertBefore(oLiCloned,window.oSrcElement.parentNode.parentNode);
	var oInsertedIMG=oInsertedLi.appendChild(oImageCloned);
	var oInsertedA=oInsertedLi.appendChild(oACloned);
	var oInsertedSpanNumber=oInsertedA.appendChild(oSpanClonedNumber);
	var oInsertedSpanItem=oInsertedA.appendChild(oSpanClonedItem);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="新建条目";
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
}

}

function fnAppend(){//参看fnCreateChild()
	fnForUndo();
	//var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);//由于LI元素将动态生成一些特性，所以复制更方便
	//oLiCloned.removeAttribute("style");//去除动态生成的一些特性；
	//oLiCloned.style.display="list-item";
	//var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//由于IMG元素将动态生成一些特性，所以复制更方便
	//var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(true);//由于A元素将动态生成一些特性，所以复制更方便
	//oACloned.removeAttribute("style");//去除动态生成的一些特性；
	//oACloned.href=parent.sLessonsPath;
	//var oInsertedLi=window.oSrcElement.parentNode.parentNode.appendChild(oLiCloned);
	//oInsertedLi.appendChild(oImageCloned);
	//oInsertedLi.appendChild(oACloned);
	//oACloned.childNodes.item(0).nodeValue="新建条目";
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
	
	var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);
	oLiCloned.removeAttribute("style");
	oLiCloned.style.display="list-item";
	var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);
	var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(false);
	var oSpanClonedNumber=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
	var oSpanClonedItem=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
	oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
	//oACloned.href=parent.sLessonsPath;
	var oInsertedLi=window.oSrcElement.parentNode.parentNode.parentNode.appendChild(oLiCloned);
	var oInsertedIMG=oInsertedLi.appendChild(oImageCloned);
	var oInsertedA=oInsertedLi.appendChild(oACloned);
	var oInsertedSpanNumber=oInsertedA.appendChild(oSpanClonedNumber);
	var oInsertedSpanItem=oInsertedA.appendChild(oSpanClonedItem);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="新建条目";
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;

}

function fnModifyValue(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	fnForUndo();
	window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
	window.oSrcElement.parentNode.setAttribute("sFId","");
	var sNewValue=prompt("请键入新"+window.sNativeLanguage+"文本,请注意文本中不包括自动编号的数字!因为中英文可能同时使用，所以在此并不判断您键入的是否为"+window.sNativeLanguage+"！",window.oSrcElement.childNodes.item(0).nodeValue);
	if(sNewValue===null){//取消情形
		fnUndo();
		return;
						}
	else{
		if(sNewValue===""){
			alert("不能为空!");
			fnUndo();
			return;
		}
		else{
			window.oSrcElement.childNodes.item(0).nodeValue=sNewValue;
			window.oSrcElement.parentNode.setAttribute("sN",sNewValue);
			window.oSrcElement.parentNode.setAttribute("sFId","");
			parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
			window.oPopup.document.getElementById("sIdUndo").disabled=false;
			}
		}
	}
}

function fnModifyValue_Foreign(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	fnForUndo();
	if(window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue==""){
		window.oSrcElement.firstChild.nodeValue="Input Foreign Language,please!";
	}
	else{
		window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
	}
	var sNewValue=prompt("请键入新"+window.sForeignLanguage+"文本,请注意文本中不包括自动编号的数字!因为中英文可能同时使用，所以在此并不判断您键入的是否为"+window.sForeignLanguage+"！",window.oSrcElement.childNodes.item(0).nodeValue);
	if(sNewValue===null){
		fnUndo();
		return;
						}
	else{
		if(sNewValue===""){
			alert("不能为空!");
			fnUndo();
			return;
		}
		else{
		window.oSrcElement.childNodes.item(0).nodeValue=sNewValue;
		window.oSrcElement.parentNode.setAttribute("sF",sNewValue);
		window.oSrcElement.parentNode.setAttribute("sFId","1");
		parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		window.oPopup.document.getElementById("sIdUndo").disabled=false;
			}
		}
	}
}


function fnForUndo(){
window.sTempForUndo=document.getElementById("sDiv").innerHTML;
}

function fnForRedo(){
window.sTempForRedo=document.getElementById("sDiv").innerHTML;
}


function fnPromote(){
window.sTempForUndo=document.getElementById("sDiv").innerHTML;
if(window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){//第一级条目无法再升级
	alert("该条目不能再被提升!");
return;
}
else{//不是第一级条目
	if(window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length==1){//window.oSrcElement.parentNode.parentNode.parentNode是UL，LI无兄弟节点的情形，必须删除<UL><LI>...</LI></UL>
		var oCloned=window.oSrcElement.parentNode.parentNode.cloneNode(true);
		var oInserted=window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(oCloned,window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling);
		window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//去除<UL><LI>...</LI></UL>;
																						}
	else{//LI有兄弟节点的情形
		var cLi=window.oSrcElement.parentNode.parentNode.parentNode.childNodes;//
		var iLiLength=cLi.length;
		var iTarget=0;
		for(var i=0;i<iLiLength;i++){
			if(cLi.item(i)===window.oSrcElement.parentNode.parentNode){
				 iTarget=i;
			 	 break;
															}
		}
		var aArray=new Array();
		for(j=0;j<iLiLength-iTarget-1;j++){//将欲升级条目的子条目保存为一个数组备用。
				var iStart=iTarget;
				aArray[j]=window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(j+iStart+1);	
		}
		var oInserted;
		if(window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes.length==1){
			oInserted=window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
		}
		else{
			//alert(window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML);
			oInserted=window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(window.oSrcElement.parentNode.parentNode.cloneNode(true),window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling);
		}
		
		if(aArray.length>=1){
			if(oInserted.childNodes.item(0).src.lastIndexOf("common/image/no.gif")>0){//如升级的LI元素不含有子条目
				//var oUL=document.createElement("<UL></UL>");
                                 var oUL=document.createElement("UL");
				var oInsertedNow=oInserted.appendChild(oUL);
				var iLengthaArray=aArray.length;
				for(var k=0;k<iLengthaArray;k++){		//不能再用i，注意变量范围
					oInsertedNow.appendChild(aArray[k]);
												}
				}
			else{
			
				var iLengthaArray=aArray.length;
				for(var k=0;k<iLengthaArray;k++){		
					oInserted.getElementsByTagName("UL").item(0).appendChild(aArray[k]);
												}
				}
		}
		else{
		;
		}
		if(iTarget==0){
			window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//此时是一系列LI的第一个LI升级时，其父的父也是LI，并且现在已没有子LI，此时必须删除<ul>
		}
		else{
		;
		}
		window.oSrcElement.parentNode.parentNode.removeNode(true);
		var sWillReplacedUL="<UL>";
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。																					}
		}
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;	
	}
}


function fnDemote(){
	fnForUndo();
	var iLength=window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length;
	var oCloned=window.oSrcElement.parentNode.parentNode.cloneNode(true);
	var iTarget=0;
	for(i=0;i<iLength;i++){
		if(window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(i)===window.oSrcElement.parentNode.parentNode){
		iTarget=i;
		 break;
		}
	}
	
	if(iTarget===0){
		alert("该条目不能再被降级!");
		return;
	}
	else{
		if(window.oSrcElement.parentNode.parentNode.previousSibling.childNodes.item(0).src.indexOf("/common/image/no.gif")>0){
		//var oUl=document.createElement("<UL></UL>");
                var oUl=document.createElement("UL");
		var oInserted=window.oSrcElement.parentNode.parentNode.previousSibling.appendChild(oUl);
		oInserted.appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
		window.oSrcElement.parentNode.parentNode.removeNode(true);
		var sWillReplacedUL="<UL>";
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
																													}
		else{
			var oInserted=window.oSrcElement.parentNode.parentNode.previousSibling.getElementsByTagName("UL").item(0).appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
			if(window.oSrcElement.parentNode.parentNode.previousSibling.childNodes.item(0).src.indexOf("/common/image/plus.gif")>0){
				oInserted.style.display="none";
			}
			else{
				oInserted.style.display="list-item";//可能是继承的原因，该语句不能省！
			}
			window.oSrcElement.parentNode.parentNode.removeNode(true);
			
		}
		
		fnContentsRefreshAFromAlreadyAutoNumbered();
		fnContentsRefreshImage();
		window.oPopup.document.getElementById("sIdUndo").disabled=false;
	}
}


function fnCopy(){
window.sTempForCopy=window.oSrcElement.parentNode.parentNode.innerHTML;
}

function fnCut(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被剪切!");
	return;
}
else{
	var bConfirm=confirm("确定要剪切吗?");
	if(bConfirm){
	fnForUndo();
	fnCopy();
	//window.sTempForUndo=document.getElementById("sDiv").innerHTML;
	//window.sTempForCopy=window.oSrcElement.parentNode.innerHTML;
	if(window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length>1){
		window.oSrcElement.parentNode.parentNode.removeNode(true);
																	}
	else{
		window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);
		}
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
				}
				
	else{
		return;
		}
	}

}

function fnDel(){
fnForUndo();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被删除!");
	return;
}
else{
	var bConfirm=confirm("确定要删除吗?");
	if(bConfirm){
			if(window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length>1){
				window.oSrcElement.parentNode.parentNode.removeNode(true);
							}
			else{
				window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);
				}
			fnContentsRefreshAFromAlreadyAutoNumbered();
			fnContentsRefreshImage();
			window.oPopup.document.getElementById("sIdUndo").disabled=false;
				}
	else{
		return;
		}
	
	}

}



function fnInsertCopied(){//参看fnCreateChild()
if(window.sTempForCopy==""){
	return;
}
else{
	fnForUndo();
	if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
		alert("该条目是根条目,前面不能插入其它条目!");
		return;
	}
	else{
		//var oWillInserted=document.createElement("<LI></LI>");
               var oWillInserted=document.createElement("LI");
		oWillInserted.style.display="list-item";
		oWillInserted.unelectable="on";
		var oInserted=window.oSrcElement.parentNode.parentNode.parentNode.insertBefore(oWillInserted,window.oSrcElement.parentNode.parentNode);
		oInserted.innerHTML=window.sTempForCopy;
		var sWillReplacedUL="<UL>";
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
		fnContentsRefreshAFromAlreadyAutoNumbered();
		fnContentsRefreshImage();
		window.oPopup.document.getElementById("sIdUndo").disabled=false;
		}

}
}

function fnAppendCopied(){//参看fnCreateChild()
if(window.sTempForCopy==""){
	return;
}
else{
	fnForUndo();
	//var oWillInserted=document.createElement("<LI></LI>");
        var oWillInserted=document.createElement("LI");
	oWillInserted.style.display="list-item";
	oWillInserted.unelectable="on";
	oInserted=window.oSrcElement.parentNode.parentNode.parentNode.appendChild(oWillInserted);
	oInserted.innerHTML=window.sTempForCopy;
	var sWillReplacedUL="<UL>";
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
}
}

function fnUndo(){
	if(window.sTempForUndo==""){
		return;
	}
	else{
		fnForRedo();
		document.getElementById("sDiv").innerHTML=window.sTempForUndo;//事件等特性未能出现在innerHTML字符串中，必须重新设置这些特性。注意innerHTML中href也由相对URL解析为了绝对URL
		fnContentsRefreshAFromAlreadyAutoNumbered();
		fnContentsRefreshImage();
		window.oPopup.document.getElementById("sIdUndo").disabled=true;
		window.sTempForUndo=""
	}
}



function fnRedo(){
if(window.sTempForRedo==""){
	return;
}
else{
	document.getElementById("sDiv").innerHTML=window.sTempForRedo;//事件等特性未能出现在innerHTML字符串中，必须重新设置这些特性。注意innerHTML中href也由相对URL解析为了绝对URL
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdRedo").disabled=true;
	window.sTempForRedo="";
}
}


function fnIsSaved(){
	if(!fnIsContentsChanged()){
		//event.returnValue="";
		;
	}
	else{
		event.returnValue='您已在线编辑了“目录”或您的一些操作自动修改了“目录”，单击“确定”将不保存编辑结果而关闭当前目录;单击“取消”将不关闭当前目录而返回,返回后，目录框架的右击菜单（编辑状态）中选择"保存"可保存目录！';
	}
}

function fnViewTeachingPlan(){
if ( fnDetectActiveXControl('webEdu.pptplayer') )
   {
	window.oSrcElement.click();
	//if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
	//{
	//		alert("该条目是根条目，没有教案!");		
	//}
	//else
	//{
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="")
		{//国语状态
			var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;	
			if(sTeachingPlanName=="")
			{
				var bBoolean=confirm('该条目"'+window.oSrcElement.childNodes(0).nodeValue+'"暂时没有'+window.sNativeLanguage+'教案!单击"确定"将循环查询后续条目的教案；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教案，当前不支持在线编辑教案。');
				if(bBoolean)
				{
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++)
					{
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked)
						{
							intTarget=i;//确定当前条目
							break;
						}
					}
					var bIsHave=false;
					if(intTarget==intLi-1)
					{//已经是最后一个条目，从头开始查询
						for(var j=0;j<intLi;j++ )
						{
							if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue!="")
							{
								cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","");
								cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								cLi[j].scrollIntoView(true);
								if(j==0)
								{
									cLi[j].getElementsByTagName("SPAN").item(1).click();
								}
								else
								{
									cLi[j].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[j];
									while(oTemp.parentNode.parentNode.nodeName!="DIV")
									{
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++)
										{
											if(cChildNodesTemp[intR].nodeName=="LI")
											{
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0)
												{
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item")
														{
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
														}
												}
											}
										}
										oTemp=oTemp.parentNode;
									}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked)
									{
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
									}																												
								}
								alert('已查询到"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'教案!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("没有查询到"+window.sNativeLanguage+"教案");
						}
					}
					else{
						var bIsHaveNew=false;
						for(var k=intTarget+1;k<intLi;k++){
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue!=""){
								cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","");
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								cLi[k].scrollIntoView(true);
								if(k==0){
									cLi[k].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[k];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								alert('已查询到"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'教案!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//到最后都没有，从头开始查询
							var bIsHaveNewNew=false;
							for(var l=0;l<intLi;l++ ){
								if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue!=""){
									cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","");
									cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
									parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									cLi[l].scrollIntoView(true);
									if(l==0){
										cLi[l].getElementsByTagName("SPAN").item(1).click();
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).click();
										var oTemp=cLi[l];
										while(oTemp.parentNode.parentNode.nodeName!="DIV"){
											var cChildNodesTemp=oTemp.parentNode.childNodes;				
											for(intR=0;intR<cChildNodesTemp.length;intR++){
												if(cChildNodesTemp[intR].nodeName=="LI"){
													cChildNodesTemp[intR].style.display="list-item";
													if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																															}
																						}
																							}
											oTemp=oTemp.parentNode;
							
																							}
											
										if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																					}																												
									}
									alert('已查询到"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'教案!');
									 var sHeadUrl="";
									var sTeachingPlanName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
									window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
									showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("没有查询到"+window.sNativeLanguage+"教案");
							}			
										}
						}
						
					}
						else{
							return;
						}
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","");
				window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
			    var sHeadUrl="";
				var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
				window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
				 // alert("queryString参数是:"+"../common/PPTPlayer/PPTPlayerIFrame.asp?sTeachingPlan="+sTeachingPlan+"\n"+"请编写完成播放教案的程序!");
				showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
				}
			}
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//外语状态
			var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;	
			if(sTeachingPlanName==""){
				var bBoolean=confirm('该条目"'+window.oSrcElement.childNodes(0).nodeValue+'"暂时没有'+window.sForeignLanguage+'教案!单击"确定"将循环查询后续条目的教案；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教案。');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//确定当前条目
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
						for(var j=0;j<intLi;j++ ){
							if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue!=""){
								cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","1");
								var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
								if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
									cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
								}
								else{
									cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
								}
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								cLi[j].scrollIntoView(true);
								if(j==0){
									cLi[j].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[j].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[j];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																		}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																		}																												
								}
								alert('已查询到"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'教案!');
								 var sHeadUrl="";
								var sTeachingPlanName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("没有查询到"+window.sForeignLanguage+"教案");
						}
					}
					else{
						var bIsHaveNew=false;
						for(var k=intTarget+1;k<intLi;k++){
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue!=""){
								cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","1");
								var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
								if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
									cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
								}
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeinLanguage;
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								cLi[k].scrollIntoView(true);
								if(k==0){
									cLi[k].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[k];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								alert('已查询到"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'教案!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//到最后都没有，从头开始查询
							var bIsHaveNewNew=false;
							for(var l=0;l<intLi;l++ ){
								if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue!=""){
									cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","1");
									var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
									if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
										cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
									}
									parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									cLi[l].scrollIntoView(true);
									if(l==0){
										cLi[l].getElementsByTagName("SPAN").item(1).click();
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).click();
										var oTemp=cLi[l];
										while(oTemp.parentNode.parentNode.nodeName!="DIV"){
											var cChildNodesTemp=oTemp.parentNode.childNodes;				
											for(intR=0;intR<cChildNodesTemp.length;intR++){
												if(cChildNodesTemp[intR].nodeName=="LI"){
													cChildNodesTemp[intR].style.display="list-item";
													if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																															}
																						}
																							}
											oTemp=oTemp.parentNode;
							
																							}
											
										if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																					}																												
									}
									alert('已查询到"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'教案!');
									var sHeadUrl="";
									var sTeachingPlanName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
									window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
									showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("没有查询到"+window.sForeignLanguage+"教案");
							}			
										}
						}
						
					}
						else{
							return;
						}
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","1");
				var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
				if(window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue==""){
					window.oSrcElement.childNodes(0).nodeValue=sPromptNoForeignLanguage;		
				}
				else{
					window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
				}
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
				var sHeadUrl="";
				var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;
				window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
				showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//为了在线编辑，打开框架网页。	
				}
		}
	//}
	}//存在组件
	else
	{
		if(confirm("需要安装播放器组件才能正常查看ppt播放,请下载安装.\"确定\"将前往下载页面."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//为了在线编辑，打开框架网页。	

		}

	}
}

function fnViewText(){
	 //window.oSrcElement.click();
	var sPathPartForText="";
	var sLanguage="";
	var sTextName="";
	
	if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue==""){
		sPathPartForText="";
		sLanguage=window.sNativeLanguage;
		sTextName=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	
	}
	else{
		sPathPartForText=window.sPathPartForForeign;
		sLanguage=window.sForeignLanguage;
		sTextName=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
		}
	
	if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
		var sText="../options/contentStart"+sPathPartForText+".asp";
			showModelessDialog(sText, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?
	}
	else{
		if(sTextName==""){
			alert("该条目没有"+sLanguage+"课文");
			return;
			}
		else{
			alert('课文默认在“内容框架”中显示，而不象教案、动画、教/学笔记那样在独立窗口中显示。当前操作将在独立窗口中显示课文，主要用于多部分课文比较时使用。此时右键菜单中提供的在线编辑等功能将被禁用！但仍然可试验按住Ctrl,Shift,Alt键滚动鼠标而放缩、移动课文等功能！');
			var sHeadUrl="";
			var sText=sHeadUrl+"content/book"+sPathPartForText+"/"+sTextName+"/"+sTextName+".htm";
			showModelessDialog(sText, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?
			window.oSrcElement.click();
		}
	}
}


function fnViewAnimation(){
if ( fnDetectActiveXControl('webEdu.pptplayer') )
   {
	window.oSrcElement.click();
	/*if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
			alert("该条目是根条目，没有动画!");		
	}
	else{*/
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue==""){//国语状态
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;	
			if(sAnimationName==""){
				var bBoolean=confirm('该条目"'+window.oSrcElement.childNodes(0).nodeValue+'"暂时没有'+window.sNativeLanguage+'动画!单击"确定"将循环查询后续条目的动画；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传动画，当前不支持在线编辑动画。');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//确定当前条目
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
						for(var j=0;j<intLi;j++ ){
							if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
								cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","");
								cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								cLi[j].scrollIntoView(true);
								if(j==0){
									cLi[j].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[j].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[j];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																		}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																		}																												
								}
								alert('已查询到"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'动画!');
								var sHeadUrl="";
								var sAnimationName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
								window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("没有查询到"+window.sNativeLanguage+"动画");
						}
					}
					else{
						var bIsHaveNew=false;
						for(var k=intTarget+1;k<intLi;k++){
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
								cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","");
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								cLi[k].scrollIntoView(true);
								if(k==0){
									cLi[k].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[k];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								alert('已查询到"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'动画!');
								var sHeadUrl="";
								var sAnimationName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
								window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//到最后都没有，从头开始查询
							var bIsHaveNewNew=false;
							for(var l=0;l<intLi;l++ ){
								if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
									cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","");
									cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
									parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									cLi[l].scrollIntoView(true);
									if(l==0){
										cLi[l].getElementsByTagName("SPAN").item(1).click();
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).click();
										var oTemp=cLi[l];
										while(oTemp.parentNode.parentNode.nodeName!="DIV"){
											var cChildNodesTemp=oTemp.parentNode.childNodes;				
											for(intR=0;intR<cChildNodesTemp.length;intR++){
												if(cChildNodesTemp[intR].nodeName=="LI"){
													cChildNodesTemp[intR].style.display="list-item";
													if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																															}
																						}
																							}
											oTemp=oTemp.parentNode;
							
																							}
											
										if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																					}																												
									}
									alert('已查询到"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sNativeLanguage+'动画!');
									var sHeadUrl="";
									var sAnimationName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
									window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
									showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("没有查询到"+window.sNativeLanguage+"动画");
							}			
										}
						}
						
					}
						else{
							return;
						}
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","");
				window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
				var sHeadUrl="";
				var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
				window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
				showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
				}
			}
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//外语状态
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;	
			if(sAnimationName==""){
				var bBoolean=confirm('该条目"'+window.oSrcElement.childNodes(0).nodeValue+'"暂时没有'+window.sForeignLanguage+'动画!单击"确定"将循环查询后续条目的动画；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传动画。');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//确定当前条目
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
						for(var j=0;j<intLi;j++ ){
							if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
								cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","1");
								var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
								if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
									cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
								}
								else{
									cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
								}
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								cLi[j].scrollIntoView(true);
								if(j==0){
									cLi[j].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[j].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[j];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																		}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																		}																												
								}
								alert('已查询到"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'动画!');
								var sHeadUrl="";
								var sAnimationName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
								window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("没有查询到"+window.sForeignLanguage+"动画");
						}
					}
					else{
						var bIsHaveNew=false;
						for(var k=intTarget+1;k<intLi;k++){
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
								cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","1");
								var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
								if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
									cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
								}
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeinLanguage;
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								cLi[k].scrollIntoView(true);
								if(k==0){
									cLi[k].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[k].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[k];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								alert('已查询到"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'动画!');
								var sHeadUrl="";
								var sAnimationName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
								window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//到最后都没有，从头开始查询
							var bIsHaveNewNew=false;
							for(var l=0;l<intLi;l++ ){
								if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
									cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","1");
									var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
									if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
										cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
									}
									parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									cLi[l].scrollIntoView(true);
									if(l==0){
										cLi[l].getElementsByTagName("SPAN").item(1).click();
									}
									else{
										cLi[l].getElementsByTagName("SPAN").item(1).click();
										var oTemp=cLi[l];
										while(oTemp.parentNode.parentNode.nodeName!="DIV"){
											var cChildNodesTemp=oTemp.parentNode.childNodes;				
											for(intR=0;intR<cChildNodesTemp.length;intR++){
												if(cChildNodesTemp[intR].nodeName=="LI"){
													cChildNodesTemp[intR].style.display="list-item";
													if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
														if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
															cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																				}
																															}
																						}
																							}
											oTemp=oTemp.parentNode;
							
																							}
											
										if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
										oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																					}																												
									}
									alert('已查询到"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的'+window.sForeignLanguage+'动画!');
									var sHeadUrl="";
									var sAnimationName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
									window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
									showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("没有查询到"+window.sForeignLanguage+"动画");
							}			
										}
						}
						
					}
						else{
							return;
						}
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","1");
				var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
				if(window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue==""){
					window.oSrcElement.childNodes(0).nodeValue=sPromptNoForeignLanguage;		
				}
				else{
					window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
				}
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
				var sHeadUrl="";
				var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
				window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
				showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
				}
		}
	//}
	}//存在组件
	else
	{
		if(confirm("需要安装播放器组件才能正常查看动画播放,请下载安装.\"确定\"将前往下载页面."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//为了在线编辑，打开框架网页。	

		}
	
	
	}


}

function fnViewAnimationAll(){	
if ( fnDetectActiveXControl('webEdu.pptplayer') )
   {
	window.oSrcElement.click();
	/*if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
			alert("该条目是根条目，没有动画!");		
	}
	else{*/
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue==""){//国语状态
			window.sCurrentLanguageForPlayAll="";
			var iAnimation=0;
			var cA=document.getElementsByTagName("A");
			var intA=cA.length;
			for(var z=0;z<intA;z++){
				if(cA[z].attributes.getNamedItem("play").nodeValue!=""){
					iAnimation=iAnimation+1;
																		}
			}
			alert("总共有"+iAnimation+"个条目有"+window.sNativeLanguage+"动画!将以窗口方式循环播放所有动画!");
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;	
			if(sAnimationName==""){
				var cLi=document.getElementsByTagName("LI");
				var intLi=cLi.length;
				var intTarget=-1;
			
				for(var i=0;i<intLi;i++){
					if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
						intTarget=i;//确定当前条目
						break;
																			}
				}
				var bIsHave=false;
				if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
					for(var j=0;j<intLi;j++ ){
						if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
							cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","");
							cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
							parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
							cLi[j].getElementsByTagName("SPAN").item(1).click();
							cLi[j].scrollIntoView(true);
							if(j==0){
								cLi[j].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[j];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																	}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																	}																												
							}
							var sHeadUrl="";
							//open(sHeadUrl+'/webCourse/common/windowOrFullScreen_Animation_all.asp',"sAnimationLoop","fullscreen=no,left="+screen.width*0.2/2+",top="+screen.height*0.5/2+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no,width="+screen.width*0.8+"px,height="+screen.height*0.5+"px,false");	
							//open(sHeadUrl+'/webCourse/common/flashPlayer/flashPlayer.asp',"sAnimationLoop","fullscreen=yes");	
							var iWidth=(4/3)*(screen.height-25-30);
							showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
							bIsHave=true;
							break;
						}
					}
					if(!bIsHave){
						alert("没有查询到"+window.sNativeLanguage+"动画");
					}
				}
				else{
					var bIsHaveNew=false;
					for(var k=intTarget+1;k<intLi;k++){
						if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
							cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","");
							cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
							parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							cLi[k].scrollIntoView(true);
							if(k==0){
								cLi[k].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[k];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																			}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																			}																												
							}
							var sHeadUrl="";
							var iWidth=(4/3)*(screen.height-25-30);
							showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
							bIsHaveNew=true;
							break;
							}
						}
					if(!bIsHaveNew){//到最后都没有，从头开始查询
						var bIsHaveNewNew=false;
						for(var l=0;l<intLi;l++ ){
							if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
								cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","");
								cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
								cLi[l].getElementsByTagName("SPAN").item(1).click();
								cLi[l].scrollIntoView(true);
								if(l==0){
									cLi[l].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[l];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																			}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								var sHeadUrl="";
								var iWidth=(4/3)*(screen.height-25-30);
								showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
								bIsHaveNewNew=true;
								break;
										}
						}
						if(!bIsHaveNewNew){
							alert("没有查询到"+window.sNativeLanguage+"动画");
						}			
									}
					}
					
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","");
				window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;								
				var sHeadUrl="";
				var iWidth=(4/3)*(screen.height-25-30);
				showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
				}
			}
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//外语状态
			window.sCurrentLanguageForPlayAll="1";
			var iAnimation=0;
			var cA=document.getElementsByTagName("A");
			var intA=cA.length;
			for(var z=0;z<intA;z++){
				if(cA[z].attributes.getNamedItem("playF").nodeValue!=""){
					iAnimation=iAnimation+1;
																		}
			}
			alert("总共有"+iAnimation+"个条目有"+window.sForeignLanguage+"动画!将以窗口方式循环播放所有动画!");
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;	
			if(sAnimationName==""){
				var cLi=document.getElementsByTagName("LI");
				var intLi=cLi.length;
				var intTarget=-1;
			
				for(var i=0;i<intLi;i++){
					if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
						intTarget=i;//确定当前条目
						break;
																			}
				}
				var bIsHave=false;
				if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
					for(var j=0;j<intLi;j++ ){
						if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
							cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","1");
							var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
							if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
								cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
							}
							else{
								cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
							}
							parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
							cLi[j].getElementsByTagName("SPAN").item(1).click();
							cLi[j].scrollIntoView(true);
							if(j==0){
								cLi[j].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[j].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[j];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																	}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																	}																												
							}
							var sHeadUrl="";
							var iWidth=(4/3)*(screen.height-25-30);
							showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window
,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
							bIsHave=true;
							break;
						}
					}
					if(!bIsHave){
						alert("没有查询到"+window.sForeignLanguage+"动画");
					}
				}
				else{
					var bIsHaveNew=false;
					for(var k=intTarget+1;k<intLi;k++){
						if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
							cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","1");
							var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
							}
							parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeinLanguage;
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							cLi[k].scrollIntoView(true);
							if(k==0){
								cLi[k].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[k];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																			}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																			}																												
							}
							var sHeadUrl="";
							var iWidth=(4/3)*(screen.height-25-30);
							showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window
,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
							bIsHaveNew=true;
							break;
							}
						}
					if(!bIsHaveNew){//到最后都没有，从头开始查询
						var bIsHaveNewNew=false;
						for(var l=0;l<intLi;l++ ){
							if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
								cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId","1");
								var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
								if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
									cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
								}
								else{
									cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
								}
								parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
								cLi[l].getElementsByTagName("SPAN").item(1).click();
								cLi[l].scrollIntoView(true);
								if(l==0){
									cLi[l].getElementsByTagName("SPAN").item(1).click();
								}
								else{
									cLi[l].getElementsByTagName("SPAN").item(1).click();
									var oTemp=cLi[l];
									while(oTemp.parentNode.parentNode.nodeName!="DIV"){
										var cChildNodesTemp=oTemp.parentNode.childNodes;				
										for(intR=0;intR<cChildNodesTemp.length;intR++){
											if(cChildNodesTemp[intR].nodeName=="LI"){
												cChildNodesTemp[intR].style.display="list-item";
												if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																			}
																														}
																					}
																						}
										oTemp=oTemp.parentNode;
						
																						}
										
									if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																				}																												
								}
								var sHeadUrl="";
								var iWidth=(4/3)*(screen.height-25-30);
								showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window
,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
								bIsHaveNewNew=true;
								break;
										}
						}
						if(!bIsHaveNewNew){
							alert("没有查询到"+window.sForeignLanguage+"动画");
						}			
									}
					}
					
			}
			else{ 
				window.oSrcElement.parentNode.setAttribute("sFId","1");
				var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
				if(window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue==""){
					window.oSrcElement.childNodes(0).nodeValue=sPromptNoForeignLanguage;		
				}
				else{
					window.oSrcElement.childNodes(0).nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
				}
				parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
				var sHeadUrl="";
				var iWidth=(4/3)*(screen.height-25-30);
				showModelessDialog(sHeadUrl+'../common/flashPlayer/flashPlayerWindow.aspx',window
,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
				}
		}
	//}
	}//存在组件
	else
	{
		if(confirm("需要安装播放器组件才能正常查看动画播放,请下载安装.\"确定\"将前往下载页面."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//为了在线编辑，打开框架网页。	

		}
	
	
	}

}

function fnNote(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，没有教/学笔记!");
}
else{
	var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;	
	if(sNote==""){
		var bBoolean=confirm('该条目"'+window.oSrcElement.childNodes(0).nodeValue+'"暂时没有教/学笔记!单击"确定"将循环查询后续条目的动画；单击"取消"将退出，并自动创建默认内容的教/学笔记,然后可在线编辑。');
		if(bBoolean){
			var cLi=document.getElementsByTagName("LI");
			var intLi=cLi.length;
			var intTarget=-1;
		
			for(var i=0;i<intLi;i++){
				if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
					intTarget=i;//确定当前条目
					break;
																		}
			}
			var bIsHave=false;
			if(intTarget==intLi-1){//已经是最后一个条目，从头开始查询
				for(var j=0;j<intLi;j++ ){
					if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue!=""){
						cLi[j].getElementsByTagName("SPAN").item(1).click();
						cLi[j].scrollIntoView(true);
						if(j==0){
							cLi[j].getElementsByTagName("SPAN").item(1).click();
						}
						else{
							cLi[j].getElementsByTagName("SPAN").item(1).click();
							var oTemp=cLi[j];
							while(oTemp.parentNode.parentNode.nodeName!="DIV"){
								var cChildNodesTemp=oTemp.parentNode.childNodes;				
								for(intR=0;intR<cChildNodesTemp.length;intR++){
									if(cChildNodesTemp[intR].nodeName=="LI"){
										cChildNodesTemp[intR].style.display="list-item";
										if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
												if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
													cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																}
																												}
																			}
																				}
								oTemp=oTemp.parentNode;
				
																				}
								
							if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																}																												
						}
						alert('已查询到"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的教/学笔记!');
						var sHeadUrl="";
						//var sHeadUrl="";
						var sNote=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
						var sNoteURL=sHeadUrl+"/note/"+sNote+"/"+sNote+".htm";
						//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
						showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//为了在线编辑，打开框架网页。	
						bIsHave=true;
						break;
					}
				}
				if(!bIsHave){
					alert("没有查询到教/学笔记!");
				}
			}
			else{
				var bIsHaveNew=false;
				for(var k=intTarget+1;k<intLi;k++){
					if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue!=""){
						cLi[k].getElementsByTagName("SPAN").item(1).click();
						cLi[k].scrollIntoView(true);
						if(k==0){
							cLi[k].getElementsByTagName("SPAN").item(1).click();
						}
						else{
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							var oTemp=cLi[k];
							while(oTemp.parentNode.parentNode.nodeName!="DIV"){
								var cChildNodesTemp=oTemp.parentNode.childNodes;				
								for(intR=0;intR<cChildNodesTemp.length;intR++){
									if(cChildNodesTemp[intR].nodeName=="LI"){
										cChildNodesTemp[intR].style.display="list-item";
										if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
												if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
													cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																		}
																												}
																			}
																				}
								oTemp=oTemp.parentNode;
				
																				}
								
							if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
							oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																		}																												
						}
						alert('已查询到"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的教/学笔记!');
						var sHeadUrl="";
						//var sHeadUrl="";
						var sNote=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
						var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
						//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
						showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//为了在线编辑，打开框架网页。	
						bIsHaveNew=true;
						break;
						}
					}
				if(!bIsHaveNew){//到最后都没有，从头开始查询
					var bIsHaveNewNew=false;
					for(var l=0;l<intLi;l++ ){
						if(cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue!=""){
							cLi[l].getElementsByTagName("SPAN").item(1).click();
							cLi[l].scrollIntoView(true);
							if(l==0){
								cLi[l].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[l].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[l];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
												if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
													cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																		}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																			}																												
							}
							alert('已查询到"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"条目的教/学笔记!');
							var sHeadUrl="";
							//var sHeadUrl="";
							var sNote=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
							var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
							//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
							showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//为了在线编辑，打开框架网页。	
							bIsHaveNewNew=true;
							break;
									}
					}
					if(!bIsHaveNewNew){
						alert("没有查询到教/学笔记!");
					}			
								}
				}
				
			}
				else{//创建教/学笔记
					var oDate=new Date();
					var sFileName=oDate.getTime();
					window.oSrcElement.parentNode.setAttribute("sNote",sFileName);
					//var dialogArguments=showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//以后准备实现程式窗口
					window.open("../common/saving.htm", "sCreatingNote","fullscreen=0,left="+screen.width*0.5/2+",top="+screen.height*0.5/2+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+screen.width*0.5+",height="+screen.height*0.5);//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
					window.open("../common/createNote.aspx?sFileName="+sFileName,"sCreatingNote",false);
				}
	}
	else{ 
		var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;	
		var sHeadUrl="";
		//var sHeadUrl="";
		var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
		//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
		showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//为了在线编辑，打开框架网页。	
		}
	}
}



function fnToggleScrollBar(){
if(document.body.scroll=="no"){
	document.body.scroll="yes";
	document.body.onmousemove="";
	document.body.onmousedown="";
	document.body.onmouseup="";

}
else{
	document.body.scroll="no";
	document.body.onmousemove=window.fnPane;
	document.body.onmousedown=window.fnMouseDown;
	document.body.onmouseup=window.fnMouseUp;
}
}

function fnRemoveUnusedFiles(){
var cA=window.document.getElementsByTagName("A");
var iALength=cA.length;
var sTextString="";
var sTeachingPlanString="";
var sAnimationString="";
var sTextString_foreign="";
var sTeachingPlanString_foreign="";
var sAnimationString_foreign="";
var sNoteString="";


for(i=0;i<iALength;i++){
	sTextString=sTextString+cA.item(i).attributes.getNamedItem("text").nodeValue+";";
	sTeachingPlanString=sTeachingPlanString+cA.item(i).attributes.getNamedItem("teachingPlan").nodeValue+";";
	sAnimationString=sAnimationString+cA.item(i).attributes.getNamedItem("play").nodeValue+";";
	sTextString_foreign=sTextString_foreign+cA.item(i).attributes.getNamedItem("textF").nodeValue+";";
	sTeachingPlanString_foreign=sTeachingPlanString_foreign+cA.item(i).attributes.getNamedItem("teachingPlanF").nodeValue+";";
	sAnimationString_foreign=sAnimationString_foreign+cA.item(i).attributes.getNamedItem("playF").nodeValue+";";
	sNoteString=sNoteString+cA.item(i).attributes.getNamedItem("sNote").nodeValue+";";
}
//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sIdForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
var oForm=parent.frames("sIframeBottom").document.createElement('form');
oForm.outerHTML='<form method="POST" action="" target="" id="sIdForm"></form>';
//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput1" id="sIdInput1"></input>');
var oInput1=parent.frames("sIframeBottom").document.createElement('input');
oInput1.outerHTML='<input type="text" name="sNameInput1" id="sIdInput1"></input>';
//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput2" id="sIdInput2"></input>');
var oInput2=parent.frames("sIframeBottom").document.createElement('input');
oInput2.outerHTML='<input type="text" name="sNameInput2" id="sIdInput2"></input>';
//var oInput3=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput3" id="sIdInput3"></input>');
var oInput3=parent.frames("sIframeBottom").document.createElement('input');
oInput3.outerHTML='<input type="text" name="sNameInput3" id="sIdInput3"></input>';
//var oInput4=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput4" id="sIdInput4"></input>');
var oInput4=parent.frames("sIframeBottom").document.createElement('input');
oInput4.outerHTML='<input type="text" name="sNameInput4" id="sIdInput4"></input>';
//var oInput5=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput5" id="sIdInput5"></input>');
var oInput5=parent.frames("sIframeBottom").document.createElement('input');
oInput5.outerHTML='<input type="text" name="sNameInput5" id="sIdInput5"></input>';
//var oInput6=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput6" id="sIdInput6"></input>');
var oInput6=parent.frames("sIframeBottom").document.createElement('input');
oInput6.outerHTML='<input type="text" name="sNameInput6" id="sIdInput6"></input>';
//var oInput7=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput7" id="sIdInput7"></input>');
var oInput7=parent.frames("sIframeBottom").document.createElement('input');
oInput7.outerHTML='<input type="text" name="sNameInput7" id="sIdInput7"></input>';
//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
var oInsertInput1=oInsertForm.appendChild(oInput1);
var oInsertInput2=oInsertForm.appendChild(oInput2);
var oInsertInput3=oInsertForm.appendChild(oInput3);
var oInsertInput4=oInsertForm.appendChild(oInput4);
var oInsertInput5=oInsertForm.appendChild(oInput5);
var oInsertInput6=oInsertForm.appendChild(oInput6);
var oInsertInput7=oInsertForm.appendChild(oInput7);

var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);

parent.frames("sIframeBottom").document.getElementById("sIdInput1").value=sTextString;
parent.frames("sIframeBottom").document.getElementById("sIdInput2").value=sTeachingPlanString;
parent.frames("sIframeBottom").document.getElementById("sIdInput3").value=sAnimationString;
parent.frames("sIframeBottom").document.getElementById("sIdInput4").value=sTextString_foreign;
parent.frames("sIframeBottom").document.getElementById("sIdInput5").value=sTeachingPlanString_foreign;
parent.frames("sIframeBottom").document.getElementById("sIdInput6").value=sAnimationString_foreign;
parent.frames("sIframeBottom").document.getElementById("sIdInput7").value=sNoteString;

parent.frames("sIframeBottom").document.getElementById("sIdForm").action="../common/removeUnusedFiles.aspx";
window.open("../common/removingUnusedFiles.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
parent.frames("sIframeBottom").document.getElementById("sIdForm").target="saving";//目标窗口为一直显示“正在保存...”的窗口，如果保存成功将显示“已保存”并自动关闭。
parent.frames("sIframeBottom").document.getElementById("sIdForm").submit();
parent.frames("sIframeBottom").document.getElementById("sIdForm").removeNode("true");

}


function fnUploadText(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
	showModalDialog('../common/uploadText/uploadText.asp?sText='+sText+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
}
window.oSrcElement.click();//text和textF肯定不会为"";
}


function fnUploadTeachingPlan(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{  
   	var sTeachingPlan="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId==""){
	   if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == ""){
		   var oDate=new Date();
		   sTeachingPlan=oDate.getTime();
		   window.oSrcElement.parentNode.setAttribute("teachingPlan",sTeachingPlan);
	   }
	   else {
	   		sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
		     }
	     }
	 else{
	   if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == ""){
		   var oDate=new Date();
		   sTeachingPlan=oDate.getTime();
		   window.oSrcElement.parentNode.setAttribute("teachingPlanF",sTeachingPlan);
	   }
	   else {
	   		sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;
		     }
	 }
	//alert('修改为如果是国语状态(即sFId=""),上传到teachingPlan文件夹下,同时DOC源文件传到teachingPlan_origin下，PPT源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户PPT源文件已同时上传);否则传到teachingPlan_foreign文件夹下,同时DOC源文件传到teachingPlan_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
	showModalDialog('../common/uploadTeachingPlan/uploadTeachingPlan.aspx?sTeachingPlan='+sTeachingPlan+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:360px;status:0");
}
window.oSrcElement.click();
}

function fnUploadAnimation(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
   	var sAnimation="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == ""){
			   var oDate=new Date();
			   sAnimation=oDate.getTime();
			   window.oSrcElement.parentNode.setAttribute("play",sAnimation);
		   }
		   else {
			   sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
		   }
	   }
	 else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == ""){
			   var oDate=new Date();
			   var sAnimation=oDate.getTime();
			   window.oSrcElement.parentNode.setAttribute("playF",sAnimation);
		   }
		   else {
		    	var sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
		   }
	 }
	//alert(sAnimation);       
	//alert('修改为如果是国语状态(即sFId=""),上传到play文件夹下,同时FLA源文件传到play_origin下，FLA源文件和SWF文件使用相同的时间序号，因为是绑定在一起的(界面中提供选择FLA同时上传);否则传到play_foreign文件夹下,同时FLA源文件传到play_origin_foreign下，FLA源文件和SWF文件使用相同的时间序号，因为是绑定在一起的(界面中提供选择FLA同时上传)。');
	showModalDialog('../common/uploadAnimation/uploadAnimation.aspx?sAnimation='+sAnimation+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:380px;status:0");
	}
window.oSrcElement.click();
}


//删除课文
function fnRemoveText()
{
	if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
	{
		alert("该条目是根条目，不能被修改!");
		return;
	}
	else{
		fnForUndo();
		var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	   	if(sFId=="")
	   	{
			if( window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == "")
			{
				alert("该条目没有"+window.sNativeLanguage+"课文,不用删除!");
		   	}
		   	else
		   	{
				var bWillBeRemoved=window.confirm('将删除该条目的'+window.sNativeLanguage+'课文！单击"确定"删除,单击"取消"终止操作！');
			   	if(bWillBeRemoved)
			   	{
				   	window.oSrcElement.parentNode.setAttribute("text","");
				   	var oDate=new Date();
					var sFileName=oDate.getTime();
					window.oSrcElement.parentNode.setAttribute("text",sFileName);
					window.open("../common/createText.aspx?sFileName="+sFileName,"sIframeContent",true);
			   		//window.oSrcElement.click();
					window.oPopup.document.getElementById("sIdUndo").disabled=false;
			   	}
			   	else
			   	{
				   	return;
			   	}
			}
		}
		else
		{
			if( window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue == "")
			{
				alert("该条目没有"+window.sForeignLanguage+"课文,不用删除!");
		   	}
		   	else
		   	{
				var bWillBeRemoved=window.confirm('将删除该条目的'+window.sForeignLanguage+'课文！单击"确定"删除,单击"取消"终止操作！');
			   	if(bWillBeRemoved)
			   	{
				   	window.oSrcElement.parentNode.setAttribute("textF","");
					window.open("../common/createTextForeign.aspx","sIframeContent",true);
					window.oPopup.document.getElementById("sIdUndo").disabled=false;
			   	}
			   	else
			   	{
				   	return;
			   	}
			 }
		}
	}
}

function fnRemoveTeachingPlan(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	fnForUndo();
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId==""){
		if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == ""){
			alert("该条目没有"+window.sNativeLanguage+"教案,不用删除!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('将删除该条目的'+window.sNativeLanguage+'教案！单击"确定"删除,单击"取消"终止操作！');
		   	if(bWillBeRemoved){
			   	window.oSrcElement.parentNode.setAttribute("teachingPlan","");
				window.oPopup.document.getElementById("sIdUndo").disabled=false;
		   					}
		   	else{
			   	return;
		   		}
		   	}
	    		 }
	else{
		if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == ""){
			alert("该条目没有"+window.sForeignLanguage+"教案,不用删除!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('将删除该条目的'+window.sForeignLanguage+'教案！单击"确定"删除,单击"取消"终止操作！');
		   	if(bWillBeRemoved){
			   	window.oSrcElement.parentNode.setAttribute("teachingPlanF","");
				window.oPopup.document.getElementById("sIdUndo").disabled=false;
		   					}
		   	else{
			   	return;
		   		}
		   	}
		}
	}
}

function fnRemoveAnimation(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	fnForUndo();
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId==""){
		if( window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == ""){
			alert("该条目没有"+window.sNativeLanguage+"动画,不用删除!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('将删除该条目的'+window.sNativeLanguage+'动画！单击"确定"删除,单击"取消"终止操作！');
		   	if(bWillBeRemoved){
			   	window.oSrcElement.parentNode.setAttribute("play","");
				window.oPopup.document.getElementById("sIdUndo").disabled=false;
		   					}
		   	else{
			   	return;
		   		}
		   	}
	    		 }
	else{
		if( window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == ""){
			alert("该条目没有"+window.sForeignLanguage+"动画,不用删除!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('将删除该条目的'+window.sForeignLanguage+'动画！单击"确定"删除,单击"取消"终止操作！');
		   	if(bWillBeRemoved){
			   	window.oSrcElement.parentNode.setAttribute("playF","");
				window.oPopup.document.getElementById("sIdUndo").disabled=false;
		   					}
		   	else{
			   	return;
		   		}
		   	}
		}
	}
}

function fnRemoveNote(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	fnForUndo();
	var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;
	if( sNote==""){
		alert("该条目没有教/学笔记,不用删除!");
   					}
   	else{
		var bWillBeRemoved=window.confirm('将删除该条目的教/学笔记,单击"确定"删除,单击"取消"终止操作！');
	   	if(bWillBeRemoved){
		   	window.oSrcElement.parentNode.setAttribute("sNote","");
			window.oPopup.document.getElementById("sIdUndo").disabled=false;
	   					}
	   	else{
		   	return;
	   		}
	   	}
	}
}

function fnDownloadAnimation(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能下载!");
	return;
}
else{  
    var sAnimation="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == ""){
			alert("该条目没有"+window.sNativeLanguage+"动画的源文件，无法下载!");
			return;
		   }
		  else {
		   	sAnimation=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				}
				}
	else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == ""){
			alert("该条目没有"+window.sForeignLanguage+"动画的源文件，无法下载!");
			return;
		   }
		  else {
		   	sAnimation= window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
		   	if(sItemName==""){
		   		sItemName="无外文名";
		   	}
				}
		}
	//alert('sAnimation='+sAnimation+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadAnimation/downloadAnimation.asp;FLA源文件的整个文件夹下载，sFId=""时FLA源文件文件夹是play_origin；sFId="1"时FLA源文件文件夹是play_origin_foreign');
	showModalDialog('../common/downloadAnimation/downloadAnimation.asp?sAnimation='+sAnimation+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
	}
}

function fnDownloadTeachingPlan(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能下载!");
	return;
}
else{  
    var sTeachingPlan="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == ""){
			alert("该条目没有"+window.sNativeLanguage+"教案的源文件，无法下载!");
			return;
		   }
		  else {
		   	sTeachingPlan= window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				}
				}
	else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == ""){
			alert("该条目没有"+window.sForeignLanguage+"教案的源文件，无法下载!");
			return;
		   }
		  else {
		   	sTeachingPlan= window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
		   	if(sItemName==""){
		   		sItemName="无外文名";
		   	}
				}
		}
	//alert('sTeachingPlan='+sTeachingPlan+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadTeachingPlan/downloadsTeachingPlan.asp;PPT源文件的整个文件夹下载，sFId=""时PPT源文件文件夹是teachingPlan_origin；sFId="1"时PPT源文件文件夹是teachingPlan_origin_foreign');
	showModalDialog('../common/downloadTeachingPlan/downloadTeachingPlan.asp?sTeachingPlan='+sTeachingPlan+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
 	}
}
function fnDownloadText(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能下载!");
	return;
}
else{  
    var sText="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == ""){
			alert("该条目没有"+window.sNativeLanguage+"课文的源文件，无法下载!");
			return;
		   }
		  else {
		   	sText= window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				}
				}
	else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue == "")
		 {
			alert("该条目没有"+window.sForeignLanguage+"课文的源文件，无法下载!");
			return;
		   }
		  else 
		  {
		   	sText= window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;				
		  }
		   	if(sItemName=="")
		   	{
		   		sItemName="无外文名";
		   	}
		}
	//alert('sText='+sText+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadText/downloadText.asp;DOC源文件的整个文件夹下载，sFId=""时DOC源文件文件夹是book_origin；sFId="1"时PPT源文件文件夹是book_origin_foreign');
	showModalDialog('../common/downloadText/downloadText.asp?sText='+sText+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
 	}
}

function fnToggleContentsAutoNumber(){
var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
if(parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue=="有编号"){
	for(var i=0;i<iLiLength;i++){
		cLi[i].getElementsByTagName("SPAN").item(0).style.display="none";
		parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue="无编号"
								}
}
else{
	for(var i=0;i<iLiLength;i++){
	cLi[i].getElementsByTagName("SPAN").item(0).style.display="";
	parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue="有编号"
								}
}
}

function fnContribution(){//"http://www.jgskjw.com/websiteCommon/contribution.aspx"待开发
window.open("http://www.jgskjw.com/websiteCommon/contribution.aspx","_blank","fullscreen=no,"+"left="+(window.screen.width*0.2)/2+",top="+(window.screen.height*0.2)/2+",width="+window.screen.width*0.8+",height="+window.screen.height*0.8+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no",false);
}

function fnUpdateSystem(){//"http://www.jgskjw.com/websiteCommon/update.aspx"待开发

//parent.frames("sIframeBottom").updatestart1();
window.showModelessDialog('../common/update/update.aspx',window,'scroll:0;status:0;help:0;resizable:0;dialogWidth:500px;dialogHeight:255px')
//window.open("http://localhost:8000/webCourse/common/update/update.asp","_blank","fullscreen=no,"+"left="+(window.screen.width-500)/2+",top="+(window.screen.height-250)/2+",width=500,height=250,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no",false);
}


function fnToggleLanguageTitle(){
	var cSPAN=document.getElementsByTagName("SPAN");
	var iSPANLength=cSPAN.length;
	var oSpanTemp;
	for(i=0;i<iSPANLength;i++){
		if(cSPAN.item(i).style.color==window.sColorClicked){
			oSpanTemp=cSPAN.item(i);
			break;
		}
		else{
			;
		}
	}
	var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
	if(oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue==""){//说明现在是中文
		if(oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue==""){
			oSpanTemp.firstChild.nodeValue=sPromptNoForeignLanguage;		
		}
		else{
			oSpanTemp.firstChild.nodeValue=oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue;
		}
		oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue="1";//1表示英文;
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		
		}
	else{
		oSpanTemp.firstChild.nodeValue=oSpanTemp.parentNode.attributes.getNamedItem('sN').nodeValue;
		oSpanTemp.parentNode.setAttribute("sFId","");//""表示国语
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
		}
}

function fnToggleLanguage(){
	var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
	if(window.oSrcElement.parentNode.attributes.getNamedItem('sFId').nodeValue==""){//说明现在是中文
		if(window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue==""){
			window.oSrcElement.firstChild.nodeValue=sPromptNoForeignLanguage;		
		}
		else{
			window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
		}
		window.oSrcElement.parentNode.setAttribute("sFId","1");//1表示英文;
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		
		}
	else{
		window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sN').nodeValue;
		window.oSrcElement.parentNode.setAttribute("sFId","");//""表示国语
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
		}
}

function fnAllNativeLanguage(){
	var cLi=document.getElementsByTagName("LI");
	var iLiNumber=cLi.length;
	for(var i=0;i<iLiNumber;i++){
		cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue=cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sN').nodeValue;
		cLi[i].getElementsByTagName("A").item(0).setAttribute("sFId","");
										}								
	parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
}

function fnAllForeignLanguage(){
	var sPromptNoDualLanguage="Sorry,Only Chinese at This Item";
	var cLi=document.getElementsByTagName("LI");
	var iLiNumber=cLi.length;
	for(var i=0;i<iLiNumber;i++){
		if(cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
			cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue=sPromptNoDualLanguage;
		}
		else{
			cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue=cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
		}
		cLi[i].getElementsByTagName("A").item(0).setAttribute("sFId","1");										
	}								
	parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
}

function fnWordToText(){
	showModelessDialog("../common/wordToText/wordToTextIframeInitial.aspx",window,"help:0;resizable:1;dialogWidth:"+screen.width+"px;dialogHeight:"+(screen.height-168)+"px;status:0");
}

function fnTextToWord(){
	showModelessDialog("../common/textToWord/textToWordIframeInitial.aspx",window,"help:0;resizable:1;dialogWidth:"+screen.width+"px;dialogHeight:"+(screen.height-168)+"px;status:0");
}

function fnMergePartResource(){
	showModelessDialog("../common/mergePartResource/mergePartResourceIframeInitial.aspx",window,"help:0;resizable:1;dialogWidth:"+screen.width+"px;dialogHeight:"+(screen.height-168)+"px;status:0");
}

function fnLocalhostToWeb() {
	showModelessDialog("../common/localUploadWeb.aspx",window,"help:0;resizable:1;dialogWidth:600px;dialogHeight:300px;status:0");
}

//上传录音播放文件
function fnUploadRecording() {
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
	showModalDialog('../common/UploadRecording/UploadRecording.asp?sText='+sText,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
}
   window.oSrcElement.click();//text和textF肯定不会为"";
}

//添加词汇定义
function fnAdd() {
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
	}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
	showModalDialog('../common/add/add.aspx?sText='+sText,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
}
   window.oSrcElement.click();//text和textF肯定不会为"";
}

//添加中英互译
function fnAddTranslate()
{
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("该条目是根条目，不能被修改!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
	showModalDialog('../common/Translate/frame.asp?sText='+sText,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
}
 //  window.oSrcElement.click();//text和textF肯定不会为"";

}

function fnBatchUploadFlash(){
	window.oSrcElement.click();
	var sDocURL=document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++){
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}
	var sPhysicPath=sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contentsForBatchUploadFlash.htm";
	var sWidth=screen.width-10;
	var sHeight=screen.height*0.8;
	var sLeft=(screen.width-sWidth)/2;
	var sTop=(screen.height-sHeight)/2;
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//显示窗口
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
        var oForm=parent.frames("sIframeBottom").document.createElement('form');
        oForm.outerHTML='<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
	//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
         var oInput1=parent.frames("sIframeBottom").document.createElement('input');
        oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
	//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
        var oInput2=parent.frames("sIframeBottom").document.createElement('input');
        oInput2.outerHTML='<input type="text" name="sPath" id="sPath"></input>';
	//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
         var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
        oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInput2=oInsertForm.appendChild(oInput2);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docContents").value=sAfterURLHeaderReplaced;
	parent.frames("sIframeBottom").document.getElementById("sPath").value=sPhysicPath;
	// 判断是不是外语
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId=="")
   	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadFlash/batchUploadFlashSaveContents.aspx?hl=cn";
	}
	else
	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadFlash/batchUploadFlashSaveContents.aspx?hl=en";
	}
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target="sCopyPartResource";
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
	//alert(parent.frames("sIframeBottom").document.body.innerHTML);
}
function fnBatchUploadTeachingPlan(){
	window.oSrcElement.click();
	var sDocURL=document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++){
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}
	var sPhysicPath=sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contentsForBatchUploadTeachingPlan.htm";
	var sWidth=screen.width-10;
	var sHeight=screen.height*0.8;
	var sLeft=(screen.width-sWidth)/2;
	var sTop=(screen.height-sHeight)/2;
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//显示窗口
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
        var oForm=parent.frames("sIframeBottom").document.createElement('form');
        oForm.outerHTML='<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
	//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
        var oInput1=parent.frames("sIframeBottom").document.createElement('input');
        oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
	//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
        var oInput2=parent.frames("sIframeBottom").document.createElement('input');
        oInput2.outerHTML='<input type="text" name="sPath" id="sPath"></input>';
	//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
        var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
        oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInput2=oInsertForm.appendChild(oInput2);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docContents").value=sAfterURLHeaderReplaced;
	parent.frames("sIframeBottom").document.getElementById("sPath").value=sPhysicPath;
	// 判断是不是外语
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId=="")
   	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadTeachingPlan/batchUploadTeachingPlanSaveContents.aspx?hl=cn";
	}
	else
	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadTeachingPlan/batchUploadTeachingPlanSaveContents.aspx?hl=en";
	}
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target="sCopyPartResource";
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
	//alert(parent.frames("sIframeBottom").document.body.innerHTML);
}

//批量上传课文
function fnBatchUploadText(){
	window.oSrcElement.click();
	var sDocURL=document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++)
	{
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}
	var sPhysicPath=sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.htm"))+"contentsForBatchUploadText.htm";
	var sWidth=screen.width-10;
	var sHeight=screen.height*0.8;
	var sLeft=(screen.width-sWidth)/2;
	var sTop=(screen.height-sHeight)/2;
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//显示窗口
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	
	for(var i=0;i<cLiClonedTemp.length;i++)
	{
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
        var oForm=parent.frames("sIframeBottom").document.createElement('form');
        oForm.outerHTML='<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
	//var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
        var oInput1=parent.frames("sIframeBottom").document.createElement('input');
        oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
	//var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
        var oInput2=parent.frames("sIframeBottom").document.createElement('input');
        oInput2.outerHTML='<input type="text" name="sPath" id="sPath"></input>';
	//var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
        var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
        oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInput2=oInsertForm.appendChild(oInput2);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docContents").value=sAfterURLHeaderReplaced;
	parent.frames("sIframeBottom").document.getElementById("sPath").value=sPhysicPath;
	// 判断是不是外语
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
   	if(sFId=="")
   	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadText/batchUploadTextSaveContents.aspx?hl=cn";
	}
	else
	{
		parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action="../common/batchUploadText/batchUploadTextSaveContents.aspx?hl=en";
	}
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target="sCopyPartResource";
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
	parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
	//alert(parent.frames("sIframeBottom").document.body.innerHTML);
}


function fnMakeFlashDir()
{
	showModelessDialog("../common/MakeAnimationDir/MakeAnimationDir.aspx",window,"help:0;resizable:1;dialogWidth:400px;dialogHeight:250px;status:0");
}

function fnUploadCommon()
{
	showModelessDialog("../common/UploadCommon/UploadCommon.aspx?t="+new Date().getTime(),window,"help:0;resizable:1;dialogWidth:800px;dialogHeight:600px;status:0");
}

//课程搜索
var win1;
function fnSearch()
{

    var oDate=new Date();
	var i=oDate.getTime();
	win1=showModelessDialog("../common/Search.aspx?i="+i,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:320px;status:0");

}

//
function fnSearchResult(sText,wd)
{
	var cLi=document.getElementsByTagName("li");
	var iLiLength=cLi.length;
	var intTargetPassInItem=0;
	for(intN=0;intN<iLiLength;intN++)
	{
		var sStringTemp=cLi[intN].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue;
		if(sStringTemp==sText)
		{
			intTargetPassInItem=intN;
			break;																						
		}
	}
	if(intTargetPassInItem==0)
	{
		cLi[0].getElementsByTagName("SPAN").item(1).click();
	}
	else
	{
		//cLi[intTargetPassInItem].childNodes[1].click();
		cLi[intTargetPassInItem].getElementsByTagName("SPAN").item(1).click()
		var oTemp=cLi[intTargetPassInItem];
		while(oTemp.parentNode.parentNode.nodeName!="DIV")
		{
			var cChildNodesTemp=oTemp.parentNode.childNodes;				
			for(intR=0;intR<cChildNodesTemp.length;intR++)
			{
				if(cChildNodesTemp[intR].nodeName=="LI")
				{
					cChildNodesTemp[intR].style.display="list-item";
					if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0)
					{
						cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
					}
				}
			}
				oTemp=oTemp.parentNode;

		}	
			if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.childNodes[1].style.color!=window.sColorClicked)
			{
			oTemp.childNodes[0].src="../common/image/plusTran.gif";																													}																												
			cLi[intTargetPassInItem].scrollIntoView(true);
	}
	window.open("../lessons/content/book/"+sText+"/"+sText+".htm?wd="+wd,"sIframeContent",true);
	/*parent.frames.item('sIFrameTitle').document
	var sHeadUrl="http://localhost:8000/webCourse/lessons/";
	var sUrl=sHeadUrl+"content/book/"+sText+"/"+sText+".htm?wd="+wd;
	showModelessDialog(sUrl,window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?
	win1.focus();*/

}
function fnGetItemText(textid)
{
	var cLi=document.getElementsByTagName("li");
	var iLiLength=cLi.length;
	var intTargetPassInItem=0;
	for(intN=0;intN<iLiLength;intN++)
	{
		var sStringTemp=cLi[intN].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue;
		if(sStringTemp==textid)
		{
			intTargetPassInItem=intN;
			break;																						
		}
	}
	
	sItemText=cLi[intTargetPassInItem].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;
	return sItemText;

}
function fnDetectActiveXControl(sControlName) 
{
 	var oControl;
 	try
 	{
 		oControl=new ActiveXObject(sControlName);
 		if(oControl==null)
 			return false;
 		else return true;
 	}
 	catch(e)
 	{
 		return false;
 	}
}

function fnNero()
{
	var sHeadUrl="../common/";
	var sUrl="nero/nero.aspx";
	var win=showModelessDialog(sHeadUrl+sUrl,window,"help:0;resizable:0;dialogWidth:500px;dialogHeight:250px;status:0;")

}
function fnDictation()
{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');

	win=open("../common/Dictation/Dictation.aspx?sText="+sText,"win1","width=400px,Height=200px,scroll:no,status:no,top="+(screen.height-300)/2+",left="+(screen.width-400)/2);
	win.focus();


}

function fnRecording()
{
    var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else
    {
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
	}
	//alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');

	//win=open("../common/CoursewareRecording/Recording.aspx?sText="+sText,"win1","width=800px,Height=600px,scroll:no,status:no,top="+(screen.height-600)/2+",left="+(screen.width-800)/2);
	//win.focus();
    
   	var sHeadUrl="../common/";
	var sUrl="CoursewareRecording/Recording.aspx";
	var win=showModelessDialog(sHeadUrl+sUrl,window,"help:0;resizable:0;dialogWidth:1000px;dialogHeight:600px;status:0;")
    //open(sHeadUrl+sUrl);

}
function fnSetRecordingID(textID)
{
    var yi=document.createAttribute("RID")
    yi.value=textID;
    window.oSrcElement.parentNode.setAttributeNode(yi);
}

// 播放语音课程
function fnRecordingView()
{
    if(window.oSrcElement.parentNode.getAttribute("RID"))
    {
        var textID=window.oSrcElement.parentNode.getAttribute("RID");
        var win = open("content/CoursewareRecording/" + textID + "/default.htm", "w1", "width=1100,height=600,top=" + (screen.height - 600) / 2 + ",left=" + (screen.width - 1100) / 2);
        win.focus();
    }
    else
    {
        alert("该条目没有音频课件");
    }
    
}

function fnBatchUploadItems()
{
    var win = open("../common/uploadItems/index.htm", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();
}

function fnBatchUploadListeningCourse()
{
    var win = open("../common/uploadListeningCourse/index.htm", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();
}

function fnDownLoadCourse()
{

    var win = open("../common/downloadcourse/index.aspx", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();

}