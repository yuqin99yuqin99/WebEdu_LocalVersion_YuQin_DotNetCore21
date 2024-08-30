<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>本机版系统升级</title>
<script language="javascript">
function WinClose(){
 window.opener.parent.parent.close();
 }
</script>

</head>

<% @language="JScript"%>
<% //通过asp来获取"网络远程教学系统_本机版服务.exe"的路径
  var  sFilePath = Server.mapPath("..\\..\\..\\..\\网络远程教学系统_本机版服务.exe");
       sFilePath = sPathToClient(sFilePath,"\\");

   function sPathToClient(sPath,symbol) {   
    var aString=sPath.split(symbol);
	var iLength=aString.length;
	var sNewPath="";
	for(var i=0;i<iLength-2;i++){
	sNewPath+=aString[i]+"\\\\";
	} 
	sNewPath+=aString[i];
	return sNewPath;
   }
%><body scroll="no" topmargin="0" leftmargin="0">
<script src="../script/showActiveX.js"></script>
<script language="javascript" >ShowUpdateActiveX();oUpdate.sLocalSystemPath="<%=sFilePath%>";</script>
</p>

</body>

</html>
