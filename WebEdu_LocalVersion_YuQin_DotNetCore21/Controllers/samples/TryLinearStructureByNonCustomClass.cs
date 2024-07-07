using System;
using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryLinearStructureByNonCustomClassController : Controller
    {
        public ContentResult Index()
        {
            List<String> listString = new List<String>(){ "您好(初始赋予的),", "欢迎您(初始赋予的)!", "感谢您(初始赋予的)!" };
            listString.Add("您好(动态增加的),");
            listString.Add("欢迎您(动态增加的)!");
            listString.Add("感谢您(动态增加的)!");
            IEnumerable<String> iEnumerableString =listString.Where(num => num.IndexOf("您")>0).OrderBy(n => n);
            List<String> listAfterLinq = iEnumerableString.ToList();
            Int32 listCount=listString.Count;
            Int32 listAfterLinqCount=listAfterLinq.Count;
            String stringTemp1 = "";
            String stringTemp2= "";
            for (Int32 i=0; i <listCount; i++)
            {
                stringTemp1 = stringTemp1 + "第"+i.ToString ()+"个对象的值是:" + listString[i]+";";
            }
            for (Int32 i= 0; i<listAfterLinqCount; i++)
            {
                stringTemp2 = stringTemp2 + "第" + i.ToString() + "个对象的值是:" + listAfterLinq[i] + ";";
            }
            return this.Content("初始线性结构含有对象个数是:" + listCount.ToString() +";" + stringTemp1
               + "您还可以试验List<T>类型内置的Remove方法删除线性结构中的对象、Insert()方法在线性结构中插入对象等功能。"
               + "通过LINQ方法查询排序后的线性结构含有对象个数是(您还可以试验Sum()求和、Average()求平均、Max()求最大值、Min()求最小值等LINQ方法的强大功能,这些功能也可选择for循环语句实现,LINQ方法实现增查改删以及数据统计比for循环语句更为简单使用,也与当前数据库领域的SQL趋同):" + listAfterLinqCount.ToString() + ";" + stringTemp2
               );
        }
    }
}