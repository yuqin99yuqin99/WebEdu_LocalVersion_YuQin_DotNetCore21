#include <iostream>
#include<cmath>

using namespace std;

namespace xiangbairui {
    void func3_111()
    {
        float a, b, c;
        float p;
        float s;
        cin >> a >> b >> c;
        if (a + b > c && a + c > b && b + c > a)
        {
            p = (a + b + c) / 2;
            s = sqrt(p * (p - a) * (p - b) * (p - c));
            cout << "���������Ϊ��" << s;
        }
        else cout << "���ܹ���������";
    }

    void func3_112()
    {
        float a, b, c;
        float p;
        float s;
        cin >> a >> b >> c;
        if (a + b <= c || a + c <= b || b + c <= a) cout << "���ܹ���������";
        else
        {
            p = (a + b + c) / 2;
            s = sqrt(p * (p - a) * (p - b) * (p - c));
            cout << "���������Ϊ��" << s;
        }
    }

    void func3_12()
    {
        bool found, flag = false;
        found = true;
        cout << flag << " " << found << endl;
        flag = 5;
        found = 0;
        cout << flag << " " << found << endl;
    }
    void func3_14()
    {
        char ch;
        cin >> ch;
        ch = (ch >= 'A' && ch <= 'Z') ? (ch + 32) : ch;
        cout << ch << endl;
    }

    void func3_15()
    {
        int year;
        cin >> year;
        if (year % 400 == 0) cout << year << "������" << endl;
        else
            if (year % 400 == 0)
                if (year % 100 != 0) cout << year << "������" << endl;
                else cout << year << "��������" << endl;
            else cout << year << "��������" << endl;
    }
}
