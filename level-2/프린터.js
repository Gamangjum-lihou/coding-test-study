// https://school.programmers.co.kr/learn/courses/30/lessons/42587

/*
 * 강철원
 */

// 풀이 1
function solution(priorities, location) {
  // priorities에 index를 포함시켜서 2차원 배열로 바꾼다.
  const prioritiesWithIndex = priorities.map((priority, index) => [priority, index]);
  // 우선순위를 재정렬한다.
  const newPriorities = rearrangePriorities(prioritiesWithIndex);
  // location과 재정렬 하기전 index가 같은면 재정렬된 index + 1을 return 한다.
  return newPriorities.findIndex(([_, index]) => index === location) + 1;
}

function rearrangePriorities(priorities) {
  const stack = [];
  let index = 0;
  // priorities가 값이 존재하지 않을 때 까지 반복
  while (priorities.length) {
    // priorities의 첫번 째 값은 priority 두 번째 값은 재정렬하기전 index이다.
    // 맨 앞에 있는 priority의 값이 priorites전체 최대값과 같을 때
    if (priorities[0][0] === Math.max.apply(null,priorities.map((el) => el[0]))) {
      // 맨 앞에서 값을 빼서 stack에 넣어준다.
      stack.push(priorities.shift());
      index = 0;
      continue;
    }
    // 그외 모든 priority 값은 앞에서 뺀뒤 맨 뒤로 다시 보낸다.
    priorities.push(priorities.shift());
    index += 1;
  }
  return stack;
}

// 풀이2
// 다른 사람 풀이 본뒤 응용

function solution(priorities, location, result = 0) {
  // 배열안에 priority와 index가 들어있는 객체 생성
  const queue = priorities.map((p, i) => ({ priority: p, index: i }));

  while (queue.length > 0) {
    // 앞에서 추출
    const current = queue.shift();
    // 하나라도 queue의 priority 최대값보다 현재 값이 작다면 true 크면 false 
    const higherPriority = queue.some((d) => d.priority > current.priority);

    // 현재값이 작다면 다시 맨뒤로 이동 
    if (higherPriority) {
      queue.push(current);
      continue;
    }
    // 현재값이 크다면 result + 1 
    // 즉 현재값이 크다면 하나씩 적층되는 것이기에(queue 배열뒤로 push 되지 않음) index를 하나씩 늘리는 것과 같은 효과
    result++;
    
    // 현재 값의 index가 location과 같다면 result 출력 
    if (current.index === location) {
      return result;
    }
  }
}



/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(priorities, location) {
  const priority = []; // priorities의 인덱스와 값을 저장하는 객체 배열
  const complete = []; // 탐색이 완료된 항목들을 저장하는 배열

  // 객체의 형태로 값을 집어넣는다.
  priorities.forEach((value, index) => {
    priority.push({ value, index });
  });
  // 객체 배열이 빌 때까지 반복
  while (priority.length) {
    const max = sorting(priority)[0].value;
    const curr = priority.shift();

    // 조건에 해당한다면 완료배열에 추가
    if (priority.value >= max) complete.push(curr);
    // 조건에 해당하지 않는다면 배열 맨 뒤로 넣는다.
    else priority.push(curr);
  }
  return complete.findIndex((e) => e.index === location) + 1;
}

// 정렬된 배열을 리턴
function sorting(array) {
  return [...array].sort((a, b) => (a.value > b.value ? -1 : 1));
}

/*
 * 이예슬
 */
