// https://school.programmers.co.kr/learn/courses/30/lessons/42890

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(relation) {
    const rowLength = relation.length;
    const colLength = relation[0].length;
    
    return bfs(rowLength, colLength, relation);
}

function bfs(rowLength, colLength, relation) {
    const queue = Array.from({ length: colLength }, (_, i) => [i]);
    const candidate = [];
        
    while (queue.length) {
        const node = queue.shift();
        const set = new Set();
        
        // 최소성을 만족하는지 여부 조사
        if (candidate.find((key) => key.every(val => node.includes(val)))) {
            continue ;
        }
        
        // set에 배열 그대로 넣는건 의미가 없으니 JSON.stringify 써서 문자열로 변환
        for (let i = 0; i < rowLength; i += 1) {
            set.add(JSON.stringify(node.map((idx) => relation[i][idx])));
        }
        
        // 유일성을 만족한다면 candidate 배열에 push
        if (set.size === rowLength) {
            candidate.push(node);
        }
        // 유일성을 만족하지 못한다면 column을 하나 더 추가한다
        else {
            const start = node[node.length - 1] + 1;
            for (let i = start; i < colLength; i++) {
                queue.push([...node, i]);
            }
        }
    }
    return candidate.length;
}
