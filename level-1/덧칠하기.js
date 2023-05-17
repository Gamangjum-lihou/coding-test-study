// https://school.programmers.co.kr/learn/courses/30/lessons/161989

/*
 * 강철원
 */

/*
 * 신현호
 */

function solution(n, m, section) {
    let startIdx = section[0];
    let cnt = 1;

    for (let i = 0; i < section.length; i++) {
        if (section[i] >= startIdx && section[i] <= startIdx + m - 1)
            continue;
        startIdx = section[i];
        cnt += 1;
    }
    return cnt;
}

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
