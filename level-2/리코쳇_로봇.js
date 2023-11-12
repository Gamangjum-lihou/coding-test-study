// https://school.programmers.co.kr/learn/courses/30/lessons/169199?language=javascript

/*
 * 강철원
 */

/*
 * 신현호
 */

const start = {
    x: 0,
    y: 0,
}
const goal = {
    x: 0,
    y: 0,
}

const directionX = [1, -1, 0, 0];
const directionY = [0, 0, 1, -1];

function solution(board) {
    const parsedBoard = board.map((row) => row.split(''));
    
    for (let i = 0; i < parsedBoard.length; i += 1) {
        for (let j = 0; j < parsedBoard[0].length; j += 1) {
            if (parsedBoard[i][j] === 'G') {
                goal.x = j;
                goal.y = i;
            }
            
            if (parsedBoard[i][j] === 'R') {
                start.x = j;
                start.y = i;
            }
        }
    }
    
    return bfs(parsedBoard);
}

function bfs(board) {
    const queue = [];
    const visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(0));
    
    visited[start.y][start.x] = 1;
    queue.push({x: start.x, y: start.y, cnt: 0});
    
    while (queue.length) {
        const {x, y, cnt} = queue.shift();
        
        // 목표지점 도달 시 cnt 반환
        if (board[y][x] === 'G') {
            return cnt;
        }
        
        // 움직임
        for (let i = 0; i < 4; i += 1) {
            let moveX = x;
            let moveY = y;
            
            // 가능한 방향까지 슬라이딩
            while (moveCheck(moveX, moveY, board)) {
                const tempX = moveX + directionX[i];
                const tempY = moveY + directionY[i];
                
                // moveX, moveY값 갱신
                if (moveCheck(tempX, tempY, board)) {
                    moveX = tempX;
                    moveY = tempY;
                } else {
                    break;
                }
            }
            
            // 방문 여부 확인
            if (visited[moveY][moveX] === 1) {
                continue;
            }
            
            // 큐에 새로운 노드 삽입
            visited[moveY][moveX] = 1;
            queue.push({ x: moveX, y: moveY, cnt: cnt + 1 });
        }
    }
    
    return -1;
}

// 유효한 움직임인지 확인
function moveCheck(x, y, board) {
    return x >= 0 && x < board[0].length && y >= 0 && y < board.length && board[y][x] !== 'D'
}
