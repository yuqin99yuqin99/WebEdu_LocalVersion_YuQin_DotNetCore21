using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using ChangedMyNameSpace = MyNameSpace;
//using MyNameSpace;

namespace EDSS.Controllers
{
    public class TryCSFileBasicFrameworkController: Controller
    {

        public ContentResult Index()
        {
            //MyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            ChangedMyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            myClass.Property1 = 1;
            myClass.Property2 = 2;
            return this.Content(myClass.Mothod1().ToString());
        }   
    }
    public class ClassTryCSFileBasicFramework2Controller : Controller
    {

        public ContentResult Index()//方法
        {//语句块{}
            return this.Content("我是黄景碧");
        }
    }
}
namespace MyNameSpace
{
     public class MyClass:System.Object//默认继承System.Object//中国.江西.江西师范大学.教育技术.黄老师。唯一区分
    {//语句块{}
        internal System.Int32 Property1 { get; set; }//属性
        internal Int32 Property2 { get; set; }
        internal Int32 Mothod1()
        {
            return (Property1+Property2);//语句(由单词、运算符表达式；语法的最微观);
        }
    }
    interface MyInterface
    {
        Int32 TryInterfaceProperty { get; set; }
        String TryInterfaceMethod3();
    }
}
//以上是一个.cs文件中C#代码的基本框架。

