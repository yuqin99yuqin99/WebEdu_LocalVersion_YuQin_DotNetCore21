    using System;
    using System.Web;
   // using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

    namespace EDSS.Controllers
    {
        //TODO:尚未正确完成！
        public class TryLoop_RecursionController : Controller
        {
            Int32 int32Result { set; get; }
            public ContentResult Index(String stringTemp)
            {

                return this.Content(Factorial(Int32.Parse(stringTemp)).ToString());
            }
            public Int32 Factorial(Int32 int32N)
            {
                
                if (int32N == 1)
                {
                return int32N;
                }
                else
                {
                    for (Int32 int32Temp=int32N; int32Temp < 1; int32Temp=int32Temp-1)
                    {
                       int32Result=int32Temp * Factorial(int32Temp - 1);
                    }
                    return int32Result;
                }
                    
            }
        }
    }
