/**
 * @author Administrator
 */
function fnok()
{
    //为了稳定性,只好下此策了
    var NodeP = document.getElementsByTagName("p");
	var values=cnText.value.split('|');
    for (var i = 0; i < NodeP.length; i++) 
    {
        var ID = new Date().getTime();
        NodeP.en = ID;
        NodeP.type = "translate";
        var oBr = document.createElement("br");
        var oSpan = document.createElement("span");
        oSpan.innerHTML = values[i];
       // oSpan.style.display = "none";
        oSpan.cn = ID;
        //dialogArguments.getPObject().parent.
        document.getPObject().appendChild(oBr);
        document.getPObject().appendChild(oSpan);
    }
    //dialogArguments.getPObject().style.color = "";
    //window.close();
}