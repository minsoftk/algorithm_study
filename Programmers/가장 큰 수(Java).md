###

# 가장 큰 수

https://programmers.co.kr/learn/courses/30/lessons/42746

## 문제 설명

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

## [제한사항]

numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

## [입출력]

|      numbers      |     |  result   |
| :---------------: | :-: | :-------: |
|    [6, 10, 2]     |     |  "6210"   |
| [3, 30, 34, 5, 9] |     | "9534330" |
|                   |     |           |

### 알고리즘 풀이😂

- 처음엔 StringBuffer를 이용해서 char 배열로 바꿔 sort하는 방식을 생각했다. 그런데 문제 이해를 잘못했다. 10이상의 숫자들을 char 배열로 바꾼뒤 정렬해버리면 10이 흩어져 각각 0, 1 숫자로 정렬 되어버렸다. c++에서 구조체를 선언한 뒤, 구조체 연산자 오버로딩을 통해 객체끼리의 정렬이 가능했다. 이와 비슷하게 Compare 오버라이딩을 통해 객체끼리의 정렬이 가능하게 해준다.

[](https://gmlwjd9405.github.io/2018/09/06/java-comparable-and-comparator.html)

```java
import java.util.*;
class Solution {
   public String solution(int[] numbers) {
        String answer = "";
        String[] arr = new String[numbers.length];
        //int 배열을 String 배열로 변환
        for (int i = 0; i < numbers.length; i++) {
                arr[i] = String.valueOf(numbers[i]);
        }

        //배열 정렬, 정렬 규칙으로는 2개를 더하여 더 큰 쪽이 우선순위가 있도록 정렬
        Arrays.sort(arr, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return (s2+s1).compareTo(s1+s2);
            }
        });

        //0000 처럼 0으로만 구성되어있으면 0 return
        if (arr[0].equals("0")) return "0";

        //그 외의 경우 순차적으로 연결하여 answer return
        for (int i = 0;i<arr.length;i++)
        {
            answer += arr[i];
        }
        return answer;
    }
}
```

```c++

```
