// https://school.programmers.co.kr/learn/courses/30/lessons/160586

/*
 * 강철원
 */

function solution(keymap, targets) {
  let count = 0; // 해당 알파벳을 작성하기 위해 키를 최소 몇 번 눌러야하는지 횟수
  const result = [];

  // 1. 최소 keymap 객체  ( 각 알파벳별로 최소로 누를 수 있는 횟수 저장)
  const keymapBox = keymap.reduce((acc, cur) => {
    [...cur].forEach((alphabet, index) => {
      //  해당 알파벳의 최소로 누를 수 있는 횟수 < index + 1
      // 최소로 누를 수 있는 횟수가 1부터이니 index + 1
      acc[alphabet] = acc[alphabet] < index + 1 ? acc[alphabet] : index + 1;
    });
    return acc;
  }, {});

  // 2. targets에 있는 각 알파벳을 keymapBox를 통해 각 target별로 최소 몇 번씩 눌러야 하는지 계산
  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      // count += 해당 알파벳의 횟수
      count += keymapBox[targets[i][j]];
    }
    // 목표 문자열을 작성할 수 없을 때는 -1을 push
    result.push(count ? count : -1);
    // count 초기화
    count = 0;
  }
  return result;
}


/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(keymap, targets) {
    const answer = [];
    const keyMap = new Map();
    
    // 특정 키의 최소 횟수를 Map에 저장
    keymap.forEach((keyString) => {
        const keyArray = keyString.split('');
        
        keyArray.forEach((key, index) => {
            // 키가 Map에 존재하고, Map에 저장된 키의 횟수가 현재 횟수보다 작을 경우 변경사항 없음
            if (keyMap.has(key) && keyMap.get(key) < index + 1) return;
            // 키를 누르는 횟수 Map에 저장
            keyMap.set(key, index + 1);
        })
    })
    
    // targets을 순회
    targets.forEach((target) => {
        const targetCount = [];
        for (const char of target) {
            if (keyMap.has(char)) {
                // 키가 Map에 있다면 최소 횟수 저장
                targetCount.push(keyMap.get(char)); 
            } else {
                // 키가 Map에 없다면 -1을 저장
                targetCount.push(-1);
            }
        }
        
        // 키를 누르는 총 횟수
        const keyCount = targetCount.reduce((acc, cur) => acc + cur, 0); 
        
        // 목표 문자열을 작성할 수 없는 경우를 분기처리
        if(targetCount.includes(-1)) {
            answer.push(-1);
        } else {
            answer.push(keyCount);
        }
    })
    return answer;
}

/*
 * 채희수
 */

function solution(keymap, targets) {
    var keyMin = {}
    
    // 각 키의 최소값 구하기
    for (let key of keymap) {
        for (let i in key) {
            keyMin[key[i]] 
                ? keyMin[key[i]] = Math.min(+i+1, keyMin[key[i]])
                : keyMin[key[i]] = +i+1;
        }
    }
    
    // targets을 순회하면서 점수 구하기
    var answer = [];
    for (let t of targets) {
        let sum = 0;
        
        for (let i in t) {
            if (keyMin[t[i]]) {
                sum += keyMin[t[i]];
            } else {
                sum = -1;
                break;
            }
        }
        answer.push(sum);
    }

    return answer;
}
