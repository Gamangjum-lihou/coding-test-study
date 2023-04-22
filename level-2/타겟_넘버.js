// 링크

/*
 * 강철원
 */

function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
    function dfs(index, sum) {
        // numbers 의 length 까지 합을 구한뒤 그게 target하고 같으면 answer++
        if(index === numbers.length) {
            if (sum === target) answer++;
            return;
        }
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    return answer;
}

// 다른사람 풀이

function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}


/*
 * 신현호
 */

let cnt = 0;

function solution(numbers, target) {
  dfs(0, 0, numbers, target);
  return cnt;
}

function dfs(curr, idx, numbers, target) {
  if (idx === numbers.length) {
    if (curr === target)
      cnt += 1;
    return ;
  }

  dfs(curr + numbers[idx], idx + 1, numbers, target);
  dfs(curr - numbers[idx], idx + 1, numbers, target);
}
