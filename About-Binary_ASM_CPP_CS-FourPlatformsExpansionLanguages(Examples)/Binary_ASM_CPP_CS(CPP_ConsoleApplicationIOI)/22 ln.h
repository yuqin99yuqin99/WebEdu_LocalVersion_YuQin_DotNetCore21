#include <string>
#include <iostream>

using namespace std;



//P126��4.14:����һ���������������λ��
//�����������������������һλ��ʱ������Ҫ���ۼƵķ������λ��ͳ�ƣ��趨������ num ��ȡ���������ĸ�λ���֣� num ��1��
//����������ȥ����λ���֣���ʣ����λ����������ɵ������ظ���������������Ĺ�����һ������ѭ���������� while ����������

namespace lining
{
	void func4_14() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int n, num = 1;       // num ������ֵ�λ������ʼ��Ϊ1
		cin >> n;
		while (n >= 10)  //�� n ����һλ�������ظ�����
		{
			num++;
			n /= 10;      //����Ҫȥ������������
		}
		cout << num << endl; //���������λ�� 

	}
	void func4_151() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int a, b, gcd;
		cin >> a >> b;
		gcd = a > b ? b : a;           //ע��˴�������д��
		while (gcd > 1 && (a % gcd != 0 || b % gcd != 0))     //�ظ�������Ѱ�����Լ��
			gcd--;
		cout << gcd << endl;        //������Լ��

	}
	void func4_152() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int a, b, tmp;
		cin >> a >> b;
		while (tmp = a % b)         //ע��˴�����������д��
		{
			a = b;
			b = tmp;
		}
		cout << b << endl;       //������Լ��

	}
}