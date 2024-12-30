#include<iostream>
using namespace std;
namespace caoyunru
{
	void func2_15()
	{
		int a, h; //定义定量
		float s; //定义变量
		a = 23;
		h = 51;
		s = a * h / 2.0; //求三角形面积
		cout << s << endl;//输出面积
		

	}

	void func2_161()
	{
		int a, b, c, s;
		a = 1562345672; //给a变量赋一个int范围内的整数
		b = 1456789343; //给b变量赋一个int范围内的整数
		c = 1234567832; //给c变量赋一个int范围内的整数
		s = a + b + c; //求和
		cout << "s=" << s << endl;


	}

	void func2_162()
	{
		int a, b, c;
		long long s; //s定义为长整型
		a = 1562345672;
		b = 1456789343;
		c = 1234567832;
		s = a + b + c;
		cout << "s=" << s << endl;

	}

	void func2_163()
	{
		int a, b, c;
		long long s;
		a = 1562345672;
		b = 1456789343;
		c = 1234567832;
		s = (long long)a + b + c; //强制类型转换
		cout << "s=" << s << endl;

	}

}
