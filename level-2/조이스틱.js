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




/*
 * 채희수
 */
