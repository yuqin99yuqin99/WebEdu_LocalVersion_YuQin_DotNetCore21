#include<iostream>
#include<cmath>
using namespace std;

namespace qiuyi {
    

    void function2()
    {
        int a, b;
        cout << "a,b=";
        cin >> a >> b;
        if (a = b) cout << a;
        else cout << "Unequal";

    }

    void function3()
    {
        int a, b;
        cout << "a,b=";
        cin >> a >> b;
        if (a == b) cout << a;
        else cout << "Unequal";
    }

    void function4()
    {
        int a, b, c = 0, d = 0;
        cout << "a,b=";
        cin >> a >> b;
        if (a > b)
            c = a / b;
        d = a % b;
        cout << c + d;

    }

    void function5()
    {
        int a, b, c = 0, d = 0;
        cout << "a,b=";
        cin >> a >> b;
        if (a > b)
        {
            c = a / b;
            d = a % b;
        }
        cout << c + d;

    }

    void function6()
    {
        cout << "������һ����λ��n";
        int n, sum = 0, free = 0;
        cin >> n;
        for (int i = 0; i < 3; i++)
        {
            free = n % 10;
            sum += free * free * free;
            n /= 10;
        }
        if (sum == n)
            cout << "����Ϊˮ�ɻ���";
        else
            cout << "������Ϊˮ�ɻ���";
    }

    void func3_8()
    {
        int cmark, mmark;
        cin >> cmark >> mmark;
        if (cmark >= 75 && mmark >= 85)
            cout << "���ʸ�" << endl;
        else
            cout << "���ʸ�" << endl;

    }

    void func3_10()
    {
        int year;
        cin >> year;
        if ((year % 4 == 0 && year % 100 != 0) || year == 0)
            cout << year << "������" << endl;
        else
            cout << year << "��������" << endl;


    }
}
