using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.IO;
 
namespace 测试001
{
    class ImageOrByte
    {
        ///<summary>
        ///将图像转换成数据流
        ///</summary>
        ///<paramname="imgPhoto">Image对象</param>
        ///<returns>返回byte[]数据</returns>
        public byte[] GetImageData(Image image)
{
    //将Image转换成数据流，并保存为byte[]
    MemoryStream memoryStream = new MemoryStream();
    image.Save(memoryStream, System.Drawing.Imaging.ImageFormat.Bmp);
    byte[] byteData = new Byte[memoryStream.Length];
    memoryStream.Position = 0;
    memoryStream.Read(byteData, 0, byteData.Length);
    memoryStream.Close();
    return byteData;
}
///<summary>
///将数据流转换成图像
///</summary>
///<paramname="streamByte">比特数组</param>
///<returns>返回image对象</returns>
public Image ByteToImage(byte[] streamByte)
{
    MemoryStream memoryStream = new  MemoryStream(streamByte);
    return Image.FromStream(memoryStream);
}
    }
}