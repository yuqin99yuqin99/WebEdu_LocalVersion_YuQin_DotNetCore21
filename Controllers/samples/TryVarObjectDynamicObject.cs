using System;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryVarObjectController : Controller
    {

        public ContentResult Index()
        {
            String tryString = "String对象示例";
            var tryVarObject = "var对象示例";
            dynamic tryDynamicObject = 1;
            return this.Content("tryString对象的类型是：" + tryString.GetType().ToString() + ";" + "tryVarObject对象的类型是：" + tryVarObject.GetType().ToString() + "tryDynamicObject对象的类型是：" + tryDynamicObject.GetType().ToString() + this.Hi().ToString()+"!");
        }
        public System.Nullable<Int32> Hi()
        {
            return null;
        }
        
    }
}

