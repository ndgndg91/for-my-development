#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int** alloc_dyn_array(int nRow, int nCol);
void print_array(int** ppResult, int nRow, int nCol);
void free_dyn_array(int** ppResult, int nRow);

int main()
{
	int row = 2, col =3;
	int i = 0, j=0;
	int **ppResult = NULL;

	ppResult = alloc_dyn_array(row,col);
	if(NULL != ppResult)
	{
		printf("값 설정하기 이전 : \n");
		print_array(ppResult,row,col);
	
		printf("값 설정한 이후 : \n");
		ppResult[0][0] =1;
		ppResult[0][2] = 2;
		ppResult[1][0] = 3;
		ppResult[1][2] = 4;

		print_array(ppResult, row ,col);
		free_dyn_array(ppResult, row);
	}
	return 0;
}


int** alloc_dyn_array(int nRow, int nCol)
{
	int** ppResult = NULL;
	int i = 0;
	if(nRow > 0 && nCol > 0)
	{
		ppResult = (int**)malloc(sizeof(int*) * nRow);
		if(NULL != ppResult)
		{
			for(i= 0; i < nRow; i++)
			{
				ppResult[i] = (int *) malloc(sizeof(int) * nCol);
				if(NULL != ppResult[i])
				{
					memset(ppResult[i], 0 ,sizeof(int) * nCol);
				}
				else
				{
					int j = 0;
					for(j=0; j< i; j++)
					{
						free(ppResult[i]);
						ppResult[j] = NULL;
					}
					ppResult =NULL;
					break;
				}
			}
		}
	}
	else
	{
		printf("오류: alloc_dyn_array() 매개변수 \n");
	}
	
	return ppResult;
}

void free_dyn_array(int** ppResult, int nRow)
{
	int i = 0, j=0;
	if(NULL != ppResult && nRow > 0 )
	{
		for(i = 0; i < nRow; i++)
		{
			if(NULL != ppResult[i])
			{
				free(ppResult[i]);
			}
		}
		free(ppResult);
	}
}

void print_array(int** ppResult, int nRow, int nCol)
{
	int i = 0, j = 0;
	if(NULL != ppResult && nRow > 0 && nCol > 0 )
	{
		for( i = 0; i < nRow; i++ )
		{
			for( j = 0; j < nCol; j ++ )
			{
				printf("%d ",ppResult[i][j]);
				//printf("%d ",*(*(ppResult +i)+j));	
			}
			printf("\n");
		}
	}
}


