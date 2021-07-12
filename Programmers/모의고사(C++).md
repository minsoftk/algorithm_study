### 완전탐색

# 모의고사

https://programmers.co.kr/learn/courses/30/lessons/42840?language=cpp

## 문제 설명

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## [제한사항]

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## [입출력]

|   answers   | return  |
| :---------: | :-----: |
| [1,2,3,4,5] |   [1]   |
| [1,3,2,4,2] | [1,2,3] |

<br/>
<br/>

### 나의 알고리즘 풀이😂

- 각각의 패턴을 저장해놓고, 모듈러를 이용해 문제의 정답을 맞췄을 경우, 각각의 수포자의 int 배열을 +1 해줬다. 그 후 int 배열 s에서 최대값을 찾아 저장하고 max_score에 max 값을 저장한다. 그 후 max_score와 같다면 answer에 push_back해준다.i = 0부터여서 오름차순 정렬로 들어간다.
  그중에서 Max값을 찾아줬다.

```c++
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
    vector<int> m1={1,2,3,4,5}; //4
    vector<int> m2={2,1,2,3,2,4,2,5}; //7
    vector<int> m3={3,3,1,1,2,2,4,4,5,5}; //9
vector<int> solution(vector<int> answers) {
    vector<int> answer;
    int s[3]= {0,0,0};
    int max_score = 0;

    for (int i = 0; i < answers.size(); i++)
    {
        if (answers[i] == m1[i % 5])
            s[0]++;
        if (answers[i] == m2[i % 8])
            s[1]++;
        if (answers[i] == m3[i % 10])
            s[2]++;
    }
    max_score = max(max(s[0],s[1]),s[2]);
    for (int i = 0; i < 3; i++)
    {
        if (max_score == s[i])
            answer.push_back(i + 1);
    }
    return answer;
}
```
