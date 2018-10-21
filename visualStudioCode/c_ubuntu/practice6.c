#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void inputForRowCol(int* row, int* col);
int** alloc_dyn_intArray(int row, int col);
void setValueArray(int** ppResult, int row, int col);
void printArray(int** ppResult, int row ,int col);
void freeArray(int** ppResult, int row);
void getMaxValue(int** ppResult, int row, int col, int* maxVal);
void getMinValue(int** ppResult, int row , int col, int* minVal);

int main()
{
	int row = 0, col = 0;
	int maxVal = 0, minVal = 0;
	int** ppResult = NULL;

	inputForRowCol(&row, &col);
	ppResult = alloc_dyn_intArray(row, col);
	setValueArray(ppResult, row , col);
	printArray(ppResult, row, col);
	getMaxValue(ppResult, row, col, &maxVal);
	getMinValue(ppResult, row ,col, &minVal);
	freeArray(ppResult, row);
	printf("최대값 : %d\n",maxVal);
	printf("최소값 : %d\n",minVal);
	return 0;
}

void getMaxValue(int** ppResult, int row, int col, int* maxVal)
{
	int i = 0, j = 0, temp = 0;
	temp = ppResult[0][0];
	for(i = 0; i < row; i++)
	{
		for(j = 0; j < col; j++)
		{
			if(ppResult[i][j] > temp)
			{
				temp = ppResult[i][j];
			}
		}
	}
	*maxVal = temp;
}

void getMinValue(int** ppResult, int row, int col, int* minVal)
{
	int i = 0, j = 0, temp = 0;
	temp = ppResult[0][0];
	for(i = 0; i < row; i++)
	{
		for(j = 0; j < col; j++)
		{
			if(ppResult[i][j] < temp)
			{
				temp = ppResult[i][j];
			}
		}
	}
	*minVal = temp;
}

void freeArray(int** ppResult, int row )
{
	int i = 0, j = 0;
	if(NULL != ppResult && row > 0 )
	{
		for(i = 0; i< row ; i++)
		{
			if( NULL != ppResult[i])
			{
				free(ppResult[i]);
			}
		}
		free(ppResult);
	}
}


void printArray(int** ppResult, int row , int col)
{
	int i=0, j=0;
	for(i = 0 ; i < row ; i++)
	{
		for(j = 0; j< col; j++)
		{
			printf("%d ",ppResult[i][j]);
		}
		printf("\n");
	}

}


void setValueArray(int** ppResult, int row, int col)
{
	int i = 0, j = 0 ;
	for(i = 0 ; i < row; i++)
	{
		for(j = 0; j < col; j++)
		{
			printf("[%d][%d] 값은?", i, j);
			scanf("%d", &ppResult[i][j]);
		}
	}

}

int** alloc_dyn_intArray(int row, int col)
{
	int** ppResult = NULL;
	int i  = 0;
	if(row > 0 && col > 0 )
	{
		ppResult = (int**)malloc(sizeof(int*) * row );
		if(NULL != ppResult)
		{
			for(i = 0; i< row ; i++)
			{
				ppResult[i] = (int*)malloc(sizeof(int) * col);
				if(NULL != ppResult[i])
				{
					memset(ppResult[i], 0 , sizeof(int) * col);
				}
				else
				{
					int j = 0;
					for(j = 0 ; j < i; j++)
					{
						if( NULL != ppResult[i])
						{
							free(ppResult[i]);
							ppResult[j] = NULL;
						}
					}
					ppResult = NULL;
					break;
				}
			}
		}

	}	
	else
	{
		printf("오류 : alloc_dyn_array() 매개변수\n");
	}
	return ppResult;
}


void inputForRowCol(int* row, int* col)
{
	printf("행(row)의 크기는 ? ");
	scanf("%d", row);
	printf("열(col)의 크기는 ? ");
	scanf("%d", col);
}	
