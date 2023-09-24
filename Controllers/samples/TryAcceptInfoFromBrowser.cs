using System;
using System.Web;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryAcceptInfoFromBrowserController: Controller
    {
         [HttpGet]
        //注意：好像this.Request.QueryString方式（更不面向对象），比方法参数方式更稳定（更面向对象），影响稳定的因素可能是文本的编码。
        public ContentResult TryAcceptURLNameValue_QueryString_Get1(String parameter1, String parameter2)

        {

            String parameter1Temp = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter1.ToString()+ ":" + parameter1);////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
            String parameter2Temp = "浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(parameter2.ToString() + ":" + parameter2);
            return this.Content(parameter1Temp + ";" + parameter2Temp); 
        }
        [HttpGet]
         public ContentResult TryAcceptURLNameValue_QueryString_Get2()
         {

             String parameter1Temp = "浏览器端发送的第一个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(this.Request.QueryString.AllKeys[0]+";"+this.Request.QueryString[0]);////.Net内置的System.Web.HttpUtility.HtmlEncode()方法可以防止用户在所发送的字符串中注入恶意的JavaScript代码。
             String parameter2Temp = "浏览器端发送的第二个名值对的值是:" + System.Web.HttpUtility.HtmlEncode(this.Request.QueryString.AllKeys[1]+";"+this.Request.QueryString[1]);
             return this.Content(parameter1Temp + ";" + parameter2Temp);
         }

       

        [HttpPost]
         //FormCollection方式（更面向对象）;this.Request.Form方式（更不面向对象）。
        public ContentResult TryAcceptFormNameValueFile_Post1(FormCollection formCollection)
        {
            String stringOfForm = "";
            Int32 count = formCollection.Count;
            for (Int32 i = 0; i < count; i++)
            {
                stringOfForm = stringOfForm + formCollection[i] + ":" + formCollection.AllKeys[i].ToString() + "</br>";
            }

            String postedFileName = RequestFilesUpLoadFile(formCollection);
            //return this.Content("已上传的文件是：</br>" + postedFileName);
            return this.Content("浏览器端所发送的表单数据是：" + stringOfForm + "已上传的文件是：</br>" + postedFileName);
        }

        [HttpPost]
        //FormCollection方式（更面向对象）;this.Request.Form方式（更不面向对象）。
        public ContentResult TryAcceptFormNameValueFile_Post2()
        {
            String stringOfForm = "";
            Int32 length=this.Request.Form.AllKeys.Length;
            for (Int32 i=0;i<length;i++)
            {
                stringOfForm = stringOfForm + this.Request.Form[i] + ";" + this.Request.Form.AllKeys[i].ToString() + "</br>";
            }

            String httpPostedFileName = HttpPostedFileBaseUpLoadFile();
            return this.Content("浏览器端所发送的表单数据是：" + stringOfForm + "已上传的文件是：</br>" + httpPostedFileName);
        }
            

        public String RequestFilesUpLoadFile(FormCollection formCollection)//此方法.html返回界面上传时成功，.cshtml返回界面上传尚未试验。
        {
             
            String postedFileName = "";
            Int32 fileNumber = this.Request.Files.Count;
            for (Int32 i = 0; i < fileNumber; i++)
            {

                postedFileName = postedFileName + this.Request.Files[i].FileName + "</br>";
                String fileName = this.Request.Files[i].FileName;
                if (fileName.LastIndexOf("\\") > -1)
                {
                    fileName = fileName.Substring(fileName.LastIndexOf("\\") + 1);
                }
                this.Request.Files[i].SaveAs(@"d:\temp\" + fileName);
            }
            return postedFileName;
        }

        public String HttpPostedFileBaseUpLoadFile()//此方法.html返回界面上传时失败，.cshtml返回界面上传时成功。
        {
            List<HttpPostedFileBase> httpPostedFileBaseList = new List<HttpPostedFileBase>();
            String httpPostedFileName = "";
            foreach (HttpPostedFileBase httpPostedFileBase in httpPostedFileBaseList)
            {
                httpPostedFileName = httpPostedFileName + httpPostedFileBase.FileName + "<br/>";
                String fileName = httpPostedFileBase.FileName;
                if (fileName.LastIndexOf("\\") > -1)
                {
                    fileName = fileName.Substring(fileName.LastIndexOf("\\") + 1);
                }

                httpPostedFileBase.SaveAs(@"d:\temp\" + fileName);
            }
            return httpPostedFileName;
        }
    }
}
