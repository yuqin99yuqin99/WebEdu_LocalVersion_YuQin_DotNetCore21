#include <string>
#include <iostream>


using namespace std;



// ��һ�������ռ�
namespace tanghouxiang
{
   

    void func4_9()
    {
        float score, tot = 0;
        int pep = 0;
        std::cin >> score;
        while (score != 0)
        {
            pep++;
            tot += score;
            std::cin >> score;
        }
        std::cout << tot / pep << std::endl;
    }
    
}



