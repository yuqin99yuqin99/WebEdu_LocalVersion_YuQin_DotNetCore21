using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using EDSS.Controllers.TryExtendedMethodForStringTypeNamespace;//声明定义扩展方法的静态类的名称空间(不包含静态类的名称)，扩展方法将自动成为该类的方法。注意不建议轻易使用扩展方法。

namespace EDSS.Controllers
{
    public class TryClassTypeController : Controller
    {

        public ContentResult Index()
        {
            
           TryClass tryClass = new TryClass();
            var tryClassFromVarkeyWord = tryClass;
            dynamic tryClassFromDynamickeyWord = tryClass;
           
            tryClass.TryMethodWithoutReturnValue();//返回void空对象的对象的运行。
            String stringTemp = tryClass.TryMethodWithReturnValue("传入的字符串", 10);//返回非void空对象的对象的运行。
            Object tryObject1=new Object();
            Object tryObject2 = new Object();
            TryClass tryProperty = new TryClass();
            return this.Content(tryClassFromVarkeyWord.GetType().ToString() + ";" + tryClassFromDynamickeyWord.GetType().ToString() + ";new" );
        }
        public ContentResult TryPropertyIndexer()
        {
            TryPropertyIndexer tryPropertyIndexer = new TryPropertyIndexer();
          /**tryPropertyIndexer[0] = "马克-吐温";
            tryPropertyIndexer[1] = "Crox出版公司";
            tryPropertyIndexer[2] ="汤姆-索亚历险记" ;**/
            return this.Content(tryPropertyIndexer["Title"] + "、" + tryPropertyIndexer["Author"] + "、" + tryPropertyIndexer["Publisher"] +"、"+ tryPropertyIndexer[0] + "、" + tryPropertyIndexer[1] + "、" + tryPropertyIndexer[2]);
        }

        public ContentResult TryEventProperty()
        {
            //由于事件属性与委托紧密相关，请参见TryDelegateType_Event.cs
            return this.Content("由于事件属性与委托紧密相关，请参见TryDelegateType_Event.cs");
        }             
       
        public ContentResult TryAnoymousMethodLambdaExpressionDelegateType()
        {
           //由于匿名方法、Lambda表达式与委托紧密相关，请参见TryDelegateType.cs
            return this.Content("由于匿名方法、Lambda表达式与委托紧密相关，请参见TryDelegateType.cs");
        }             
       
        public ContentResult TryExtendedMethodForStringType()
        {
            String stringX = "1234";
            return this.Content(stringX.ToInt32(true).ToString() + "、"+stringX.ToInt32(false).ToString()); 
        }

        public ContentResult TryTypeAndInstanceDetermination()
        {
            Type type1 = typeof(Int32);

            Int32 i = 0;
            Type type2 = i.GetType();

            return this.Content(type1.ToString() + "、" + type2.ToString()+ "、"+(type1 is Type) +"、"+(1 is Int32));
        }
    }
    
    internal class TryClass :Object
    {
        internal String Id { set; get; }
        internal String NameTemp { set; get; }
        internal String Name
        {
            set
            {
                if (value.Length <= 9){ NameTemp = value; }
                else { NameTemp = "不允许超过9个字符"; }
            }
            get { return NameTemp; }
        }
        internal String tryProperty { set; get; }

        internal void TryMethodWithoutReturnValue()
        {
            this.tryProperty = "方法操作tryProperty属性";
            return;
        }
        internal String TryMethodWithReturnValue(String stringFormalParameter, Int32 int32FormalParameter)
        {
            return (stringFormalParameter + int32FormalParameter.ToString());
        }
        internal TryClass()
        {
            this.NameTemp= "请输入姓名";            
        }
        internal  TryClass(String NameTemp)
        {
            this.NameTemp = NameTemp;           
        }
         ~TryClass()
        {
            ;
        }
    }
    class TryPropertyIndexer//类索引器只能有一个如this[int i]但可以重载，如this[string name].如你的要求把姓名,籍贯写成索引器，只能把属性声明为数组。获取用getName(int index)形式表达
    {
        /** private String[] data=new String[6] ;
         data[0]="马克-吐温" ;
         data[1]="Crox出版公司" ;
         data[2]="汤姆-索亚历险记";**/
       private String[] data = new String[6]{ "马克-吐温","Crox出版公司","汤姆-索亚历险记","","",""};
       private String[] keys = new String[6] { "Author", "Publisher", "Title", "Subject", "ISBN", "Comments" };

        //注：程序中用了两种方法来索引：一是整数，二是字符串（关键词名）
        public String this[Int32 indexer]
        {
            set
            {
                if (indexer >= 0 && indexer < data.Length)
                    data[indexer] = value;
            }
            get
            {
                if (indexer >= 0 && indexer < data.Length)
                    return data[indexer];
                return null;
            }
        }
        public String this[String key]
        {
            set
            {
                Int32 indexer = FindKey(key);
                this[indexer] = value;
            }
            get
            {
                return this[FindKey(key)];
            }
        }
        private Int32 FindKey(String key)
        {
            for (Int32 i = 0; i < keys.Length; i++)
                if (keys[i] == key) return i;
            return -1;
        }
    }

    namespace TryExtendedMethodForStringTypeNamespace
    {
        public static class TryExtendedMethodForStringType
        {
            /// <summary>
            /// 这是为System.String类自定义一个扩展方法的示例，不建议使用于产力环境！！！
            /// </summary>
            /// <remarks>必须声明为static，方法的第一个参数必须使用this关键字指定要使用扩展方法的现有类型，在此为System.String类型</remarks>
            /// <remarks>在此的"stringX"不应该作为参数进行文档注释</remarks>
            /// <param name="boolean1">传入参数指定是否转换</param>
            /// <param name="otherParam">其他需要文档注释的参数</param>
            public static Int32 ToInt32(this String string1,Boolean  boolean1)
            {
                if(boolean1)
                return Int32.Parse(string1);
                else
                return -1;
            }
        }
    }
}
