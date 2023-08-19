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

/*
 * 신현호
 */

/*
 * 채희수
 */
