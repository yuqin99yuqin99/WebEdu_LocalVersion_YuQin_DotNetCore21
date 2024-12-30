#include<iostream>
#include<cstring>
#include<cmath>

using namespace std;

namespace bumairemu
{
	
	void func5_4()
	{
		int year, month, date, ans;
		int a[13] = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
		// 初始化数组 a
		cin >> year >> month >> date;
		for (int i = 1; i < month; i++)
			ans += a[i];
		// 求 month 之前月份天数之和
		ans += date; // 加上 date
		if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0)
			// 是否闰年
			if (month > 2)
				ans++; // 闰年及 2 月之后的月份，ans 加上一天
		cout << ans;
	}
	int atry[5];
	void func5_51()
	{
		
		for (int i = 0; i < 5; i++)
			cout << atry[i] << "  ";
	}

	void func5_52()
	{
		int a[5];
		for (int i = 0; i < 5; i++)
			cout << a[i] << ' ';
	}

	void func5_61()
	{
		int a[5] = { 1, 2 };
		for (int i = 0; i < 5; i++)
			cout << a[i] << " ";
	}

	void func5_62()
	{
		int a[5];
		memset(a, 0, sizeof(a));
		for (int i = 0; i < 5; i++)
			cout << a[i] << " ";
	}

	


}
