#region //using语句系列，对象类型的名称空间别名的声明定义。必须在整个.cs文件的开始部分
using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using ChangedMyNameSpace = MyNameSpace;
//using MyNameSpace;
#endregion

namespace EDSS.Controllers //零个或多个namespace代码块，定义类型的名称空间。名称空间中，一个或多个class、interface等代码块，定义类型及其关系，这些类型可以实例化为对象运行，实现软件功能。
{
        public class TryCSFileBasicFrameworkController: Controller
    {

        public ContentResult Index()
        {
            //MyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            ChangedMyNameSpace.MyClass myClass = new MyNameSpace.MyClass();
            myClass.Property1 = 1;
            myClass.Property2 = 2;
            Object myObject=new Object();
            return this.Content(myClass.Mothod1().ToString()+"黄景碧"+";"+ myObject.GetHashCode().ToString());//从左往右
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
            return (Property1+Property2);
        }
    }
    interface MyInterface
    {
        Int32 TryInterfaceProperty { get; set; }
        String TryInterfaceMethod3();
    }
}
//以上是一个.cs文件中C#代码的基本框架。

