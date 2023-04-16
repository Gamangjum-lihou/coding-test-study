// https://school.programmers.co.kr/learn/courses/30/lessons/84512

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

const array = [];
const dict = ["A", "E", "I", "O", "U"];
let count = 0;
let answer = 0;

function solution(word) {
  dfs(word);
  return answer;
}

function dfs(word) {
  if (isFinish(word)) {
    answer = count;
    return;
  }

  for (let i = 0; i < dict.length; i++) {
    array.push(dict[i]);
    if (promise()) {
      count += 1;
      dfs(word);
    }
    array.pop();
  }
}

function isFinish(word) {
  const str = array.join("");
  return str === word;
}

function promise() {
  return !(array.length > 5);
}

/*
 * 이예슬
 */
