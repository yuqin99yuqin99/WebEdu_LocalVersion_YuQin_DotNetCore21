using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace EDSS.Controllers
{
    public class TryMyInterfaceTypeController : Controller
    {
        public ContentResult Index(){
            MyClassImp myClassImp = new MyClassImp();

           return this.Content(myClassImp.PrinterName());
        }
    }
    public class TryInterfaceTypeController : Controller
    {

        public ContentResult Index()
        {
            // String stringTemp="";
            //String PrintName = "HP";
            String PrintName = "Epson";
            // String PrintName = "";
            if (PrintName == "HP")
            {

                HPPrinter concretePrinter = new HPPrinter();//IPrinter concretePrinter = new HPPrinter();
                Printer concretePrinterPartFromPrinter = new HPPrinter();
                IPrinter concretePrinterPartFromIPrinter = new HPPrinter();
                IPrinterName concretePrinterPartFromIPrinterName = new HPPrinter();
                DescendsHPPrinter descendsHPPrinter = new DescendsHPPrinter();
                //stringTemp = concretePrinter.PrinterName() + ";" + concretePrinter.PrintPreview() + ";" + concretePrinter.Print();
                return this.Content(
                    concretePrinter.Notation() + ";" + concretePrinter.PrinterName() + ";" + concretePrinter.PrintPreview() + ";" + concretePrinter.Print()
                    + "|" + concretePrinterPartFromPrinter.Notation() + "|" + concretePrinterPartFromIPrinterName.PrinterName() + "|" + concretePrinterPartFromIPrinter.PrintPreview() + "|" + concretePrinterPartFromIPrinter.Print()
                    + "*" + descendsHPPrinter.Notation() + "*" + descendsHPPrinter.PrinterName() + "*" + descendsHPPrinter.PrintPreview() + "*" + descendsHPPrinter.Print() + "*" + descendsHPPrinter.Hi()
                     + "$" + IPrinter.ReferenceEquals(concretePrinterPartFromPrinter, concretePrinterPartFromPrinter) + "$" + (concretePrinterPartFromIPrinter is object)
                    );
            }

            else if (PrintName == "Epson")
            {
                EpsonPrinter concretePrinter = new EpsonPrinter();//IPrinter concretePrinter = new EpsonPrinter();
                                                                  // stringTemp = concretePrinter.PrinterName() + ";" + concretePrinter.PrintPreview() + ";" + concretePrinter.Print();
                Printer concretePrinterPartFromPrinter = new DescendsEpsonPrinter();
                IPrinter concretePrinterPartFromIPrinter = new DescendsEpsonPrinter();
                IPrinterName concretePrinterPartFromIPrinterName = new DescendsEpsonPrinter();
                DescendsEpsonPrinter descendsEpsonPrinter = new DescendsEpsonPrinter();
                // String stirngNow = (new Printer()).Notation() + ";"+stringTemp;
                return this.Content(
                    concretePrinter.Notation() + ";" + concretePrinter.PrinterName() + ";" + concretePrinter.PrintPreview() + ";" + concretePrinter.Print()
                    + "|" + concretePrinterPartFromPrinter.Notation() + "|" + concretePrinterPartFromIPrinterName.PrinterName() + "|" + concretePrinterPartFromIPrinter.PrintPreview() + "|" + concretePrinterPartFromIPrinter.Print()
                    + "*" + descendsEpsonPrinter.Notation() + "*" + descendsEpsonPrinter.PrinterName() + "*" + descendsEpsonPrinter.PrintPreview() + "*" + descendsEpsonPrinter.Print() + "*" + descendsEpsonPrinter.Hi()
                    + "$" + IPrinter.ReferenceEquals(concretePrinterPartFromPrinter, concretePrinterPartFromPrinter) + "$" + (concretePrinterPartFromIPrinter is object)
                    );
            }
            else
            {
                return this.Content("没发现连接有打印机！");
            }
        }
    }


    public class Printer
    {
        public String Notation()
        {
            return ("在此是接口类型被类类型多重履行,即,接口类型被类类型多重契约式扩展的示例");
        }
    }

    public interface IPrinterName //声明定义interface类型，名称是IPrinterName
    {
        String PrinterName();
    }
    public class MyClassImp:IPrinterName //履行IPrinterName这个interface类型
    {
      public String PrinterName()
        {
           return("HP") ;
        }
    }
    //interface IPrint
    public interface IPrinter
    {
        String PrintPreview();
        String Print();
    }
    //interface IPrinter2 : IPrinter, IPrinterName        { }

    public class HPPrinter : Printer, IPrinter, IPrinterName// public class HPPrinter : Printer, IPrinter//类继承在前（只能一个，即单重继承树），接口在后（可以多个，即多重继承树）//此部分可以分发给HP公司的人,履行接口中的属性方法声明进行自主定义，编写源码并编译为.dll。自己项目引用该.dll，自己的现有代码不用修改就可正确调用该.dll的功能，实现了类的契约式回调后代的扩展（在此也是开发者容变合作）(还可实现已有父类的类的功能的契约式回调后代的扩展)。父代的类接口中所有属性方法只声明不定义，子代的类中继承所有声明实施所有定义。这种方式的特点就是可以父代类接口中事先进行属性方法的声明，子代类中后发进行属性方法的定义（相对于属性方法声明定义同时进行的机制来说，属性方法的具体功能的容变性增强、属性方法进行定义的时间空间的容变性增强），子类只能继承一个父类的同时还可继承多个父类接口（相对于子类只能继承一个父类的机制来说，属性方法允许继承的父代的容变性增强）。
    {
        public String PrinterName()
        {
            return "HP";
        }


        public String PrintPreview()
        {
            return ("这里需要HP打印机打印预览的真正代码！");
        }

        public String Print()
        {
            return ("这里扩展HP打印机打印的真正代码！");
        }
        public Int32 TypeNumber { get; set; }//自身可以拓展属性方法。
    }

    public class DescendsHPPrinter : HPPrinter
    {
        public String Hi() { return "hiDescendsHPPrinter"; }
    }
    public class DescendsEpsonPrinter : EpsonPrinter
    {
        public String Hi() { return "hiDescendsEpsonPrinter"; }
    }
    public class EpsonPrinter : Printer, IPrinter, IPrinterName// public class EpsonPrinter : Printer, IPrinter//类继承在前（只能一个，即单重继承树），接口在后（可以多个，即多重继承树）////此部分可以分发给Epson公司的人，履行接口中的属性方法声明进行自主定义，编写源码并编译为.dll，自己项目引用该.dll，自己的现有代码不用修改就可正确调用该.dll的功能，实现了类的契约式回调后代的扩展（在此也是开发者容变合作）(还可实现已有父类的类的功能的契约式回调后代的扩展)。

    {
        public String PrinterName()
        {
            return "Epson";
        }
        public String PrintPreview()
        {
            return ("这里需要Epson打印机打印预览的真正代码！");
        }

        public String Print()
        {
            return ("这里需要Epson打印机打印的真正代码！");
        }
        public Int32 TypeNumber { get; set; }//自身可以拓展属性方法。
    }


    public class TryStructureTypeController : Controller
    {

        public ContentResult Index()
        {
            //TryStructure tryStructure = new TryStructure(10, "结构类型的属性默认值示例");
            TryStructure tryStructure = new TryStructure();
            tryStructure.TryStructureAutoProperty = 1;
            return this.Content(tryStructure.TryStructureAutoProperty.ToString() + ";" + tryStructure.TryStructureMethod() + ";"
                + (tryStructure is ValueType).ToString());
        }
    }
    internal struct TryStructure
    // internal class TryStructure:ValueType
    //此部分代码建议转化为internal class TryStructure:ValueType进行理解，有利于理解结构类型（在此是TryStructure）乃是由System.Objecet←System.ValueType方式继承扩展而来的特殊类类型，因为结构类型的父类是System.ValueType，所以结构类型属于拷贝类型，而且不允许被进一步继承扩展。因此比相应的类类型更加体现性能优势。
    {
        public Int32 TryStructureAutoProperty { get; set; }
        public String TryStructureAutoPropertyTemp { get; set; }
        public String TryStructureNunAutoProperty
        {
            get
            {
                if (this.TryStructureAutoPropertyTemp.Length <= 6) { return this.TryStructureAutoPropertyTemp; }
                else { return "字符数不允许超过6个"; }
            }
            set
            {
                if (value.Length <= 6) { this.TryStructureAutoPropertyTemp = value; }
                else { this.TryStructureAutoPropertyTemp = "字符数不允许超过6个"; }
            }
        }
        public String TryStructureMethod()
        {
            return "结构类型的方法示例,此处可以添加复杂的代码";
        }
        //public TryStructure(Int32 int32Para,String stringPara)//struct不能有无参数的构造方法!
        //{
        // this.TryStructureAutoProperty =10;
        //this.TryStructureAutoPropertyTemp = "结构类型的属性默认值示例";
        //TryStructureAutoProperty = int32Para;
        //TryStructureAutoPropertyTemp = stringPara;
        //}
    }

    public class TryEnumerationTypeController : Controller
    {

        public ContentResult Index()
        {
            //TryEnumWeekDays tryEnumWeekDays = new TryEnumWeekDays();//未知结果。
            return this.Content(
                TryEnumWeekDays.Sunday.ToString() + "是" + ((Int32)TryEnumWeekDays.Sunday).ToString()
                + ";" + TryEnumWeekDays.Monday.ToString() + "是" + ((Int32)TryEnumWeekDays.Monday).ToString()
                + ";" + TryEnumWeekDays.Tuesday.ToString() + "是" + ((Int32)TryEnumWeekDays.Tuesday).ToString()
                + ";" + TryEnumWeekDays.Wednesday.ToString() + "是" + ((Int32)TryEnumWeekDays.Wednesday).ToString()
                + ";" + TryEnumWeekDays.Thursday.ToString() + "是" + ((Int32)TryEnumWeekDays.Thursday).ToString()
                + ";" + TryEnumWeekDays.Friday.ToString() + "是" + ((Int32)TryEnumWeekDays.Friday).ToString()
                + ";" + TryEnumWeekDays.Saturday.ToString() + "是" + ((Int32)TryEnumWeekDays.Saturday).ToString()
            );
        }
    }
    internal enum TryEnumWeekDays { Sunday = 0, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } //此部分代码建议转化为internal class TryEnumWeekDays:Enum进行理解，有利于理解枚举类型（在此是TryEnumWeekDays）乃是由System.Objecet←System.ValueType←System.Enum方式继承扩展而来的特殊类类型，因为枚举类型的父类是System.Enum，所以枚举类型继承了System.Enum类型的一切特点，同时，因为枚举类型的父父类是System.ValueType，所以属于拷贝类型，而且不允许被进一步继承扩展。 

    public class TryDelegateTypeController : Controller
    {
        //String stringTempForActionDelegateFromLambdaExpression = "";
        //String stringTempForActionDelegateFromLambdaExpressionOnlyLambdaExpression = "";
        // String stringTempForActionDelegateFromAnoymousMethod = "";
        // String stringTempForActionDelegateFromAnoymousMethodOnlyAnoymousMethod = "";

        public ContentResult TryDelegateFromAnoymousMethodLambdaExpression()//基于匿名方法、Lambda表达式创建的委托示例
        {
            String stringTempForActionDelegateFromLambdaExpression = "";
            //String stringTempForActionDelegateFromLambdaExpressionOnlyLambdaExpression = "";
            // String stringTempForActionDelegateFromAnoymousMethod = "";
            // String stringTempForActionDelegateFromAnoymousMethodOnlyAnoymousMethod = "";

            Func<String, String> funcDelegateFromLambdaExpression = new Func<String, String>((String stringX) => { return stringX + "当前传入的参数是" + stringX.GetType().Name + "类型的stringX对象"; });
            Func<String, String> funcDelegateFromLambdaExpressionOnlyLambdaExpression = (String stringX) => { return stringX + "当前传入的参数是" + stringX.GetType().Name + "类型的stringX对象"; };
            Func<String, String> funcDelegateFromAnoymousMethod = new Func<String, String>(delegate (String stringX) { return stringX + "当前传入的参数是" + stringX.GetType().Name + "类型的stringX对象"; });
            Func<String, String> funcDelegateFromAnoymousMethodOnlynAnoymousMethod = delegate (String stringX) { return stringX + "当前传入的参数是" + stringX.GetType().Name + "类型的stringX对象"; };//匿名方法
            String stringTemp = funcDelegateFromAnoymousMethodOnlynAnoymousMethod("我是HJB");

            Action<String> actionDelegateFromLambdaExpression = new Action<String>((String stringY) => { stringTempForActionDelegateFromLambdaExpression = "这是基于Lambda表达式实例化的具有一个参数无返回值的委托类型对象的运行结果" + ";当前传入的参数是" + stringY.GetType().Name + "类型的stringY对象"; });
            actionDelegateFromLambdaExpression("");
            //Action<T>系列也有上述 Func<T, T>系列的语法演变，在此省略。

            Func<String, string> funcDelegateFromLambdaExpressionLink = funcDelegateFromLambdaExpression + funcDelegateFromLambdaExpression - funcDelegateFromLambdaExpression;

            return Content(funcDelegateFromLambdaExpression(";new!!!!!!!!!!!!!!!!!!!!!1这是基于Lambda表达式实例化的具有一个参数一个返回值的委托类型对象的运行结果") + "。" + stringTempForActionDelegateFromLambdaExpression + "。" + funcDelegateFromLambdaExpressionLink("这是委托类型对象通过+-运算而实现委托链连接与截断的测试") + "。");
        }
        public ContentResult TryDelegateFromNamedMethod()//基于命名方法创建的委托示例
        {
            Customer customer = new Customer();
            Customer customer2 = new Customer();
            Func<Int32> func = new Func<Int32>(customer.Test);//注意只使用方法名称，无()
            Func<Int32> func2 = new Func<Int32>(customer2.Test);//注意只使用方法名称，无()
            List<Customer> customList = new List<Customer>();
            customList.Add(new Customer() { ID = 1 });
            customList.Add(new Customer() { ID = 5 });
            // customList.First(new Func<Customer, bool>(delegate(Customer x) { return x.ID == 5; })); //预定义方法，而是即时定义匿名方法的委托对象化。所有语句将上述类中的public static bool Test(Customer x) { return x.ID == 5; }这一方法的预定义代码可省略，而转移到了下述语句中,即在需要时即时编写代码使用。与以下简化代码获得同样代码：custs.First(new Func<Customer, bool>((Customer x) => x.ID == 5)); custs.First(delegate(Customer x) { return x.ID == 5; }); custs.First((Customer x) => x.ID == 5); custs.First(x => x.ID == 5); 
            return Content(func().ToString() + "、" + func2().ToString());
        }
    }
    class Customer
    {
        public Int32 ID { get; set; }
        public static Int32 Test(Customer customer) { return customer.ID; }
        public Int32 Test(Int32 int32) { return int32; }
        public Int32 Test() { return 3; }
    }



    public class TryAttributeTypeController : Controller
    {

        public ContentResult Index()
        {
            Try2Attribute try2Attribute = new Try2Attribute("", "");

            //Assembly executingAssembly = Assembly.GetExecutingAssembly();
            //Type try2AttributeType = executingAssembly.GetType(try2Attribute.GetType().ToString());//这是通过反射获取特性类型的方式，需要时可选用。

            System.Attribute[] attributeArray = System.Attribute.GetCustomAttributes(typeof(TryClass1));  // reflection
            String sStringTemp = "";
            foreach (Attribute attribute in attributeArray)
            {
                if (attribute is Try1Attribute)
                {
                    Try1Attribute try1Attribute = (Try1Attribute)attribute;
                    sStringTemp = sStringTemp + (try1Attribute.stringSoftwareName + "、" + try1Attribute.stringSoftwareVersion + "、" + try1Attribute.stringComment + "、" + try1Attribute.LastModificationDate);
                }
            }
            return this.Content(sStringTemp);
        }
    }



    [AttributeUsageAttribute(AttributeTargets.Class | AttributeTargets.Assembly | AttributeTargets.Property | AttributeTargets.ReturnValue, AllowMultiple = true, Inherited = false)]
    public class Try1Attribute : Attribute //开始定义一个特性类型
    {

        public string stringSoftwareName { set; get; }
        public string stringSoftwareVersion { set; get; }
        public string stringComment { set; get; }
        public string LastModificationDate { set; get; }

        public Try1Attribute(String stringSoftwareName, String stringSoftwareVersion)//构造方法
        {
            this.stringSoftwareName = stringSoftwareName;
            this.stringSoftwareVersion = stringSoftwareVersion;
        }
    }

    [AttributeUsageAttribute(AttributeTargets.All, AllowMultiple = true, Inherited = false)]
    public class Try2Attribute : Attribute
    {

        public string TesterName { set; get; }
        public string stringTestComment { set; get; }


        public Try2Attribute(String TesterName, String stringTestComment)
        {
            this.TesterName = TesterName;
            this.stringTestComment = stringTestComment;
        }
    }

    [Try1Attribute("jbhuang99", "1.0", stringComment = "Under Developing", LastModificationDate = "14/01/01")]

    [Try2Attribute("jbhuang99", "Under Testing")]
    public class TryClass1 // 本类使用了Try1Attribute、Try2Attribute两个特性
    {
    }
    [Try1Attribute("syw", "1.0", stringComment = "Under Developing", LastModificationDate = "14/01/01")]
    [Try2Attribute("syw", "Under Testing")]
    public class TryClass2 // 本类使用了Try1Attribute、Try2Attribute两个特性
    {
        String StringTemp { get; set; }
        String GetStringMethod()
        {
            return "";
        }
    }

}
