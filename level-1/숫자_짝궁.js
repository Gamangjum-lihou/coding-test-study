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

/*
 * 신현호
 */

/*
 * 채희수
 */
