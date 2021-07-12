### 월간 코드 챌린지 시즌1

# 두 개 뽑아서 더하기

https://programmers.co.kr/learn/courses/30/lessons/72410

## 문제 설명

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## [제한사항]

numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

## [입출력]

|   numbers   |    result     |
| :---------: | :-----------: |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
|  [5,0,2,7]  | [2,5,7,9,12]  |

### 알고리즘 풀이😂

- 이 문제를 굉장히 헤맸다.. 자바를 시작한지 얼마 안되서 그런가보다.. ArrayList를 사용했을 때, int[] 배열로 return해야되는걸 생각하다 보니 어떻게 변환해야하는지를 많이 찾아봤다. 문제에서 주어진 기본형을 유지해야되는줄 알았는데 return 타입을 바꿔주면 됐다. 자바가 메소드들이 은근히 까다로운거 같다. 이 문제는 c++로 푸는게 훨씬 쉬운것 같음.

* 처음 헤맸을 때

```java
import java.util.*;
class Solution {
    public int[] solution(int[] numbers) {
        ArrayList<Integer> test = new ArrayList<Integer>();
        Arrays.sort(numbers);
        int sum = numbers[numbers.length - 2] + numbers[numbers.length - 1];
        System.out.println(sum);
        int[] ch = new int[sum + 1];
        Arrays.fill(ch,0);

        for (int i = 0; i < numbers.length; i++)
        {
            for (int j = i + 1; j < numbers.length; j++)
            {
                int res = numbers[i] + numbers[j];
                if (ch[res] == 1) continue;
                ch[res] = 1;
            }
        }
        int cnt = 0;
        for (int i = 0; i < ch.length; i++)
        {
            if (ch[i] == 1)
            {
                test.add(i);
                cnt++;
            }
        }
        int[] answer = new int[cnt];
        for (int i = 0; i < test.size(); i++)
        {
            answer[i] = test.get(i).intValue();
        }
        return answer;
    }
}
```

```c++
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
#include <string>
#include <vector>
#include <algorithm>
#include <set>
using namespace std;

vector<int> solution(vector<int> numbers) {
    vector<int> answer;
    set<int> st;
    for(int i = 0;i<numbers.size();++i){
        for(int j = i+1 ; j< numbers.size();++j){
            st.insert(numbers[i] + numbers[j]);
        }
    }
    answer.assign(st.begin(), st.end());
    return answer;
}
```

```java
import java.util.*;
class Solution {
    public ArrayList<Integer> solution(int[] numbers) {

        HashSet<Integer> set = new HashSet<>();
        for (int i = 0; i < numbers.length; i++)
        {
            for (int j = i + 1; j < numbers.length; j++)
            {
                set.add(numbers[i] + numbers[j]);
            }
        }
        ArrayList<Integer> answer = new ArrayList<Integer>(set);
        Collections.sort(answer);
        return answer;
    }
}
```
