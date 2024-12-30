#include <iostream>
#include <string>

using namespace std;

const int MAXN = 100001;

namespace liuzhenbin
{
	void func5_1() //void tryFunc(string a, string b)的声明，用作各个void tryFunc(string a, string b)定义的接口
	{
		const int MAXN = 10000;
		
			int a[MAXN]; // 定义 10000 个数组元素
			int i, n;
			cin >> n;               // 读入输入数据个数
			for (i = 0; i < n; i++) // 读入 n 个数据存入 a[0]~a[n-1]数组变量中
				cin >> a[i];
			for (i = n - 1; i >= 0; i--) // 倒序输出数组变量内容
				cout << a[i] << "";
		
	}
	void func5_2()
	{
		int a[20]; // 定义 20 个数组元素
		int i;
		a[0] = 0;                // 数列第 1 项初值
		a[1] = 1;                // 数列第 2 项初值
		for (i = 2; i < 20; i++) // 求数列的第 3~20 项
			a[i] = a[i - 2] + a[i - 1];
		for (i = 19; i >= 0; i--) // 倒序输出数列
			cout << a[i] << "  ";


	}
	void func5_3()
	{
		int a[10]; // 定义 10 个数组元素
		int i, h, n = 0;
		for (i = 0; i <= 9; i++) // 读入 10 个苹果离地面的高度存储到a[0] ~a[9] 中 9 cin >> a[i];
			cin >> h;
		h += 30;
		for (i = 0; i <= 9; i++) // 循环
			if (h >= a[i])
				n++; // 如果板凳和手伸高度之和 >=a[i]，则摘下的苹果数目加 1
		cout << n;   // 输出

	}
}


