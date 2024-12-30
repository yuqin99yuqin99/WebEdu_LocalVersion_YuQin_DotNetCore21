#include <string>
#include <iostream>

using namespace std;


// 第一个命名空间
namespace xueman
{
    void func4_301() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
        int n;
        cin >> n;
        while (n > 0 && n % 2 == 0)//数字（商）大于0且能被2整除，就重复操作
            n /= 2;                //产生新的数字
        if (n != 1) cout << "No";  //判断结果
        else cout << "Yes";

    }
    void  func4_302()
    {
        int n;
        cin >> n;
        if (n & (n - 1)) cout << "No";//利用位运算完成判断
        else cout << "Yes";

    }
    void  func4_32()
    {
        int x = 3, y = 5;
        x ^= y;
        y ^= x;
        x ^= y;
        cout << "x=" << x << ",y=" << y;

    }
    void  func4_33()
    {
        int x, y;
        cin >> x >> y;
        cout << (x & y) + ((x ^ y) >> 1);

    }
}
