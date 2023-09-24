using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryAcceptFileController : Controller
    {
        
        public ViewResult Index()
        {
            return this.View("/Views/Samples/TrySendFile/index.cshtml");             
        }

        [HttpPost]            

        public ActionResult Index(List<HttpPostedFileBase> SendFile)
        {
            String stringFileName = "";
            foreach (HttpPostedFileBase file in SendFile)
            {
                stringFileName = stringFileName + file.FileName + ";";
                String fileName = file.FileName;
                if (fileName.LastIndexOf("\\") > -1)
                {
                    fileName = fileName.Substring(fileName.LastIndexOf("\\") + 1);
                }
                file.SaveAs(@"d:\temp\" + fileName);
            }
            return this.Content("已上传的文件是："+stringFileName);
        }
    }
}
