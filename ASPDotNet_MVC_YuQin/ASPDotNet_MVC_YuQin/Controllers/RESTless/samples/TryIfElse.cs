using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace EDSS.Controllers
{
   
    public class TryIfElse2Controller : Controller
    {

    }
    public class TryIfElseController : Controller
    {

        public ContentResult Index()
        {
           
            Int32 int32Number = new Int32();
          
            int32Number = 8;
            if (int32Number == 0) { return this.Content("星期天"); }

            else if (int32Number == 1) { return this.Content("星期一"); }
            else if (int32Number == 2) { return this.Content("星期二"); }
            else if (int32Number == 3) { return this.Content("星期三"); }
            else if (int32Number == 4) { return this.Content("星期四"); }
            else if (int32Number == 5) { return this.Content("星期五"); }
            else if (int32Number == 6) { return this.Content("星期六"); }
            else { return this.Content("没有这样的星期日子"); }
        }
    }


}
