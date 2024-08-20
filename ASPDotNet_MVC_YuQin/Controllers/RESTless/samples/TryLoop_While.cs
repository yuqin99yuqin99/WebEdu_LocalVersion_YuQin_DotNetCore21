using System;
//using System.Web.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace EDSS.Controllers
{
    public class TryWhileLoopController:Controller
    {
      
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
            Int32 int32Temp = 0;
            while (int32Temp<3)
            {
                stringForAllWeekDay = stringForAllWeekDay + tryList[int32Temp]+";";
                int32Temp = int32Temp + 1;
            }
            return this.Content(stringForAllWeekDay);
        }   
    }
}
