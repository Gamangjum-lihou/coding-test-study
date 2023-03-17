// https://school.programmers.co.kr/learn/courses/30/lessons/42587

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(priorities, location) {
  const priority = []; // priorities의 인덱스와 값을 저장하는 객체 배열
  const complete = []; // 탐색이 완료된 항목들을 저장하는 배열

  // 객체의 형태로 값을 집어넣는다.
  priorities.forEach((value, index) => {
    priority.push({ value, index });
  });
  // 객체 배열이 빌 때까지 반복
  while (priority.length) {
    const max = sorting(priority)[0].value;
    const curr = priority.shift();

    // 조건에 해당한다면 완료배열에 추가
    if (priority.value >= max) complete.push(curr);
    // 조건에 해당하지 않는다면 배열 맨 뒤로 넣는다.
    else priority.push(curr);
  }
  return complete.findIndex((e) => e.index === location) + 1;
}

// 정렬된 배열을 리턴
function sorting(array) {
  return [...array].sort((a, b) => (a.value > b.value ? -1 : 1));
}

/*
 * 이예슬
 */
