// - 링크: https://school.programmers.co.kr/learn/courses/30/lessons/135808

/*
  강철원
*/

// 풀이 1
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  const result = score.filter((x, i) => (i + 1) % m === 0);
  return result.reduce((a, b) => a + b, 0) * m;
}

// 풀이 2
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i <= score.length - m; i += m) {
    result += score[i + m - 1] * m;
  }
  return result;
}

/*
  김민재
*/

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    if (i + m <= score.length) {
      answer += Math.min.apply(null, score.slice(i, i + m)) * m;
    }
  }
  return answer;
}

/*
  신현호
*/

/*
  이예슬
*/
