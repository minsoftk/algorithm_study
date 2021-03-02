#include <stdio.h>
#include <limits.h>
int main()
{
	freopen("input.txt","rt",stdin);
	int num, i, j, res, count;
	int temp[100];
	scanf("%d", &num);
	
	i = 0;
	while (i < num)
		scanf("%d", &temp[i++]);

	i = 0;
	while (temp[i] != '\0')
	{
		j = i + 1;
		while (temp[j] != '\0')
		{
			if (temp[i] < temp[j])
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
	count = 1;
	while (temp[i] != '\0')
	{
		j = i + 1;
		while (temp[j] != '\0')
		{
			if (temp[i] == temp[j])
				j++;
			else if (temp[i] > temp[j])
			{
				count++;
				i++;
				break;
			}
		}
		if (count == 3)
		{
			res = temp[j];
			break;
		}
	}
	printf("%d", res);
	return (0);
}

