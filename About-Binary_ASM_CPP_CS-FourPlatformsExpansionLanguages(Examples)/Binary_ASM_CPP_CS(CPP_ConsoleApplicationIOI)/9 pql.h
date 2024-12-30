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
            cout << n << "是偶数" << endl;

        }
        else
        {
            cout << n << "是奇数" << endl;
        }
    }

    void func3_41()
    {
        int m;
        cout << "m=";
        cin >> m;
        if (m >= 80)cout << "非常欢迎你参加音乐社";
        else cout << "欢迎你参加音乐社";
    }
    void func3_42()
    {
        int m;
        cout << "m=";
        cin >> m;
        if (m >= 80)cout << "非常";
        else cout << "欢迎你参加音乐社";
    }
    void func3_6()
    {
        int cup;
        float a, b;
        cout << "cup=";
        cin >> cup;
        a = 0.9;
        b = 1.0 * cup / (cup + cup / 8);
        if (a < b) cout << "大洋商城" << endl;
        else cout << "百汇商厦" << endl;
    }

    void func3_7()
    {
        int money;
        cout << "money=";
        cin >> money;
        if (money < 100000)cout << "梨树=" << money / 500 << "棵" << endl;
        else
        {
            cout << "梨树" << floor(money * 0.3 / 500) << "棵" << endl;
            cout << "桃树" << floor(money * 0.5 / 600) << "棵" << endl;
            cout << "苹果树" << floor(money * 0.2 / 800) << "棵" << endl;
        }
    }
}
