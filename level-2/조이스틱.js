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


/*
 * 이보리
 */




/*
 * 채희수
 */
