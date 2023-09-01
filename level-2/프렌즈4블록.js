// https://school.programmers.co.kr/learn/courses/30/lessons/12913

/*
 * 강철원
 */

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

/*
 * 채희수
 */
