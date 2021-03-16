#include <stdio.h>
#include <vector>
using namespace std;

int main()
{
	freopen("input.txt","rt",stdin);
	int num, m, i, res, tmp;
	scanf("%d %d", &num, &m);
	vector<int> arr(num);
	for (i = 0; i < num; i++)
	{
		scanf("%d", &tmp);
		arr.push_back(tmp);
	}
	sort(arr.begin(), arr.end());
	for (i = 0; i < num; i++)

	return (0);
}
