#include <string>
#include <iostream>

using namespace std;




namespace shangjiashuo
{
	void func4_16() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1, n, sum = 0;
		cin >> n;
		do
		{
			sum += i;
			i++;

		} while (sum < n); // �ظ�ִ��
		cout << i - 1 << endl;

	}
	void func4_171() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1;
		do
		{
			cout << i;
			i++;
		} while (i < 1);

	}
	void func4_172() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1;
		while (i < 1)
		{
			cout << i;
			i++;
		}

	}
	void func4_181() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1;
		do
		{
			cout << i;
			i++;

		} while (i <= 5);
		

	}
	void func4_182() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1;
		do
		{
			i++;
			cout << i;
		} while (i <= 5);

	}
	void func4_19() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����

		int i = 1;
		do
			cout << i;
		while (i <= 5);

	}
}

