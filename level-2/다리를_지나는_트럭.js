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

// 미완성
function solution(bridge_length, weight, truck_weights) {
  const queue = [...truck_weights];
  const moving = [];
  const arrive = [];
  let curr_weight = 0;
  let curr_amount = 0;
  let time = 0;

  while (arrive.length !== truck_weights.length) {
    let temp_amount = curr_amount + 1;
    let temp_weight = curr_weight + queue[0];

    if (temp_amount <= bridge_length && temp_weight <= weight) {
      const node = queue.shift();
      moving.push(node);
      curr_amount += 1;
      curr_weight += node;
      time += 1;
    } else {
      time += 1;
    }

    if (moving.length) {
      const node = moving.shift();
      arrive.push(node);
      curr_amount -= 1;
      curr_weight -= node;
      time += 1;
    }
  }

  return time + bridge_length;
}

/*
 * 이예슬
 */
