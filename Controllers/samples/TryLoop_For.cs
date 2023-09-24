using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryForLoopController : Controller
    {
        String stringTemp = "";
        public ContentResult Index()
        {
            List<String> tryList = new List<String>();
            tryList.Add("星期天");
            tryList.Add("星期一");
            tryList.Add("星期二");
            tryList.Add("星期三");
            tryList.Add("星期四");
            tryList.Add("星期五");
            tryList.Add("星期六");
            String stringForAllWeekDay = "";
            for (Int32 int32Temp = 0; int32Temp < 3; int32Temp = int32Temp + 1)
            {
                stringForAllWeekDay = stringForAllWeekDay + tryList[int32Temp] + ";";
            }
            return this.Content(stringForAllWeekDay);
        }
    }
}
