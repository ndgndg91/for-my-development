package programers.Greedy.GymSuit;

import java.util.HashMap;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        HashMap<Integer,Integer> hm = new HashMap<>();
        for (int i = 0; i < reserve.length; i++) {
            hm.put(reserve[i], 1);
        }
        for (int i = 0; i < lost.length; i++) {
            if(lost[i] > 1)
                if (null == hm.get(lost[i]-1)) {
                    if (null != hm.get(lost[i] + 1))
                        answer++;
                } else {

                }
            else
                if(null != hm.get(lost[i]+1))
                    answer++;
        }
        return answer;
    }
}