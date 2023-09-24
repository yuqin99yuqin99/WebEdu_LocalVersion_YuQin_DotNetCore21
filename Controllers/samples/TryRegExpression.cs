using System;
using System.Web.Mvc;
using System.Text;
using System.Text.RegularExpressions;

namespace EDSS.Controllers
{
    public class TryRegExpressionController : Controller
    {
            public ContentResult Index(){
            Match match = Regex.Match("age=30", "^(.+)=(.+)$");
            String string0="";
            String string1="";
            String string2="";
            if (match.Success)
            {     
             string0=match.Groups[0].Value;
             string1=match.Groups[1].Value;
             string2=match.Groups[2].Value;
             }
            MatchCollection matches = Regex.Matches("2010年10月10日", "\\d+");
            StringBuilder stringBuilder=new StringBuilder();
            for (int i = 0; i < matches.Count; i++)
            {
                stringBuilder=stringBuilder.Append(matches[i]);
            }

           // string stringOrigin= "hello“welcome to ”beautiful “China”";
            //hello"welcome to "beautiful "China" $1表示引用第一组。$2表示用第二组。
            string stringReplaceResult = Regex.Replace( "hello“welcome to ”beautiful “China”", "“(.+?)”", "\"$1\"");

            return this.Content(string0 + ";" +string1+ ";"+string2+ ";" + stringBuilder.ToString() + ";"+stringReplaceResult);
        }   
    }

}