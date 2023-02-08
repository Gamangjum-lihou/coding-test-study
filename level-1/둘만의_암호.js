// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155652#

/*
    강철원
*/

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
