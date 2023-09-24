using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryOperatorController : Controller
    {
        
        public ContentResult Index()
        {
           Single singleA=1.1F;
           Single singleB=1.2F;
           Double doubleA=1.1D;
            Double doubleB=1.2D;
            Decimal decimalA=1.1M;
             Decimal decimalB=1.2M;
             Int32 int32A = 1;
             //Int32 int32A = new Int32(1);
           //  String stringA = "优秀";
             Int32 int32B = 2;
             return this.Content((singleA - singleB).ToString() + "</br>" + (doubleA - doubleB).ToString() + "</br>" + (decimalA - decimalB).ToString() + "</br>" + (int32A & int32B).ToString() + "</br>" + (int32A | int32B).ToString() + "</br>" + (int32A ^ int32B).ToString() + "</br>" + ((int32A>0) && (int32B>0)).ToString() + "</br>" + ((int32A>0)||(int32B>0)).ToString() + "</br>");             
        }

    }
}
