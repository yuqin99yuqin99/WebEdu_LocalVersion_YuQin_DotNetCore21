/**
 * @author Administrator
 */
function fnok() {

	var sValue=document.getElementById("oTranslate").value.split('|');
	var NodeP = dialogArguments.document.frames(0).document.getElementsByTagName("P");
	
	var j=0;
	for (var i = 0; i < NodeP.length; i++) 
	{
		if (NodeP[i].innerHTML != "") 
		{
			var ID = new Date().getTime();
			NodeP[i].en = ID;
			NodeP[i].type = "translate";
			var oBr = dialogArguments.document.frames(0).document.createElement("br");
			var oSpan = dialogArguments.document.frames(0).document.createElement("span");
			oSpan.innerHTML = sValue[j];
			oSpan.style.display = "none";
			oSpan.cn = ID;
			//dialogArguments.getPObject().parent.
			NodeP[i].appendChild(oBr);
			NodeP[i].appendChild(oSpan);
			j++;
		}
	}
	window.close();
}

function t()
{
	dialogArguments.getPObject().style.color="red";

}