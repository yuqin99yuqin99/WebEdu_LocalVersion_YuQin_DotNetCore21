#include <string>
#include <iostream>

using namespace std;



//P126��4.14:����һ���������������λ��
//�����������������������һλ��ʱ������Ҫ���ۼƵķ������λ��ͳ�ƣ��趨������ num ��ȡ���������ĸ�λ���֣� num ��1��
//����������ȥ����λ���֣���ʣ����λ����������ɵ������ظ���������������Ĺ�����һ������ѭ���������� while ����������

namespace liuxinyu
{
	void func4_23() 
	{ 

		int n, m, i;
		cin >> n;
		for (m = 2; m <= n; m++)
		{
			i = 2;
			while (m % i != 0 && i <= m - 1)
				i++;
			if (i > m - 1)
				cout << m << " ";
		}

	}
	void func4_24() 
	{ 

		int i, j;
		for (i = 1; i <= 5; i++)
		{
			j = 5;
			while (i <= j)
			{
				cout << i * 10 + j << " ";
				j--;
			}
			cout << endl;
		}

	}
	//void func4_25() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		//int i = 10, j;
		//do
			//for (j = 1; j < i; j++)
				//while (i > 5);

		//cout << i + j;
		//i--;
		//}
		

	
}

