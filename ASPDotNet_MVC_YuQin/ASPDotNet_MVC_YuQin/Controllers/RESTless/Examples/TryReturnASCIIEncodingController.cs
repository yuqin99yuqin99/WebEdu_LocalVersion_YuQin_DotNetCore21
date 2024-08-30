using Microsoft.AspNetCore.Mvc;
using Microsoft.Office.Interop.Outlook;
using System;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryReturnASCIIEncodingController : Controller
    {
        public IActionResult CharToBinary()
        {
            return this.Content(Convert.ToString('1',2).PadLeft(2, '0'));
        }
        public IActionResult BinaryToChar()
        {
           return this.Content("计算机CPU的00110001映射人脑的"+Convert.ToChar(Convert.ToByte("00110001", 2)).ToString());
        }
        public IActionResult index()
        {
            return this.Content(Convert.ToString('1', 2)+"*****"+Convert.ToChar(Convert.ToByte("00110001", 2)).ToString());

        }
        public IActionResult BitComputer()
        {
            Byte b1 = 0b00000000;
            Byte b2 = 0b01000001;
           return this.Content(Convert.ToString(b1^b2, 2));

        }
    }
}
