<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="addParagraphsSoundB.aspx.cs" Inherits="addParagraphsSound.addParagraphsSoundB" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        选择第一个语音::<input id="File1" type="file" />&nbsp;<br />
        输入文件夹路径:(暂用)
        <asp:TextBox ID="TextBox2" runat="server" Width="275px"></asp:TextBox><br />
        语音开始段:<asp:TextBox ID="TextBox1" runat="server" Width="79px"></asp:TextBox>
        输入命名规则:<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br />
        添加开始段:<asp:TextBox ID="TextBox4" runat="server" Width="80px"></asp:TextBox>结束段:<asp:TextBox
            ID="TextBox5" runat="server" Width="96px"></asp:TextBox><br />
        原语音开始编号:<asp:TextBox ID="TextBox6" runat="server"></asp:TextBox><br />
        &nbsp;<br />
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="添加全篇" Width="96px" />
        <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="添加到本段" Width="126px" /><br />
        </div>
    </form>
    
</body>
</html>
