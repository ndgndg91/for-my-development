#include <stdio.h>
#include <errno.h>
#include <string.h>

typedef struct _my_student
{
    char str_name[12];
    int age;
    int gender;
} my_student;

int main(int argc, char const *argv[])
{
    FILE *pfile = NULL;
    char buffer[1024] = {0};
    int ret = 0;
    char file_path[] = "C:\\temp\\1.bin";
    my_student student = {0} , student2 = {0};
    

    pfile = fopen(file_path, "wb");
    if(NULL != pfile){
        printf("File[%s] , Mode[%s] fopen() Success\n", file_path, "wb");

        strcpy(student.str_name, "Lee, Jin");
        student.age = 20;
        student.gender = 1;

        ret = fwrite(&student, sizeof(student), 1, pfile);
        printf("fwrite() Success : %d \n" ,ret);

        fclose(pfile);
    }
    else{
        printf("File[%s], Mode[%s] fopen() Fail, ErrorNo : %d\n",file_path, "Wb", errno);
    }

    pfile = fopen(file_path, "rb");
    if(NULL != pfile){
        printf("File[%s] , Mode[%s] fopen() Success\n", file_path, "rb");

        ret = fread(buffer, 1, sizeof(buffer), pfile);
        printf("fread() Success : %d \n", ret);

        if(ret == sizeof(my_student))
        {
            memcpy(&student2, buffer, sizeof(my_student));
            printf("student Name : %s\n", student2.str_name);
            printf("student Age : %d\n", student2.age);
            printf("student Sex : %d\n", student2.gender);
        }
        else
        {
            printf("Structure student Size %d Diffrent\n", sizeof(my_student));
        }

        fclose(pfile);

    }
    else
    {
        printf("File[%s], Mode[%s] fopen() Fail, ErrorNo : %d\n",file_path, "rb", errno);
    }

    return 0;
}
