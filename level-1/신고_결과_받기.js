// https://school.programmers.co.kr/learn/courses/30/lessons/92334

/*
 * 강철원
 */

function solution(id_list, report, k) {
  // {신고 받은 유저1: [신고한 유저1, 신고한 유저2]}  & 중복 x
  const reportedUsers = getUsers(report);
  const feedbackEmailRecipientsWithCount = getRecipients(reportedUsers, k);
  return id_list.map((user) => feedbackEmailRecipientsWithCount[user] ?? 0);
}

function getUsers(report) {
  const users = {};
  const length = report.length;
  for (let i = 0; i < length; i++) {
    const [reporter, reportedUser] = report[i].split(' ');
    if (users[reportedUser]) {
      users[reportedUser] = [...new Set([...users[reportedUser], reporter])];
      continue;
    }
    users[reportedUser] = [reporter];
  }
  return users;
}

function getRecipients(reportedUsers, usageStopCriteria) {
  const recipients = {};
  for (let reportedUser in reportedUsers) {
    if (isUsageSuspended(reportedUsers[reportedUser], usageStopCriteria)) {
      reportedUsers[reportedUser].forEach((reporter) => {
        recipients[reporter] = (recipients[reporter] || 0) + 1;
      });
    }
  }
  return recipients;
}

function isUsageSuspended(reporters, usageStopCriteria) {
  return reporters.length >= usageStopCriteria;
}

/*
 * 신현호
 */

function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  // 신고당한사람을 중복제거하기 위한 set 활용
  const reported = new Set();

  id_list.forEach(user => {
    reported[user] = [];
  })

  // 신고 배열을 순회하면서 report_id를 key로 가지는 set value 에 userId가 포함되어있지 않다면 값 push
  report.map(user => {
    // 구조 분해 할당을 통해 user_id와 report_id 가져오기
    const [user_id, report_id] = user.split(" ");
    if(!reported[report_id].includes(user_id))
      reported[report_id].push(user_id);
  })

  // reported set 순회를 통해 k번 이상 신고되었는지 확인
  for(const key in reported) {
    if(reported[key].length >= k) {
      reported[key].map(user => {
        answer[id_list.indexOf(user)]++;
      })
    }
  }

  return answer;
}

/*
 * 이보리
 */

/*
 * 이용 정지될 사용자 배열을 반환
 * @@params reportSet: set object, k: number
 */
const getReportedId = (reportSet, k) => {
    const reportedArray = [];
    const reportedObj = {}
    
    reportSet.forEach((report) => {
        const [_, id] = report.split(' ');
        reportedArray.push(id);
    })
    
    reportedArray.forEach((user) => {
        if(reportedObj[user]) reportedObj[user] += 1;
        else reportedObj[user] = 1;
    })

    const reportedId = Object.entries(reportedObj).reduce((acc, cur) => {
        const [id, count] = cur;
        if (count >= k) acc.push(id);
        return acc;
    }, [])
    
    return reportedId;
}

function solution(id_list, report, k) {
    const answer = Array.from({length: id_list.length}, v => 0);
    const reportSet = new Set();
    const reportMap = new Map();
    
    // 한 유저가 같은 유저를 여러 번 신고해도 신고 횟수 1회로 처리하기 위해 Set 사용
    report.forEach((record) => {
        reportSet.add(record);
    })
    
    // 중복된 신고를 제외하여 reportMap 생성
    reportSet.forEach((report) => {
        const [reporter, id] = report.split(' ');
        if(reportMap.has(reporter)) reportMap.set(reporter, [...reportMap.get(reporter), id])
        else reportMap.set(reporter, [id])
    })
    
    const reportedId = getReportedId(reportSet, k);
     
    reportMap.forEach((idArray, reporter) => {
        idArray.forEach((id) => {
            const hasId = reportedId.includes(id);
            const index = id_list.indexOf(reporter);
            if (hasId) {
                answer[index]++;
            }
        })
    })
    return answer;
}

/*
 * 채희수
 */
