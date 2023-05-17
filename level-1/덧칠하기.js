// https://school.programmers.co.kr/learn/courses/30/lessons/161989

/*
 * 강철원
 */

/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(n, m, section) {
    let count = 0;
    let printed = 0;
    
    section.forEach((sectionNumber) => {
        if(sectionNumber > printed) {
            count++;
            printed = sectionNumber + m - 1;
        }
    })
    
    return count;
}

/*
 * 채희수
 */
