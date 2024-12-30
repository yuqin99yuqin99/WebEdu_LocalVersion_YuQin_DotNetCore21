#include <iostream>
#include<cmath>

using namespace std;

namespace haojiayue
{
    void func4_39()
    {
        int i, n, num = 0;
        int s0 = 0, s1;
        cin >> n;
        for (i = 1; i <= n; i++)
        {
            cin >> s1;
            if (s1 > s0)
                num += s1 - s0;
            s0 = s1;
        }
        cout << num;
    }



    void func4_38()
    {
        int A, B, C, D; for (A = 1; A <= 4; A++)
            for (B = 1; B <= 4; B++)
                if (A != B)
                    for (C = 1; C <= 4; C++)if (A != C && B != C)
                    {
                        D = 1 + 2 + 3 + 4 - A - B - C;
                        if ((A - 3) ^ (B - 4) && (B - 1) ^ (D - 4) && (C - 4) ^ (D - 3) && (D - 2) ^ (A - 1))
                            cout << A << B << C << D;
                    }


    }
}
