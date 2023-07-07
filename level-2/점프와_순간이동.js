// https://school.programmers.co.kr/learn/courses/30/lessons/12980

/*
 * 강철원
 */

/*
 * 이보리
 */

function solution(n) {
    let answer = 0;

    while (n !== 1) {
        // 2로 나누어 지지 않으면
        if (n % 2 !== 0) {
            // n이 2로 나누어지도록 1을 빼준다.
            n -= 1;
            // 이때 1칸 점프하기 때문에 answer에 1을 더해준다.
            answer += 1;
        }
        n /= 2;
    }
    
    // 처음에 무조건 1칸 점프해야하므로 1을 더해준다.
    return answer + 1;
}

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
