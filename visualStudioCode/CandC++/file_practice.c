#include <stdio.h>
#include <errno.h>
#include <string.h>

typedef enum _product_size {SIZE_S = 1, SIZE_M, SIZE_L, SIZE_XL, SIZE_XXL} PRODUCT_SIZE;
typedef enum _product_type {TYPE_OUTER=1, TYPE_TOP, TYPE_BOTTOM} PRODUCT_TYPE;
typedef struct _cloth
{
    char product_name[64];
    unsigned product_price;
    char brand_name[64];
    PRODUCT_TYPE product_type;
    PRODUCT_SIZE product_size;
} cloth;

void printPS(PRODUCT_SIZE ps);
void printPT(PRODUCT_TYPE pt);

int main(int argc, char const *argv[])
{
    /* code */
    FILE *outfile = NULL;
    FILE *infile = NULL;
    int i = 0;
    int num_cloth = 0;

    cloth temp_product = {0};

    printf("How many products are here?");
    scanf("%d", &num_cloth);

    if(num_cloth > 0 ){
        outfile = fopen( "C:\\temp\\cloth.dat", "w");
        if(NULL != outfile){
            printf("Success !! fopen() [%s] [%s]\n", "C:\\temp\\cloth.dat", "wb");

            for(i = 0; i < num_cloth; i++){
                printf("What is the Product Name?\t");
                scanf("%s", temp_product.product_name);

                printf("How much is Product's price?\t");
                scanf("%d",&temp_product.product_price);

                printf("What is the Brand Name?\t");
                scanf("%s", temp_product.brand_name);

                printf("What is the Product Type?(1 : Outer \t 2 : Top \t 3 : Bottom)\t");
                scanf("%d", &temp_product.product_type);

                printf("What is the Product Size?(1 : S \t 2: M \t 3 : L \t 4 : XL \t 5 : XXL)\t");
                scanf("%d", &temp_product.product_size);

                fwrite(&temp_product, sizeof(cloth), 1, outfile);
                printf("fwrite() Result : %d\n", errno);
            }

            fclose(outfile);
        }
        else
        {
            printf("Fail !! fopen() [%s] [%s]", "C:\\temp\\cloth.dat", "w");
        }
    }
    cloth read = {0};
    infile = fopen("C:\\temp\\cloth.dat", "r");
    if(NULL != infile){
        printf("File[%s] , Mode[%s] fopen() Success\n", "C:\\temp\\cloth.dat", "r");

        while(fread(&read, sizeof(cloth), 1, infile))
        {
            printf("Product Name : %s\nBrand Name : %s\nProduct Price %d\n",
            read.product_name, read.brand_name, read.product_price);
            printPS(read.product_size);
            printPT(read.product_type);
        }
    
        printf("fread() Success : %d \n", errno);
        
        fclose(infile);

    }
    else
    {
        printf("File[%s], Mode[%s] fopen() Fail, ErrorNo : %d\n","C:\\temp\\cloth.dat", "r", errno);
    }
    return 0;
}


void printPS(PRODUCT_SIZE ps){
    char returnVal[3] = {0};
    switch(ps){
        case SIZE_S:
            strcpy(returnVal,"S");
            break;
        case SIZE_M:
            strcpy(returnVal,"M");
            break;
        case SIZE_L:
            strcpy(returnVal,"L");
            break;
        case SIZE_XL:
            strcpy(returnVal,"XL");
            break;
        case SIZE_XXL:
            strcpy(returnVal,"XXL");
            break;
        default:
            break;
    }
    printf("%s\n", returnVal);
}

void printPT(PRODUCT_TYPE pt){
    char returnVal[6] = {0};
    switch(pt){
        case TYPE_TOP:
            strcpy(returnVal,"TOP");
            break;
        case TYPE_OUTER:
            strcpy(returnVal,"OUTER");
            break;
        case TYPE_BOTTOM:
            strcpy(returnVal,"BOTTOM");
            break;
        default:
            break;
    }
    printf("%s\n", returnVal);
}