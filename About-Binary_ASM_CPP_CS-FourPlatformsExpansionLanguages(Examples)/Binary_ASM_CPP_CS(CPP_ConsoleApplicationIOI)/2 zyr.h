#include<iostream>
using namespace std;
namespace zhangyaru
{
	void func2_12()
	{
		float a, b, c, f;
		a = 5.5;
		b = 6.7;
		c = 9.3;
		f = (-b + 4 * a * c) / (2 * a);
		cout << f << endl;
		
	}

	void func2_13()
	{
		float x;
		float y;
		x = sqrt(5290.0 / 4000.0) - 1;
		y = 5290 * (1 + x);
		cout << "2015年月工资为：" << y << "元";
		

	}

	void func2_14()
	{
		float v0 = (40 / 3.6), a = 0.15;
		int t = 120;
		float vt, s;
		vt = v0 + a * t;
		s = v0 * t + 0.5 * a * t * t;
		cout << "vt=" << vt << "  s=" << s << endl;
		
	}

	
}