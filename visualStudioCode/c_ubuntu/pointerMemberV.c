#include <stdio.h>

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

int main()
{
	struct s_student student11 = {"Lee", 20, 4567};
	struct s_student student12 = {"Park", 21, 4568};

	struct s_student student21 = {"Choi", 20, 4567};
	struct s_student student22 = {"Han", 21, 4568};
	
	struct s_teacher teacher1 = {"Kim", 35, 1234};
	struct s_teacher teacher2 = {"Nam", 28, 1235};

	student11.pTeacher = &teacher1;
	student12.pTeacher = &teacher1;

	student21.pTeacher = &teacher2;
	student22.pTeacher = &teacher2;

	printf("포인터를 이용한 구조체 변수 접근\n");
	printf("학생 %s의 담임교사 이름 : %s\n", student11.name,student11.pTeacher->name);
	printf("학생 %s의 담임교사 교번 : %ld\n",student12.name,student12.pTeacher->number);
	printf("학생 %s의 담임교사 이름 : %s\n", student21.name,student21.pTeacher->name);
	printf("학생 %s의 담임교사 교번 : %ld\n",student22.name,student22.pTeacher->number);

	return 0;
}
