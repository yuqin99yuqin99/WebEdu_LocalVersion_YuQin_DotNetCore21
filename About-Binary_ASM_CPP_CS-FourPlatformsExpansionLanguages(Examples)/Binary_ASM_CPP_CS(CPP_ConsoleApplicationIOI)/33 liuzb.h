#include <iostream>
#include <string>

using namespace std;

const int MAXN = 100001;

namespace liuzhenbin
{
	void func5_1() //void tryFunc(string a, string b)����������������void tryFunc(string a, string b)����Ľӿ�
	{
		const int MAXN = 10000;
		
			int a[MAXN]; // ���� 10000 ������Ԫ��
			int i, n;
			cin >> n;               // �����������ݸ���
			for (i = 0; i < n; i++) // ���� n �����ݴ��� a[0]~a[n-1]���������
				cin >> a[i];
			for (i = n - 1; i >= 0; i--) // ������������������
				cout << a[i] << "";
		
	}
	void func5_2()
	{
		int a[20]; // ���� 20 ������Ԫ��
		int i;
		a[0] = 0;                // ���е� 1 ���ֵ
		a[1] = 1;                // ���е� 2 ���ֵ
		for (i = 2; i < 20; i++) // �����еĵ� 3~20 ��
			a[i] = a[i - 2] + a[i - 1];
		for (i = 19; i >= 0; i--) // �����������
			cout << a[i] << "  ";


	}
	void func5_3()
	{
		int a[10]; // ���� 10 ������Ԫ��
		int i, h, n = 0;
		for (i = 0; i <= 9; i++) // ���� 10 ��ƻ�������ĸ߶ȴ洢��a[0] ~a[9] �� 9 cin >> a[i];
			cin >> h;
		h += 30;
		for (i = 0; i <= 9; i++) // ѭ��
			if (h >= a[i])
				n++; // �����ʺ�����߶�֮�� >=a[i]����ժ�µ�ƻ����Ŀ�� 1
		cout << n;   // ���

	}
}


