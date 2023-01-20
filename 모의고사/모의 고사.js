

/*
  강철원
*/

function solution(answers) {
    const score = [calculate(answers,1), calculate(answers,2), calculate(answers,3)]
    const result = score.reduce((acc,cur,index,arr) => {
        if(Math.max(...arr) === cur) acc.push(index + 1)
        return acc
    },[])
    return result
}

const data = Object.freeze({
        1 : [1,2,3,4,5],
        2 : [2,1,2,3,2,4,2,5],
        3 : [3,3,1,1,2,2,4,4,5,5],
})

function calculate(answers, number) {
    return answers.reduce((acc,cur,index,arr) => {
        if(cur === data[number][index % data[number].length]) acc += 1
        return acc
    },0)
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
