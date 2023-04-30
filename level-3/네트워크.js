// https://school.programmers.co.kr/learn/courses/30/lessons/43162

/*
 * 강철원
 */


function solution(n, computers) {
    const visited = [];
    let answer = 0;

    // 연결되어있는 것끼리 계속 콜백을해서 방문표시 
    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<computers[i].length; j++) {
            // 컴퓨터가 서로 연결되어있고 방문한적이 없었을 때
            if(computers[i][j] && !visited[j]){
                dfs(j);
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        // 방문되지 않았을 때
        if (!visited[i]) {
            dfs(i)
            answer++;
        }
    }
    return answer;
}

/*
 * 신현호
 */

/*
 * 이보리
 */
