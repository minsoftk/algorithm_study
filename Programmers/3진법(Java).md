###

# 3진법 뒤집기

https://programmers.co.kr/learn/courses/30/lessons/68935

## 문제 설명

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

## [제한사항]

- n은 1 이상 100,000,000 이하인 자연수입니다.

## [입출력]

|  n  | result |
| :-: | :----: |
| 45  |   7    |
| 125 |  229   |

### 알고리즘 풀이😂

- 자바에 대해 익숙치 않다보니 다른 사람들은 메소드를 가져다썼는데 나는 실제로 구현을 해버렸다.. 다른 사람들 풀이를 참고하자! 굉장히 효율적으로 잘 짰다.
  내 풀이

```java
import java.util.ArrayList;
class Solution {
    public int solution(int n) {
        ArrayList<Integer> temp = new ArrayList<Integer>();
        int Q = n;
        int R = 0;

        while (Q > 0)
        {
            Q = n / 3;
            R = n % 3;
            temp.add(R);
            if (Q < 3 && Q > 0)
            {
                temp.add(n / 3);
                break;
            }
            n = n / 3;
        }
        int sum = 0;
        int digit = 1;
        for (int i = 0; i < temp.size(); i++)
        {
            sum = sum + (digit * temp.get(temp.size() - 1 - i));
            digit *= 3;
        }

        return sum;
    }
}
```

- 다른사람들 풀이

```
class Solution {
    public int solution(int n) {
        String a = "";

        while(n > 0){
            a = (n % 3) + a;
            n /= 3;
        }
        a = new StringBuilder(a).reverse().toString();


        return Integer.parseInt(a,3);
    }
}
```
