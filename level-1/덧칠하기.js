// https://school.programmers.co.kr/learn/courses/30/lessons/161989

/*
 * 강철원
 */

function solution(n, m, section) {
  // 1. early return 먼저 제거

  // 1) 롤러의 길이가 1이면 result = section.length 이 된다.
  if (m === 1) return section.length;

  let result = 0;
  while (section.length) {
    const removed = Array.from({ length: m }, (v, i) => section[0] + i);
    section = section.filter((value) => !removed.includes(value));
    result += 1;
  }
  return result;
}

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

function solution(n, m, section) {
    var answer = 0;
    var next = 0;
    for (let sec of section) {
        if (sec < next) continue;
        answer +=1;
        next = sec+m;
    }
    
    return answer;
}
