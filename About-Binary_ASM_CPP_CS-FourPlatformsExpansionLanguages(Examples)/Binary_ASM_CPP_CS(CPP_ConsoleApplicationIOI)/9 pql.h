#include <iostream>
#include<cmath>


using namespace std;

namespace puqiuli
{
  

    void func3_3()
    {
        int n;
        cin >> n;
        if (n % 2 == 0)
        {
            cout << n << "��ż��" << endl;

        }
        else
        {
            cout << n << "������" << endl;
        }
    }

    void func3_41()
    {
        int m;
        cout << "m=";
        cin >> m;
        if (m >= 80)cout << "�ǳ���ӭ��μ�������";
        else cout << "��ӭ��μ�������";
    }
    void func3_42()
    {
        int m;
        cout << "m=";
        cin >> m;
        if (m >= 80)cout << "�ǳ�";
        else cout << "��ӭ��μ�������";
    }
    void func3_6()
    {
        int cup;
        float a, b;
        cout << "cup=";
        cin >> cup;
        a = 0.9;
        b = 1.0 * cup / (cup + cup / 8);
        if (a < b) cout << "�����̳�" << endl;
        else cout << "�ٻ�����" << endl;
    }

    void func3_7()
    {
        int money;
        cout << "money=";
        cin >> money;
        if (money < 100000)cout << "����=" << money / 500 << "��" << endl;
        else
        {
            cout << "����" << floor(money * 0.3 / 500) << "��" << endl;
            cout << "����" << floor(money * 0.5 / 600) << "��" << endl;
            cout << "ƻ����" << floor(money * 0.2 / 800) << "��" << endl;
        }
    }
}
