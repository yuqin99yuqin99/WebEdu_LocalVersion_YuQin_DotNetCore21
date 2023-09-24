function fnHideEvenTds(){
var cTable=window.document.getElementsByTagName("TABLE");
 for(i=0;i<cTable.length;i++){
	if(cTable.item(i).rows.length%2!==0){
	alert("table's rows must be even,the function may cause error!");
	}
 }

var cTR=window.document.getElementsByTagName("TR");
	for(i=0;i<cTR.length;i++){
		if(i%2===1){
		cTR.item(i).style.display="none";
		cTR.item(i-1).title="Have Collable Content";
		}
}
}

function fnToggleDisplay(){

window.event.cancelBubble=true;

var oSrcElement=window.event.srcElement;
oSrcElement.unSelectable="on";

while(oSrcElement.tagName.toUpperCase()!=="TR"){
oSrcElement=oSrcElement.parentNode;
}

var cTR=window.document.getElementsByTagName("TR");
for(i=0;i<cTR.length;i++){
if(cTR.item(i)===oSrcElement){
 if(i%2===0){
	if(cTR.item(i+1).style.display=="none"){
		cTR.item(i+1).style.display="block";
}
	else{
		cTR.item(i+1).style.display="none";
}
}
}
}

}
