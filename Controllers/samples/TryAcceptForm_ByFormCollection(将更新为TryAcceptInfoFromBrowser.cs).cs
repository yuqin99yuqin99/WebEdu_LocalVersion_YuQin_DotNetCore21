using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryAcceptForm_ByFormCollectionController : Controller
    {
        
        public ViewResult Index()
        {
            return this.View("/Views/Samples/TrySendForm/index.cshtml");             
        }
        [HttpPost]
        public ContentResult Index(FormCollection formCollection)
        {
            String stringOfForm = "";
            foreach (String stringTemp in formCollection.AllKeys)
            {
                stringOfForm = stringOfForm + formCollection[stringTemp].ToString() + "；";
            }

            return this.Content("浏览器端所发送的表单数据是："+stringOfForm);
        }
    }
}
