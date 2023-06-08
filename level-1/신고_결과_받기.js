// https://school.programmers.co.kr/learn/courses/30/lessons/92334

/*
 * 강철원
 */

/*
 * 신현호
 */

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
