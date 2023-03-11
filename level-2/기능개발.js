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
  let count = 0; // 배포되는 개수

  while (index <= end) {
    // 진행도가 100이 되지 않았다면
    if (progresses[index] < 100) {
      // 완료된 작업들이 있다면
      if (count !== 0) {
        answer.push(count); // 한번의 배포될 분량 push
        count = 0; // count 초기화
      }
      for (let j = 0; j <= end; j++) progresses[j] += speeds[j];
    } else {
      // 진행도가 100 이상이면 패스하고 인덱스를 넘어감
      count++; // 배포 개수 1++
      index++; // 다음 인덱스로 이동
    }
  }

  // 마지막 남은 작업에 대한 값 push
  if (count !== 0) answer.push(count);
  return answer;
}

/*
 * 이예슬
 */
