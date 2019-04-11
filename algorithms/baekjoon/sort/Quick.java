package baekjoon.sort;

public class Quick {
    public static void main(String[] args) {
        int[] arr = {5,3,1,4,2};
        Quick quick = new Quick();
        quick.quickSort(arr,0, arr.length-1);
    }


    public void quickSort(int arr[], int begin, int end) {
        if (begin < end) {
            int partitionIndex = partition(arr, begin, end);

            quickSort(arr, begin, partitionIndex-1);
            quickSort(arr, partitionIndex+1, end);
        }
    }

    private int partition(int arr[], int begin, int end) {
        CommonLog log = new CommonLog();
        int pivot = arr[end];
        int i = (begin-1);

        for (int j = begin; j < end; j++) {
            if (arr[j] <= pivot) {
                i++;

                int swapTemp = arr[i];
                arr[i] = arr[j];
                arr[j] = swapTemp;
            }
        }

        int swapTemp = arr[i+1];
        arr[i+1] = arr[end];
        arr[end] = swapTemp;
        log.printArr(arr);
        return i+1;
    }

}