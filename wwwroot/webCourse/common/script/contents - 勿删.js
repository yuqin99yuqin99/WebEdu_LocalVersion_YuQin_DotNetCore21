function fnOnLoad(){
window.bIsEditingNote=false;//�����ж��Ƿ����ڱ༭��/ѧ�ʼ�
try{//Ϊ���ʺ��ڱ�������û�С��༭Ŀ¼����ť�����Ρ�
	if(parent.frames.item('sIFrameTitle').document.getElementById("sContentsEditable").style.backgroundColor==parent.frames.item('sIFrameTitle').sBackgroundColorForsContentsEditable){
		window.sContentsPopUpState=1;//�����ж�Ŀ¼�һ�״̬��
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
window.sClonedDivTempInnerHTML="";//�ж��Ƿ��ѱ�����
//window.sForEmptyAttributeValue="90BBCBCC-BE82-4AAA-A7F6-264FEF03C061"//�����������ԭ��,�������Բ�������""!!!!!!��ʹ����"",ͨ��IE����""�󱣴�innerHTML,�ᶪʧ����"��,�Ӷ�������XML����,�����ױ��������.href����û���涨���ú���Ҳ�����IE.
window.sPathPartForForeign="_foreign";
window.sPathPartForOrigin="_origin";
window.sPathPartForBook="book";//��δʹ��
window.sPathPartForteachingPlan="teachingPlan";//��δʹ��
window.sPathPartForplay="play";//��δʹ��
window.sImageElementPlus='<img src="../common/image/plus.gif" unselectable="on" onclick="fnDynOutline();"  style="cursor:default;"></img>';//ע�⣬����onclick="fnDynOutline();"�������¼�����ת��ΪinnerHTML�����е��ַ�����onclick="event.returnValue=false;"�����Ļᡣ
window.sImageElementNo='<img src="../common/image/no.gif" unselectable="on" onclick="fnRemoveDefaultEventHandler();" style="cursor:default;"></img>';
window.sNativeLanguage="����";
window.sForeignLanguage="Ӣ��";
window.sDiv=document.getElementById("sDiv").innerHTML;//�������жϸ�Ŀ¼�Ƿ������߱༭�����˸ı䣬�Ӷ��������û������иı��Ŀ¼��
window.sColorNormal=document.body.currentStyle.color;//��currentStyle���css�ļ��ж����������ɫ��
window.sColorMouseOver="rgb(0,255,0)";
window.sColorClicked="rgb(255,0,0)";
window.sDocURL=document.URL;//����ȥ������
window.sDocPath=sDocURL.substring(7,sDocURL.length);//����ȥ������
window.sPath=sDocPath.substring(0,sDocPath.lastIndexOf("\\")+1);//����ȥ������
document.body.onbeforeunload=fnIsSaved;//���Ŀ¼�Ƿ���༭���б仯����ʾ�����
window.sTempForCopy="";//�������渴�Ʋ������ݵı������Ա����û�����ճ�����һ��˵���,�ö�����������ͨ��innerHTML������ʵ�ֻ�ԭ��
window.sTempForUndo="";//�������泷��ǰһ�β������ݵı������Ա���г������������û����ó������һ��˵��Ŀǰֻ֧�ֳ���һ�Ρ�
window.sTempForRedo=""//������������ǰһ�β������ݵı���
//�Ѳ���֧�֣���Ҫ�µĽ��������������downLoad.startDownload(parent.sHTTPHeader+"common/popupContents.htm",fnOnDownLoad);//��û�и���ܵ��������޷�ʹ�ã�
//downLoad.startDownload("hppt://localhost:8000+"common/popupContents.asp",fnOnDownLoad);//���ʺ���վ�汾���ƶ���

window.oPopup=new Object();
//window.createPopup()�����Ѳ�����֧�֣����� div �� iframe��zIndex ֵ�ܸߣ�
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
window.oPopup=window.createPopup();//window.createPopup()�����Ѳ�����֧�֣����� div �� iframe��zIndex ֵ�ܸߣ���
document.body.oncontextmenu=fnPopup;//����������
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
fnInitailContents();//��ʼ��Ŀ¼

}

function fnRemoveDefaultEventHandler(){
	event.returnValue=false;
}

function fnInitailContents(){
var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
if(cLi[0].childNodes.length>2){
	//var oInsertImage=window.document.createElement("img");
        //oInsertImage.outerHTML=sImageElementPlus;//�����޸Ķ�������
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
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onclick",fnDynOpen);//ע�⺯�����������ţ���Щ�¼����Ժ����޷��ڸ��ƽڵ�ʱ���ƣ�Ҳ��������innerHTML�����С�
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseover",fnAOnMouseOn);
cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("onmouseout",fnAOnMouseOut);
//��ʱע�͵��������޸ģ�����cLi[0].getElementsByTagName("A").item(0).setAttribute("sN",cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//���ù�������ֵ���ڽڵ�ֵsN������setAttribute;sN=""������getNamedItem("sN"),sF,text,textF��ҲҪע�������?����Ҫ����sN(��"")����ֵ��Ԫ���ı�ֵ����ʱ��Ҫ��setAttribute.
//cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[0].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//�������ú�����!!���ù�������ֵ���ڽڵ�ֵ
cLi[0].getElementsByTagName("A").item(0).setAttribute("sFId","");//��������Id,Ĭ��Ϊ"",����
cLi[0].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//��ֹ�Զ���ŵĵ���Ĭ���¼���Ӧ����Ϊ�丸�ڵ���A
//��ʱע�͵��������޸ģ�����cLi[0].getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1.";


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
		//��ʱע�͵��������޸ģ�����oLi.getElementsByTagName("A").item(0).setAttribute("sN",oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//���ù�������ֵ���ڽڵ�ֵ
		//oLi.getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=oLi.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//�������ú�����!!���ù�������ֵ���ڽڵ�ֵ
		oLi.getElementsByTagName("A").item(0).setAttribute("sFId","");//��������Id,Ĭ��Ϊ"",����
		oLi.getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//��ֹ�Զ���ŵĵ���Ĭ���¼���Ӧ����Ϊ�丸�ڵ���A

		if(oLi.previousSibling!=null){

			if(oLi.parentNode.parentNode.nodeName!="DIV"){
				//��ʱע�͵��������޸ģ�����var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				//��ʱע�͵��������޸ģ�����var aPreviousSiblingAutoNumber=sPreviousSiblingAutoNumber.split(".");
				var iLength=aPreviousSiblingAutoNumber.length;
				var iLastNum=parseInt(aPreviousSiblingAutoNumber[iLength-2])+1;
				var sPre="";
					for(j=0;j<=iLength-3;j++){
						sPre=sPre+aPreviousSiblingAutoNumber[j]+".";
											}
					oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sPre+iLastNum+".";
															}


			else{
				//��ʱע�͵��������޸ģ�����var sPreviousSiblingAutoNumber=oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
				//��ʱע�͵��������޸ģ�����var sPreviousSiblingAutoNumberPre=sPreviousSiblingAutoNumber.substring(0,sPreviousSiblingAutoNumber.lastIndexOf("."));
				//��ʱע�͵��������޸ģ�����var sAutoNumber=(parseInt(sPreviousSiblingAutoNumberPre)+1).toString()+".";
				//��ʱע�͵��������޸ģ�����oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sAutoNumber;
				}

									}

		else{
			//��ʱע�͵��������޸ģ�����var sParentParentAutoNumber=oLi.parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
			//��ʱע�͵��������޸ģ�����sParentParentAutoNumberPre=sParentParentAutoNumber.substring(0,sParentParentAutoNumber.lastIndexOf("."));
			//��ʱע�͵��������޸ģ�����oLi.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue=sParentParentAutoNumberPre+".1.";
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
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("sN",cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//���ù�������ֵ���ڽڵ�ֵ,sN������setAttribute;sN=""������getNamedItem("sN")?
	//cLi[iLiLength-1].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue;//�������ú�����!!���ù�������ֵ���ڽڵ�ֵ
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("sFId","");//��������Id,Ĭ��Ϊ"",����
	cLi[iLiLength-1].getElementsByTagName("A").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);//��ֹ�Զ���ŵĵ���Ĭ���¼���Ӧ����Ϊ�丸�ڵ���A

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

function fnContentsRefreshAFromAlreadyAutoNumbered(){//׼����ΪfnContentsRefreshAFromAlreadyAutoNumbered,��Ϊˢ���˱��,��ˢ����A���¼����ԡ�
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

function fnContentsRefreshImage(){//ˢ����ͼ��Դ,��ˢ����ͼ����¼�����
var cLi=window.document.getElementsByTagName("LI");
var iLiLength=cLi.length;
if(iLiLength==1){
	cLi[0].getElementsByTagName("IMG").item(0).src="../common/image/no.gif";
	cLi[0].getElementsByTagName("IMG").item(0).setAttribute("onclick",fnRemoveDefaultEventHandler);
}
else{
	for(var i=0;i<iLiLength;i++){
		if(cLi[i].getElementsByTagName("UL").length>0){//����<LI><A href="contentStart.asp">��������Զ�̽�ѧϵͳ</A>  <UL><LI><A href="content/">�½���Ŀ</A></LI></UL></LI>��<li>��childNodes.length���󱨸�Ϊ4������childNodes��1�������ǰ׿գ�����������������childNodes.item(i)����ȡ�ڵ㲻�Ǻܺã�����getElementsByTagName("tagName").item(i)�Ϻã���ʹû�иýڵ��������������Ǳ���.lengthΪ0)��
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
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
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

	//var bWillSaved=confirm("ԭĿ¼�ļ���������,�����Ҫ,�뱸��ԭĿ¼�ļ�,���ļ���URL��"+'"'+"http://"+sPath+"contents.htm"+'"'+"������·����"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.length-2)+"contents.htm"+'"');
	var bWillSaved=confirm("ԭĿ¼�ļ���������,�����Ҫ,�뱸��ԭĿ¼�ļ�,���ļ���URL��"+'"'+"http://"+sPath+"contents.htm"+'"'+"������·����"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contents.htm"+'"');

	if(bWillSaved){
		var win=window.open("../common/saving.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
		win.focus();
		var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
		//window.sClonedDivTempInnerHTML=oClonedDivTemp.innerHTML;//��ȫ�ֱ�������saveContents.asp����
		var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
		for(var i=0;i<cLiClonedTemp.length;i++){
	 		cLiClonedTemp.item(i).removeAttribute("unselectable");
			cLiClonedTemp.item(i).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��.û����ʽ���ø�����,��innerHTML�в�����,ȥ��Ҳ������!
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
			// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
			//cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sFId").nodeValue="";
			//cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue="";
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");//attributes.getNamedItem("sFId").nodeValue=""ʧ��
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");//
		}
		window.sClonedDivTempInnerHTML=oClonedDivTemp.innerHTML;//��ȫ�ֱ�������saveContents.asp����
		var sWillReplacedUL="<UL>";//�и���������������ȡ���󣬿ո�Խ��Խ�࣡�����������������ڱ༭Ŀ¼ʱ�����˼���ո���ô����Ͳ��øù�����
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
		var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//����޸�����Ŀ�ĳ����ӣ��������ӵľ���URL�����滻Ϊ���URL
		var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
		var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");
		
		//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sSaveContentsForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").target="saving";//Ŀ�괰��Ϊһֱ��ʾ�����ڱ���...���Ĵ��ڣ��������ɹ�����ʾ���ѱ��桱���Զ��رա�
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").submit();
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").removeNode("true");
		//alert(oClonedDivTemp.innerHTML);
		//alert(window.sClonedDivTempInnerHTML);//saveContents.asp�е���.
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
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//��ʾ����
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��.û����ʽ���ø�����,��innerHTML�в�����,ȥ��Ҳ������!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//�и���������������ȡ���󣬿ո�Խ��Խ�࣡�����������������ڱ༭Ŀ¼ʱ�����˼���ո���ô����Ͳ��øù�����
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//����޸�����Ŀ�ĳ����ӣ��������ӵľ���URL�����滻Ϊ���URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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


function fnReplaceUL(sString){//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ�ר�Ŷ���һ������һ���ո��ַ��ĺ�����
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
 
 //������ڱ༭״̬���뿪,���ж���ʾ�Ƿ������޸�
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
try{//Ϊ���ݿ���޸���û�б����ˢ�µĳ��򱻴�϶����ã�����
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
	event.srcElement.style.color=window.sColorClicked;//���ܷŵ�������ʼ��������Ϊ�����ݿ�ܡ��༭��û�б����뿪����ʾ�Ƿ񱣴��ѡ��ȡ������ǰ�¼���Ŀ��Ӧ�ñ�ɫ��
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
window.event.returnValue=false;//ȥ��˫��ʱ��Ĭ��ѡ���ı�Ч��
}
catch(e){//����Ŀ¼��ܵ��Ҽ��˵��е����
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
		 	 	if(window.sContentsPopUpState==1){//�༭Ŀ¼״̬���һ��˵���
		 	 		for(var i=0;i<iChildNumber;i++){
						if(oDiv.childNodes.item(i).id.lastIndexOf("_div")>0){
		        			oDiv.childNodes.item(i).style.display="none";
																		}
						else{
							oDiv.childNodes.item(i).style.display="";
							}
													}
				}
		 	 	if(window.sContentsPopUpState==0){//�Ǳ༭Ŀ¼״̬���һ��˵���
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
			if(window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif")>0){//ʹ��window.oSrcElement.parentNode.childNodes.length==2)ʱ�����������ֻ�ø����ж�ͼ��
				window.oPopup.document.getElementById("sIdPromote").childNodes.item(0).nodeValue="��������Ŀһ��";
				window.oPopup.document.getElementById("sIdDemote").childNodes.item(0).nodeValue="��������Ŀһ��";
				window.oPopup.document.getElementById("sIdDel").childNodes.item(0).nodeValue="ɾ������Ŀ";
				window.oPopup.document.getElementById("sIdCopy").childNodes.item(0).nodeValue="���Ƹ���Ŀ";
				window.oPopup.document.getElementById("sIdCut").childNodes.item(0).nodeValue="���и���Ŀ";
			}
			else{
				window.oPopup.document.getElementById("sIdPromote").childNodes.item(0).nodeValue="��������Ŀ������Ŀһ��";
				window.oPopup.document.getElementById("sIdDemote").childNodes.item(0).nodeValue="��������Ŀ������Ŀһ��";
				window.oPopup.document.getElementById("sIdDel").childNodes.item(0).nodeValue="ɾ������Ŀ������Ŀ";
				window.oPopup.document.getElementById("sIdCopy").childNodes.item(0).nodeValue="���Ƹ���Ŀ������Ŀ";
				window.oPopup.document.getElementById("sIdCut").childNodes.item(0).nodeValue="���и���Ŀ������Ŀ";
			}
			}
		else{//ûʵ��
			alert("���һ�Ŀ¼����Ŀ�ķǱ�Ų��֣������һ����ܲ˵���");
		}
	}
	else{
		alert("���һ�Ŀ¼����Ŀ�ķǱ�Ų��֣������һ����ܲ˵���");
	}
//}
//catch(e){
//	alert("�һ��˵��ѱ����ã�");
//}
}


function fnCreateChild(){
fnForUndo();
if(window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif")>0){//ʹ��window.oSrcElement.parentNode.childNodes.length==2)ʱ�����������ֻ�ø����ж�ͼ��
	var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);//����LIԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����,�ڴ˸��Ƶ�һ��Ŀ
	oLiCloned.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	oLiCloned.style.display="list-item";
	var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//����IMGԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����
	var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(true);//����AԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����
	var oSpanClonedNumber=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
	var oSpanClonedItem=window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
	oSpanClonedItem.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	//var oUl=document.createElement("<UL></UL>");
        var oUl=document.createElement("UL");
	var oInsertUl=window.oSrcElement.parentNode.parentNode.appendChild(oUl);
	var oInsertLi=oInsertUl.appendChild(oLiCloned);
	oInsertLi.appendChild(oImageCloned);
	var oInsertA=oInsertLi.appendChild(oACloned);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="�½���Ŀ";//���,����ֱ��ʹ��oInsertSpan,oInsertA��
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);//���һ����������,����ֵ���ڽڵ�ֵ
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");//��һ��Ŀ����������,�������;
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");//��һ��Ŀ�������л�Ϊ����,�������;
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
																										}
else{
	alert("����Ŀ��������Ŀ,����Ҫ����!");
	return;
}
}


function fnInsertBefore(){//�ο�fnCreateChild()
fnForUndo();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ,ǰ�治�ܲ���������Ŀ!");
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
	oSpanClonedItem.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	//oACloned.href=parent.sLessonsPath;
	var oInsertedLi=window.oSrcElement.parentNode.parentNode.parentNode.insertBefore(oLiCloned,window.oSrcElement.parentNode.parentNode);
	var oInsertedIMG=oInsertedLi.appendChild(oImageCloned);
	var oInsertedA=oInsertedLi.appendChild(oACloned);
	var oInsertedSpanNumber=oInsertedA.appendChild(oSpanClonedNumber);
	var oInsertedSpanItem=oInsertedA.appendChild(oSpanClonedItem);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="�½���Ŀ";
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;
}

}

function fnAppend(){//�ο�fnCreateChild()
	fnForUndo();
	//var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);//����LIԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����
	//oLiCloned.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	//oLiCloned.style.display="list-item";
	//var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//����IMGԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����
	//var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(true);//����AԪ�ؽ���̬����һЩ���ԣ����Ը��Ƹ�����
	//oACloned.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	//oACloned.href=parent.sLessonsPath;
	//var oInsertedLi=window.oSrcElement.parentNode.parentNode.appendChild(oLiCloned);
	//oInsertedLi.appendChild(oImageCloned);
	//oInsertedLi.appendChild(oACloned);
	//oACloned.childNodes.item(0).nodeValue="�½���Ŀ";
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
	oSpanClonedItem.removeAttribute("style");//ȥ����̬���ɵ�һЩ���ԣ�
	//oACloned.href=parent.sLessonsPath;
	var oInsertedLi=window.oSrcElement.parentNode.parentNode.parentNode.appendChild(oLiCloned);
	var oInsertedIMG=oInsertedLi.appendChild(oImageCloned);
	var oInsertedA=oInsertedLi.appendChild(oACloned);
	var oInsertedSpanNumber=oInsertedA.appendChild(oSpanClonedNumber);
	var oInsertedSpanItem=oInsertedA.appendChild(oSpanClonedItem);
	oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue="�½���Ŀ";
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN",oLiCloned.getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue);
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF","");
	oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId","");
	fnContentsRefreshAFromAlreadyAutoNumbered();
	fnContentsRefreshImage();
	window.oPopup.document.getElementById("sIdUndo").disabled=false;

}

function fnModifyValue(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	fnForUndo();
	window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
	window.oSrcElement.parentNode.setAttribute("sFId","");
	var sNewValue=prompt("�������"+window.sNativeLanguage+"�ı�,��ע���ı��в������Զ���ŵ�����!��Ϊ��Ӣ�Ŀ���ͬʱʹ�ã������ڴ˲����ж���������Ƿ�Ϊ"+window.sNativeLanguage+"��",window.oSrcElement.childNodes.item(0).nodeValue);
	if(sNewValue===null){//ȡ������
		fnUndo();
		return;
						}
	else{
		if(sNewValue===""){
			alert("����Ϊ��!");
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
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
	var sNewValue=prompt("�������"+window.sForeignLanguage+"�ı�,��ע���ı��в������Զ���ŵ�����!��Ϊ��Ӣ�Ŀ���ͬʱʹ�ã������ڴ˲����ж���������Ƿ�Ϊ"+window.sForeignLanguage+"��",window.oSrcElement.childNodes.item(0).nodeValue);
	if(sNewValue===null){
		fnUndo();
		return;
						}
	else{
		if(sNewValue===""){
			alert("����Ϊ��!");
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
if(window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){//��һ����Ŀ�޷�������
	alert("����Ŀ�����ٱ�����!");
return;
}
else{//���ǵ�һ����Ŀ
	if(window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length==1){//window.oSrcElement.parentNode.parentNode.parentNode��UL��LI���ֵܽڵ�����Σ�����ɾ��<UL><LI>...</LI></UL>
		var oCloned=window.oSrcElement.parentNode.parentNode.cloneNode(true);
		var oInserted=window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(oCloned,window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling);
		window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//ȥ��<UL><LI>...</LI></UL>;
																						}
	else{//LI���ֵܽڵ������
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
		for(j=0;j<iLiLength-iTarget-1;j++){//����������Ŀ������Ŀ����Ϊһ�����鱸�á�
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
			if(oInserted.childNodes.item(0).src.lastIndexOf("common/image/no.gif")>0){//��������LIԪ�ز���������Ŀ
				//var oUL=document.createElement("<UL></UL>");
                                 var oUL=document.createElement("UL");
				var oInsertedNow=oInserted.appendChild(oUL);
				var iLengthaArray=aArray.length;
				for(var k=0;k<iLengthaArray;k++){		//��������i��ע�������Χ
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
			window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//��ʱ��һϵ��LI�ĵ�һ��LI����ʱ���丸�ĸ�Ҳ��LI������������û����LI����ʱ����ɾ��<ul>
		}
		else{
		;
		}
		window.oSrcElement.parentNode.parentNode.removeNode(true);
		var sWillReplacedUL="<UL>";
		var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���																					}
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
		alert("����Ŀ�����ٱ�����!");
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
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
																													}
		else{
			var oInserted=window.oSrcElement.parentNode.parentNode.previousSibling.getElementsByTagName("UL").item(0).appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
			if(window.oSrcElement.parentNode.parentNode.previousSibling.childNodes.item(0).src.indexOf("/common/image/plus.gif")>0){
				oInserted.style.display="none";
			}
			else{
				oInserted.style.display="list-item";//�����Ǽ̳е�ԭ�򣬸���䲻��ʡ��
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ�����!");
	return;
}
else{
	var bConfirm=confirm("ȷ��Ҫ������?");
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ�ɾ��!");
	return;
}
else{
	var bConfirm=confirm("ȷ��Ҫɾ����?");
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



function fnInsertCopied(){//�ο�fnCreateChild()
if(window.sTempForCopy==""){
	return;
}
else{
	fnForUndo();
	if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
		alert("����Ŀ�Ǹ���Ŀ,ǰ�治�ܲ���������Ŀ!");
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
		document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
		fnContentsRefreshAFromAlreadyAutoNumbered();
		fnContentsRefreshImage();
		window.oPopup.document.getElementById("sIdUndo").disabled=false;
		}

}
}

function fnAppendCopied(){//�ο�fnCreateChild()
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
	document.getElementById("sDiv").innerHTML=document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
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
		document.getElementById("sDiv").innerHTML=window.sTempForUndo;//�¼�������δ�ܳ�����innerHTML�ַ����У���������������Щ���ԡ�ע��innerHTML��hrefҲ�����URL����Ϊ�˾���URL
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
	document.getElementById("sDiv").innerHTML=window.sTempForRedo;//�¼�������δ�ܳ�����innerHTML�ַ����У���������������Щ���ԡ�ע��innerHTML��hrefҲ�����URL����Ϊ�˾���URL
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
		event.returnValue='�������߱༭�ˡ�Ŀ¼��������һЩ�����Զ��޸��ˡ�Ŀ¼����������ȷ������������༭������رյ�ǰĿ¼;������ȡ���������رյ�ǰĿ¼������,���غ�Ŀ¼��ܵ��һ��˵����༭״̬����ѡ��"����"�ɱ���Ŀ¼��';
	}
}

function fnViewTeachingPlan(){
if ( fnDetectActiveXControl('webEdu.pptplayer') )
   {
	window.oSrcElement.click();
	//if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
	//{
	//		alert("����Ŀ�Ǹ���Ŀ��û�н̰�!");		
	//}
	//else
	//{
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="")
		{//����״̬
			var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;	
			if(sTeachingPlanName=="")
			{
				var bBoolean=confirm('����Ŀ"'+window.oSrcElement.childNodes(0).nodeValue+'"��ʱû��'+window.sNativeLanguage+'�̰�!����"ȷ��"��ѭ����ѯ������Ŀ�Ľ̰�������"ȡ��"���˳���Ȼ���ͨ���Ҽ��˵��е�����Ϊ����Ŀ�ϴ��̰�����ǰ��֧�����߱༭�̰���');
				if(bBoolean)
				{
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++)
					{
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked)
						{
							intTarget=i;//ȷ����ǰ��Ŀ
							break;
						}
					}
					var bIsHave=false;
					if(intTarget==intLi-1)
					{//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
								alert('�Ѳ�ѯ��"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'�̰�!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("û�в�ѯ��"+window.sNativeLanguage+"�̰�");
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
								alert('�Ѳ�ѯ��"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'�̰�!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
									alert('�Ѳ�ѯ��"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'�̰�!');
									 var sHeadUrl="";
									var sTeachingPlanName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlan").nodeValue;
									window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";									
									showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("û�в�ѯ��"+window.sNativeLanguage+"�̰�");
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
				 // alert("queryString������:"+"../common/PPTPlayer/PPTPlayerIFrame.asp?sTeachingPlan="+sTeachingPlan+"\n"+"���д��ɲ��Ž̰��ĳ���!");
				showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
				}
			}
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//����״̬
			var sTeachingPlanName=window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;	
			if(sTeachingPlanName==""){
				var bBoolean=confirm('����Ŀ"'+window.oSrcElement.childNodes(0).nodeValue+'"��ʱû��'+window.sForeignLanguage+'�̰�!����"ȷ��"��ѭ����ѯ������Ŀ�Ľ̰�������"ȡ��"���˳���Ȼ���ͨ���Ҽ��˵��е�����Ϊ����Ŀ�ϴ��̰���');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//ȷ����ǰ��Ŀ
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
								alert('�Ѳ�ѯ��"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'�̰�!');
								 var sHeadUrl="";
								var sTeachingPlanName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("û�в�ѯ��"+window.sForeignLanguage+"�̰�");
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
								alert('�Ѳ�ѯ��"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'�̰�!');
								var sHeadUrl="";
								var sTeachingPlanName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
								window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
								showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
									alert('�Ѳ�ѯ��"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'�̰�!');
									var sHeadUrl="";
									var sTeachingPlanName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("teachingPlanF").nodeValue;
									window.sTeachingPlan=sHeadUrl+"content/teachingPlan_foreign/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";
									showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("û�в�ѯ��"+window.sForeignLanguage+"�̰�");
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
				showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	
				}
		}
	//}
	}//�������
	else
	{
		if(confirm("��Ҫ��װ������������������鿴ppt����,�����ذ�װ.\"ȷ��\"��ǰ������ҳ��."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	

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
			alert("����Ŀû��"+sLanguage+"����");
			return;
			}
		else{
			alert('����Ĭ���ڡ����ݿ�ܡ�����ʾ��������̰�����������/ѧ�ʼ������ڶ�����������ʾ����ǰ�������ڶ�����������ʾ���ģ���Ҫ���ڶಿ�ֿ��ıȽ�ʱʹ�á���ʱ�Ҽ��˵����ṩ�����߱༭�ȹ��ܽ������ã�����Ȼ�����鰴סCtrl,Shift,Alt�����������������ƶ����ĵȹ��ܣ�');
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
			alert("����Ŀ�Ǹ���Ŀ��û�ж���!");		
	}
	else{*/
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue==""){//����״̬
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;	
			if(sAnimationName==""){
				var bBoolean=confirm('����Ŀ"'+window.oSrcElement.childNodes(0).nodeValue+'"��ʱû��'+window.sNativeLanguage+'����!����"ȷ��"��ѭ����ѯ������Ŀ�Ķ���������"ȡ��"���˳���Ȼ���ͨ���Ҽ��˵��е�����Ϊ����Ŀ�ϴ���������ǰ��֧�����߱༭������');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//ȷ����ǰ��Ŀ
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
								alert('�Ѳ�ѯ��"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'����!');
								var sHeadUrl="";
								var sAnimationName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
								window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("û�в�ѯ��"+window.sNativeLanguage+"����");
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
								alert('�Ѳ�ѯ��"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'����!');
								var sHeadUrl="";
								var sAnimationName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
								window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
									alert('�Ѳ�ѯ��"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sNativeLanguage+'����!');
									var sHeadUrl="";
									var sAnimationName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
									window.sAnimation=sHeadUrl+"content/play/"+sAnimationName+"/"+sAnimationName+".swf";
									showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("û�в�ѯ��"+window.sNativeLanguage+"����");
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
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//����״̬
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;	
			if(sAnimationName==""){
				var bBoolean=confirm('����Ŀ"'+window.oSrcElement.childNodes(0).nodeValue+'"��ʱû��'+window.sForeignLanguage+'����!����"ȷ��"��ѭ����ѯ������Ŀ�Ķ���������"ȡ��"���˳���Ȼ���ͨ���Ҽ��˵��е�����Ϊ����Ŀ�ϴ�������');
				if(bBoolean){
					var cLi=document.getElementsByTagName("LI");
					var intLi=cLi.length;
					var intTarget=-1;
				
					for(var i=0;i<intLi;i++){
						if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
							intTarget=i;//ȷ����ǰ��Ŀ
							break;
																				}
					}
					var bIsHave=false;
					if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
								alert('�Ѳ�ѯ��"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'����!');
								var sHeadUrl="";
								var sAnimationName=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
								window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHave=true;
								break;
							}
						}
						if(!bIsHave){
							alert("û�в�ѯ��"+window.sForeignLanguage+"����");
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
								alert('�Ѳ�ѯ��"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'����!');
								var sHeadUrl="";
								var sAnimationName=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
								window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
								showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
								bIsHaveNew=true;
								break;
								}
							}
						if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
									alert('�Ѳ�ѯ��"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ��'+window.sForeignLanguage+'����!');
									var sHeadUrl="";
									var sAnimationName=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
									window.sAnimation=sHeadUrl+"content/play_foreign/"+sAnimationName+"/"+sAnimationName+".swf";
									showModelessDialog("../common/windowOrFullScreen_Animation.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");	
									bIsHaveNewNew=true;
									break;
											}
							}
							if(!bIsHaveNewNew){
								alert("û�в�ѯ��"+window.sForeignLanguage+"����");
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
	}//�������
	else
	{
		if(confirm("��Ҫ��װ������������������鿴��������,�����ذ�װ.\"ȷ��\"��ǰ������ҳ��."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	

		}
	
	
	}


}

function fnViewAnimationAll(){	
if ( fnDetectActiveXControl('webEdu.pptplayer') )
   {
	window.oSrcElement.click();
	/*if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
			alert("����Ŀ�Ǹ���Ŀ��û�ж���!");		
	}
	else{*/
		if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue==""){//����״̬
			window.sCurrentLanguageForPlayAll="";
			var iAnimation=0;
			var cA=document.getElementsByTagName("A");
			var intA=cA.length;
			for(var z=0;z<intA;z++){
				if(cA[z].attributes.getNamedItem("play").nodeValue!=""){
					iAnimation=iAnimation+1;
																		}
			}
			alert("�ܹ���"+iAnimation+"����Ŀ��"+window.sNativeLanguage+"����!���Դ��ڷ�ʽѭ���������ж���!");
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;	
			if(sAnimationName==""){
				var cLi=document.getElementsByTagName("LI");
				var intLi=cLi.length;
				var intTarget=-1;
			
				for(var i=0;i<intLi;i++){
					if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
						intTarget=i;//ȷ����ǰ��Ŀ
						break;
																			}
				}
				var bIsHave=false;
				if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
						alert("û�в�ѯ��"+window.sNativeLanguage+"����");
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
					if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
							alert("û�в�ѯ��"+window.sNativeLanguage+"����");
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
		else if(window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue=="1"){//����״̬
			window.sCurrentLanguageForPlayAll="1";
			var iAnimation=0;
			var cA=document.getElementsByTagName("A");
			var intA=cA.length;
			for(var z=0;z<intA;z++){
				if(cA[z].attributes.getNamedItem("playF").nodeValue!=""){
					iAnimation=iAnimation+1;
																		}
			}
			alert("�ܹ���"+iAnimation+"����Ŀ��"+window.sForeignLanguage+"����!���Դ��ڷ�ʽѭ���������ж���!");
			var sAnimationName=window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;	
			if(sAnimationName==""){
				var cLi=document.getElementsByTagName("LI");
				var intLi=cLi.length;
				var intTarget=-1;
			
				for(var i=0;i<intLi;i++){
					if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
						intTarget=i;//ȷ����ǰ��Ŀ
						break;
																			}
				}
				var bIsHave=false;
				if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
						alert("û�в�ѯ��"+window.sForeignLanguage+"����");
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
					if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
							alert("û�в�ѯ��"+window.sForeignLanguage+"����");
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
	}//�������
	else
	{
		if(confirm("��Ҫ��װ������������������鿴��������,�����ذ�װ.\"ȷ��\"��ǰ������ҳ��."))
		{
			showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	

		}
	
	
	}

}

function fnNote(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ��û�н�/ѧ�ʼ�!");
}
else{
	var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;	
	if(sNote==""){
		var bBoolean=confirm('����Ŀ"'+window.oSrcElement.childNodes(0).nodeValue+'"��ʱû�н�/ѧ�ʼ�!����"ȷ��"��ѭ����ѯ������Ŀ�Ķ���������"ȡ��"���˳������Զ�����Ĭ�����ݵĽ�/ѧ�ʼ�,Ȼ������߱༭��');
		if(bBoolean){
			var cLi=document.getElementsByTagName("LI");
			var intLi=cLi.length;
			var intTarget=-1;
		
			for(var i=0;i<intLi;i++){
				if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==window.sColorClicked){
					intTarget=i;//ȷ����ǰ��Ŀ
					break;
																		}
			}
			var bIsHave=false;
			if(intTarget==intLi-1){//�Ѿ������һ����Ŀ����ͷ��ʼ��ѯ
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
						alert('�Ѳ�ѯ��"'+cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ�Ľ�/ѧ�ʼ�!');
						var sHeadUrl="";
						//var sHeadUrl="";
						var sNote=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
						var sNoteURL=sHeadUrl+"/note/"+sNote+"/"+sNote+".htm";
						//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
						showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	
						bIsHave=true;
						break;
					}
				}
				if(!bIsHave){
					alert("û�в�ѯ����/ѧ�ʼ�!");
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
						alert('�Ѳ�ѯ��"'+cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ�Ľ�/ѧ�ʼ�!');
						var sHeadUrl="";
						//var sHeadUrl="";
						var sNote=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
						var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
						//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
						showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	
						bIsHaveNew=true;
						break;
						}
					}
				if(!bIsHaveNew){//�����û�У���ͷ��ʼ��ѯ
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
							alert('�Ѳ�ѯ��"'+cLi[l].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue+'"��Ŀ�Ľ�/ѧ�ʼ�!');
							var sHeadUrl="";
							//var sHeadUrl="";
							var sNote=cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
							var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
							//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
							showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	
							bIsHaveNewNew=true;
							break;
									}
					}
					if(!bIsHaveNewNew){
						alert("û�в�ѯ����/ѧ�ʼ�!");
					}			
								}
				}
				
			}
				else{//������/ѧ�ʼ�
					var oDate=new Date();
					var sFileName=oDate.getTime();
					window.oSrcElement.parentNode.setAttribute("sNote",sFileName);
					//var dialogArguments=showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//�Ժ�׼��ʵ�ֳ�ʽ����
					window.open("../common/saving.htm", "sCreatingNote","fullscreen=0,left="+screen.width*0.5/2+",top="+screen.height*0.5/2+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+screen.width*0.5+",height="+screen.height*0.5);//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
					window.open("../common/createNote.aspx?sFileName="+sFileName,"sCreatingNote",false);
				}
	}
	else{ 
		var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;	
		var sHeadUrl="";
		//var sHeadUrl="";
		var sNoteURL=sHeadUrl+"../lessons/content/note/"+sNote+"/"+sNote+".htm";
		//showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
		showModelessDialog("../common/noteIframe.aspx?sNoteURL="+sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//Ϊ�����߱༭���򿪿����ҳ��	
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
//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sIdForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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
window.open("../common/removingUnusedFiles.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
parent.frames("sIframeBottom").document.getElementById("sIdForm").target="saving";//Ŀ�괰��Ϊһֱ��ʾ�����ڱ���...���Ĵ��ڣ��������ɹ�����ʾ���ѱ��桱���Զ��رա�
parent.frames("sIframeBottom").document.getElementById("sIdForm").submit();
parent.frames("sIframeBottom").document.getElementById("sIdForm").removeNode("true");

}


function fnUploadText(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');
	showModalDialog('../common/uploadText/uploadText.asp?sText='+sText+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
}
window.oSrcElement.click();//text��textF�϶�����Ϊ"";
}


function fnUploadTeachingPlan(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{  
   	var sTeachingPlan="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
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
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���teachingPlan�ļ�����,ͬʱDOCԴ�ļ�����teachingPlan_origin�£�PPTԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�PPTԴ�ļ���ͬʱ�ϴ�);���򴫵�teachingPlan_foreign�ļ�����,ͬʱDOCԴ�ļ�����teachingPlan_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');
	showModalDialog('../common/uploadTeachingPlan/uploadTeachingPlan.aspx?sTeachingPlan='+sTeachingPlan+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:360px;status:0");
}
window.oSrcElement.click();
}

function fnUploadAnimation(){
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
   	var sAnimation="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
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
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���play�ļ�����,ͬʱFLAԴ�ļ�����play_origin�£�FLAԴ�ļ���SWF�ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(�������ṩѡ��FLAͬʱ�ϴ�);���򴫵�play_foreign�ļ�����,ͬʱFLAԴ�ļ�����play_origin_foreign�£�FLAԴ�ļ���SWF�ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(�������ṩѡ��FLAͬʱ�ϴ�)��');
	showModalDialog('../common/uploadAnimation/uploadAnimation.aspx?sAnimation='+sAnimation+"&sFId="+sFId,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:380px;status:0");
	}
window.oSrcElement.click();
}


//ɾ������
function fnRemoveText()
{
	if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
	{
		alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
		return;
	}
	else{
		fnForUndo();
		var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	   	if(sFId=="")
	   	{
			if( window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == "")
			{
				alert("����Ŀû��"+window.sNativeLanguage+"����,����ɾ��!");
		   	}
		   	else
		   	{
				var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sNativeLanguage+'���ģ�����"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
				alert("����Ŀû��"+window.sForeignLanguage+"����,����ɾ��!");
		   	}
		   	else
		   	{
				var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sForeignLanguage+'���ģ�����"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	fnForUndo();
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
   	if(sFId==""){
		if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == ""){
			alert("����Ŀû��"+window.sNativeLanguage+"�̰�,����ɾ��!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sNativeLanguage+'�̰�������"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
			alert("����Ŀû��"+window.sForeignLanguage+"�̰�,����ɾ��!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sForeignLanguage+'�̰�������"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	fnForUndo();
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
   	if(sFId==""){
		if( window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == ""){
			alert("����Ŀû��"+window.sNativeLanguage+"����,����ɾ��!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sNativeLanguage+'����������"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
			alert("����Ŀû��"+window.sForeignLanguage+"����,����ɾ��!");
	   																			}
	   	else{
			var bWillBeRemoved=window.confirm('��ɾ������Ŀ��'+window.sForeignLanguage+'����������"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	fnForUndo();
	var sNote=window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;
	if( sNote==""){
		alert("����Ŀû�н�/ѧ�ʼ�,����ɾ��!");
   					}
   	else{
		var bWillBeRemoved=window.confirm('��ɾ������Ŀ�Ľ�/ѧ�ʼ�,����"ȷ��"ɾ��,����"ȡ��"��ֹ������');
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
	alert("����Ŀ�Ǹ���Ŀ����������!");
	return;
}
else{  
    var sAnimation="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == ""){
			alert("����Ŀû��"+window.sNativeLanguage+"������Դ�ļ����޷�����!");
			return;
		   }
		  else {
		   	sAnimation=window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				}
				}
	else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == ""){
			alert("����Ŀû��"+window.sForeignLanguage+"������Դ�ļ����޷�����!");
			return;
		   }
		  else {
		   	sAnimation= window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
		   	if(sItemName==""){
		   		sItemName="��������";
		   	}
				}
		}
	//alert('sAnimation='+sAnimation+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';�����õ��ļ������URL�ǣ�����/webCourse/common/downloadAnimation/downloadAnimation.asp;FLAԴ�ļ��������ļ������أ�sFId=""ʱFLAԴ�ļ��ļ�����play_origin��sFId="1"ʱFLAԴ�ļ��ļ�����play_origin_foreign');
	showModalDialog('../common/downloadAnimation/downloadAnimation.asp?sAnimation='+sAnimation+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
	}
}

function fnDownloadTeachingPlan(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ����������!");
	return;
}
else{  
    var sTeachingPlan="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == ""){
			alert("����Ŀû��"+window.sNativeLanguage+"�̰���Դ�ļ����޷�����!");
			return;
		   }
		  else {
		   	sTeachingPlan= window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
				}
				}
	else{
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == ""){
			alert("����Ŀû��"+window.sForeignLanguage+"�̰���Դ�ļ����޷�����!");
			return;
		   }
		  else {
		   	sTeachingPlan= window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
		   	if(sItemName==""){
		   		sItemName="��������";
		   	}
				}
		}
	//alert('sTeachingPlan='+sTeachingPlan+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';�����õ��ļ������URL�ǣ�����/webCourse/common/downloadTeachingPlan/downloadsTeachingPlan.asp;PPTԴ�ļ��������ļ������أ�sFId=""ʱPPTԴ�ļ��ļ�����teachingPlan_origin��sFId="1"ʱPPTԴ�ļ��ļ�����teachingPlan_origin_foreign');
	showModalDialog('../common/downloadTeachingPlan/downloadTeachingPlan.asp?sTeachingPlan='+sTeachingPlan+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
 	}
}
function fnDownloadText(){
window.oSrcElement.click();
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ����������!");
	return;
}
else{  
    var sText="";
    var sItemName="";
    var sAutoNum=window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue;
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
 	if(sFId==""){
		 if( window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == ""){
			alert("����Ŀû��"+window.sNativeLanguage+"���ĵ�Դ�ļ����޷�����!");
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
			alert("����Ŀû��"+window.sForeignLanguage+"���ĵ�Դ�ļ����޷�����!");
			return;
		   }
		  else 
		  {
		   	sText= window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
		   	sItemName=window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;				
		  }
		   	if(sItemName=="")
		   	{
		   		sItemName="��������";
		   	}
		}
	//alert('sText='+sText+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';�����õ��ļ������URL�ǣ�����/webCourse/common/downloadText/downloadText.asp;DOCԴ�ļ��������ļ������أ�sFId=""ʱDOCԴ�ļ��ļ�����book_origin��sFId="1"ʱPPTԴ�ļ��ļ�����book_origin_foreign');
	showModalDialog('../common/downloadText/downloadText.asp?sText='+sText+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName,window,"help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
 	}
}

function fnToggleContentsAutoNumber(){
var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
if(parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue=="�б��"){
	for(var i=0;i<iLiLength;i++){
		cLi[i].getElementsByTagName("SPAN").item(0).style.display="none";
		parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue="�ޱ��"
								}
}
else{
	for(var i=0;i<iLiLength;i++){
	cLi[i].getElementsByTagName("SPAN").item(0).style.display="";
	parent.frames("sIframeTitle").document.getElementById("sIdToggleAutoNumber").childNodes(0).nodeValue="�б��"
								}
}
}

function fnContribution(){//"http://www.jgskjw.com/websiteCommon/contribution.aspx"������
window.open("http://www.jgskjw.com/websiteCommon/contribution.aspx","_blank","fullscreen=no,"+"left="+(window.screen.width*0.2)/2+",top="+(window.screen.height*0.2)/2+",width="+window.screen.width*0.8+",height="+window.screen.height*0.8+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no",false);
}

function fnUpdateSystem(){//"http://www.jgskjw.com/websiteCommon/update.aspx"������

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
	if(oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue==""){//˵������������
		if(oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue==""){
			oSpanTemp.firstChild.nodeValue=sPromptNoForeignLanguage;		
		}
		else{
			oSpanTemp.firstChild.nodeValue=oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue;
		}
		oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue="1";//1��ʾӢ��;
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		
		}
	else{
		oSpanTemp.firstChild.nodeValue=oSpanTemp.parentNode.attributes.getNamedItem('sN').nodeValue;
		oSpanTemp.parentNode.setAttribute("sFId","");//""��ʾ����
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sNativeLanguage;
		}
}

function fnToggleLanguage(){
	var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
	if(window.oSrcElement.parentNode.attributes.getNamedItem('sFId').nodeValue==""){//˵������������
		if(window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue==""){
			window.oSrcElement.firstChild.nodeValue=sPromptNoForeignLanguage;		
		}
		else{
			window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
		}
		window.oSrcElement.parentNode.setAttribute("sFId","1");//1��ʾӢ��;
		parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes(0).nodeValue=window.sForeignLanguage;
		
		}
	else{
		window.oSrcElement.firstChild.nodeValue=window.oSrcElement.parentNode.attributes.getNamedItem('sN').nodeValue;
		window.oSrcElement.parentNode.setAttribute("sFId","");//""��ʾ����
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

//�ϴ�¼�������ļ�
function fnUploadRecording() {
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');
	showModalDialog('../common/UploadRecording/UploadRecording.asp?sText='+sText,window,"help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
}
   window.oSrcElement.click();//text��textF�϶�����Ϊ"";
}

//��Ӵʻ㶨��
function fnAdd() {
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
	}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');
	showModalDialog('../common/add/add.aspx?sText='+sText,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
}
   window.oSrcElement.click();//text��textF�϶�����Ϊ"";
}

//�����Ӣ����
function fnAddTranslate()
{
if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
	alert("����Ŀ�Ǹ���Ŀ�����ܱ��޸�!");
	return;
}
else{
	var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId==""){
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
				}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');
	showModalDialog('../common/Translate/frame.asp?sText='+sText,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
}
 //  window.oSrcElement.click();//text��textF�϶�����Ϊ"";

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
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//��ʾ����
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��.û����ʽ���ø�����,��innerHTML�в�����,ȥ��Ҳ������!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//�и���������������ȡ���󣬿ո�Խ��Խ�࣡�����������������ڱ༭Ŀ¼ʱ�����˼���ո���ô����Ͳ��øù�����
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//����޸�����Ŀ�ĳ����ӣ��������ӵľ���URL�����滻Ϊ���URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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
	// �ж��ǲ�������
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
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
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//��ʾ����
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��.û����ʽ���ø�����,��innerHTML�в�����,ȥ��Ҳ������!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//�и���������������ȡ���󣬿ո�Խ��Խ�࣡�����������������ڱ༭Ŀ¼ʱ�����˼���ո���ô����Ͳ��øù�����
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//����޸�����Ŀ�ĳ����ӣ��������ӵľ���URL�����滻Ϊ���URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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
	// �ж��ǲ�������
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
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

//�����ϴ�����
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
	window.open("", "sCopyPartResource","fullscreen=0,left="+sLeft+",top="+sTop+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width="+sWidth+",height="+sHeight);//��ʾ����
	var oClonedDivTemp=window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	
	for(var i=0;i<cLiClonedTemp.length;i++)
	{
 		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//ȥ���Զ������ͼ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//����onmouseon����������Ա仯,onmouseon�ȴ��Ż�.���⿴��������Ա仯Ҫ����Ϊһ��style,��ȥ��.û����ʽ���ø�����,��innerHTML�в�����,ȥ��Ҳ������!
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes(0).nodeValue="1";//�ָ��Զ����ΪĬ��
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
		// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//�ָ�˫���л�֮ǰ
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
	}
	var sWillReplacedUL="<UL>";//�и���������������ȡ���󣬿ո�Խ��Խ�࣡�����������������ڱ༭Ŀ¼ʱ�����˼���ո���ô����Ͳ��øù�����
	var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
	var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//����IE�������HTML�ĵ������⣬����ǿ����<UL>Ԫ��ǰ����׿գ��ڴ˲���һ���ո��ַ���
	var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//����޸�����Ŀ�ĳ����ӣ��������ӵľ���URL�����滻Ϊ���URL
	var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
	var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

	
	//var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//��Bottom��ܶ�̬������,������Ϣ����ɾ����,����������ά��,��Ϊ������������ڽ�����ҳʱ����ȷ��.
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
	// �ж��ǲ�������
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
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

//�γ�����
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
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
		}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');

	win=open("../common/Dictation/Dictation.aspx?sText="+sText,"win1","width=400px,Height=200px,scroll:no,status:no,top="+(screen.height-300)/2+",left="+(screen.width-400)/2);
	win.focus();


}

function fnRecording()
{
    var sText="";
	var sFId=window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//�ж��ǹ��ﻹ������,sFId=""�ǹ���,sFId="1"������
	if(sFId=="")
	{
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
	}
	else
    {
		sText=window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;		
	}
	//alert('�޸�Ϊ����ǹ���״̬(��sFId=""),�ϴ���book�ļ�����,ͬʱDOCԴ�ļ�����book_origin�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�);���򴫵�book_foreign�ļ�����,ͬʱDOCԴ�ļ�����book_origin_foreign�£�DOCԴ�ļ���ת������ļ�ʹ����ͬ��ʱ����ţ���Ϊ�ǰ���һ���(��������ʾ�û�DOCԴ�ļ���ͬʱ�ϴ�)��');

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

// ���������γ�
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
        alert("����Ŀû����Ƶ�μ�");
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