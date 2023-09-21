// 배열 나누기
// 함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
// 이후, 해당 배열들을 요소로 갖는 배열을 반환한다

// ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
// ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]


// list = []
// function division(num){
// for(i=1; i<num; i++){
//   console.log(i)
//   return list;
// }
// }
// console.log(division(30));


// 완성
// let list = [];
// let new_list = [];

// function division(num){
// for (i = 1; i <= num; i++) {
//   list.push(i);
// }

// for (i = 0; i < list.length; i += 5){
//     let final_num = list.slice(i , i + 5);
//     new_list.push(final_num);
// }
// }
// division(30);

// console.log(new_list);




// console.log(division([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
let list = [];
let new_list = [];


function division(list, num){
array.forEach(list => {
    
});
};
console.log(division([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(list);


// [[1,2,3].[4.5.6],[7,8,9]]