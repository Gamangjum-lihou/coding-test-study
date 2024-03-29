// https://school.programmers.co.kr/learn/courses/30/lessons/43164

/*
 * 강철원
 */

function solution(tickets) {
    const answer = [];
    function dfs(airport, tickets, path) {
        const newPath = [...path, airport];
        
        // dfs 끝나는 조건
        if(!tickets.length) {
            answer.push(newPath);
            return
        }
        
        tickets.map((ticket, index) => {
            // from이 airport와 같을 때 -> 이전 ticket의 도착지와 이번 ticket의 출발지가 같을 때
                if(ticket[0] === airport){
                    const copiedTickets = [...tickets];
                    const [[from, to]] = copiedTickets.splice(index, 1);
                    dfs(to, copiedTickets, newPath)
                }
            });
    };
    dfs("ICN", tickets, []);
    // 문제 조건에 맞게 알파벳 순서가 앞서는 경로를 return
    return answer.sort()[0];
}

/*
 * 신현호
 */

const route = [];

function solution(tickets) {
    const visited = new Array(tickets.length).fill(0);
    
    dfs(tickets.sort(), 'ICN', 0, visited);
    return route;
}

function dfs(tickets, start, idx, visited) { 
    route.push(start);
    if (idx === tickets.length)
        return true;
    
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === start && !visited[i]) {
            visited[i] = 1;
            if (dfs(tickets, tickets[i][1], idx + 1, visited))
                return true;
            visited[i] = 0;
        }
    }
    route.pop();
    
    return false;
}


/*
 * 이보리
 */

function solution(tickets) {
    const start = "ICN"
    const travelRoute = [];
    const visited = Array.from({length: tickets.length}, _ => false);
    
    // 알파벳 순서로 티켓 정렬
    tickets.sort();
    
    const dfs = (path, index) => {
        const airport = path[path.length - 1];
        
        // 모든 도시를 방문했을 경우 여행경로 생성
        if(index === tickets.length) return travelRoute.push(...path); 
        // 여행 경로가 생성되었을 경우 이후 다른 여행경로를 생성하지 않기 위해 종료
        // 정렬한 상태이므로 다른 여행경로를 고려할 필요가 없다.
        if (travelRoute.length) return;
        
        // 항공권 순회
        tickets.forEach((ticket, idx) => {
            const [departure, arrive] = ticket;

            // 방문 여부, 다음 항공권 출발지 확인
            if (!visited[idx] && departure === airport) {
                visited[idx] = true;
                dfs([...path, arrive], index + 1);
                // 모든 도시를 방문할 수 없는 경우, 방문처리 하지 않고 다음 항공권을 확인
                visited[idx] = false;
            }
        })
    }
    
    dfs([start], 0);
    
    return travelRoute;
}
