#include <string>
#include <iostream>


using namespace std;

namespace lizebao 
{
	int func4_61()
	{
		int i, sum1 = 0, sum2 = 0;
		for (i = 1; i <= 100; i++)
			if (i % 2 == 0) sum1 += i;
			else sum2 += i;
		cout << "ż����" << sum1 << " " << "������" << sum2;
		return 0;
	}

	int func4_62()
	{
		int i, j, sum1 = 0, sum2 = 0;
		for (i = 2, j = 1; i <= 100; i += 2, j += 2) // ͬʱ����ż��������

		{
			sum1 += i; // ż�� i �ۼ��� sum1
			sum2 += j; // ���� j �ۼ��� sum2
		}
		cout << " ż���� " << sum1 << " "
			<< " ������ " << sum2;
		return 0;
	}

	int func4_7()
	{
		int i, n;
		float x, max = 0; // ��������ֵ��ʼ��Ϊ 0
		cin >> n;
		for (i = 1; i <= n; i++)
		{
			cin >> x;
			if (x > max)
				max = x; // �ж�����Ƿ�ȵ�ǰ����߸�
		}
		cout << max << endl;
			return 0;
	}
	

	int func4_8()
	{
		int i, a = 0, b = 1, c;
		cout << a << " " << b;    // �����һ��͵ڶ����ֵ
		for (i = 3; i <= 40; i++) // ��������������ʮ���ֵ
		{
			c = a + b; // ��� i ���ֵ
			cout << c << " ";
			if (i % 10 == 0)
				cout << endl; // ÿʮ������һ��
			a = b;
			b = c; // ���� a �� b ��ֵ
		}
		return 0;
	}
}
	



