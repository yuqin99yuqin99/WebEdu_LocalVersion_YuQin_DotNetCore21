#include<iostream>
#include<string>
using namespace std;

namespace zhangyuying
{
	void func4_36()
	{
		int s1, s2;  // s1,s2 �ֱ��ʾ��ѧʱ��Ϳκ�ѧϰʱ��
		int day = 0; // day ��ʾ�����˵�һ�죬��ʼΪ 0
		int max = 8; // max ��ʾ�ʱ�䣬��ʼΪ 8
		int i;
		for (i = 1; i <= 7; i++) // �ظ�����ÿһ������
		{
			cin >> s1 >> s2;
			if (s1 + s2 > max) // ��ѧϰʱ�䳬����ǰ max������£�����¼���ܼ�
			{
				max = s1 + s2; // ���� max
				day = i;       // ��¼�ܼ�
			}
		}
		if (max > 8)
			cout << day;
		else
			cout << "0";
	}

	void func4_37()
	{
		int ans = 0, i, n, x, tmp;
		cin >> n >> x;
		for (int i = 1; i <= n; i++)
		{
			tmp = i;
			while (tmp >= 1)
			{
				if (tmp % 10 == x)ans++;
				tmp /= 10;
			}
		}
		cout << ans;
	}
}
