// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(arr) {
  const answer = [];
  // 현재 가르키고있는 문자
  let curr = null;

  arr.forEach((el) => {
    if (curr !== el) {
      answer.push(el);
      curr = el;
    }
  });
  return answer;
}

/*
 * 이예슬
 */
