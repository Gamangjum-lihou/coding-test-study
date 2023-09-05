// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131128

/*
 * 강철원
 */

function solution(X, Y) {
    const dictX = generateDict([...X])
    const dictY = generateDict([...Y])
    
    const duplicateNumbers = calculateNumbers(dictX, dictY) 
    const partnerNumbers = getPartnerNumbers(duplicateNumbers)
    
    // X,Y의 짝궁이 0으로만 구성되어 있을 때
    const zeroCount = partnerNumbers.match(/0/g)
    const hasMatchingZeroCountWithPartnerNumbers = partnerNumbers.length === zeroCount?.length
    if(zeroCount){
        if(hasMatchingZeroCountWithPartnerNumbers){
             return "0"
        }
    }
    
    // 문제 조건에 맞게 정렬후 다시 string으로 변환
    const result = [...partnerNumbers].sort((a,b) => b-a).join("")
    return  result ? result : '-1'
}

function generateDict(arr) {
 return arr.reduce((acc, cur, index) =>{
     acc[cur] = (acc[cur] | 0) + 1;
     return acc
 }, {})
}

function calculateNumbers(dictX, dictY) {
    const duplication = {}
    const minLengthDict = dictX.length > dictY.length ? dictY : dictX
    const anotherDict = dictX.length > dictY.length ? dictX : dictY

    for (let number in minLengthDict){
        if(minLengthDict[number] && anotherDict[number]){
            duplication[number] = Math.min(minLengthDict[number], anotherDict[number])
        } 
    }
    return duplication
}

function getPartnerNumbers(duplicateNumbers) {
    let stringNumbers = ""
    for(let number in duplicateNumbers) {
        stringNumbers += number.repeat(duplicateNumbers[number])
    }
    return stringNumbers
}


/*
 * 이보리
 */

const MATCH = {
    no_match: "-1",
    only_zero: "0",
}

function solution(X, Y) {
    const xMap = new Map();
    const yMap = new Map();
    let matches = '';
    
    // X를 순회하며 xMap 생성
    for (let i = 0; i < X.length; i++) {
        const key = X[i];
        xMap.set(key, xMap.get(key) + 1 || 1);
    }
    
    // Y를 순회하며 yMap 생성
    for (let i = 0; i < Y.length; i++) {
        const key = Y[i];
        yMap.set(key, yMap.get(key) + 1 || 1);
    }
    
    // 9부터 내림차순으로 순회하면서 짝궁 생성
    for (let i = 9; i > -1; i--) {
        const match = String(i); // 공통으로 나타나는 정수를 문자열로 변환
        const countX = xMap.get(match); // xMap 내 match의 갯수
        const countY = yMap.get(match); // yMap 내 match의 갯수
        const countMatch = Math.min(countX, countY); // 각 Map의 값 중 최솟값이 공통으로 나타나는 정수의 갯수

        matches += match.repeat(countMatch); // countMatch큼 반복한 match를 짝궁 문자열에 추가
    }
    
    const noMath = matches.length === 0; // 짝궁의 길이가 0인 경우
    const onlyZero = Number(matches) === 0; // 짝궁이 0으로만 구성된 경우
    
    if (noMath) return MATCH.no_match;
    if (onlyZero) return MATCH.only_zero;
    
    return matches;
}

/*
 * 신현호
 */

/*
 * 채희수
 */
