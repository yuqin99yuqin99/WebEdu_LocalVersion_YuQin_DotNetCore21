using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Common
{
    public class LocalVersionOrServerVersion
    {
        //根据传入的URL字符串，判断是否包含localhost，包含则是本机版。否者是服务器版。
       public Boolean IsLocalVersion(String sString)
        {
            //if (sString.ToLower().IndexOf("localhost")>6&&sString.ToLower().IndexOf("localhost")<10) { return true; }
            if (sString.ToLower().IndexOf("localhost")==0) { return true; }
            else { return false; }
        }
    }
}
