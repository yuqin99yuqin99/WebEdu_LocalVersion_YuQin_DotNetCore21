using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace EDSS.Controllers
{
    public class TryLinearStructureByCustomClassController : Controller
    {

        public ContentResult Index()
        {
            LinkList<String> linkListString=new LinkList<string>();
            linkListString.Add("您好,");
            linkListString.Add("欢迎您!");
            linkListString.Add("感谢您!");
            return this.Content("当前链表式线性结构含有对象个数是:"+linkListString.Count().ToString()
                +";"+"第一个对象的值是:"+linkListString.GetElem(0)
                + ";" + "第二个对象的值是:" + linkListString.GetElem(1)
                + ";" + "第三个对象的值是:" + linkListString.GetElem(2)
                + ";" + "您还可以试验linkList.Delete()方法删除线性结构中的对象等功能"
                 + ";" + "您还可以尝试为linkList定义更多的属性方法,实现更多的线性结构功能"
                );
        }
    }

    public class Node<T>//线性结构中对象的类型
    {
        private T DataTemp { set; get; } //临时的自身.构造方法为其赋值,然后可转换为Data.
        private Node<T> NextTemp { set; get; } //临时的引用后一对象.构造方法为其赋值,然后可转换为Next
        public T Data//自身
        {
            get { return DataTemp; }
            set { DataTemp = value; }
        }
        public Node<T> Next//引用后一对象
        {
            get { return NextTemp; }
            set { NextTemp = value; }
        }
        public Node(T data, Node<T> next)//构造方法(既有自身,又有引用后一对象)
        {
            this.DataTemp = data;
            this.NextTemp = next;
        }

        public Node(T data)//构造方法(只有自身,没有引用后一对象)
        {
            this.DataTemp= data;
            this.NextTemp= null;
        }
        public Node()//构造方法(只有默认的自身,没有引用后一对象)
        {
            this.DataTemp = default(T);
            this.NextTemp = null;
        }
    }

       public class LinkList<T> //线性结构
    {
        private Node<T> HeadTemp { set; get; } //临时的线性结构头.构造方法为其赋值,然后可转换为Head.
        public Node<T> Head
        {
            get{  return HeadTemp; }
            set{ HeadTemp = value;}
        }

        public LinkList()//构造方法 
        {
            HeadTemp = null;
        }
        public Int32 Count()
        {
            Node<T> p = HeadTemp;
            Int32 len = 0;
            while (p != null)
            {
                ++len;
                p = p.Next;
            }
            return len;
        }
        public void Clear() //清空线性结构
        {
            HeadTemp = null;
        }

        public bool IsEmpty() //判断线性结构是否为空 
        {
            if (HeadTemp == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Add(T item)//在线性结构的末尾添加新对象 
        {
            Node<T> q = new Node<T>(item);
            Node<T> p = new Node<T>();
            if (HeadTemp == null)
            {
                HeadTemp = q;
                return;
            }
            p = HeadTemp;
            while (p.Next != null)
            {
                p = p.Next;
            }


            p.Next = q;
        }


        public void Insert(T item, Int32 i)//在线性结构的第i个结点的位置前插入一个值为item的对象 
        {
            if (IsEmpty() || i < 1)
            {
                return; 
            }
            if (i == 1)
            {
                Node<T> q = new Node<T>(item);
                q.Next = HeadTemp;
                HeadTemp = q;
                return;
            }
            Node<T> p = HeadTemp;
            Node<T> r = new Node<T>();
            Int32 j = 1;
            while (p.Next != null && j < i)
            {
                r = p;
                p = p.Next;
                ++j;
            }

            if (j == i)
            {
                Node<T> q = new Node<T>(item);
                q.Next = p;
                r.Next = q;
            }
        }

        public T Delete(Int32 i)//删除线性结构中的第i个对象
        {
            if (IsEmpty() || i < 0)
            {
               return default(T);
            }
            Node<T> q = new Node<T>();
            if (i == 1)
            {
                q = HeadTemp;
                HeadTemp = HeadTemp.Next;
                return q.Data;
            }
            Node<T> p = HeadTemp;
            Int32 j = 1;
            while (p.Next != null && j < i)
            {
                ++j;
                q = p;
                p = p.Next;
            }
            if (j == i)
            {
                q.Next = p.Next;
                return p.Data;
            }
            else
            {
                return default(T);
            }
        }


        public T GetElem(Int32 iTemp) //获得线性结构中的第i个对象
        {
            Int32 i = 0;
            i = iTemp+1;
            if (IsEmpty())
            {
                return default(T); 
            }
            Node<T> p = new Node<T>();
            p = HeadTemp;
            Int32 j = 1;
            while (p.Next != null && j < i)
            {
                ++j;
                p = p.Next;
            }
            if (j == i)
            {
                return p.Data;
            }
            else
            {
                return default(T);
            }
        }
    }

}