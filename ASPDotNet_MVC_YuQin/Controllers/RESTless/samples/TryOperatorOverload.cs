using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;
/**
namespace EDSS.Controllers
{
    //运算符重载其实就是方法重载。首先通过指定的运算表达式调用对应的运算符方法，然后再将运算对象转化为运算符方法的实参，接着根据实参的类型来确定需要调用的函数的重载，这个过程是由编译器完成。但不是所有的运算符都可被重载，请参考C#语法手册。
    //C#虽然可以重载现有的运算符，但是不能定义新的运算符。好像F#语言支持定义新的运算符。
    public class TryOperatorOverloadController : Controller
    {

        public ContentResult Index()
        {
            String Message = String.Empty;
            TryStudent tryStudentA = new TryStudent(1, 18, "晓菜鸟");
            TryStudent tryStudentB = new TryStudent(2, 21, "博客园");
            TryStudent tryStudentC = new TryStudent(1, 23, "攻城狮");
            Message = tryStudentA.Name + (tryStudentA == tryStudentC ? "是" : "不是") + tryStudentC.Name + "<br />";
            Message += tryStudentA.Name + (tryStudentA != tryStudentB ? "不是" : "是") + tryStudentB.Name + "<br />";
            Message += tryStudentA;
            return this.Content(Message);
        }

    }

    public class TryStudent
    {
        public Int32 Id { get; set; }
        public Int32 Age { get; set; }
        public String Name { get; set; }

        public TryStudent()
        { }

        public TryStudent(Int32 id, Int32 age, String name)
        {
            this.Id = id;
            this.Age = age;
            this.Name = name;
        }

        //重载ToString(),自定义格式化输出.
        public override string ToString()
        {
            return ("编号:" + Id + "；姓名：" + Name + "；年龄：" + Age);
        }
    }

    public class Teacher
    {
        public Int32 Id { get; set; }

        public String Name { get; set; }

        public Int32 Duties { get; set; }

        //重载运算符"+"，计算两个学生的年龄总和.
        public static TryStudent operator+(TryStudent lhs, TryStudent rhs)
        {
            return new TryStudent(0, lhs.Age + rhs.Age, lhs.Name + " 和 " + rhs.Name);
        }

        //重载运算符"-"，计算两个学生的年龄差.
        public static TryStudent operator-(TryStudent lhs, TryStudent rhs)
        {
            return new TryStudent(0, Math.Abs(lhs.Age - rhs.Age), lhs.Name + " 和 " + rhs.Name);
        }

        //重载==运算符，同一Id的学生默认为同一个人.
        public static Boolean operator ==(TryStudent lhs, TryStudent rhs)
        {
            return lhs.Id == rhs.Id;
        }

        //比较运算符必须成对重载.
        public static Boolean operator !=(TryStudent lhs, TryStudent rhs)
        {
            return !(lhs == rhs);
        }
    }
}
 **/
