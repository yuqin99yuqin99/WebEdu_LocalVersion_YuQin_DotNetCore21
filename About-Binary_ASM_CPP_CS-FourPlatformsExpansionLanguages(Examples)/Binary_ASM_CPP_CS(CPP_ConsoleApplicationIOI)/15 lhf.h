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
		cout << "6Ԫ��" << a << "��" << "  " << "13Ԫ��" << b << "��" << "  " << "15Ԫ��" << c << "��" << " " << "20Ԫ��" << d << "��";

	}
	void func3_25()
	{
		double t, s, x1, x2;
		double d;
		cin >> t >> s;
		d = t * t / 4 - 4 * s;
		if (d < 0)
			cout << "�Ҳ��������ľ���!" << endl;
		else
		{
			if (d == 0)
				x1 = x2 = t / 4;
			else
			{
				x1 = (t / 2 + sqrt(d)) / 2;
				x2 = (t / 2 - sqrt(d)) / 2;
			}
			cout << "���εĳ��Ϳ�ֱ�Ϊ��" << x1 << "," << x2 << endl;
		}

	}
	void func3_261()
	{
		int n, x, y, t, rest;
		cin >> n >> x >> y;
		t = ceil((double)y / x);//��yǿ��ת��Ϊʵ����y��x��ֵ������ȡ��
		if (t < n) rest = n - t;
		else rest = 0;
		cout << rest << endl;
	}
	void func3_262()
	{
		int n, x, y, rest;
		cin >> n >> x >> y;
		if (y % x == 0) rest = y / x >= n ? 0 : n - y / x;//������������ƻ��
		else rest = rest = y / x >= n - 1 ? 0 : n - 1 - y / x;//����û����ƻ��
		cout << rest << endl;
	}
}


