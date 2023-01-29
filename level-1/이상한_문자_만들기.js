// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/12930

/*
 * 강철원
 */

// 풀이 1

// 다른 사람 풀이 + replace 공식문서 보고 응용

function solution(s) {
  // replacer함수는 replace 공식문서 예제에 나온 함수 참고
  const replacer = (_, p1, p2) => {
    const odd = p2?.toLowerCase(); // 두 번째 (\w)가 없을 시 에러가 발생하여 옵셔널 체이닝 사용
    const even = p1.toUpperCase();
    return odd ? even + odd : even; // odd가 없어서 undefiend이면 짝수만 return
  };
  return s.replace(/(\w)(\w){0,1}/g, replacer);
  /* 특정 문자가 아니라 \w 를 통해서 문자이면 replace하도록 설정 연속된 문자이든 단문자이든 상관없이 동작
   * 예를 들어 s = "hello z"이라면
   * 제일 먼저 "he"을 조건에 맞게 replace 하고 "ll"을 조건에 맞게 replace 하고 "o"를 조건에 맞게 replace한다.
   * 마지막으로 "z"만 조건에 맞게 "Z"로 replace하고 동작이 종료된다.
   */
}

// 풀이 2

// 공백있는 채로 쪼개서 문자만 조건에 맞게 바꾸고 다시 원상 복구

function solution(s) {
  const result = s
    .split(' ') // 공백을 기준으로 쪼개기
    .map((word) => {
      if (word.match(/\D/)) {
        // 문자이면 조건에 맞게 변경 else 공백이면 그대로 공백 return
        return [...word].reduce((acc, cur, index) => {
          // 문자이면 그 문자를 또 쪼개서 조건에 맞게 소문자 대문자로 변형
          if (index % 2) return (acc += cur.toLowerCase()); // index가 홀수인 문자
          return (acc += cur.toUpperCase()); // index가 짝수인 문자
        }, '');
      }
      return word; // 문자가 아니면 즉 공백이면 공백을 그대로 return
    })
    .join(' '); //  처음에 공백을 기준으로 쪼개놓았던 것을 다시 공백을 기준으로 합치기
  return result;
}

/*
 * 김민재
 */

function solution(s) {
	const words = s.split(' '); // 단어 쪼개기
	const answer = []; // 값을 저장하기 위함
	words.forEach((word) => { // 각각의 단어에 대해 밑의 코드를 적용
		let newWord = ''; //새롭게 만든 단어 저장을 위함
		word.split('').forEach((letter, index) => { // 단어를 분리해서 각각 밑의 코드 적용
			if (index % 2 == 0) {
				newWord += letter.toUpperCase();
			} else {
				newWord += letter.toLowerCase();
			}
		});
		answer.push(newWord); // 답에 넣어두기
	});

	return answer.join(' '); // join으로 마무리
}

/*
 * 신현호
 */

function is_even(n) {
  return n % 2 == 0;
}

function solution(s) {
  const str = s.split(" ");
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    [...str[i]].forEach((value, index) => {
        if (is_even(index) && (value >= "a" && value <= "z"))
            answer += value.toUpperCase();
        else if (!is_even(index) && (value >= "A" && value <= "Z"))
            answer += value.toLowerCase();
        else
            answer += value;
    });
    if (i != str.length - 1)
      answer += " ";
  }
  return answer;
}

/*
 * 이예슬
 */
function solution(s) {
  // 영어만 두 문자씩 가져오는 정규식
  // 여기서 \w는 [A-Za-z0-9_]과 동일하다.
  const regExp = /(\w)(\w)/g;
  
  return s.toUpperCase().replace(regExp, (a)=> {
      // a = (TR),(HE),(LL) ...
      // 0번째는 항상 짝수 , 1번째는 항상 홀수
      return a[0] + a[1].toLowerCase();
  })

}