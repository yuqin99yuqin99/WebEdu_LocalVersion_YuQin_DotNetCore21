#include <iostream>

using namespace std;



namespace pansilin
{//절2.4

    float a = 65.5;
    char b = 'A';
    float m = 7.5;
    float n = 10.6;
    float radius = 7;
    float area = 3.14159265 * radius * radius;
    int c = 5;
    int d = 3;
    int e = 3;
    float x = 10.5;
    float y = 30.6;
    float t;
    
    void func2_4()
    {
        float a;
        a = 65.5;
        cout << a << endl;
    }
   
    void func2_5()
    {
        //절2.5
        char b;
        b = 'A';
        cout << b << endl;
    }
    void func2_6()
    {
        //절2.6
            float m = 7.5;
        float n = 10.6;
        cout << "Area of a rectangle:" << m * n << endl;
    }
    void func2_7()
    {
        //절2.7
        float radius;
        float area;
        radius = 7;
        area = 3.14159265 * radius * radius;
        cout << "Cirular area=" << area << endl;
    }
    void func2_8()
    {
        //절2.8
        int c = 5;
        cout << c << endl;
        c = c + 2;
        cout << c << endl;
        c = c + 5;
        cout << c << endl;
    }
    void func2_9()
    {
        //절2.9
        int d, e;
        d = e = 3;
        d += e;
        cout << d << endl;
        cout << e << endl;
    }
    void func2_102()
    {
        //절2.10-2
        float x, y;
        x = 10.5;
        y = 30.6;
        cout << x << " " << y << endl;
        x += y; y + x - y; x -= y;
        cout << x << " " << y << endl;
    }
    void func2_101()
    {
        //절2.10-1

        cout << x << " " << y << endl;
        t = x; x = y; y = t;
        cout << x << " " << y << endl;
        
    }
    

    

    

    

    

    

    

}
