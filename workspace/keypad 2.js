// 백업 코드
// function solution(numbers) {
//   numbers.forEach((e) => {
//     if (e === 1 || e === 4 || e === 7) {
//       console.log('L');
//     } else if (e === 3 || e === 6 || e === 9) {
//       console.log('R');
//     }
//     else
//     {console.log('M')}
//   });
// }

// const numberA = [2, 1, 4, 3, 2]
// solution(numberA)
const lefttouch = []
const righttouch = []

function solution(numbers) {
  numbers.forEach((e) => {
    if (e === 1 || e === 4 || e === 7) {
      console.log('L'); 
    } else if (e === 3 || e === 6 || e === 9) {
      console.log('R');
    }
    else
    {console.log('M')}
  });
}

const numberA = [2, 1, 4, 3, 8, 3, 4]
solution(numberA)


// 함수로 제작을 해야한다면 곤란하지만
// 단순히 코드를 짜내는건 가능할지도
// 1, 4, 7은 왼손, 3, 6, 9는 오른손으로 기본설정
// 오른손 왼손의 이동해야할 거리를 count로 설정 후
// 두개의 변수를 비교해주면 될꺼같음
// if문을 써서 마지막으로 양쪽 수가 같다면 hand변수에 따라 움직이게 하면 될꺼같다




lefttouch[1][1] = 0
console.log(lefttouch)