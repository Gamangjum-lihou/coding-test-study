// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(n, lost, reserve) {
    // 오름차순으로 정렬되어 있다고 가정하고 문제를 풀기때문에, lost와 reserve 정렬
    lost.sort();
    reserve.sort();
    // current에 체육복 여분을 가진 사람 중 도난당한 사람 여부 확인
    // 여분 소지중이지만 도난당한 사람이라면 lost를 splice하여 제거
    const current = reserve.filter((student) => {
        if (lost.includes(student)) {
            lost.splice(lost.indexOf(student), 1);
            return false;
        }
        return true;
    });
    // 체육복을 +1 -1 모두 나눠줄 수 있는 경우라면, -1의 경우를 우선시한다.
    // 확인되면 lost에서 해당 원소를 지워낸다.
    current.forEach((student) => {
        if (lost.includes(student - 1)) {
            lost.splice(lost.indexOf(student - 1), 1);
            return ;
        }
        if (lost.includes(student + 1)) {
            lost.splice(lost.indexOf(student + 1), 1);
            return ;
        }
    });
    return (n - lost.length);
}

/*
 * 이예슬
 */
