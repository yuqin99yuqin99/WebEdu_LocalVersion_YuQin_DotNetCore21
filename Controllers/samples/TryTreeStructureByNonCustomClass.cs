using System;
using System.Collections.Generic;
using System.IO;
using System.Xml;
using System.Web.Mvc;

namespace EDSS.Controllers.TryTreeStructureByNonCustomClass
{
    public class TryTreeStructureByNonCustomClassController : Controller
    {
        public ContentResult Index()
        {
           
    XmlDocument xmlDocment = new XmlDocument();
    xmlDocment.LoadXml("<Element1>A<Element2>B<Element5>B1</Element5></Element2><Element3>C<Element6>C1</Element6><Element7>C2</Element7></Element3><Element4>D<Element8>D1</Element8><Element9>D2</Element9></Element4></Element1>");
    XmlElement root = xmlDocment.DocumentElement;
    String stringTempRoot = "";
    if (root.ChildNodes.Count != 0)
            {
                foreach (XmlNode node in root.ChildNodes)
                {
                    stringTempRoot = stringTempRoot + node.InnerText + "、";
                }
            }

            String stringTempRootNextHierarchy = "";

            foreach (XmlNode node in root.ChildNodes)
            {
                foreach (XmlNode nodeTemp in node.ChildNodes)
                {
                    stringTempRootNextHierarchy = stringTempRootNextHierarchy + nodeTemp.InnerText + "、";
                }

            }
            return this.Content(
                "根对象的值是:" + root.InnerText + ";根对象的下一层次包含的对象的值分别是:" + stringTempRoot
               + ";再下一层次对象的值分别是:" + stringTempRootNextHierarchy + ";"

                );
        }
        }
    }