using EDSS.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryInterfaceController : Controller
    {
        public IActionResult Index()
        {
            //IPrinterName iPrinterName = new IPrinterName(); 不可执行。
            MyClassImp myClassImp = new MyClassImp();
            MyClassInhrit myClassInhrit=new MyClassInhrit();
            IPrinterName iPrinterName = new MyClassImp();//

            iPrinterName.PrinterName();//
            return this.Content(myClassImp.PrinterName()+ myClassInhrit.PrinterNameMethod());
        }
    }
    public interface IPrinterName //老师定义好了interface类型，名称是IPrinterName
    {
        String PrinterName();
    }
    public class PrinterName //老师定义好了interface类型，名称是IPrinterName
    {
        String PrinterNameMethod()
        {
            return("HP来自Class");
        }
    }
    public class MyClassImp : IPrinterName //学生履行IPrinterName这个interface类型
    {
        public String PrinterName()
        {
            return ("HP来自interface");
        }
        public String PrinterId()
        {
            return ("00123"); ;
        }
    }
    public class MyClassInhrit : PrinterName
    {
        public String PrinterNameMethod()
        {
            return ("HP来自Class");
        }
        public String PrinterNameMethod2()
        {
            return ("HP来自Class2");
        }
    }

}
