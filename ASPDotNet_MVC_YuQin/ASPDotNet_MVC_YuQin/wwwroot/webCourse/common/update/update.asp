<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>������ϵͳ����</title>
<script language="javascript">
function WinClose(){
 window.opener.parent.parent.close();
 }
</script>

</head>

<% @language="JScript"%>
<% //ͨ��asp����ȡ"����Զ�̽�ѧϵͳ_���������.exe"��·��
  var  sFilePath = Server.mapPath("..\\..\\..\\..\\����Զ�̽�ѧϵͳ_���������.exe");
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
