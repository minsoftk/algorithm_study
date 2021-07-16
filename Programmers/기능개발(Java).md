###

# 기능개발

https://programmers.co.kr/learn/courses/30/lessons/42586

## 문제 설명

프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

## [제한사항]

작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

## [입출력]

|        progresses        |       speeds       |  return   |
| :----------------------: | :----------------: | :-------: |
|       [93, 30, 55]       |     [1, 30, 5]     |  [2, 1]   |
| [95, 90, 99, 99, 80, 99] | [1, 1, 1, 1, 1, 1] | [1, 3, 2] |
|                          |                    |           |

### 알고리즘 풀이😂

- 로직은 어떻게 짜야겠다 생각을 했지만, Stack과 Queue에 안에 있는 원소들을 어떻게 비교할 것인가에서 많이 헤맸다.
  자바가 은근히 코테로 안좋은거 같기도하고... 너무 코드가 길어진다...

```java
import java.util.*;
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
            Stack<Integer> stack = new Stack<Integer>();

            for (int i = progresses.length - 1; i >= 0; i--)
                stack.add((100 - progresses[i]) / speeds[i] + ((100 - progresses[i]) % speeds[i] > 0 ? 1 : 0));

            List<Integer> s = new ArrayList<Integer>();
            while (!stack.isEmpty())
            {
                int top = stack.pop();
                int cnt = 1;
                while (!stack.isEmpty() && stack.peek() <= top){
                    cnt++;
                    stack.pop();
                }
                s.add(cnt);
            }
        int[] answer = new int[s.size()];
            for (int i = 0; i < s.size(); i++)
                answer[i] = s.get(i);

            return answer;
    }
}
```

```c++

```
