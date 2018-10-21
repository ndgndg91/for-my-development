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
	struct student students2[3];
	memset(students2,0,sizeof(students2));

	struct student students3[3] = {
		{"kim", 25, 45607},
		{"기리",28,60121315},
		{"Lee",23, 45609}
	};

	int i = 0;
	struct student students4[3] = {0};
	int size = sizeof(students4) / sizeof(struct student );

	for(i = 0; i < size ; i++ )
	{
		printf("이름 입력 : ");
		scanf("%s", students4[i].name);
		
		printf("나이 입력 : ");
		scanf("%d", &students4[i].age);

		printf("학번 입력 : ");
		scanf("%ld", &students4[i].number);
	}

	for(i = 0; i < size; i++)
	{
		printf("이름 : %s\n", students4[i].name);
		printf("나이 : %d\n", students4[i].age);
		printf("학번 : %ld\n", students4[i].number);
	}

	return 0;
}
