import java.util.ArrayList;
import java.util.List;

public class SixShop1 {
    public static String isPangram(List<String> strings) {
        // Write your code here

        String ans = "";
        for(int i=0; i<strings.size(); i++) {
            String tmp = "1";
            for(int j=97; j<=122; j++) {
                int res = strings.get(i).indexOf((char) j);
                if(res == -1) {
                    tmp = "0";
                    break;
                }
            }
            ans += tmp;
        }
        return ans;
    }

    public static void main(String[] args) {
        String case1 = "we promptly judged antique ivory buckles for the next prize";
        String case2 = "we promptly judged antique ivory buckles for the prize";
        String case3 = "the quick brown fox jumps over the lazy dog";
        String case4 = "the quick brown fox jump over the lazy dog";
        List<String> strings = new ArrayList<>();
        strings.add(case1);
        strings.add(case2);
        strings.add(case3);
        strings.add(case4);
        String result = isPangram(strings);
        System.out.println(result);
    }

}



