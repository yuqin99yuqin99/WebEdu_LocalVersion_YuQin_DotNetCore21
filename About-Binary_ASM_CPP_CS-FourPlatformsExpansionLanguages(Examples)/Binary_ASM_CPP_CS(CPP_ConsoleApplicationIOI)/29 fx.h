#include <iostream>
#include<cmath>

using namespace std;

namespace fengxue {
    void func4_34()
    {
        float x, y;
        int n, i, ans = 0;
        cin >> n;
        for (i = 1; i <= n; i++)
        {
            cin >> x >> y;
            if (x < 60 ^ y < 60)
                ans++; // 用异或操作实现判断
        }
        cout << ans;
    }

    void func4_35()
    {
        int n, num = 0;
        cin >> n;
        do
        {
            num++;        // 位数加 1
            n >>= 1;      // 用位移操作产生新的数字
        } while (n != 0); // 商非 0，就重复操作
        cout << num;
    }
   

}