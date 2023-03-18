// https://school.programmers.co.kr/learn/courses/30/lessons/42583

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let time = 0;
  let curr_weight = 0;

  while (queue.length) {
    curr_weight -= queue.shift();
    if (truck_weights.length) {
      if (truck_weights[0] + curr_weight <= weight) {
        const curr = truck_weights.shift();
        queue.push(curr);
        curr_weight += curr;
      } else {
        queue.push(0);
      }
    }
    time += 1;
  }
  return time;
}

/*
 * 이예슬
 */
