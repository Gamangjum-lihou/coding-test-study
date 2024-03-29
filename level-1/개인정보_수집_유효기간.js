// https://school.programmers.co.kr/learn/courses/30/lessons/150370

/*
 * 강철원
 */

function solution(today, terms, privacies) {
  today = new Date(today.replace(/[.]/g, '-'));

  const updatedTerms = convertArrayToObject(terms);

  return privacies.reduce((acc, cur, index) => {
    const expirationDate = getExpirationDate(cur, updatedTerms);
    if (isExpired(expirationDate, today)) acc.push(index + 1);
    return acc;
  }, []);
}

function convertArrayToObject(terms) {
  return terms.reduce((acc, cur) => {
    const [type, month] = cur.split(' ');
    acc[type] = month;
    return acc;
  }, {});
}

function getExpirationDate(cur, updatedTerms) {
  const [date, type] = cur.split(' ');
  const joinDate = new Date(date.replace(/[.]/g, '-'));
  joinDate.setMonth(joinDate.getMonth() + +updatedTerms[type]);
  return joinDate;
}

function isExpired(expirationDate, today) {
  return expirationDate <= today;
}


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

const DAYS_OF_MONTH = 28;
const DAYS_OF_YEAR = 12 * DAYS_OF_MONTH;

function solution(today, terms, privacies) {
  // 날짜를 일자로 변환해서 계산
  // 약관 종류와 유효기간 바인딩
  const termMap = new Map();
  terms.forEach((item) => {
    const [term, month] = item.split(" ");
    termMap.set(term, month * DAYS_OF_MONTH);
  });

  // 약관 종류에 따라 만료 일자로 계산한 후
  // 오늘 날짜와 비교해 파기가 필요한 개인정보 번호를 모은다
  let answer = [];
  const todayToDays = dateToDays(today);
  privacies.forEach((privacy, i) => {
    const [date, term] = privacy.split(" ");
    const expirationDays = dateToDays(date) + termMap.get(term);
    if (todayToDays >= expirationDays) answer.push(i + 1);
  });

  return answer;
}

function dateToDays(date) {
  const [yy, mm, dd] = date.split(".");
  const days = +yy * DAYS_OF_YEAR + +mm * DAYS_OF_MONTH + +dd;

  return days;
}
