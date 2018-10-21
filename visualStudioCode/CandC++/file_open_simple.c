#include <stdio.h>
#include <errno.h>

int main(int argc, char const *argv[])
{
    FILE *pfile = NULL;
    FILE *pfile2 = NULL;
    char *file_path = "C:\\temp\\1.txt";

    char msg[] = "ABC\r\n";

    pfile = fopen(file_path, "wb");
    if(NULL != pfile){
        printf("file[%s], fopen() Success!\n",file_path);

        fputs(msg, pfile);
        fprintf(pfile, "%s%d", msg, 10);

        fclose(pfile);
    }else{
        printf("file[%s], fopen() Fail! ErrorNo : %d\n",file_path, errno);
    }
    pfile2 = fopen(file_path, "rb");
    char buffer[32];
    int int_value;
    if(NULL != pfile2){
        printf("file[%s], fopen() Success!\n",file_path);

        fgets(buffer, sizeof(buffer), pfile2);    
        printf("fgets() Result : [%s]\n", buffer);

        fscanf(pfile2, "%s%d", buffer, &int_value);
        printf("fscanf() Result : [%s][%d]\n", buffer, int_value);

        fclose(pfile2); 
    }else{
        printf("file[%s], fopen() Fail! ErrorNo : %d\n",file_path, errno);
    }
    return 0;
}
