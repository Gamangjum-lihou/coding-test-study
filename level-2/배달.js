// https://school.programmers.co.kr/learn/courses/30/lessons/12978

/*
 * 강철원
 */

/*
 * 이보리
 */

// 출발지에서 마을 간 이동할 때 도로를 지나는데 걸리는 시간을 저장하는 배열
const getDistance = (N) => {
    return Array.from(
        { length: N + 1 }, 
        // 최소값마다 갱신하므로 초기값을 Number.MAX_SAFE_INTEGER로 설정
        (_, index) => index === 1 ? 0 : Number.MAX_SAFE_INTEGER);
}

// 각 마을과 연결된 마을, 도로를 지나는데 걸리는 시간을 저장
const getRoute = (N, road) => {
    // 2차원 빈 배열 생성 
    const route = Array.from({ length: N + 1 },  () => []);
    
    // road를 순회하면서 각 마을과 연결된 마을, 도로를 지나는데 걸리는 시간을 route에 저장
    road.forEach(([villageA, villageB, time]) => {
        route[villageA].push({to: villageB, time});
        route[villageB].push({to: villageA, time});
    });
    
    return route;
}

function solution(N, road, K) {
    const distance = getDistance(N);
    const route = getRoute(N, road);
    
    // queue 생성 및 출발점인 1번 마을로 초기화
    const queue = [{ to: 1, time: 0 }];
    
    // queue가 빈 배열이 될 때까지 반복
    while(queue.length > 0) {
        // 현재 정보를 가져음
        const { to, time } = queue.pop();
        
        // route에 저장된 현재 마을과 연결된 마을 정보를 가져와 순회
        route[to].forEach((village) => {
            // 출발지에서 현재 마을까지 걸리는 시간와 다음 마을까지 걸리는 시간을 계산
            const calculateTime = distance[to] + village.time;
            
            // 다음 마을까지 걸리는 시간이 calculateTime보다 클 경우,
            if(distance[village.to] > calculateTime) {
                // calculateTime로 변경하여, 다음 마을까지 걸리는 최소 시간을 계산
                distance[village.to] = calculateTime;
                // 다음 마을을 queue에 넣어줌
                queue.push(village);
            }
        })
    }
    
    // 출발지를 기준으로 각 마을로 이동하는데 걸리는 시간 배열
    // K 시간 이내의 마을만 걸러내어 결과값 반환
    const result = distance.filter(time => time <= K).length;

    return result;
}

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
