using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Word = Microsoft.Office.Interop.Word;
using Office = Microsoft.Office.Core;
using Microsoft.Office.Tools.Word;
using System.Windows.Forms;

namespace YuQinWordAddInClient
{
    public partial class ThisAddIn
    {
        private void ThisAddIn_Startup(object sender, System.EventArgs e)//VSTO面向Office应用程序级别的一个COM加载项。Windows窗体开发,一般程序是从Form的Load事件进去,从而装载其他部分,如果没有窗体,一般是从Main函数开始运行.而对于VSTO外接程序,他的入口函数是 ThisAddin_Startup,这个函数是一个事件过程,也就是说,当在Office中加载这个COM的时候,首先运行这个函数.当编译成功后,会在项目文件夹的Debug文件夹生成相应的dll文件,和一些其他相关文件,这些文件就是VSTO的最终作品了。其实,最简单的VSTO程序,就是手工创建一个Excel外接程序项目之后,在自动生成的ThisAddin_Startup事件过程中写入
        {
           // MessageBox.Show("hi");
        }

        private void ThisAddIn_Shutdown(object sender, System.EventArgs e)
        {
        }

        #region VSTO generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InternalStartup()
        {
           // this.Startup += new System.EventHandler(ThisAddIn_Startup);
           // this.Shutdown += new System.EventHandler(ThisAddIn_Shutdown);
        }
        
        #endregion
    }
}
