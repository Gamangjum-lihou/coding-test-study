// 링크

/*
 * 강철원
 */

/*
 * 신현호
 */

const dx = [1, -1, 0, 0];
const dy =  [0, 0, 1, -1];
const start = {x: 0, y: 0};
const arrive = [];

function solution(maps) {
  bfs(maps);
  if (arrive.length)
    return Math.min(...arrive);
  else
    return -1;
}

function bfs(maps) {
  const queue = [];
  const visited = [];

  for (let i = 0; i < maps.length; i++)
    visited.push(new Array(maps[i].length).fill(0));
  queue.push({ x: start.x, y: start.y, depth: 1 });
  visited[start.y][start.x] = 1;
  while (queue.length) {
    const node = queue.shift();

    if (node.x === maps[0].length - 1 && node.y === maps.length - 1)
      arrive.push(node.depth);

    for (let i = 0; i < 4; i++) {
      const pos_x = node.x + dx[i];
      const pos_y = node.y + dy[i];

      if (pos_x < 0 || pos_x >= maps[0].length)
        continue;
      if (pos_y < 0 || pos_y >= maps.length)
        continue;
      if (maps[pos_y][pos_x] === 1 && visited[pos_y][pos_x] === 0) {
        queue.push({x: pos_x, y: pos_y, depth: node.depth + 1});
        visited[pos_y][pos_x] = 1;
      }
    }
  }
}
