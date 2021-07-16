###

# 나누어 떨어지는 숫자배열

https://programmers.co.kr/learn/courses/30/lessons/12910

## 문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

## [제한사항]

arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.

## [입출력]

|      arr      | divisor |    result     |
| :-----------: | :-----: | :-----------: |
| [5, 9, 7, 10] |    5    |    [5, 10]    |
| [2, 36, 1, 3] |    1    | [1, 2, 3, 36] |
|    [3,2,6]    |   10    |     [-1]      |

### 알고리즘 풀이😂(초보)

- int 배열로 Array.sort()를 하면되는데 굳이 List를 선언한 이유는 문제에서 array는 길이 1 이상인 배열이라고 되어 있기에 배열의 크기를 정할 수 없다. 따라서 list로 선언해줬다.

```java
import java.util.*;
class Solution {
    public int[] solution(int[] arr, int divisor) {
        ArrayList<Integer> a = new ArrayList<>();

        for (int i = 0; i < arr.length; i++)
        {
            if (arr[i] % divisor == 0)
                a.add(arr[i]);
        }
        Collections.sort(a);
        if (a.size() == 0)
        {
            int[] temp = new int[1];
            temp[0] = -1;
            return temp;
        }

        int[] answer = new int[a.size()];
        for (int i = 0; i < a.size(); i++)
        {
            answer[i] = a.get(i);
        }
        return answer;
    }
}
```

```c++

```
