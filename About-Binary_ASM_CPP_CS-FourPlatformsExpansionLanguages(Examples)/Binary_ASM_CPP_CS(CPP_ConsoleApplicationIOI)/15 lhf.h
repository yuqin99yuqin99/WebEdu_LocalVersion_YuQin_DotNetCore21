#include <string>
#include<iostream>
using namespace std;


namespace lihongfang
{
	void func3_24()
	{
		int x,a,b,c,d;
		cin >> x;
		a = x / 6;
		switch (x % 6)
		{
		case 0:
			b = 0, c = 0, d = 0;
			break;
		case 1:
			a = a - 2, b = 1, c = 0, d = 0;
			break;
		case 2:
			a = a - 3, b = 0, c = 0, d = 1;
			break;
		case 3:
			a = a - 2, b = 0, c = 1, d = 0;
			break;
		case 4:
			a = a - 4, b = 1, c = 1, d = 0;
			break;
		case 5:
			a = a - 5, b = 0, c = 1, d = 1;
			break;
		}
		cout << "6元：" << a << "本" << "  " << "13元：" << b << "本" << "  " << "15元：" << c << "本" << " " << "20元：" << d << "本";

	}
	void func3_25()
	{
		double t, s, x1, x2;
		double d;
		cin >> t >> s;
		d = t * t / 4 - 4 * s;
		if (d < 0)
			cout << "找不到这样的矩形!" << endl;
		else
		{
			if (d == 0)
				x1 = x2 = t / 4;
			else
			{
				x1 = (t / 2 + sqrt(d)) / 2;
				x2 = (t / 2 - sqrt(d)) / 2;
			}
			cout << "矩形的长和宽分别为：" << x1 << "," << x2 << endl;
		}

	}
	void func3_261()
	{
		int n, x, y, t, rest;
		cin >> n >> x >> y;
		t = ceil((double)y / x);//将y强制转换为实数求y除x的值后向上取整
		if (t < n) rest = n - t;
		else rest = 0;
		cout << rest << endl;
	}
	void func3_262()
	{
		int n, x, y, rest;
		cin >> n >> x >> y;
		if (y % x == 0) rest = y / x >= n ? 0 : n - y / x;//虫子完整吃完苹果
		else rest = rest = y / x >= n - 1 ? 0 : n - 1 - y / x;//虫子没吃完苹果
		cout << rest << endl;
	}
}


