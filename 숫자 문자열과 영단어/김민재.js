const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
	var answer = s;
	number.forEach((num, index) => {
		while (answer.includes(num)) {
			answer = answer.replace(num, index);
		}
	});
	return Number(answer);
}
