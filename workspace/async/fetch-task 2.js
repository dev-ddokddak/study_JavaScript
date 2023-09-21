// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

// 내 풀이
// URL속의 유져 데이터 링크
fetch("https://jsonplaceholder.typicode.com/users")
// 유져 데이터의 객체를 확인하여 true false를 확인
.then((response) => {
  if(!response.ok){
    // 파이썬의 raise와 비슷한 throw
    // 오류 발생
    // status - property
    // ✔️ property에 대해 다시 공부
    // 검색 결과
    // "Property"는 프로그래밍에서 객체(Object)의 특징이나 속성을 의미하는 용어입니다. 
    // 객체는 다양한 정보를 담고 있는 데이터 구조로, 
    // 일반적으로 키(key)와 값(value)으로 구성된 속성들을 갖고 있습니다.

    throw new Error(`response: ${response.status}`)
  }
  // 받은 데이터를 json으로 변환하여 반환
  return response.json();
})

.then((users) => {
  // || 는 or과 같다
  if(!users || users.length == 0){
    throw new Error("none result");
  }
  // map = 하나씩(파이썬과는 약간 차이가 있다)
  // user.id와 user.address.zipcode의 정보를 가져와서 user변수에 저장
  return users.map((user, i) => {
    return {id: user.id, zipcode: user.address.zipcode};
  })
})

// .then으로 비동기 한 후, console.log
.then(console.log)
// 오류가 발생하면 error를 출력
.catch((error) => {
  console.log(error);
  console.log("error");
});


// // 강사님 풀이
// // https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// // zipcode만 추출하기
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   if(!response.ok){
//     throw new Error(`response: ${response.status}`)
//   }
//   return response.json()
// })
// .then((users) => {
//   if(!users || users.length == 0){
//     throw new Error("none result")
//   }
//   return users.map((user) => {
//     return {zipcode: user.address.zipcode}
//   })
// })
// .then(console.log)
// .catch((error) => {
//   console.log(error)
//   console.log("error")
// });


// URL속의 유져 데이터 링크를 async로 비동기화
async function request(){
  return fetch("https://jsonplaceholder.typicode.com/users");
}

// ✔️ await 키워드에 대해 다시 공부
// 검색 결과
// await 키워드: await 키워드는 async 함수 내부에서 사용되며, 주로 Promise 객체를 다룰 때 사용됩니다. 
// await 키워드는 Promise 객체가 완료될 때까지 기다리고, 그 결과를 받아옵니다.

// 개인적 정리
// res 로 응답받은 데이터 받은거고 
// json으로 변환하고 나서  const zipcodes 라는 변수를 설정하고 
// users.map((user) => user.address.zipcode)
// 응답 받은 데이터를 users를 해당 address.zipcode 데이터만 뽑아서 zipcodes에 저장한다 
// *맵은 새로운 배열로 나오는 것
// 그러니 원본데이터를 그대로 냅두고 새로운 배열로 만든다

async function printZipcode(){
  // 이해한게 맞는지 모르겠음. 비동기 후 response에 저장
  const response = await request();
  // await으로 비동기 후, JSON으로 변환
  const users = await response.json();
  // users 에서 address.zipcode를 추출하여 zipcodes에 저장
  const zipcodes = users.map((user) => user.address.zipcode)
  // zipcodes에 저장된 정보 출력
  console.log(zipcodes);
}
// printZipcode 함수 사용
printZipcode()