// https://school.programmers.co.kr/learn/courses/30/lessons/87946

/*
 * 강철원
 */

let answer = 0;

function solution(k, dungeons) {
    const check = Array.from(dungeons, i => 0)
    DFS(k, 0, dungeons, check);
    return answer;
}


function DFS(k, cnt, dungeons, check) {
    // cnt : 탐험한 던전 개수, k: 남은 피로도
  answer = Math.max(answer, cnt);
  for (let i = 0; i < dungeons.length; i++) {
      // ["최소 필요 피로도", "소모 피로도"]
      // 경로 첫 방문이면서 남은 피로도가 최소 필요 피로도 보다 크다면
    if (check[i] === 0 && k >= dungeons[i][0]) {
      check[i] = 1; // 던전 방문 했음 표시
      DFS(k - dungeons[i][1], cnt + 1, dungeons, check); // 다음 던전 으로 이동
      check[i] = 0; // 현재 방문한 던전 이후 다시 이전 던전으로 되돌아가서 다른 던전 이동을 위해 초기화
    }
  }
}

/*
 * 김민재
 */

/*
 * 신현호
 */

let max = -1;

function solution(k, dungeons) {
    // k는 현재 피로도
    // dungeons는 최소 필요 피로도, 소모 피로도 가 쌍으로 들어있음
    const curr = new Array(dungeons.length).fill(0);
    
    dfs(k, dungeons, 0, curr);
    return max;
}

function dfs(fatigue, dungeons, done, curr) { 
    if (done >= max)
        max = done;
    
    for (let i = 0; i < dungeons.length; i++) {
        if (curr[i] === 0 && fatigue >= dungeons[i][0]) {
            curr[i] = 1;
            dfs(fatigue - dungeons[i][1], dungeons, done + 1, curr);
            curr[i] = 0;
        }
    }
}


/*
 * 이예슬
 */
