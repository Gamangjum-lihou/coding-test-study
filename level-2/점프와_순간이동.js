// https://school.programmers.co.kr/learn/courses/30/lessons/12980

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(n)
{
  // 무조건 한번은 이동해야함
  let cnt = 1;

  // 1이 될때까지 n을 계속 나눈다
  while (n !== 1) {
    // 값이 홀수면 배터리를 사용해야하는 구간임
    if (n % 2 === 1) {
      cnt += 1; // 배터리 사용 카운트 + 1
      n -= 1; // 몫 - 1
    }
    n /= 2; // 순간이동을 했다고 하고 n / 2를 해줌
  }
  return cnt;
}

/*
 * 채희수
 */
