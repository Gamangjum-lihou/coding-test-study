// 링크

/*
 * 강철원
 */

/*
 * 신현호
 */

let cnt = 0;

function solution(numbers, target) {
  dfs(0, 0, numbers, target);
  return cnt;
}

function dfs(curr, idx, numbers, target) {
  if (idx === numbers.length) {
    if (curr === target)
      cnt += 1;
    return ;
  }

  dfs(curr + numbers[idx], idx + 1, numbers, target);
  dfs(curr - numbers[idx], idx + 1, numbers, target);
}