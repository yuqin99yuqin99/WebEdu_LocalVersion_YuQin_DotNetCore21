using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace EDSS.Controllers
{
    public class TrySystemDotObjectController : Controller
    {
        
        public Object Index()//或public ContentResult Index(),或public Object Index()
        {
            Object tryObject1 = new Object();//诞生一个对象
            Object tryObject2 = new Object();
            return this.Content(tryObject1.GetType().ToString() + ";"
                + tryObject1.GetHashCode() + ";"
                + tryObject1.Equals(tryObject2) + ";"
                + tryObject1.ToString() + ";"
                );
        }
        public Object Index2()
        {
            Int64 tempByte = 1111111111111 + 2;
            String tempString = new String("i love ");
            String tempString2 = "i love ";
            Int32 tempInt32 = new Int32();
            // ? Int32 tempInt32 = new Int(2);
            // ? int i = new int(1);
            tempInt32 = 2;
            Boolean tempBoolean = new Boolean();
            tempBoolean = true;
            //Boolean tempBoolean2 = new Boolean(true);
            Char tempChar = 'Q';
            Char tempChar2 = new char();
            tempChar2 = 'M';

            String stringForByte = "";
            String input = "1001010,1101010,11";
            String[] inputs = input.Split(",");
            byte[] outputs = new byte[inputs.Length];
            for (int i = 0; i < outputs.Length; i++)
            {
                // outputs[i] = Byte.ParseByte(inputs[i], 2);
                outputs[i] = Convert.ToByte(inputs[i], 2);
                // outputs[i] = inputs[i];
                stringForByte += outputs[i];
            }

            return this.Content((tempString == tempString2).ToString() + ";" + String.ReferenceEquals(tempString, tempString2) + ";" + tempString.Equals(tempString2) + "|" + Object.Equals(tempString, tempString2) + "|" + Object.ReferenceEquals(tempString, tempString2) + tempInt32.ToString() + tempBoolean.ToString() + tempChar + tempChar2 + "|" + Convert.ToByte("01000010", 2) + "|" + Convert.ToByte("01100010", 2) + Convert.ToString(64, 2) + "|" + stringForByte);
        }

        public ContentResult ByteAndBinarySequence()
        {
            byte b0 = 0b01111110;
            byte bNew = 0b00011110;
            byte b1 = 126;
            string bstr = "0111110";
            byte b2 = Convert.ToByte(bstr, 2);
            //b2=126
            // return this.Content(Convert.ToChar(b0)+"|"+ Convert.ToChar(b0&0b011111) + "|" + Convert.ToByte(b0) + "|" + b2.ToString()+"|"+ (b1+1).ToString());
            return this.Content(Convert.ToChar(b0)+"|"+ Convert.ToChar(bNew) + "|" + Convert.ToByte(b0) + "|" + b2.ToString()+"|"+ (b1+1).ToString());

        }
        public ContentResult EncodedStringToBinarySequence()
        {
            /// <summary>
            /// 将字符串转成二进制序列“10011100000000011100011111111101”
            /// </summary>
            /// <param name="s"></param>
            /// <returns></returns>
            String s="123ABC您好!";
            {
                byte[] data = Encoding.Unicode.GetBytes(s);
                StringBuilder result = new StringBuilder(data.Length * 8);

                foreach (byte b in data)
                {
                    result.Append(Convert.ToString(b, 2).PadLeft(8, '0'));
                }
                return this.Content(result.ToString()) ;
            }
        }
        public ContentResult BinarySequenceStringToEncodedString()
        {
            /// <summary>
            /// 将二进制序列形式的字符串“001100010000000000110010000000000011001100000000010000010000000001000010000000000100001100000000101010000110000001111101010110010010000100000000”转成编码后的字符串
            /// </summary>
            /// <param name="s"></param>
            /// <returns></returns>
            string s = "001100010000000000110010000000000011001100000000010000010000000001000010000000000100001100000000101010000110000001111101010110010010000100000000";
                System.Text.RegularExpressions.CaptureCollection cs =
                    System.Text.RegularExpressions.Regex.Match(s, @"([01]{8})+").Groups[1].Captures;
                byte[] data = new byte[cs.Count];
                for (int i = 0; i < cs.Count; i++)
                {
                    data[i] = Convert.ToByte(cs[i].Value, 2);
                }
                return Content(Encoding.Unicode.GetString(data, 0, data.Length)) ;
        
        }
    }
}
