#include <stdio.h>

void do_input(int pmy_int_values[][4], int row_count);
int get_max_value(int pmy_int_values[][4], int row_count);

int main()
{
	int max_value= 0;
	int int_values[2][4] = {0};

	do_input(int_values, sizeof(int_values) / sizeof(int[4]));
	max_value= get_max_value(int_values, sizeof(int_values) / sizeof(int[4]));

	printf("Max Value : %d\n", max_value);

	return 0;
}

void do_input(int pmy_int_values[][4], int row_count)
{
	int i =0, j =0;
	for(i = 0; i<row_count; i++)
	{
		for(j = 0; j< 4; j++)
		{
			printf("[%d][%d] : Value ?",i,j);
			scanf("%d", &pmy_int_values[i][j]);
		}
		printf("\n");
	}
}

int get_max_value(int pmy_int_values[][4], int row_count)
{
	int result = 0;
	int i = 0, j=0;
	result = pmy_int_values[0][0];
	for(i=0; i< row_count; i ++)
	{
		for(j=0; j<4; j++)
		{
			if(pmy_int_values[i][j] > result)
			{
				result = pmy_int_values[i][j];
			}
		}
	}

	return result;
}
