#

# Java

```java
import java.util.*;
import java.io.FileInputStream;

class Main {
    public static void main(String args[]) throws Exception {
//        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

   	  	/* type algorithm code */
        int[] arr = new int[4];
       for (int i = 0; i < 4; i++)
    	   arr[i] = sc.nextInt();
       int x =arr[0];
       int y =arr[1];
       int w =arr[2];
       int h =arr[3];

       // x가 max min 어디에 가까운지
       int xMin = Math.min(w-x, 0+x);
       int yMin = Math.min(h-y, 0+y);
       int res = (int)Math.min(xMin, yMin);
       System.out.println(res);
    }
}
```

# Python

```python

```
