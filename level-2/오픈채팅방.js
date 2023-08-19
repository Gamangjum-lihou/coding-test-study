// https://school.programmers.co.kr/learn/courses/30/lessons/42888

/*
 * 강철원
 */

function solution(records) {
  const nicknameData = {};
  const STATE = {
    enter: 'Enter',
    leave: 'Leave',
    change: 'Change',
  };
  const STATE_MESSAGE = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.',
  };
  const getStateMessage = (nickname, state) => `${nickname}님이 ${state}`;

  // userHistory = [[userId, state] ...]  =  [[uid1234, Enter], [jid1434, Leave] ...]  
  const usersHistory = records.reduce((acc, record) => {
    const [state, userId, nickname] = record.split(' ');
    if (state !== STATE.leave) {
      nicknameData[userId] = nickname;
    }

    if (state !== STATE.change) {
      acc.push([userId, state]);
    }
    return acc;
  }, []);

  // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]  
  return usersHistory.map(([userId, state]) => getStateMessage(nicknameData[userId], STATE_MESSAGE[state]));
}

/*
 * 이보리
 */

const TYPE = {
    ENTER: "Enter",
    LEAVE: "Leave",
    CHANGE: "Change",  
}

const MESSAGE = {
    ENTER: "님이 들어왔습니다.",
    LEAVE: "님이 나갔습니다.",
}

function solution(record) {
    // record의 각 요소를 문자열에서 배열 형태로 변환
    const records = record.map((message) => message.split(" "));
    const userMap = new Map();
    
    // records를 순회하면서 유저 아이디에 따른 닉네임 Map을 생성
    records.forEach(([type, userId, nickname]) => {
        // 채팅방을 나간 경우 아무런 변화가 없다.
        if(type === TYPE.LEAVE) return;
        
        // 채팅방을 입장했거나 닉네임을 변경했을 때 userMap에 유저 아이디와 닉네임을 매핑하여 저장
        userMap.set(userId, nickname);
    })
    
    // 사용자가 닉네임을 변경했을 경우 아무런 메시지를 나타내지 않으므로 filter를 이용하여 걸러낸다.
    const result = records.filter(([type]) => type !== TYPE.CHANGE)
        .map(([type, userId]) => {
            // 각 type에 따른 메시지를 userMap에 저장된 사용자 닉네임과 조합하여 반환한다.
            if(type === TYPE.ENTER) return userMap.get(userId) + MESSAGE.ENTER;
            if(type === TYPE.LEAVE) return userMap.get(userId) + MESSAGE.LEAVE;
        })
    
    return result;
}

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
