// https://school.programmers.co.kr/learn/courses/30/lessons/43163

/*
 * 강철원
 */

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const visited = { [begin] : 0 };
  const queue = [begin];

  while(queue.length) {
      // 현재 단어 꺼낸다.
    const cur = queue.shift();
    
      // 현재 단어와 타겟 단어가 같으면 바로 종료
    if(cur === target) break;
    

    for(const word of words) {
      if(isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
      
    }
              console.log(visited)
  }
    
  return visited[target]
}

const isConnected = (word, cur) => {
  let count = 0;
  
  for(let i = 0; i < word.length; i++) {
    if(word[i] !== cur[i]) count++;
  }
  
    // 한 번에 한 개의 알파벳만 바꿀 수 있기에 
    // 같은 위치에 알파벳이 같은것이 1개일 때만 true
  return count === 1 ? true : false;
}

/*
 * 신현호
 */

function solution(begin, target, words) {
  return bfs(begin, target, words);
}

function bfs(begin, target, words) {
  const queue = [];

  queue.push({value: begin, depth: 0, visited: []});
  while (queue.length) {
    const node = queue.shift();

    if (node.value === target)
      return node.depth;

    for (let i = 0; i < words.length; i++) {
      let cnt = 0;

      if (node.visited.includes(words[i]))
        continue;
      for (let j = 0; j < words[i].length; j++) {
        if (node.value[j] !== words[i][j])
          cnt += 1;
      }
      if (cnt === 1)
        queue.push({value: words[i], depth: node.depth + 1, visited: [...node.visited, words[i]]});
    }
  }
  return 0;
}

/*
 * 이보리
 */

function solution(begin, target, words) {
    const visited = [];
    let queue = [];
    
    // words에 target이 없으면 단어를 변환할 수 없으므로 0을 반환한다.
    if (!words.includes(target)) return 0;
    
    // begin(root)과 deps를 큐에 넣어준다.
    queue.push([begin, 0]);
    
    while (queue.length !== 0) {
        // 현재 단어와 deps를 꺼낸다.
        const [currentWord, deps] = queue.shift();
        
        // 현재 단어가 target과 일치하면 deps를 반환한다.
        if(currentWord === target) return deps;
        
        // 현재 단어와 words의 각 단어를 비교한다.
        words.forEach((word) => {
            if(isOneCharDifference(currentWord, word) && !visited.includes(word)) {
                visited.push(word); // 방문 처리
                queue.push([word, deps + 1]); // 단어와 deps를 queue에 넣어준다.
            }
        })
    }
    
    // words를 전부 순회 했는데도 단어를 변환할 수 없다면 0 반환한다.
    return 0;
}

// 한 번에 한 개의 알파벳만 바꿀 수 있는지 확인
const isOneCharDifference = (word1, word2) => {
    let count = 0;
    
    for(let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) count++;
    }

    return count === 1 ? true : false;
}
