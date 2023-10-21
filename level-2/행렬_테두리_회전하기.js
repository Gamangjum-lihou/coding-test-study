// https://school.programmers.co.kr/learn/courses/30/lessons/77485

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(rows, columns, queries) {
  const answer = [];
  const arr = getBoard(rows, columns);
  const tries = queries.length;

  for (let i = 0; i < tries; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const stack = [];
    // 1. 맨 위 [x1, y1] -> +y -> [x1, y2]
    for (let j = y1; j < y2; j++) {
      stack.push(arr[x1][j]);
    }
    // 2. 오른쪽 [x1, y2] -> +x -> [x2, y2]
    for (let j = x1; j < x2; j++) {
      stack.push(arr[j][y2]);
    }
    // 3. 아래쪽 [x2, y2] -> -y -> [x2, y1]
    for (let j = y2; j > y1; j--) {
      stack.push(arr[x2][j]);
    }
    // 4. 왼쪽 [x2, y1] -> -x -> [x1, y1]
    for (let j = x2; j > x1; j--) {
      stack.push(arr[j][y1]);
    }
    // spread를 사용한 정답 찾기
    answer.push(Math.min(...stack));
    stack.unshift(stack.pop());

    for (let j = y1; j < y2; j++) {
      arr[x1][j] = stack.shift();
    }
    for (let j = x1; j < x2; j++) {
      arr[j][y2] = stack.shift();
    }
    for (let j = y2; j > y1; j--) {
      arr[x2][j] = stack.shift();
    }
    for (let j = x2; j > x1; j--) {
      arr[j][y1] = stack.shift();
    }
  }

  return answer;
}

function getBoard(rows, columns) {
  const arr = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = (i - 1) * columns + j;
    }
  }
  return arr;
}
