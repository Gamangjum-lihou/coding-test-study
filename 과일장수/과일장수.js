/*
  강철원
*/

// 풀이 1
function solution(k, m, score) {
    score.sort((a,b) => b-a)
    const result = score.filter((x,i) => (i+1) % m === 0)
    return result.reduce((a,b) => a+b,0) * m 
}

// 풀이 2
function solution(k, m, score) {
    score.sort((a,b) => b-a)
    let result = 0
    for(let i=0; i <= score.length - m; i+= m) {
        result += score[i + m - 1] * m
    }
  return result;
}

/*
  김민재
*/



/*
  신현호
*/


/*
  이예슬
*/
