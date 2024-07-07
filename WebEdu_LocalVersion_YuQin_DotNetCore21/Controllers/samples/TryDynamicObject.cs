using System;
using System.Dynamic;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryDynamicObjectController : Controller
    {

        public ContentResult Index()
        {
            String tryString = "String对象示例";
            dynamic tryDynamicObject = "dynamic 对象示例";
            dynamic tryDynamicExpando = new ExpandoObject();
            tryDynamicExpando.Property1 = "dynamic对象的扩展属性示例1";
            tryDynamicExpando.Property2 = "dynamic对象的扩展属性示例2";
            return this.Content("tryString对象的类型是：" + tryString.GetType().ToString() + ";" + "tryDynamicObject 对象的类型是：" + tryDynamicObject.GetType().ToString() + ";" + "tryDynamicExpando的扩展属性1是：" + tryDynamicExpando.Property1 + ";" + "tryDynamicExpando的扩展属性2是：" + tryDynamicExpando.Property2);
        }   
    }
}

