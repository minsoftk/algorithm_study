#include <stdio.h>
#include <algorithm>
using namespace std;

int arr[1000], num;

int Count(int mid)	//DVD 장수를 반환하는 함
{ 
	int sum = 0, res, cnt = 1, i = 0;
	while (i < num)
	{
		if (mid < (sum + arr[i]))
		{
			sum = arr[i];
			cnt++;
		}
		else
		{
			sum = sum + arr[i];
		}
		i++;
	}
	return cnt;
}

int main()
{
	freopen("input.txt","rt",stdin);
	int key, i, lt, rt, mid, tmp = 0, res, max = -2147000000;
	scanf("%d %d", &num, &key);
	for (i = 0; i < num; i++)
	{
		scanf("%d", &arr[i]);
		rt = rt + arr[i];
		if (arr[i] > max) max = arr[i]; // 9 9 를 입력받을때 최대 길이는 9가 돼야하기 때문. 
	}
	lt = 0;
	while (lt <= rt)
	{
		mid = (lt + rt) / 2;
		if (mid >= max && Count(mid) <= key) //노래의 최대 길이보다 mid는 무조건 커야함. 
		{
			res = mid;
			rt = mid - 1;
		}
		else lt = mid + 1;
	}
	printf("%d\n", res);
	return (0);
}
