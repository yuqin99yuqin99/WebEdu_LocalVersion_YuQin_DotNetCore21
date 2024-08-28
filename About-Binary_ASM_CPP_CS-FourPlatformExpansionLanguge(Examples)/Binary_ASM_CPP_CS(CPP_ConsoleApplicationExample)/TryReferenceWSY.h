#include <string>
#include <iostream>

#ifndef _TRYREFERENCEWSY_H_
#define _TRYREFERENCEWSY_H_
using namespace std;

namespace TryReferencedFirstWSY {
	void tryFunc(); //void tryFunc(string a, string b)的声明，用作各个void tryFunc(string a, string b)定义的接口
}
#endif

// 第一个命名空间
namespace TryReferencedFirstWSY {
	void tryFunc() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		const int MAXN = 10;
		int a[MAXN];
		int i=0;
		int n=0;
		cin >> n;
		for (i = 0; i < n; i++)
			cin >> a[i];
		for (i = n - 1; i >= 0; i--)
			cout << a[i] << ";";
	}
}
