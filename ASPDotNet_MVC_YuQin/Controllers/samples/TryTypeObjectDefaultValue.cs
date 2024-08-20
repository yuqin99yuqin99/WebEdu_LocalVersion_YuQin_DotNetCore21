using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryTypeObjectDefaultValueController : Controller
    {
        
        public ContentResult Index()
        {
            return this.Content(default(System.Byte).ToString() + "</br>" + default(System.Single).ToString() + "</br>" + default(System.Double).ToString() + "</br>" + default(System.Decimal).ToString() + "</br>" + default(System.Char).ToString() + "</br>" + default(System.String) + "</br>" + default(System.Boolean).ToString() + "</br>" + default(System.DateTime).ToString() + "</br>" );            
        }

    }
}
