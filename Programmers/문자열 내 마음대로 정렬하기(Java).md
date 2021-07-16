###

# 문자열 내 마음대로 정렬하기

https://programmers.co.kr/learn/courses/30/lessons/12915

## 문제 설명

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

## [제한사항]

strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

## [입출력]

|         numbers         |     |         result          |
| :---------------------: | :-: | :---------------------: |
|  ["sun", "bed", "car"]  |  1  |  ["car", "bed", "sun"]  |
| ["abce", "abcd", "cdx"] |  2  | ["abcd", "abce", "cdx"] |

### 알고리즘 풀이😂

- n번째 idx의 문자를 맨앞에 붙여서 정렬을 하게 되면 n번째를 첫번째 문자에 온것처럼 정렬을 할 수 있다. 그 다음에 n번째 문자에서는 같은 문자이므로 자연스럽게 다음 문자와 비교를 하게 된다. 앞에 문자열을 붙여주고 sort하면 끝!
  String으로 변환시 valueOf를 사용할 수 있다.

```java
import java.util.*;
class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];

        // 1. 앞에 n번째 문자열을 붙이고 정렬시키기
        for (int i = 0; i < strings.length; i++)
        {
            /*
            char ch = strings[i].charAt(n);
            answer[i] = String.valueOf(ch);
            answer[i] += strings[i];*/
            String add = strings[i].substring(n, n + 1);
            answer[i] = add + strings[i];
        }
        Arrays.sort(answer);
        // 2. 앞에 붙인 문자열 삭제
        for (int i = 0; i < strings.length; i++)
        {
            int temp = answer[i].length(); //문자열이라 ()
            answer[i] = answer[i].substring(1,temp);
        }
        return answer;
    }
}
```

```c++

```
