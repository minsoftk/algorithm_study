# 1009_B3

# Java

```java
import java.util.*;
import java.io.FileInputStream;

class Main {
    public static void main(String args[]) throws Exception {
        //System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

   	  	/* type algorithm code */
        	int[] arr = {10,1,2,3,4,5,6,7,8,9};
        	int n = sc.nextInt();
        	for (int i = 0; i < n; i++)
        	{
        		int a = sc.nextInt();
        		int b = sc.nextInt();
        		int r = a;
        		for (int j = 2; j <= b; j++)
        		{
        			r = (r * a) % 10;
        		}

        		System.out.println(arr[r % 10]);
        	}
    }
}
```

# Python

```python
import sys
arr =[10,1,2,3,4,5,6,7,8,9]
n = int(sys.stdin.readline())

i = 0
while i < n:
  x,y =map(int,input().split())

  r=x
  for j in range(2,y + 1):
    r = (r*x) % 10
  if r == 10:
      r = 0
  print(arr[r % 10])
  i += 1
```
