// https://school.programmers.co.kr/learn/courses/30/lessons/17687

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(n, t, m, p) {
  const answer = [];
  let turn = 1;
  let number = 0;

  while (answer.length < t) {
    // 진법 변환
    const parsedNumber = number.toString(n);
    for (let i = 0; i < parsedNumber.length; i++) {
      // 내 차례고, answer의 길이가 t보다 작으면 push
      if (turn === p && answer.length < t) {
        answer.push(parsedNumber[i].toUpperCase());
      }
      if (turn === m) {
        // 차례 초기화
        turn = 1;
      } else {
        // 차례 + 1
        turn += 1;
      }
    }
    // 값 + 1
    number += 1;
  }

  return answer.join('');
}

/*
 * 채희수
 */
