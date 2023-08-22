// https://school.programmers.co.kr/learn/courses/30/lessons/12913

/*
 * 강철원
 */

// dp를 사용하여 풀이
function solution(land) {
    const removeColumnUsed = (arr, index) => arr[index] = 0
    const getMaxScore = (row, index) => {
        const rowCopy = [...row]
        removeColumnUsed(rowCopy, index)
        return Math.max(...rowCopy)
    }

  // 각 행을 지나칠 때마다 최대값을 계속 더하기 (단, 같은 열을 연속적으로 x)
    for(let i = 1; i < land.length; i++) {
        land[i][0] += getMaxScore(land[i-1], 0)
        land[i][1] += getMaxScore(land[i-1], 1)
        land[i][2] += getMaxScore(land[i-1], 2)
        land[i][3] += getMaxScore(land[i-1], 3)
    }
    
    return Math.max(...land.at(-1))
}

/*
 * 이보리
 */

function solution(land) {
    const COLUMNS_NUMBER = 4

    // land를 순회하면서 같은 열의 숫자를 연속으로 선택하지 않은 각 숫자의 합 배열 생성 
    const sum = land.reduce((acc, cur) => {
        return cur.map((number, index) => {
            // 이 전 행에서 현재 인덱스의 숫자를 제외
            const filter = acc.filter((_, accIndex) => accIndex !== index);
            // 현재 숫자와 이전 행에서 현재 인덱스의 숫자를 제외한 숫자 중 최대값 더하기
            return number + Math.max(...filter);
        })
    // 열의 개수만큼 0으로 초기화 된 배열을 초기값으로 적용
    }, Array.from({ length: COLUMNS_NUMBER }, () => 0));

    // 계산된 합의 최대값을 반환
    return Math.max(...sum);
}

/*
 * 신현호
 */

/*
 * 채희수
 */

function solution(land) {
    const row = land.length;
    const dp = land;

    // 2번째 행부터 값을 계산
    for(let i=1; i<row; i++) {
        for(const j in land[i]){
            // 전 행에서 같은 인덱스 값을 제외하고 그 중에 제일 큰 값을 더해준다.
            const optionNumbers = land[i-1].filter((el, idx) => idx != j)
            dp[i][j] += Math.max(...optionNumbers)
        }
    }
    
    // 마지막 행에서 가장 큰 값을 반환
    return Math.max(...dp[row -1]);
}
