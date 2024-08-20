using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryCharToBinary2Controller : Controller
    {
        // GET: TryCharToBinaryController
        public ActionResult Index()
        {//
            char TryConvertToBin = 'A';
         //不允许  Convert tryConvert = new Convert(); 对象类型等同对象实例
            return this.Content(Convert.ToString('B', 2)+"；；；；"+ Convert.ToByte("00110001", 2).ToString()+";"
                //+BitConverter.ToChar(Convert.ToByte("00110001", 2))
                );
        }

        public IActionResult index2()
        {
            return this.Content(Convert.ToString('1', 2) + "*****" + Convert.ToChar(Convert.ToByte("00110001", 2)).ToString());

        }


    }
}
