using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace EDSS.Controllers
{
    public class TrySwitchController : Controller
    {

        public ContentResult Index()
        {
            Int32 int32Number = new Int32();
            int32Number = 2;
            switch (int32Number)
            {
                case 0: { return this.Content("星期天"); }
                case 1: { return this.Content("星期一"); }
                case 2: { return this.Content("星期二"); }
                case 3: { return this.Content("星期三"); }
                case 4: { return this.Content("星期四"); }
                case 5: { return this.Content("星期五"); }
                case 6: { return this.Content("星期六"); }
                default: { return this.Content("没有这样的星期日子"); }
            }

        }
        // 上述面向基础类型对象匹配。下述复杂类型对象匹配（有时又称为模式匹配！实现数据与运算分开（面向对象的类型则属性与方法封装））。下述示例使用模式匹配语句匹配只有属性的各个类型，统一定义一个类方法（这与属性与方法封装在一起，通过生成类层次结构和创建虚方法和重写方法，有所不同）,非常迎合云端多源数据的整合处理需求。
        public ContentResult Index2()
        {
            return Content(ComputeArea_Version5(new Circle(3)).ToString());
        }
            public  double ComputeArea_Version5(object shape)
        {
            //比如下代码更优雅
            /**
            if (shape is Square s)
                return s.Side * s.Side;
            else if (shape is Circle c)
                return c.Radius * c.Radius * Math.PI;
            else if (shape is Rectangle r)
                return r.Height * r.Length;
            throw new ArgumentException(
        message: "shape is not a recognized shape",
        paramName: nameof(shape));
    **/
            switch (shape)
            {
                case Square s when s.Side == 0:
                case Circle c when c.Radius == 0:
                case Triangle t when t.Base == 0 || t.Height == 0:
                case Rectangle r when r.Length == 0 || r.Height == 0:
                    return 0;

                case Square s:
                    return s.Side * s.Side;
                case Circle c:
                    return c.Radius * c.Radius * Math.PI;
                case Triangle t:
                    return t.Base * t.Height / 2;
                case Rectangle r:
                    return r.Length * r.Height;
                case null:
                    throw new ArgumentNullException(paramName: nameof(shape), message: "Shape must not be null");
                default:
                    throw new ArgumentException(
                        message: "shape is not a recognized shape",
                        paramName: nameof(shape));
            }
        }
    }
    public class Square
    {
        public double Side { get; }

        public Square(double side)
        {
            Side = side;
        }
    }
    public class Circle
    {
        public double Radius { get; }

        public Circle(double radius)
        {
            Radius = radius;
        }
    }
    public struct Rectangle
    {
        public double Length { get; }
        public double Height { get; }

        public Rectangle(double length, double height)
        {
            Length = length;
            Height = height;
        }
    }
    public class Triangle
    {
        public double Base { get; }
        public double Height { get; }

        public Triangle(double @base, double height)
        {
            Base = @base;
            Height = height;
        }
    }

}
