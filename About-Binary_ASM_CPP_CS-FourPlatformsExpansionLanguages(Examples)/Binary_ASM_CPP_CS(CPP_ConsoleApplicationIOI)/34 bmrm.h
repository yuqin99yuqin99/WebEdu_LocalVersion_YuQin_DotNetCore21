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
		// ��ʼ������ a
		cin >> year >> month >> date;
		for (int i = 1; i < month; i++)
			ans += a[i];
		// �� month ֮ǰ�·�����֮��
		ans += date; // ���� date
		if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0)
			// �Ƿ�����
			if (month > 2)
				ans++; // ���꼰 2 ��֮����·ݣ�ans ����һ��
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
