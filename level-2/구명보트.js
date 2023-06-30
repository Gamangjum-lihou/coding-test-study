// https://school.programmers.co.kr/learn/courses/30/lessons/42885

/*
 * 강철원
 */

// 풀이 

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  const peopleMinWeight = people.at(-1);
  const peopleMap = new Map();
  for (let i = 0; i < people.length; i++) {
    peopleMap.set(people[i], (peopleMap.get(people[i]) | 0) + 1);
  }

  const boatStatus = {
    weight: limit,
    limitCount: 0,
  };

  while (peopleMap.size) {
    count += 1;
    initializeBoatStatus(boatStatus, limit);

    for (const [weight, headcount] of peopleMap) {
      if (cannotBoardBoat(boatStatus.weight, weight)) continue;
      updateBoatStatus(boatStatus, peopleMap, weight);
      if (isBoatOverweight(boatStatus.weight, peopleMinWeight)) break;
      if (isBoatCapacityFull(boatStatus)) break;

      // 같은 몸무게인 사람이 또 존재할 때
      if (peopleMap.get(weight)) {
        if (cannotBoardBoat(boatStatus.weight, weight)) continue;
        updateBoatStatus(boatStatus, peopleMap, weight);
        if (isBoatCapacityFull(boatStatus)) break;
      }
    }
  }
  return count;
}

function cannotBoardBoat(boatWeight, weight) {
  return boatWeight < weight;
}

function updateBoatStatus(boatStatus, peopleMap, weight) {
  boatStatus.weight -= weight;
  boatStatus.limitCount += 1;
  peopleMap.set(weight, peopleMap.get(weight) - 1);
  if (!peopleMap.get(weight)) {
    peopleMap.delete(weight);
  }
}

function isBoatCapacityFull(boatStatus) {
  return boatStatus.limitCount === 2;
}

function initializeBoatStatus(boatStatus, limit) {
  boatStatus.weight = limit;
  boatStatus.limitCount = 0;
}
// 현재 남은 보트 무게보다 구조해야할 사람들 중에 몸무게 최솟값이 더 클때
// 더 이상 for문 순회할 필요가 없음
function isBoatOverweight(boatWeight, peopleMinWeight) {
  return boatWeight < peopleMinWeight;
}

// 다른 사람 풀이 1
function solution(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    while(people.length) {
        if(people[0] + people[people.length - 1] <= limit) {
            people.shift();
        }
        people.pop();
        count += 1;
    }
    return count
}

// 다른 사람 풀이 2
function solution(people, limit) {
  let count = 0
  let index = 0
  people.sort((a, b) => a - b);
  while (people.length > 0) {
    const biggest = people.pop();
    index = 0;
    const boatWeightRemaining = limit - biggest
      // 이미 보트에 한명 타고 있는 상태에서 구해야할 인원중 남은 보트 무게보다 작으면서 가장 무거운 사람 고르기
    while (people[index] <= boatWeightRemaining) index += 1
    if (index) people.splice(index - 1, 1);
    count += 1
  }
  return count;
}



/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(people, limit) {
    let answer = 0;
    
    people.sort((a, b) => a - b);
    
    while(people.length > 0) {
        answer += 1;
        
        if (people.at(0) + people.at(-1) <= limit) {
            people.shift();
        }
        people.pop();
    }
    
    return answer;
}

/*
 * 채희수
 */
