#include <stdio.h>
#include <vector>
using namespace std;

int main()
{
	freopen("input.txt","rt",stdin);
	int num1, num2, i, j, p1 = 1, p2 = 1, p3 = 1;
	vector<int> arr1(101), arr2(101), arr3(300);
	scanf("%d", &num1);
	for (i = 0; i < num1; i++)
		scanf("%d", &arr1[i]);
	scanf("%d", &num2);
	for (i = 0; i < num2; i++)
		scanf("%d", &arr2[i]);
	
	while (p1 < num1 && p2 < num2)
	{
		if (arr1[p1] > arr2[p2])
		{
			arr3[p3++] = arr2[p2++];
		}
		else
		{
			arr3[p3++] = arr1[p1++];
		}
	}
	while (p1 < num1)
		arr3[p3++] = arr1[p1++];
	while (p2 < num2)
		arr3[p3++] = arr2[p2++];
	for (i = 0; i < p3; i++)
		printf("%d ", arr3[i]);
	return (0);
}
