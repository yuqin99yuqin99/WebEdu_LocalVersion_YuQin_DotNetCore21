#include <string>
#include <iostream>

#ifndef _TRYREFERENCEHJB_H_
#define _TRYREFERENCEHJB_H_
using namespace std;

namespace TryReferencedFirst {
	void tryFunc(string a, string b);//void tryFunc(string a, string b)的声明，用作各个void tryFunc(string a, string b)定义的接口
}
namespace TryReferencedSecond {
	int tryFunc(int a, int b); //int tryFunc(string a, string b)的声明，用作各个int tryFunc(string a, string b)定义的接口
}
namespace TryReferencedThird {
	string tryFunc(string a, string b);//string tryFunc(string a, string b)的声明，用作各个string tryFunc(string a, string b)定义的接口
}
#endif

// 第一个命名空间
namespace TryReferencedFirst {
	void tryFunc(string a, string b) { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		cout << "来自第一个名称空间:" + a + b << endl;
	}
}
// 第二个命名空间

namespace TryReferencedSecond {
	int tryFunc(int a, int b) { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：int数据类型的数据实例）
		cout << "来自第二个名称空间:" << (a + b) << endl;
		return (a * b);
	}
}


namespace TryReferencedThird {
	string tryFunc(string a, string b) { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		//cout << "来自Source_Space名称空间:" + a + b << endl;
		return(a + b);
	}
}
namespace TryReferencedFourth {
	string tryFunc(string a, string b,string c) { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		//cout << "来自Source_Space名称空间:" + a + b << endl;
		return(a + b+c);
	}
}
