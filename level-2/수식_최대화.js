// https://school.programmers.co.kr/learn/courses/30/lessons/67257

/*
 * 강철원
 */

/*
 * 이보리
 */

/* constant */
const OPERATOR = {
    multiplication: '*',
    addition: '+',
    subtraction: '-'
}

const REG_EXP = {
    number: /(\D)/,
    operator: /[-+*]/g,
}

const getCalculatedValue = (operator, numberA, numberB) => {
    if(operator === OPERATOR.multiplication) return numberA * numberB;
    if(operator === OPERATOR.addition) return numberA + numberB;
    if(operator === OPERATOR.subtraction) return numberA - numberB;
}

function solution(expression) {
    // 연산자 우선순위 조합
    const priorityCombination = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*'],
    ];
    // priorityCombination를 통해 연산된 결과 값을 배열로 저장
    const calculatedValues = [];
    
    priorityCombination.forEach((combination) => {
        // 숫자와 연산자를 분리하여 배열로 변환
        const splitedExpression = expression.split(REG_EXP.number);
        
        combination.forEach((operator) => {
            // splitedExpression에 operator가 포함되어 있을 때가지 반복
            while (splitedExpression.includes(operator)) {
                // 연산자의 인덱스
                const index = splitedExpression.indexOf(operator);
                // 연산자 앞의 피연산자
                const prevNumber = Number(splitedExpression[index - 1]);
                // 연산자 뒤의 피연산자
                const nextNumber = Number(splitedExpression[index + 1]);
                // 연산된 값
                const calculatedValue = getCalculatedValue(operator, prevNumber, nextNumber);
                
                // splitedExpression에 피연산자와 연산자를 제거한 후 해당 위치에 연산된 값을 저장
                splitedExpression.splice(index - 1, 3, calculatedValue);
            }
        })
        // splitedExpression의 첫 번째 인덱스에 저장된 연산된 최종값의 절대값을 calculatedValues 배열에 저장
        calculatedValues.push(Math.abs((splitedExpression[0])));
    }) 
    
    // calculatedValues 요소 중 최대 값을 반환 
    return Math.max(...calculatedValues);
}

/*
 * 신현호
 */
