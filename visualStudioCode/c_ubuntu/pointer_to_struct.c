#include <stdio.h>
#include <string.h>

struct s_student
{
	char name[20];
	int age;
	long number;
};

int main()
{
	struct s_student student = {0};
	struct s_student *pStudent = NULL;
	pStudent = &student;

	strcpy(pStudent->name, "Kim");
	pStudent->age = 27;
	pStudent->number=60121315;

	printf("포인터를 이용한 구조체 변수 접근\n");
	printf("이름 : %s\n", (*pStudent).name);
	printf("나이 : %d\n", (*pStudent).age);
	printf("학번 : %ld\n", (*pStudent).number);
	return 0;
}
