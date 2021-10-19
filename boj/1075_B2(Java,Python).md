# 1075 Bronze2

# Java

```java
import java.util.*;
import java.io.FileInputStream;

class Main {
    public static void main(String args[]) throws Exception {
//        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

   	  	/* type algorithm code */
        int a = sc.nextInt();
        int b = sc.nextInt();
        for (int i = 0; i < 2; i++)
        	a /= 10;

        for (int i = 0; i < 2; i++)
        	a *= 10;

        while(true)
        {
        	if (a % b == 0)
        		break;
        	a++;
        }
        String str = ""+(a);
        str = str.substring(str.length()-2,str.length());
        System.out.println(str);
    }
}

```

# Python

```python
import sys
#sys.stdin = open("input.txt","r")

n = int(input())
a = int(input())

n = int(n/100)
n = int(n*100)
while(True):
  if (n%a==0):
    temp=''+str(int(n))
    print(temp[-2:])
    break;
  n=n+1
```
