using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace EDSS.Controllers
{
    public class TryStringController : Controller
    {
      
        public ContentResult Index()
        {


           Int32 TryNumber1 =256;

           Single  TryNumber2 = 2.2333333333333333333333333333333333333333333333333333333f;


            Decimal TryNumber3 = 2.2222222222222222222222222222222M;
            Single TryNumber4 = 2.233333333333333333333333333333333333333f;

            String TryString4 = "黄景碧";
            return this.Content((TryNumber1>TryNumber2).ToString()+";;;;;;"+(TryNumber2>TryNumber4).ToString());
             
        }   
    }
}
