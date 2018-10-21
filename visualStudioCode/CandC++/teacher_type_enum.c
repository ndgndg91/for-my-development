#include <stdio.h>

typedef enum _Class_Type { TYPE_KOR = 1, TYPE_ENG, TYPE_MATH} Class_Type;

typedef struct _s_teacher
{
    unsigned long number;
    Class_Type class_type;
} teacher, *pTeacher;

void print_teacher_info(teacher t);
char* get_class_name(Class_Type grade);

int main(int argc, char const *argv[])
{
    teacher t1 = {1, TYPE_KOR};
    teacher t2 = {0};

    t2.number = 2;
    t2.class_type = TYPE_MATH;

    print_teacher_info(t1);
    print_teacher_info(t2);
    return 0;
}

void print_teacher_info(teacher t)
{
    printf("Teacher Number : %u \t Teacher Class : %s\n", t.number, get_class_name(t.class_type));
}

char* get_class_name(Class_Type grade)
{
    char* result = NULL;

    switch(grade)
    {
        case TYPE_KOR:
            result = "KOREAN";
            break;
        case TYPE_ENG:
            result = "ENGLISH";
            break;
        case TYPE_MATH:
            result = "MATH";
            break;
        default:
            result = "NONE";
            break;
    }

    return result;
}