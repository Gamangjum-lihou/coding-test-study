// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155652#

/*
    강철원
*/

function solution(s, skip, index) {
    // 알파벳 배열을 만든다.
    const dict = Array.from({length:26}, (_,i) => String.fromCharCode(i+97))
    
    // skip 단어들을 filter를 통해 제거해준다.
    const newDict = dict.filter( word => ![...skip].includes(word) )
    
    // map을 사용하여 각각의 단어를 index만큼 뒤로 이동한다. 
    // indexOf 를 이용해서 5칸 뒤에 있는 값을 가져온다. ( 단, newDict의 length를 초과하면 나머지 계산으로 해결)
    // 처음에 스프레드 연산자로 배열로 만들었고 map의 return 값도 배열이니 join을 사용해서 다시 문자열로 변경시켜준다. 
    return [...s].map((word)=> newDict[(newDict.indexOf(word) + index) % newDict.length]).join("")
}

/*
    김민재
*/

/*
    신현호
*/

function solution(s, skip, index) {
  let answer = "";
  let curr = 0; // index값만큼 이동한 index를 구하기 위한 변수
  // 알파벳 배열을 만들어준다.
  let alphabet = Array.from({ length: 26 }, (value, idx) =>
    String.fromCharCode(idx + 97)
  );

  // 생성된 알파벳 배열에서 skip문자들을 지워준다.
  skip.split("").forEach((skipChar) => {
    let idx = alphabet.indexOf(skipChar);
    alphabet.splice(idx, 1);
  });

  // s 배열에서 이동한만큼의 값을 찾아온다.
  s.split("").forEach((char) => {
    // alphabet에서 s의 값이 위치한 인덱스를 찾아준다.
    let idx = alphabet.indexOf(char);
    curr = idx + index;
    // index가 커서 alphabet 배열의 길이보다 크다면 alphabet 배열의 길이만큼 빼준다
    while (curr >= alphabet.length) curr -= alphabet.length;
    answer += alphabet[curr];
  });
  return answer;
}

/*
    이예슬
*/
