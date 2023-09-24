// https://school.programmers.co.kr/learn/courses/30/lessons/67257

/*
 * 강철원
 */
function solution(expression) {
  const operatorRegex = /[*+\\-]/g;
  const expressionRegex = /([\d.]+)([+\-*])/g;
    // 1. 연산자 개수 파악 (중복 제외, 최소 1개 ~ 최대 3개) Reference : expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.   
  const operators = new Set(expression.match(operatorRegex));
    // 2. 연산자를 기준으로 분리하여 배열로 변경  ex) ['100', '-', '200', '*', '300', '-', '500', '+', '20']
  const expressionArr = expression.replace(expressionRegex, '$1,$2,').split(',');
    // 3. 연산자 종류 개수에 따른 조합 구하기 (우선순위 조합은 1! = 1가지이며, 2! = 2가지이며, 연산자가 3개라면 3! = 6가지 조합)
  const operatorCombinations = generateOperatorCombinations(operators);
    // 4. 여러 연산자 우선수위에 따른 최댓값 구하기
  const maxSum = operatorCombinations.reduce((acc, combination) => {
    return Math.max(acc, Math.abs(calculateExpression(expressionArr, combination)));
  }, 0);
  return maxSum;
}

function generateOperatorCombinations([...operators]) {
  const permutations = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const cur = arr.slice();
        const next = cur.splice(i, 1);
        permute(cur.slice(), [...m, ...next]);
      }
    }
  };
  permute(operators);

  return permutations;
}

function calculateExpression(expressionArr, operators) {
  let copiedFormula = [...expressionArr];
  operators.forEach((operator) => {
    let flag = false;
    copiedFormula = copiedFormula.reduce((acc, cur, index, arr) => {
      if (cur === operator) {
        acc.push(eval(`${acc.pop()} ${cur} ${arr[index + 1]}`));
        flag = true;
        return acc;
      }

      if (flag) {
        flag = false;
        return acc;
      }

      acc.push(cur);
      return acc;
    }, []);
  });
  return copiedFormula;
} 

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

const OPERATORS = {
    plus: '+',
    minus: '-',
    multiply: '*'
};
const LEN = 3;
const regExp = /(\D)/;

function solution(expression) {
    const answer = [];
    const permutations = getPermutations(OPERATORS, LEN); // 연산자 경우의 수 구하기
    
    //연산자 경우의 수 순회
    permutations.forEach(permutation => {
        // expression을 의미있는 단위로 구분
        const numbers = expression.split(regExp);
        // permutation을 순회
        permutation.forEach(exp => {
            // split된 numbers에 exp가 포함된다면 (연산자)
            while (numbers.includes(exp)) {
                // indexOf로 해당 index를 구하고
                const idx = numbers.indexOf(exp);
                // numbers를 splice를 통해 값을 변경시킨다.
                numbers.splice(idx - 1, LEN, calculate(numbers[idx - 1], numbers[idx + 1], exp));
            }
        });
        answer.push(Math.abs(numbers[0]));
    });
    
    return Math.max(...answer);
}

function calculate(a, b, exp){
    const val1 = Number(a);
    const val2 = Number(b);
    
    return (exp === OPERATORS.multiply) ? 
        val1 * val2 : (exp === OPERATORS.plus) ? val1 + val2 : val1 - val2;
}

// 연산자 순열을 구해하는 기능
function getPermutations(arr, num) {
    const results = [];
    
    // 재귀 종료조건
    if (num === 1) {
        return arr.map(v => [v]);
    }
    Object.values(OPERATORS).forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1, origin.length)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map(v => [fixed, ...v]);
        
        results.push(...attached);
    });

    return results;
}
