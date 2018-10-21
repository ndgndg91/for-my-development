#include <stdio.h>
#include <stdlib.h>

struct linked_list
{
	char name[20];
	int age;
	
	struct linked_list *left_link;
	struct linked_list *right_link;
};

int main()
{
	struct linked_list first_person =  {"남동길", 28, NULL, NULL};
	struct linked_list second_person = {"아무개", 30, NULL, NULL};
	struct linked_list third_person = {"박서방", 35, NULL, NULL};

	first_person.right_link = &second_person;
	second_person.left_link = &first_person;
	second_person.right_link = &third_person;
	third_person.left_link = &second_person;

	printf("첫번째 사람 : %s\t%d\n",first_person.name, first_person.age);
	printf("첫번째 사람의 오른쪽 사람 : %s\t%d\n",first_person.right_link->name, first_person.right_link->age);
	printf("두번째 사람의 왼쪽 사람 : %s\t%d\n",second_person.left_link->name, second_person.left_link->age);
	printf("두번째 사람의 오른쪽 사람 : %s\t%d\n",second_person.right_link->name, second_person.left_link->age);
	printf("세번째 사람의 왼쪽 사람 : %s\t%d\n",third_person.left_link->name, third_person.left_link->age);

	return 0;
}
