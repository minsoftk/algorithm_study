#include <stdio.h>
#include <limits.h>
int main()
{
	freopen("input.txt","rt",stdin);
	int num, i, j, res;
	scanf("%d", &num);
	int temp[101];

	i = 0;
	while (i < num)
	{
		scanf("%d", &temp[i]);
		i++;
	}
	i = 0;
	while (temp[i] != '\0')
	{
		j = i + 1;
		while (temp[j] != '\0')
		{
			if (temp[i] > temp[j])
			{
				res = temp[j];
				temp[j] = temp[i];
				temp[i] = res;
			}
			j++;
		}
		i++;
	}
	i = 0;
	while (temp[i])
	{
		printf("%d ", temp[i]);
		i++;
	}
	return (0);
}
