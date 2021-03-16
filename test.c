#include <stdio.h>
#include <vector>
using namespace std;
int arr[1001];

int Count(int s)//녹화하는데 필요한 DVD 개수를 리턴
{
	int i, cnt = 1, sum = 0;
	for (i = 1; i <= n; i++)
	{
		if (sum + arr[i] > s)
		{
			cnt++;
			sum = arr[i];
		}
		else sum = sum + arr[i];
	}
	return (cnt);
}

int main()
{
	freopen("input.txt","rt",stdin);
	int num, m, i, res, tmp, lt, rt, mid;
	scanf("%d %d", &num, &m);
	for (i = 1; i <= num; i++)
	{
		scanf("%d", &arr[i]);
		rt = rt + arr[i];
	}
	sort(arr.begin(), arr.end());
	while (lt <= rt)
	{
		mid = (lt + rt) / 2;
		if (Count(mid)) <= m)
		{
			res = mid;
			rt = mid - 1;
		}
		else lt = mid + 1;
	}
	printf("%d\n",res);
	return (0);
}
