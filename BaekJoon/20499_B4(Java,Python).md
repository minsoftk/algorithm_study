# 20499 Bronze 4

```java
import java.io.IOException;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        /* type algorithm code */
        Scanner sc = new Scanner(System.in);
		String temp = sc.next();

		String[] kda = new String[3];
		kda = temp.split("/");
		int k = Integer.parseInt(kda[0]);
		int d = Integer.parseInt(kda[1]);
		int a = Integer.parseInt(kda[2]);
		if (k+a < d || d == 0)
		{
			System.out.println("hasu");
		}else System.out.println("gosu");
    }
}

```

# Python

```Python

```
