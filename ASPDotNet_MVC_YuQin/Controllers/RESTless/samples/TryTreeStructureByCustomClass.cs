using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
//using System.Web.Mvc;

namespace EDSS.Controllers.TryTreeStructureByCustomClass
{
    public class TryTreeStructureByCustomClassController : Controller
    {
        public ContentResult Index()
        {
            Node<String> root = new Node<String>("A");
            root.children.Add(new Node<String>("B"));
            root.children.Add(new Node<String>("C"));
            root.children.Add(new Node<String>("D"));
            root.children[0].children.Add(new Node<String>("B1"));
            root.children[1].children.Add(new Node<String>("C1"));
            root.children[1].children.Add(new Node<String>("C2"));
            root.children[2].children.Add(new Node<String>("D1"));
            root.children[2].children.Add(new Node<String>("D2"));
            String stringTempRoot = "";

            if (root.children.Count != 0)
            {
                foreach (Node<String> node in root.children)
                {
                    stringTempRoot = stringTempRoot + node.Name + "、";
                }
            }

            String stringTempRootNextHierarchy = "";

            foreach (Node<String> node in root.children)
            {
                foreach (Node<String> nodeTemp in node.children)
                {
                    stringTempRootNextHierarchy = stringTempRootNextHierarchy + nodeTemp.Name + "、";
                }

            }
            return this.Content(
                "根对象是:" + root.Name + ";根对象" + root.Name + "下一层次包含的对象有:" + stringTempRoot
               + ";再下一层次包含的对象有:" + stringTempRootNextHierarchy + ";"

                );
        }
    }


    public class Node<T>
    {
        public T Name { set; get; }
        public List<Node<T>> children = new List<Node<T>>();
        public Node(T value)
        {
            this.Name = value;
        }
    }
}
