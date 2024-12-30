#include<iostream>
using namespace std;
namespace xiaoyunxiu
{
	void func2_17()
	{
		int i, j;
		i = 'A';
		j = 'B';
		cout << i << ' ' << j << '\n';
		

	}

	void func2_18()
	{
		char c1, c2;
		c1 = 'a';
		c2 = 'b';
		c1 = c1 - 32;
		c2 = c2 - 32;
		cout << c1 << ' ' << c2 << endl;

	}

	void func2_19()
	{
		int x, y, x1, x2, x3;
		cin >> x;
		x1 = x / 100;
		x2 = (x - x1 * 100) / 10;
		x3 = x % 10;
		y = x3 * 100 + x2 * 10 + x1;
		cout << y << endl;

	}

	void func2_20()
	{
		char c1, c2;
		int a;
		float b;
		cout << "ÊäÈë" << endl;
		cin >> c1 >> c2 >> a >> b;
		cout << "Êä³ö" << endl;
		cout << c1 << endl;
		cout << c2 << endl;
		cout << a << endl;
		cout << b << endl;

	}

}

