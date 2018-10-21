#include <stdio.h>
#include <string.h>

int main()
{
	int result = 0;

	result = strcmp("ABC","ABC");
	printf("strcmp() 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "ABC", result);

	result = strcmp("ABC","abc");
	printf("strcmp() 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "abc", result);

	result = strcmp("ABC","AB");
	printf("strcmp() 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "AB", result);

	result = strcmp("ABC","ab");
	printf("strcmp() 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "ab", result);

	result = strncmp("ABC","abc",2);
	printf("strncmp(2) 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "abc", result);

	result =strncmp("ABC", "AB", 2);
	printf("strncmp(2) 함수 문자열 비교 : [%s][%s] => %d\n", "ABC", "AB", result);

	result = strncmp("ab", "ABC",2);
	printf("strncmp(2) 함수 문자열 비교 : [%s][%s] => %d\n", "ab", "ABC", result);


	return 0;

}
