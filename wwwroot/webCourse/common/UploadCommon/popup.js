
function fnOnDownLoad(src)
{
  window.oPopup.document.write(src);
}

function fnPopup(){
 
var oDiv=window.oPopup.document.getElementById("popupDiv");
var iChildNumber=oDiv.childNodes.length;

   event.returnValue=false;
   window.oSrcElement=event.srcElement;//为什么要保存此事件对象？
   var iLeft =event.screenX+5;
   var iTop = event.screenY+5;
 
window.oPopup.document.body.style.backgroundColor="lightyellow";
window.oPopup.document.body.style.border="solid black 1px";
window.oPopup.document.body.style.fontSize=11;
window.oPopup.document.body.style.cursor="default";

var iMaxLength=0;
var sString="";
for(var i=0; i<iChildNumber; i++)
{
	if(oDiv.childNodes.item(i).style.display=="")
	{
		sString=oDiv.childNodes[i].innerHTML;
		if(sString.length>iMaxLength&&oDiv.childNodes[i])
		{
        	 iMaxLength=sString.length;
		}
	}
}

var iChildNumberDisplay=0;
for(var i=0; i<iChildNumber; i++)
{
	if(oDiv.childNodes.item(i).style.display=="")
	{
		iChildNumberDisplay=iChildNumberDisplay+1;
	}
}

window.oPopup.show(iLeft,iTop,(iMaxLength)*13,(iChildNumberDisplay+2)*13);

}