// https://school.programmers.co.kr/learn/courses/30/lessons/12913

/*
 * 강철원
 */

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
