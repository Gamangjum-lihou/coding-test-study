// https://school.programmers.co.kr/learn/courses/30/lessons/12978

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(N, road, K) {
    const line = Array.from({length: N + 1}, () => [])
    const answer = Array.from({length: N + 1}, () => 500001);
    const queue = [];
    
    road.forEach((node) => {
        const [start, end, time] = node;
        
        // line[start]에 end값이 없으면 노드 추가
        if (!line[start].includes(end)) {
            line[start].push({ to: end, time });
        }
        
        // lined[end]에 start값이 없으면 노드 추가
        if (!line[end].includes(start)) {
            line[end].push({ to: start, time });
        }
    });
        
    // 최초 노드 설정
    answer[1] = 0;
    queue.push({ to: 1, time: 0 });

    // BFS 로직 시작
    while (queue.length > 0) {
        const node = queue.shift();

        // line[node.to]를 순회하며 line[node.to]의 값들을 노드에 추가
        // 이미 존재하는 노드더라도, 우회로의 시간이 더 짧으면 갱신한다.
        line[node.to].forEach((next) => {
            if (answer[next.to] > answer[node.to] + next.time) {
                answer[next.to] = answer[node.to] + next.time;
                queue.push(next);
            }
        });
    }
    
    return answer.filter((time) => time <= K).length;
}
