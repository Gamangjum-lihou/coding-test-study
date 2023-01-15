

/*
 * 강철원
 */

function solution(s) {    
    const data = [{zero:"0"}, {one:1}, {two:2}, {three:3}, {four:4}, {five:5},  {six:6}, {seven:7}, {eight:8}, {nine:9}]   
    const preCheck = (number)=> { 
        const result = data.find(row => row[number]);
        return Object.values(result).join()
    }
    const numbers = /zero|one|two|three|four|five|six|seven|eight|nine/g
    const answer = s.replace(numbers, preCheck) 

    return +answer;
}

/*
 * 김민재
 */



/*
 * 신현호
 */


/*
 * 이예슬
 */
