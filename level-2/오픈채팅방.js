// https://school.programmers.co.kr/learn/courses/30/lessons/42888

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

const MESSAGE = {
  enter: '님이 들어왔습니다.',
  leave: '님이 나갔습니다.',
}

function solution(record) {
  const answer = [];
  const name_list = new Map();

  //id에 맞는 이름을 먼저 할당한 뒤 출력
  for(let i in record) {
    const [state, id, name] = record[i].split(" ");
    if(state !== "Leave") {
      name_list.set(id, name);
    }
  }

  for(let i in record) {
    //data[0] state, data[1] id, data[2] name
    const [state, id, name] = record[i].split(" ");
    if(state === "Enter") {
      answer.push(name_list.get(id) + MESSAGE.enter);
    }
    if(state === "Leave") {
      answer.push(name_list.get(id) + MESSAGE.leave);
    }
  }

  return answer;
}

/*
 * 채희수
 */
