#include <stdio.h>
#include <string.h>

struct student
{
	char name[20];
	int age;
	long number;
};

int main()
{
	struct student students[3] = {0};

	strcpy(students[2].name, "남동길");
	students[2].age = 28;
	students[2].number = 60121315;

	printf("이름 : %s\n", students[2].name);
	printf("나이 : %d\n", students[2].age);
	printf("학번 : %ld\n", students[2].number);

	return 0;
}
