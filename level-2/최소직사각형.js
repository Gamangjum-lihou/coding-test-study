// https://school.programmers.co.kr/learn/courses/30/lessons/42839

/*
 * 강철원
 */

function solution(sizes) {
  // 결국 가로든 세로든 최대값들 중에서 최대값 최소값들중에서 최대값을 구한뒤 곱해주면된다.
  const maxOfMax = Math.max(...sizes.map((value) => Math.max(...value)));
  const maxOfMin = Math.max(...sizes.map((value) => Math.min(...value)));
  return maxOfMax * maxOfMin;
}

/*
 * 김민재
 */

/*
 * 신현호
 */
