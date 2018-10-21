#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** alloc_dyn_string_array(int nRow);;
char* alloc_string(int nSize);
char* alloc_string_by_source(char *ppSource);
void print_string_array(char** ppResult, int nRow);
void free_dyn_string(char** ppResult,int nRow);


int main()
{
	int row = 3;
	int i = 0 , j = 0 ;
	char** ppResult = NULL;
	
	ppResult = alloc_dyn_string_array(row);
	if ( NULL != ppResult )
	{
		printf("값 설정하기 이전 : \n");
		print_string_array(ppResult, row );

		ppResult[0] = alloc_string_by_source("첫 번째 문자열");
		ppResult[1] = alloc_string(100);
		strcpy(ppResult[1], "두번째 문자열");

		printf("값 설정한 이후 : \n");
		print_string_array(ppResult, row);
		free_dyn_string(ppResult, row);
	}
	return 0;
}


char** alloc_dyn_string_array(int nRow)
{
	char** ppResult = NULL;
	int i =0;
	if(nRow > 0)
	{
		ppResult = (char**) malloc(sizeof(char*) * nRow);
		if(NULL != ppResult)
		{
			memset(ppResult, 0 ,sizeof(char*) * nRow);
		}
	}
	else
	{
		printf("오류 : alloc_dyn_string_array() 매개변수 \n");
	}

	return ppResult;
}


char* alloc_string(int nSize)
{
	char* pResult = NULL;
	if(nSize > 0 )
	{
		pResult =(char*)malloc(sizeof(char) * nSize);
		if(pResult != NULL)
		{
			memset(pResult,0, sizeof(char) * nSize);
		}
	}

	return pResult;
}


char* alloc_string_by_source(char* pszSource)
{
	char* pResult =NULL;
	int nSize = 0;
	
	if(pszSource != NULL && pszSource[0] != '\0')
	{
		nSize = strlen(pszSource);	//원본 문자열 길이 확인
		pResult = alloc_string(nSize +1 );	//원본 문자열 길이 + 1 만큼 메모리 할당
		if(pResult != NULL)	// 성공 여부 확인
		{
			strcpy(pResult, pszSource);	//문자열 복사
		}
	}
	
	return pResult;
}


void print_string_array(char** ppResult, int nRow)
{
	int i = 0 , j=0;
	if(NULL != ppResult && nRow > 0)
	{
		for( i = 0; i < nRow; i++)
		{
			if(NULL != ppResult[i])
			{
				printf("[%d][%s]\n",i,ppResult[i]);
			}
			else
			{
				printf("[%d]내용이 없습니다\n",i);
			}
		}
	}
}

void free_dyn_string(char** ppResult, int nRow)
{
	int i = 0 , j = 0;
	if(NULL != ppResult && nRow > 0 )
	{
		for( i = 0; i < nRow; i++)
		{
			if(NULL != ppResult[i])
			{
				free(ppResult[i]);
			}
		}
		free(ppResult);
	}

	
}
