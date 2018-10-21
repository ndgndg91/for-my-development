#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int get_student_num();
int alloc_students_scores(int num_student, int** ppscore_kor, int** ppscore_eng, int** ppscore_math
				, int** ppscore_total);
char** alloc_students_name(int num_student);
void input_students_info(int num_student, int* pscore_kor, int* pscore_eng, int* pscore_math,
			int* pscore_total,  char **ppstudent_name);
void print_avg(int num_student, int* pscore_total, char** ppstudent_name);
void print_avgPerSub_totalAvg(int num_student,int* pscore_kor, int* pscore_eng, int* pscore_math, int* pscore_total);
void freeMemory(int num_student,int* pscore_kor, int* pscore_eng, int* pscore_math, int* pscore_total, char** ppstudent_name);

int main()
{
	int num_student = 0;
	int *pscore_kor = NULL;
	int *pscore_eng = NULL;
	int *pscore_math = NULL;
	int *pscore_total = NULL;
	char **ppstudent_name = NULL;

	num_student = get_student_num();
	if(num_student <= 0)
	{
		printf("학생 수는 0보다 커야합니다.\n");
		return 0;
	}
	
	if(alloc_students_scores(num_student, &pscore_kor, &pscore_eng, &pscore_math, &pscore_total))
	{
		ppstudent_name = (char**)alloc_students_name(num_student);
		if(NULL != ppstudent_name)
		{
			input_students_info(num_student, pscore_kor, pscore_eng, pscore_math, pscore_total,
						 ppstudent_name);
			print_avg(num_student, pscore_total, ppstudent_name);
			print_avgPerSub_totalAvg(num_student, pscore_kor, pscore_eng, pscore_math, pscore_total);
			freeMemory(num_student, pscore_kor, pscore_eng, pscore_math, pscore_total, ppstudent_name);
		}
	}

	return 0;
}
void freeMemory(int num_student,int* pscore_kor, int* pscore_eng, int* pscore_math, int* pscore_total, char** ppstudent_name)
{
	if(NULL != pscore_kor)
	{
		printf("pscore_kor 메모리 해제합니다.\n");
		free(pscore_kor);
	}
	if(NULL != pscore_eng)
	{
		printf("pscore_eng 메모리 해제합니다.\n");
		free(pscore_eng);
	}
	if(NULL != pscore_math)
	{
		printf("pscore_math 메모리 해제합니다.\n");
		free(pscore_math);
	}
	if(NULL != pscore_total)
	{
		printf("pscore_total 메모리 해제합니다.\n");
		free(pscore_total); 
	}
	for(int i = 0; i< num_student; i++)
	{
		if(NULL != ppstudent_name[i])
		{
			printf("ppstudent_name[%d] 메모리 해제합니다.\n",i);
			free(ppstudent_name[i]);
		}
	}
	printf("ppstudent_name 메모리 해제합니다.\n");
	free(ppstudent_name);
}

void print_avgPerSub_totalAvg(int num_student, int* pscore_kor, int* pscore_eng, int* pscore_math, int* pscore_total)
{
	double korAvg = 0;
	double engAvg = 0;
	double mathAvg = 0;
	double totalAvg = 0;
	for(int i =0; i< num_student; i++)
	{
		korAvg += (double)pscore_kor[i];
		engAvg += (double)pscore_eng[i];
		mathAvg += (double)pscore_math[i];
		totalAvg += (double)pscore_total[i];
	}
	printf("국어 평균 : %.3f\n",korAvg/num_student);
	printf("영어 평균 : %.3f\n",engAvg/num_student);
	printf("수학 평균 : %.3f\n",mathAvg/num_student);
	printf("전체 평균 : %.3f\n",totalAvg/(num_student*3));

}
void print_avg(int num_student, int* pscore_total, char** ppstudent_name)
{
	double avg = 0;
	for(int i = 0 ; i < num_student; i++)
	{
		avg = ((double)pscore_total[i] ) / 3;
		printf("%d 번째 학생 이름 : %s\n",(i+1),*(ppstudent_name + i) );
		printf("%d 번째 학생 평균 점수 : %.3f\n",(i+1),avg );
	}
}

void input_students_info(int num_student, int* pscore_kor, int* pscore_eng, int* pscore_math,
			int* pscore_total, char** ppstudent_name)
{
	if(NULL != pscore_kor && NULL != pscore_eng && NULL != pscore_math && NULL != ppstudent_name)
	{
		for(int i = 0; i<num_student; i++)
		{
			printf("%d 번째 이름은 ?",(i+1));
			scanf("%s",*(ppstudent_name+i));
			printf("%d 번째 학생의 국어 점수는?",(i+1));
			scanf("%d",(pscore_kor+i));
			printf("%d 번째 학생의 영어 점수는?",(i+1));
			scanf("%d",(pscore_eng+i));
			printf("%d 번째 학생의 수학 점수는?",(i+1));
			scanf("%d",(pscore_math+i));
			pscore_total[i] = pscore_kor[i] + pscore_eng[i] + pscore_math[i];
		}
		for(int j = 0; j< num_student; j++)
		{
			printf("%d번째 학생의 이름 : %s\n",(j+1), *(ppstudent_name+j));
			printf("%d번째 학생의 국어 점수  : %d\n",(j+1),pscore_kor[j]);
			printf("%d번째 학생의 영어 점수  : %d\n",(j+1),pscore_eng[j]);
			printf("%d번째 학생의 수학 점수  : %d\n",(j+1),pscore_math[j]);
			printf("%d번째 학생의 총  점수  : %d\n",(j+1),pscore_total[j]);
		}
	}else{
		printf("메모리 할당 실패했음\n");
	}


}

int get_student_num()
{
	int num = 0;
	printf("학생 수는?");
	scanf("%d",&num);
	return num;
}
int alloc_students_scores(int num_student, int** ppscore_kor, int** ppscore_eng, int** ppscore_math
				, int** ppscore_total)
{
	*ppscore_kor = (int*)malloc(sizeof(int) * num_student);
	*ppscore_eng = (int*)malloc(sizeof(int) * num_student);
	*ppscore_math = (int*)malloc(sizeof(int) * num_student);
	*ppscore_total = (int*)malloc(sizeof(int) * num_student);
	if(NULL != ppscore_kor && NULL != ppscore_eng && NULL != ppscore_math && NULL != ppscore_total)
	{
		memset(*ppscore_kor,0, sizeof(int) * num_student);
		memset(*ppscore_eng,0, sizeof(int) * num_student);
		memset(*ppscore_math,0, sizeof(int) * num_student);
		memset(*ppscore_total,0, sizeof(int) * num_student);
		printf("국어점수 배열 : %p\n",*ppscore_kor);
		printf("영어점수 배열 : %p\n",*ppscore_eng);
		printf("수학점수 배열 : %p\n",*ppscore_math);
		printf("총점수 배열 :%p\n",*ppscore_total);
		for(int i = 0; i< num_student; i++)
		{
			printf("국어점수 배열 : %d\n",*(*ppscore_kor+i));
			printf("영어점수 배열 : %d\n",*(*ppscore_eng+i));
			printf("수학점수 배열 : %d\n",*(*ppscore_math+i));
			printf("총점수 배열 : %d\n",*(*ppscore_total+i));

		}
		return 1;
	}
	else
	{
		return 0;
	}
}
char** alloc_students_name(int num_student)
{
	char** ppResult = NULL;
	int i =0;
	if(num_student > 0)
	{
		ppResult = (char**)malloc(sizeof(char*) * num_student);
		if(NULL != ppResult)
		{
			for(i = 0; i < num_student; i++)
			{
				ppResult[i] = (char*)malloc(sizeof(char) * 1024);
				if(NULL != ppResult[i])
				{
					memset(ppResult[i],'\0',sizeof(char) * 1024);
				}
				else
				{
					int j = 0;
					for(j = 0; j< i; j++)
					{
						if(NULL != ppResult[i])
						{
							free(ppResult[i]);
							ppResult[i] = NULL;
						}
					}
					ppResult = NULL;
					break;
				}
			}
		}
	
	}
	return ppResult; 
	 
}
