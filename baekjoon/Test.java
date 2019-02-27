import java.util.ArrayList;

public class Test {

    public static void main(String[] args) {
        int[] healths = {200, 120, 150};
        int[][] items = {{30, 100}, {500, 30}, {100, 400}};
        solution(healths, items);
        ArrayList<Integer> arr = getPrime(33);
        for (int i = 0; i < arr.size(); i++){
            System.out.print(arr.get(i) + " ");
        }
    }

    public static int[] solution(int[] healths, int[][] items) {
        boolean[] isUsed = new boolean[items.length];
        boolean[] isDiff = new boolean[healths.length];
        for (int i = 0; i < healths.length; i++) {
            for (int j = 0; j < items.length; j++) {
                if (healths[i] - items[j][1] >= 100 && !isUsed[j] && !isDiff[i]) {
                    isUsed[j] = true;
                    isDiff[i] = true;
                }
            }
        }
        ArrayList<Integer> arr = new ArrayList<>();
        for (int i = 0; i < isUsed.length; i++) {
            if (isUsed[i]) {
                arr.add(i+1);
            }
        }
        int[] answer = new int[arr.size()];
        for (int i = 0; i <arr.size(); i++) {
            answer[i] = arr.get(i);
        }
        return answer;
    }

    public static ArrayList<Integer> getPrime(int num) {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        int i = 2; // i : 나눌 대상
        boolean isPrime = true;

        while (i <= num) {
            isPrime = true;

            for (int n = 2; n < i; n++) {
                if (i % n == 0) {
                    isPrime = false;
                }
                continue;
            }

            if (isPrime == true)
                arr.add(i);
            i++;
        }
        return arr;
    }
}
