// https://school.programmers.co.kr/learn/courses/30/lessons/150370

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
 * 한 달을 일수로 계산하는 함수
 * @params month: string
 */
const daysInMonth = (month) => {
    return parseInt(month) * 28;
}

/*
 * 날짜를 일수로 계산하는 함수
 * @params date: string
 */
const countDays = (date) => {
    const [year, month, day] = date.split('.');
    const days = parseInt(day);
    const daysInYear = parseInt(year) * 12 * 28;

    return daysInYear + daysInMonth(month) + days;
}

function solution(today, terms, privacies) {
    const answer = [];
    const todayTime = countDays(today);
    
    // 약관 종류과 유효기간을 Map에 저장
    const termsMap = new Map();
    terms.forEach((term) => {
        const [type, month] = term.split(' ');
        termsMap.set(type, month);
    });
    
    // 개인 정보 순회
    privacies.forEach((privacy, index) => {
        // 배열 비구조화 문법 사용
        const [date, termType] = privacy.split(' ');
        // 파기 날짜 계산
        const expireTime = countDays(date) + daysInMonth(termsMap.get(termType));
        
        // 오늘 날짜의 일수가 파기 날짜의 일수보가 크거나 같을 경우 해당 개인 정보 push 
        if (todayTime >= expireTime) answer.push(index + 1);
    })
    return answer;
}

/*
 * 채희수
 */
