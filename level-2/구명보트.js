// https://school.programmers.co.kr/learn/courses/30/lessons/42885

/*
 * 강철원
 */

/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(people, limit) {
    let answer = 0;
    
    people.sort((a, b) => a - b);
    
    while(people.length > 0) {
        answer += 1;
        
        if (people.at(0) + people.at(-1) <= limit) {
            people.shift();
        }
        people.pop();
    }
    
    return answer;
}

/*
 * 채희수
 */
