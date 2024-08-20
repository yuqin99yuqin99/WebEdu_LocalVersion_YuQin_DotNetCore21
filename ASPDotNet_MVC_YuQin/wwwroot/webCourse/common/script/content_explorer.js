function fnOnLoad(){
//document.body.unselectable="on";
alert();
document.body.onmousemove=fnPane;
document.body.onmousewheel=fnMouseWheel;
document.body.onmousedown=fnMouseDown;
document.body.onmouseup=fnMouseUp;
document.body.scroll="no";
window.bMovable=false;
window.bFrameMovable=false;
window.iFrameMouseX;
window.iMouseX;
window.iMouseY;
try{
document.body.style.zoom=parent.frames("sIframeContents").document.getElementById("sDiv").style.zoom;
if(parent.frames.item("sIframeTitle").document.getElementById("sEditable").style.backgroundColor=="rgb(0,255,0)"){
document.body.contentEditable="true";
}
else{
document.body.contentEditable="false";
}
}
catch(e){
document.body.style.zoom="100%";
document.body.contentEditable="false";
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
document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
}
}

}


function fnMouseDown(){
//alert();
if(document.body.style.cursor=="w-resize"){
window.bFrameMovable=true;
document.body.style.cursor="w-resize";
iFrameMouseX=event.x;
}
else if(document.body.contentEditable!="true"){
{
if(event.button==1&&!event.altKey){
window.bMovable=true;
document.body.style.cursor="move";
iMouseX=event.x;
iMouseY=event.y;
}
}
}
}

function fnMouseUp(){
window.bMovable=false;
window.bFrameMovable=false;
document.body.style.cursor="default";
}

function fnPane(){
if(event.x<=3&&parent.document.getElementById("sIframeContent").style.height==parent.iIframeContentHeight){
document.body.style.cursor="w-resize";
}
else{
document.body.style.cursor="default";
}
if(bFrameMovable){
if(event.x-iFrameMouseX>0){
if(parseInt(parent.document.getElementById("sTdContents").style.width)+(event.x-iFrameMouseX)<parseInt(parent.iTableBookWidth)){
parent.document.getElementById("sTdContents").style.width=parseInt(parent.document.getElementById("sTdContents").style.width)+(event.x-iFrameMouseX);
parent.document.getElementById("sIframeContents").width=parseInt(parent.document.getElementById("sIframeContents").width)+(event.x-iFrameMouseX);
parent.document.getElementById("sTdContent").style.width=parseInt(parent.document.getElementById("sTdContent").style.width)-(event.x-iFrameMouseX);
parent.document.getElementById("sIframeContent").width=parseInt(parent.document.getElementById("sIframeContent").width)-(event.x-iFrameMouseX);
}
else{
parent.document.getElementById("sTdContents").style.width=parent.iTableBookWidth;
parent.document.getElementById("sIframeContents").width=parent.iTableBookWidth;
parent.document.getElementById("sTdContent").style.width=0;
parent.document.getElementById("sIframeContent").width=0;
}
}

else{
if(parseInt(parent.document.getElementById("sTdContents").style.width)+(event.x-iFrameMouseX)>0){
parent.document.getElementById("sTdContents").style.width=parseInt(parent.document.getElementById("sTdContents").style.width)+(event.x-iFrameMouseX);
parent.document.getElementById("sIframeContents").width=parseInt(parent.document.getElementById("sIframeContents").width)+(event.x-iFrameMouseX);
parent.document.getElementById("sTdContent").style.width=parseInt(parent.document.getElementById("sTdContent").style.width)-(event.x-iFrameMouseX);
parent.document.getElementById("sIframeContent").width=parseInt(parent.document.getElementById("sIframeContent").width)-(event.x-iFrameMouseX);
}
else{
parent.document.getElementById("sTdContents").style.width=0;
parent.document.getElementById("sIframeContents").width=0;
parent.document.getElementById("sTdContent").style.width=parent.iTableBookWidth;
parent.document.getElementById("sIframeContent").width=parent.iTableBookWidth;
}
}
}

if(window.bMovable){
event.returnValue=false;
window.scrollTo(document.body.scrollLeft+event.x-iMouseX,document.body.scrollTop+event.y-iMouseY);
}
}




