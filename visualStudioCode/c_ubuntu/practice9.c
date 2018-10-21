#include <stdio.h>
#include <stdlib.h>

struct s_teacher
{
	char name[20];
	int age;
	long number;
};
struct s_student
{
	char name[20];
	int age;
	long number;
	
	struct s_teacher* pTeacher; //포인터 변수
};

void inputCounts(int *sCnt, int *tCnt);

int main()
{
	int sCnt =0, tCnt =0;
	inputCounts(&sCnt, &tCnt);
	if(sCnt <= 0 || tCnt <= 0)
	{
		printf("선생과 학생수는 1명 이상이여야 됩니다.\n");
		return 0;
	}
	printf("선생 수 : %d, \t 학생 수  : %d\n", tCnt, sCnt);
	struct s_teacher *pTeachers =NULL;
	struct s_student *pStudents =NULL;
	pTeachers = (struct s_teacher *)malloc(sizeof(struct s_teacher) * tCnt);
	//memset(pTeachers, 0 , sizeof(struct s_teacher) * tCnt);
	pStudents = (struct s_student *)malloc(sizeof(struct s_student) * sCnt);
	//memset(pStudents, 0 , sizeof(struct s_student) * sCnt);
	if(NULL != pTeachers && NULL != pStudents)
	{
		for(int i =0; i < tCnt; i++ )
		{
			printf("선생 이름은? : ");
			scanf("%s",pTeachers[i].name);

			printf("선생 나이는? : ");
			scanf("%d",&pTeachers[i].age);

			printf("선생 교번은? : ");
			scanf("%ld",&pTeachers[i].number);
		}
		for(int j =0; j < sCnt; j++)
		{
			printf("학생 이름은? : ");
			scanf("%s",pStudents[j].name);

			printf("학생 나이는? : ");
			scanf("%d",&pStudents[j].age);

			printf("학생 학번은? : ");
			scanf("%ld",&pStudents[j].number);

		}
		for(int i = 0; i< tCnt; i++)
		{
			printf("선생 이름 : %s \t 선생 나이 : %d \t 선생 교번 : %ld \n",pTeachers[i].name, pTeachers[i].age, pTeachers[i].number);

		}
		for(int j =0; j <sCnt; j++)
		{
			printf("학생 이름 : %s \t 학생 나이 : %d \t 학생 학번 : %ld \n",pStudents[j].name, pStudents[j].age, pStudents[j].number);
		}
		free(pTeachers);
		free(pStudents);
	
	}
	else
	{
		printf("메모리 할당에 실패했습니다!!\n");
	}
	return 0;
}

void inputCounts(int *sCnt, int *tCnt)
{
	printf("선생 수는?");
	scanf("%d",tCnt);

	printf("학생 수는?");
	scanf("%d",sCnt);
}
