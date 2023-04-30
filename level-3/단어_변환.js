// https://school.programmers.co.kr/learn/courses/30/lessons/43163

/*
 * 강철원
 */

/*
 * 신현호
 */

function solution(begin, target, words) {
  return bfs(begin, target, words);
}

function bfs(begin, target, words) {
  const queue = [];

  queue.push({value: begin, depth: 0, visited: []});
  while (queue.length) {
    const node = queue.shift();

    if (node.value === target)
      return node.depth;

    for (let i = 0; i < words.length; i++) {
      let cnt = 0;

      if (node.visited.includes(words[i]))
        continue;
      for (let j = 0; j < words[i].length; j++) {
        if (node.value[j] !== words[i][j])
          cnt += 1;
      }
      if (cnt === 1)
        queue.push({value: words[i], depth: node.depth + 1, visited: [...node.visited, words[i]]});
    }
  }
  return 0;
}

/*
 * 이보리
 */

