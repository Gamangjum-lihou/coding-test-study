// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42860

/*
 * 강철원
 */

function solution(name) {
    let move = name.length - 1;
    
    const getCharMin = () => {
        const first = 65;
        const last = 90 + 1; // 커서를 아래로 이동 시켜야하기때문에  + 1
        
        return [...name].reduce((acc, cur) => {
            return acc += Math.min(cur.charCodeAt(0) - first, last - cur.charCodeAt(0))},0)
    } 
    
    for(let i = 0; i<name.length; i++) {
        let index = i + 1; // 다음 값들을 확인할때 사용 ( i + 연속된 A의 개수)
        let length = name.length
            
        //연속된 A 개수 확인
        while(index < length && name.charAt(index) === "A"){
            index++;
        }
        move = Math.min(move, i*2 + length - index, (length - index) * 2 + i);
    }

    return getCharMin() + move;
}




/*
 * 신현호
 */

function solution(name) {
    let answer = 0;
    let min = name.length - 1;

    [...name].map((value, idx) => {
        let curr = idx + 1;

        // A기준 이동거리와 Z기준 이동거리 비교
        answer += Math.min(
          Math.abs(value.charCodeAt(0) - 65),
          Math.abs(value.charCodeAt(0) - 91));
        // 연속되는 A의 경우 + 1
        while (curr < name.length && name[curr] === 'A')
            curr += 1;
        // 순서대로 가는것, 뒤로 돌아가는것, 뒷부분을 먼저 입력하는것 중에 최솟값을 구함
        min = Math.min(min, idx * 2 + name.length - curr, idx + 2 * (name.length - curr));
    });
    return answer + min;
}

/*
 * 이보리
 */

// 조이스틱 상/하 이동 카운트 함수
const getUpDownCount = (string) => {
    // 알파벳 배열
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
        // 다음 알파벳 방향으로 카운트
        const startIndex = alphabet.indexOf(string[i]);
        // 이전 알파벳 방향으로 카운트
        const endIndex = alphabet.length - alphabet.indexOf(string[i]);
        // 다음/이전 알파벳 방향 중 카운트 수가 더 적은 횟수를 저장
        count += Math.min(startIndex, endIndex);
    }
    
    return count;
}

function solution(name) {
    const length = name.length;
    const upDownCount = getUpDownCount(name);
    
    // 왼쪽에서 오른쪽으로 끝까지 이동할 경우
    const moveToRight = length - 1;
    // moveCount 초기화
    let moveCount = moveToRight;
    
    [...name].forEach((_, index) => {
        // 다음 인덱스
        let nextIndex = index + 1;
        // A가 반복되는 인덱스 체크
        while(nextIndex < length && name[nextIndex] === "A") {
            nextIndex++;
        }
        
        // 오른쪽으로 이동했다가 반복되는 A를 만나면 왼쪽으로 이동했을 경우 횟수
        const moveToRightTurnLeft = (index * 2) + length - nextIndex;
        // 왼쪽으로 이동했다가 반복되는 A를 만나면 오른쪽으로 이동했을 경우 횟수
        const moveToLeft = index + 2 * (length - nextIndex);
        
        moveCount = Math.min(moveCount, moveToRightTurnLeft, moveToLeft);
    })

    return moveCount + upDownCount;
}

/*
 * 채희수
 */
