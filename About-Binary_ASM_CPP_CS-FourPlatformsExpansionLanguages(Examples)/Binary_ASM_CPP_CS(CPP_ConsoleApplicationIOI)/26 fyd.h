#include <string>
#include <iostream>


using namespace std;



// ��һ�������ռ�
namespace fangyandong 
{
	void func4_26()
	{
		int i, j, n;
		cin >> n;
		for (i = 1; i <= n; i++) // ���ѭ����������
		{
			for (j = 1; j <= i; j++) // �ڲ�ѭ��������ÿһ���ϵĸ���
				cout << "*";
			cout << endl; // ÿ�����Ļ���
		}
	}
	void func4_271()
	{
		int x, y, z;
		for (x = 0, y = 0; y <= 100 / 5; x++)
			for (y; y <= 100 / 3; y++)
				for (z = 0; z <= 3 * 100; z += 3)
					if (5 * x + 3 * y + z / 3 == 100 && x + y + z == 100)
						cout << x << " " << y << " " << z << endl;
	}
	void func4_272()
	{
		int x, y, z;
		for (x = 0; x <= 100 / 5; x++)
			for (y = 0; y <= 100 / 3; y++)
			{
				z = 100 - x - y;
				if (5 * x + 3 * y + z / 3 == 100)
					cout << x << " " << y << " " << z << endl;
			}
	}
	void func4_281()
	{
		int x, a, b, c;
		for (x = 100; x <= 999; x++)
		{
			a = x / 100;
			b = (x - a * 100) / 10;
			c = x % 10;
			if (a * a * a + b * b * b + c * c * c == x)
				cout << x << endl;
		}
	}
	void func4_282()
	{
		int x, a, b, c;
		for (a = 1; a <= 9; a++)
			for (b = 0; b <= 9; b++)
				for (c = 0; c <= 9; c++)
				{
					x = a * 100 + b * 10 + c;
					if (a * a * a + b * b * b + c * c * c == x)
						cout << x << endl;
				}
	}
}
