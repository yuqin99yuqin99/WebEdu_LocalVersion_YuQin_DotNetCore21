#include<iostream>
#include <string>
#include<cstdio>
using namespace std;

namespace caoxuan
{
	

	void func2_21()
	{
		char guidepost; //����·�����
		double d, s, k, cost; //�������˱���
		double time, l, totalcost; //������ֵ����
		cin >> guidepost; //����·��
		cin >> d >> s >> k >> cost; //����·�̡��ٶȡ�����������
		time = d / s;  //��������ʱ��
		l = d / k;   //��������������
		totalcost = 1 * cost;  //�󻨷�
		cout << guidepost << endl; //���·��
		cout << "time=" << time << endl;  //���ʱ��
		cout << "totalcost=" << totalcost << endl; //�����


	}

	void func2_22()
	{
		printf("%d%d%d\n", 9 / 8, 4 * (6 + 3) % 5, (4 * 6 + 3) % 5);
		printf("%d  %d  %d\n", 9 / 8, 4 * (6 + 3) % 5, (4 * 6 + 3) % 5);
		printf("9/8=%d 4*(6+3)%5=%d (4*6+3)%5=%d\n",
			9 / 8, 4 * (6 + 3) % 5, (4 * 6 + 3) % 5);
		printf("%d %d %d\n", 41 % 6, 41 % (-6), (-41) % 6);

	}

	void func2_23()
	{
		printf("9/8=%d 9.0/8=%f 9/8.0=%f 9.0/8.0=%f \n",
			9 / 8, 9.0 / 8, 9 / 8.0, 9.0 / 8.0);
		printf("10.0/6.0=%f\n", 10.0 / 6.0);
		printf("10.0/6.0=%.3f\n", 10.0 / 6.0);
		printf("10.0/6.0=%9.3f\n", 10.0 / 6.0);

	}

	void func2_24()
	{
		int a = 88, b = 89;
		printf("%d %d\n", a, b);
		printf("%d,%d\n", a, b);
		printf("%c,%c\n", a, b);
		printf("a=%d,b=%d\n", a, b);

	}

}
