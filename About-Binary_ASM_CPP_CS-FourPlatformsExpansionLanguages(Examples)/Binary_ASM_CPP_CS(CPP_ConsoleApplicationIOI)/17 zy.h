#include <string>
#include<iostream>


using namespace std;


namespace zhangyan
{
	void func3_29()
	{
		int x, y, m, n;
		bool chicken, egg;
		cin >> n >> m >> x >> y;
		chicken = 0;
		egg = 0;
		if (n - x >= (y + m - x) / 2 && (y + m - x) / 2 >= 0 && x >= (y - m + x) / 2 && (y - m + x) / 2 >= 0 && (y + m - x) % 2 == 0)
			chicken = 1;
		if (0 <= (y + n - m - x) / 2 && (y + n - m - x) / 2 <= n - x && (m + x + y - n) / 2 >= 0 && (m + x + y - n) / 2 <= x && (m + x + y - n) % 2 == 0)
			egg = 1;
		if (chicken == 0 && egg == 0) cout << "The oracle is a lie";
		if (chicken == 0 && egg == 1) cout << "The egg";
		if (chicken == 1 && egg == 1) cout << "Ambiguous";
		if (chicken == 1 && egg == 0) cout << "The chicken";
		cout << endl;
	}
	void func4_1()
	{
		int i, j;
		cin >> j;
		for (i = 1; i <= j; i++)
			cout << i * i << " ";
	}
}

