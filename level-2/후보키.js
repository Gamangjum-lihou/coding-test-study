// https://school.programmers.co.kr/learn/courses/30/lessons/42890

/*
 * 강철원
 */

function solution(relation) {
    let idxArr = Array.from(Array(relation[0].length), (_, i) => i);
    let combinations = [];
    
    // 가능한 조합 생성
    for(let i = 0 ; i < idxArr.length ; i++){
        combinations.push(...getCombination(idxArr, i + 1));
    }

    // 유효성 확인
    const uniqueness = checkUniqueness(relation, combinations);
    
    // 최소성 확인
    const minimality = checkMinimality(uniqueness);
    return minimality.length;
}

function getCombination(idxArr, num) {
    const results = [];
    if(num === 1) {
        return idxArr.map(_ => [_]);
    }

    idxArr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const next = getCombination(rest, num - 1);
        const combinated = next.map(combination => [fixed, ...combination]);
        results.push(...combinated);
    });

    return results;
}

function checkUniqueness(relation, combinations) {
    const results = [];
    combinations.forEach((combination) => {
        let set = new Set();
        relation.forEach((column) => {
            set.add(combination.map(index => column[index]).join(','));
        });
  
        if(set.size === relation.length) {
            results.push(combination);
        }
    });
    return results
}


function checkMinimality(combinations) {
    const results = [];
 

    while(combinations.length > 0){
        const firstCombination = combinations[0]
        results.push(firstCombination);
        combinations = combinations.reduce((acc, combination) => {
            const isMinimality = firstCombination.every(e => !combination.includes(e));

            if(isMinimality) {
               acc.push(combination)
            }
            return acc;
        },[]);
    }

    return results;
}

/*
 * 이보리
 */

const getCombinations = (arr, length) => {
    if (length === 1) return arr.map((value) => [value]);
    
    const result = arr.reduce((acc, cur, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, length - 1);
        const attached = combinations.map(combination => [cur, ...combination]);
        
        acc.push(...attached);
        return acc;
    }, []);
    
    return result;
}

// 조합에 따른 문자열 키 반환
const getKeys = (combination) => {
    // 문자열 키를 만들기 위해 배열을 빈 문자열로 초기화
    let keys = Array.from({ length: combination[0].length }, () => '');

    // 각 조합에 따른 문자열 키를 생성
    for (let j = 0; j < combination.length; j++) {
        for (let k = 0; k < combination[0].length; k++) {
            keys[k] += combination[j][k];
        }
    }
    
    return keys;
}

// 유일성 확인
const isUniqueness = (combination, relation) => {
    const keys = getKeys(combination);
    const keysSet = new Set(keys);

    return keysSet.size === relation.length;
}

function solution(relation) {
    let answer = [];
    // relation의 행과 열의 위치를 변경, 열을 기준으로 하는 2차원 배열 
    const columns = relation.reduce((acc, cur) => {
        return cur.map((_, index) => [...(acc[index] || []), cur[index]])
    }, []);

    // columns의 길이만큼 순회
    for (let i = 1; i <= columns.length; i++) {
        // 조합을 구함
        const combinations = getCombinations(columns, i);;
        // 각 조합을 순회하면서 하나의 문자열 키로 만듬
        combinations.forEach(combination => {
            // 유일성 체크
            if (isUniqueness(combination, relation)) {
                const combinationIndices = combination.map(value => columns.indexOf(value)); 
                const isMinimality = !answer.some(value => value.every(el => combinationIndices.includes(el)));
                // 최소성 체크
                if(isMinimality) {
                    answer.push(combinationIndices);
                }
            }
        })
    }

    return answer.length;
}

/*
 * 신현호
 */

function solution(relation) {
    const rowLength = relation.length;
    const colLength = relation[0].length;
    
    return bfs(rowLength, colLength, relation);
}

function bfs(rowLength, colLength, relation) {
    const queue = Array.from({ length: colLength }, (_, i) => [i]);
    const candidate = [];
        
    while (queue.length) {
        const node = queue.shift();
        const set = new Set();
        
        // 최소성을 만족하는지 여부 조사
        if (candidate.find((key) => key.every(val => node.includes(val)))) {
            continue ;
        }
        
        // set에 배열 그대로 넣는건 의미가 없으니 JSON.stringify 써서 문자열로 변환
        for (let i = 0; i < rowLength; i += 1) {
            set.add(JSON.stringify(node.map((idx) => relation[i][idx])));
        }
        
        // 유일성을 만족한다면 candidate 배열에 push
        if (set.size === rowLength) {
            candidate.push(node);
        }
        // 유일성을 만족하지 못한다면 column을 하나 더 추가한다
        else {
            const start = node[node.length - 1] + 1;
            for (let i = start; i < colLength; i++) {
                queue.push([...node, i]);
            }
        }
    }
    return candidate.length;
}
