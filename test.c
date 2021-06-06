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
	
	return (0);
}
