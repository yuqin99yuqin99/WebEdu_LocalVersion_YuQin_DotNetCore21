#include<iostream>
#include<cstring>
const int MAXN1 = 100001;
using namespace std;

namespace lishiqin
{
	void func5_131()
	{
		const int MAXN = 100010;
		int a[MAXN];
		int n, i, j, k;
		int maxsum;
		int temp;
		cin >> n;
		for (i = 1; i <= n; i++)
			cin >> a[i];
		maxsum = a[1];
		for (i = 1; i <= n; i++)
			for (j = i; j <= n; j++)
			{
				temp = 0;
				for (k = i; k <= j; k++)
					temp = temp + a[k];
				if (maxsum < temp)
					maxsum = temp;
			}
		cout << maxsum;
	}
	void func5_132()
	{
		int s[MAXN1], a[MAXN1];
		memset(s, 0, sizeof(s));
		int n, i, j;
		int maxsum;          //�Ӷκ����ֵ
		int temp;           //�Ӷκ�
		; cin >> n;
		for (i = 1; i <= n; i++)    //��������
		{
			cin >> a[i];
			s[i] = a[i] + s[i - 1];
		}
		maxsum = a[1];         //maxsumֵ��ʼ��Ϊ�����һ��Ԫ��
		for (i = 1; i <= n; i++)    //�Ӷ���ʼλ��
			for (j = i; j <= n; j++)   //�Ӷ��յ�λ��
			{
				temp = s[j] - s[i - 1];
				if (maxsum < temp) maxsum = temp;
			}
		cout << maxsum;

	}

	void func5_133()
	{
		int a[MAXN1];
		int n, i;
		int ans;
		int t;
		cin >> n;
		for (i = 1; i <= n; i++)
			cin >> a[i];
		ans = a[1];
		t = ans;
		for (i = 2; i <= n; i++)
		{
			if (t >= 0)
				t = t + a[i];
			else
				t = a[i];
			if (t > ans)ans = t;
		}

		cout << ans;
	}


}


