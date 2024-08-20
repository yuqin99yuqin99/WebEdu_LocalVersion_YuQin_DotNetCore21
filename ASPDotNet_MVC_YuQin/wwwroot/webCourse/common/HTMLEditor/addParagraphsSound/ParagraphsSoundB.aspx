<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ParagraphsSoundB.aspx.cs" Inherits="addParagraphsSound.ParagraphsSoundB" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>无标题页</title>
     <script src="addSound.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
    <iframe width="100%" height="270" src="addParagraphsSoundB.aspx?sSoundPath=<%=sSoundPath %>&num1=<%=num1 %>&num2=<%=num2 %>"></iframe>
</body>
</html>
