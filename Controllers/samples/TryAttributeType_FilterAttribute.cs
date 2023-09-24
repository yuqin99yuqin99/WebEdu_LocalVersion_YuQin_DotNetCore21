using System;
using System.Reflection;
using System.Web.Mvc;

namespace EDSS.Controllers
{

    [TryActionFilterAttribute(Message = "正在运行！")]
    public class TryAttributeType_FilterAttributeController : Controller
    {


      
        public void Index()
        {
            //HttpContext.Response.Write("Action正在执行···<br />");
           // return Content("正在返回Result···<br />");
        }
        public void Index2()
        {
            ;
        }
    }

    
     [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class TryActionFilterAttribute : ActionFilterAttribute
    {
        public String Message { get; set; }

        public override void OnActionExecuting(ActionExecutingContext actionExecutingContext)
        {
            base.OnActionExecuting(actionExecutingContext);
            actionExecutingContext.HttpContext.Response.Write("控制器方法执行之前：" + Message + "<br />");
        }

        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.HttpContext.Response.Write("控制器方法执行之后：" + Message + "<br />");
        }

        public override void OnResultExecuting(ResultExecutingContext resultExecutingContext)//在请求返回时增加一个敏感词过滤器，通过过滤器 实现敏感词过滤。
        {
            base.OnResultExecuting(resultExecutingContext);
            resultExecutingContext.HttpContext.Response.Write("控制器方法返回Result之前：" + Message + "<br />");
        }

        public override void OnResultExecuted(ResultExecutedContext resultExecutedContext)
        {
            base.OnResultExecuted(resultExecutedContext);
            resultExecutedContext.HttpContext.Response.Write("控制器方法返回Result之后：" + Message + "<br />");
        }
    }
}
