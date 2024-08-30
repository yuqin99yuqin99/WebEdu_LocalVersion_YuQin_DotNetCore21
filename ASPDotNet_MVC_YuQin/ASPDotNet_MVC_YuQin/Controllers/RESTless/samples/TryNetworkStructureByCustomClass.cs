using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
//using System.Web.Mvc;

namespace EDSS.Controllers.TryNetworkStructureByCustomClass
{
    public class TryNetworkStructureByCustomClassController : Controller
    {

        public ContentResult Index()
        {
            NetworkStructure<String> networkStructure = new NetworkStructure<String>(4);
            //添加顶点
            networkStructure.AddVertex("A");
            networkStructure.AddVertex("B");
            networkStructure.AddVertex("C");
            networkStructure.AddVertex("D");
            //添加边
            networkStructure.AddEdge("A", "B");
            networkStructure.AddEdge("A", "C");
            networkStructure.AddEdge("A", "D");
            networkStructure.AddEdge("B", "C");
            //遍历所有顶点和边
            string stringTemp = "";
            foreach (NetworkStructure<String>.Vertex<String> vertex in networkStructure.vertexs)
            {
                stringTemp = stringTemp + vertex.Value.ToString() + ":";
                if (vertex.FirstEdge != null)
                {
                    NetworkStructure<String>.Node nodeTemp = vertex.FirstEdge;
                    while (nodeTemp != null)
                    {
                        stringTemp = stringTemp + nodeTemp.AdjacentVertex.Value.ToString();
                        nodeTemp = nodeTemp.Next;
                    }
                }
                stringTemp= stringTemp+"; ";
            }
            return this.Content(stringTemp);           
        }
    }

    public class NetworkStructure<T>
    {
        public class Node
        {
            public Vertex<T> AdjacentVertex { set; get; }//相邻顶点
            public Node Next { set; get; } //引用下一个相邻顶点
            public Node(Vertex<T> vertex)
            {
                AdjacentVertex = vertex;
            }
        }
        public class Vertex<TValue>
        {
            public TValue Value { set; get; } //顶点的值
            public Node FirstEdge { set; get; } //边
            public Boolean Visited { set; get; }//网状结构遍历时用来存储是否已遍历过一次的信息
            public Vertex(TValue value)
            {
                this.Value = value;
            }
        }
        public List<Vertex<T>> vertexs { set; get; } //网状结构的顶点集合，也即顶点的线性结构。这正体现了网状结构是线性结构的复杂化。
        public NetworkStructure(Int32 vertexs)
        {
            this.vertexs = new List<Vertex<T>>(vertexs);
        }
        public void AddVertex(T vertex) //网状结构中添加一个顶点
        {
            if (Contains(vertex))
            {
                throw new ArgumentException("插入了重复的顶点！");
            }
            vertexs.Add(new Vertex<T>(vertex));
        }
        public void AddEdge(T from, T to) //添加无向边
        {
            Vertex<T> fromVertex = Find(from); //找到起始顶点
            if (fromVertex == null)
            {
                throw new ArgumentException("起始顶点并不存在！");
            }
            Vertex<T> toVertex = Find(to); //找到结束顶点
            if (toVertex == null)
            {
                throw new ArgumentException("结束顶点并不存在！");
            }
            //无向边的两个顶点都需记录边信息
            AddDirectedEdge(fromVertex, toVertex);
            AddDirectedEdge(toVertex, fromVertex);
        }
        public Boolean Contains(T vertex) //查找网状结构中是否包含某顶点
        {
            foreach (Vertex<T> vertexTemp in vertexs)
            {
                if (vertexTemp.Value.Equals(vertex))
                {
                    return true;
                }
            }
            return false;
        }
        private Vertex<T> Find(T vertex) //查找并返回网状结构中的指定顶点
        {
            foreach (Vertex<T> vertexTemp in vertexs)
            {
                if (vertexTemp.Value.Equals(vertex))
                {
                    return vertexTemp;
                }
            }
            return null;
        }
        //添加有向边
        private void AddDirectedEdge(Vertex<T> fromVertex, Vertex<T> toVertex)
        {
            if (fromVertex.FirstEdge == null) 
            {
                fromVertex.FirstEdge = new Node(toVertex);
            }
            else
            {
                Node nodeTemp = fromVertex.FirstEdge;
                Node node = fromVertex.FirstEdge;
                do
                {
                    if (node.AdjacentVertex.Value.Equals(toVertex.Value))
                    {
                        throw new ArgumentException("添加了重复的边！");
                    }
                nodeTemp = node;
                    node = node.Next;
                } while (node != null);
                nodeTemp.Next = new Node(toVertex); 
            }
        }
    }
}