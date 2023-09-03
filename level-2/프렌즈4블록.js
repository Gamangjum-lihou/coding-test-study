// https://school.programmers.co.kr/learn/courses/30/lessons/12913

/*
 * 강철원
 */

function solution(m, n, board) {
    let result = 0;
    
    while (true) {
        const matchingBlocks = new Set();

        // 2x2 블록의 일치 여부 확인
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = board[i][j];
                const next = board[i][j + 1];
                const belowCurrent = board[i + 1][j];
                const belowNext = board[i + 1][j + 1];
                
                if (current === "0") {
                    continue;
                }
                
                const isAllSame = current === next && current === belowCurrent && belowCurrent === belowNext

                if(isAllSame) {
                    matchingBlocks.add(`${i},${j}`);
                    matchingBlocks.add(`${i},${j + 1}`);
                    matchingBlocks.add(`${i + 1},${j}`);
                    matchingBlocks.add(`${i + 1},${j + 1}`);
                }
            }
        }
        
        // 2x2 블록 일치가 하나도 없을 때
        if (matchingBlocks.size === 0) {
            break;
        }

        // 일치하는 블록 처리 및 보드 수정
        const newBoard = board.map(row => row.split('')); // 문자열을 배열로 변경
        matchingBlocks.forEach(pos => {
            const [x, y] = pos.split(',').map(Number);
            newBoard[x][y] = '0';  // 0 은 해당 블록 제거되었다는 뜻
        });

        // 보드 재구성
        const stackedColumns = Array.from({ length: n }, () => []);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (newBoard[i][j] !== "0") {
                    stackedColumns[j].push(newBoard[i][j]);
                }
            }
        }

        // 블록을 보드에 다시 적용
        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i >= 0; i--) {
                if (stackedColumns[j].length) {
                    newBoard[i][j] = stackedColumns[j].pop();
                } else {
                    newBoard[i][j] = '0';
                }
            }
        }

        board = newBoard.map(row => row.join('')); // 배열을 문자열로 변경
        result += matchingBlocks.size;
    }

    return result;
}

/*
 * 이보리
 */

const EMPTY_BLOCK = 0;

function solution(m, n, board) {
    // board를 2차원 배열로 변환하여 복사
    const blockBoard = board.map(v => v.split(''));
    
    while(true) {
        // 삭제할 블록(2×2로 배치된 블록)의 시작 인덱스 저장
        const deleteBlocks = [];
        
        // blockBoard를 순회하며 삭제할 블록의 인덱스 저장
        for (let row = 0; row < m - 1; row++) {
            for (let column = 0; column < n - 1; column++) {
                // 기준이 되는 블록
                const referenceBlock = blockBoard[row][column];
                // 2×2로 배치된 블록인지 확인
                const canDeleteBlocks = referenceBlock 
                    && referenceBlock === blockBoard[row][column + 1] 
                    && referenceBlock === blockBoard[row + 1][column] 
                    && referenceBlock === blockBoard[row + 1][column + 1];

                // 삭제할 수 있는 블록인 경우 deleteBlocks에 인덱스 저장
                if (canDeleteBlocks) {
                    deleteBlocks.push([row, column]);
                }
            }
        }

        // deleteBlocks를 순회하며 저장된 인덱스의 블록들을 삭제
        deleteBlocks.forEach(([row, column]) => {
            // 저장된 인덱스를 통해 삭제할 블록을 0으로 표시하며 삭제
            blockBoard[row][column] = EMPTY_BLOCK;
            blockBoard[row + 1][column] = EMPTY_BLOCK;
            blockBoard[row][column + 1] = EMPTY_BLOCK;
            blockBoard[row + 1][column + 1] = EMPTY_BLOCK;
        })

        // blockBoard를 역방향으로 순회하면서 빈 공간 채우기
        for (let row = m - 1; row > -1; row--) {
            // blockBoard[row]에 빈 공간이 포함되어 있지 않으면 건너뛰기
            if (!blockBoard[row].includes(EMPTY_BLOCK)) continue;

            for (let column = 0; column < n; column++) {
                // blockBoard[row][column]이 빈 공간이 아니라면 건너뛰기
                if(blockBoard[row][column] !== EMPTY_BLOCK) continue;

                // 해당 column에서 상위에 있는 row들의 column값을 순회
                for (let upperRow = row - 1; upperRow > -1; upperRow--) {
                    // blockBoard[upperRow][column]이 빈 공간이 아니라면
                    if(blockBoard[upperRow][column] !== EMPTY_BLOCK) {
                        // 위에 있는 블록을 아래로 떨어뜨려 빈 공간 채우기
                        blockBoard[row][column] = blockBoard[upperRow][column];
                        // 위에 있던 블록들의 공간을 빈 공간으로 변경
                        blockBoard[upperRow][column] = EMPTY_BLOCK;
                        break;
                    }
                }
            }
        }
        
        // 삭제할 블록이 없다면 종료
        if(deleteBlocks.length === 0) break;
    }
    
    // blockBoard의 EMPTY_BLOCK의 총 갯수를 반환
    return blockBoard.reduce((acc, cur) => acc += cur.filter(v => v === EMPTY_BLOCK).length, 0);
}

/*
 * 신현호
 */

const ERASED = 0;

function solution(m, n, board) {
    board = board.map((row) => Array.from(row));

    while (true) {
        const find = [];

        for (let y = 0; y < m - 1; y++) {
            for (let x = 0; x < n - 1; x++) {
                if (isValid(y, x, board)) {
                    find.push([y, x]);
                }
            }
        }

        if (!find.length) {
            // flat으로 이차원배열 단순화
            return board.flat().filter((val) => !val).length;
        }

        // find 값들을 조회하여 값을 지워줌 (find에 시작 값들을 저장했으므로)
        find.forEach(([y, x]) => {
            changeValues(y, x, board);
        });

        for (let y = m - 1; y >= 0; y--) {
            for (let x = 0; x < n; x++) {
                for (let i = y - 1; i >= 0; i--) {
                    // 현재 y, x가 사라진 공간이 아니면 pass
                    if (board[y][x]) {
                        break;
                    }

                    // board[y][x]가 사라진공간이고 board[i][x]에 값이 있다면
                    if (board[i][x]) {
                        board[y][x] = board[i][x];
                        board[i][x] = ERASED;
                        break;
                    }
                }
            }
        }
    }
}

function isValid(y, x, board) {
    const currVal = board[y][x];
    return (
      currVal &&
      currVal === board[y][x + 1] &&
      currVal === board[y + 1][x] &&
      currVal === board[y + 1][x + 1]
    );
}

function changeValues(y, x, board) {
    board[y][x] = ERASED;
    board[y][x + 1] = ERASED;
    board[y + 1][x] = ERASED;
    board[y + 1][x + 1] = ERASED;
}

/*
 * 채희수
 */
