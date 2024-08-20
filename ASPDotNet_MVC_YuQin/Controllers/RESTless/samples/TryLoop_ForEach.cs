using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryForEachLoopController:Controller
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
            foreach (String stringTemp in tryList)
            {
                stringForAllWeekDay = stringForAllWeekDay + stringTemp+";";
            }
            return this.Content(stringForAllWeekDay);
        }   
    }
}
