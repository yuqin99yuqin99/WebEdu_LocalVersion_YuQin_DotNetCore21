using System;
using System.Web.Mvc;
using ChangedMyNameSpace = MyNameSpace;
//using MyNameSpace;

namespace EDSS.Controllers
{
    public class TryCopyTypeAndReferenceTypeController : Controller
    {

        public ViewResult Index()
        {

            return this.View("/Views/Samples/TryCopyTypeAndReferenceType/index.cshtml");
        }   
    }
}

