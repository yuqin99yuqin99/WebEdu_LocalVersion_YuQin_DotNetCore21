#include<iostream>
using namespace std;
namespace caoyunru
{
	void func2_15()
	{
		int a, h; //���嶨��
		float s; //�������
		a = 23;
		h = 51;
		s = a * h / 2.0; //�����������
		cout << s << endl;//������
		

	}

	void func2_161()
	{
		int a, b, c, s;
		a = 1562345672; //��a������һ��int��Χ�ڵ�����
		b = 1456789343; //��b������һ��int��Χ�ڵ�����
		c = 1234567832; //��c������һ��int��Χ�ڵ�����
		s = a + b + c; //���
		cout << "s=" << s << endl;


	}

	void func2_162()
	{
		int a, b, c;
		long long s; //s����Ϊ������
		a = 1562345672;
		b = 1456789343;
		c = 1234567832;
		s = a + b + c;
		cout << "s=" << s << endl;

	}

	void func2_163()
	{
		int a, b, c;
		long long s;
		a = 1562345672;
		b = 1456789343;
		c = 1234567832;
		s = (long long)a + b + c; //ǿ������ת��
		cout << "s=" << s << endl;

	}

}
