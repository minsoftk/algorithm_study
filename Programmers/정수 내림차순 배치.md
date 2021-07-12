```java
import java.util.*;
class Solution {
    public long solution(long n) {

        String s ="" + n;
        char[] ch = s.toCharArray();
        Arrays.sort(ch);
        s = new String(ch);
        long sum = 0;
        for (int i = s.length() - 1; i >= 0; i--)
        {
            sum = (sum * 10) + (s.charAt(i) - 48);
        }
        return sum;
    }
}
```
