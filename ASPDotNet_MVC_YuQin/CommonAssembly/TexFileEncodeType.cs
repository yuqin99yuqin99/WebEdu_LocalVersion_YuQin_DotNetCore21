using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Text;
using System.IO;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Common
{

    public class TexFileEncodeType
    {
        public Encoding GetFileEncodeType(String filename)
        {
           FileStream fileStream = new FileStream(filename, FileMode.Open, FileAccess.Read);
            BinaryReader binaryReader = new BinaryReader(fileStream);
            
            Byte[] buffer = binaryReader.ReadBytes(2);
            binaryReader.Close();
            binaryReader.Dispose();
            fileStream.Close();
            fileStream.Dispose();
            if (buffer[0] >= 0xEF)
            {
                if (buffer[0] == 0xEF && buffer[1] == 0xBB)
                {
                    return Encoding.UTF8;
                }
                else if (buffer[0] == 0xFE && buffer[1] == 0xFF)
                {
                    return Encoding.BigEndianUnicode;
                }
                else if (buffer[0] == 0xFF && buffer[1] == 0xFE)
                {
                    return Encoding.Unicode;
                }
                else
                {
                    return Encoding.Default;//即ANSI?(无ascii 、gb2312、big等属性！)                
                }
            }
            else
            {
                return Encoding.Default;
            }
            
        }
    }
}
