// https://school.programmers.co.kr/learn/courses/30/lessons/42586

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(progresses, speeds) {
  const answer = [];
  const end = progresses.length - 1; // 종료 index
  let index = 0; // 시작 index
  let day = 0;

  while (index <= end) {
    // 진행도가 100이 되지 않았다면
    if (progresses[index] < 100) {
      // 첫날이 아니라면
      if (day !== 0) {
        answer.push(day);
        day = 0;
      }
      for (let j = 0; j <= end; j++) progresses[j] += speeds[j];
    } else {
      // 진행도가 100 이상이면 패스하고 인덱스를 넘어감
      day++;
      index++;
    }
  }

  // 종료되고나서 마지막 날짜 push
  if (day !== 0) answer.push(day);
  return answer;
}

/*
 * 이예슬
 */
