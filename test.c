#include <stdio.h>
#include <vector>
using namespace std;
int main()
{
	freopen("input.txt","rt",stdin);
	int num, i, j, pos;
	scanf("%d", &num);
	vector<int> is(num + 1), os(num + 1); //1번부터 컨트롤하기 위해 + 1
	
	for (i = 1; i <= num; i++)
		scanf("%d", &is[i]);
	for (i = num; i >= 1; i--)
	{	
		pos = i;
		for (j = 1; j <= is[i]; j++)
		{
			os[pos] = os[pos + 1];
			pos++;
		}
		os[pos] = i;
	}
	for (i = 1; i <= num; i++)
		printf("%d ", os[i]);
	return (0);
}

