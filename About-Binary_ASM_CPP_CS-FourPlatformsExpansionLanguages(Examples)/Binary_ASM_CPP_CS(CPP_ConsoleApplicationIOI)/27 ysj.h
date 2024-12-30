#include <string>
#include <iostream>

using namespace std;


namespace yangshuangjia
{
    void func4_29()
    {

        int n, i = 2;
        cin >> n;
        cout << n << "=";
        do
        {
            while (n % i == 0)    //n能被i整除，就重复做除法操作 
            {
                cout << i;
                n /= i;
                if (n != 1) cout << "*";
            }
            i++;
        } while (n != 1);      //n 没有除尽，就重复操作 


    }
    void tryFunc2()
    {

        int i, j, n;
        cin >> n;
        for (i = 1; i <= n; i++)
        {
            for (j = 1; j <= n - i; j++)
                cout << " ";
            for (j = 1; j <= i; j++)
                cout << "*";
            cout << endl;
        }


    }
    void tryFunc3()
    {

        int i, j, n;
        cin >> n;
        for (i = 2; i <= n; i++)
        {
            j = i - 1;
            while (j > 1 && i % j != 0)
                j--;
            cout << i << " (" << j << ") \n";
        }


    }
    void tryFunc4()
    {

        int i, m, n = 0;
        for (i = 1; i <= 5; i++)
        {
            m = i % 2;
            while (m-- > 0) n++;
        }
        cout << m << " " << n;

    }
    void tryFunc5()
    {

        int n;
        cin >> n;
        cout << n << "=";
        for (int i = 2; i <= n; i++)
            for (; n % i == 0;)
            {
                n = n / i;
                cout << i;
                if (n != 1) cout << "*";
            }



    }


}
