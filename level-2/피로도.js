// https://school.programmers.co.kr/learn/courses/30/lessons/87946

/*
 * 강철원
 */

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
