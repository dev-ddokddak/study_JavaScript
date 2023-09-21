// 두 정수의 덧셈 결과 출력
// function add(num1, num2, callback){
//   if(callback){
//     callback(num1 + num2)
//   }
//   return num1 + num2
// }

// function printTotal(result){
//   console.log(result)
// }

// add(1, 2, printTotal)

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// function mul(num1, num2, callback){
//   if(callback){
//     callback(num1 * num2)
//   }
//     return num1 * num2
// }

// function mul2(mul){
//   mul * 2
//   return
// }

// function total(result){
//   console.log(result)
// }

// mul(1, 3, callback)


// 두 정수의 덧셈 결과 출력
// function add(num1, num2, callback){
//   if(callback){
//     callback(num1 + num2)
//   }
//   return num1 + num2
// }

// function printTotal(result){
//   console.log(result)
// }

// add(1, 2, printTotal)

// // 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// function mul(num1, num2, callback){
//   if(callback){
//     callback(num1 * num2)
//   }
//   return num1 * num2
// }

// mul(3, 4, function(result) {console.log(result * 2)})

// // 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

// function name(f_name, s_name, callback){
//   if(callback){
//     callback(f_name + s_name)
//   }
//   return f_name + s_name
// }

// name('조', '현상', function(result){console.log(`${result}님`)})

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤 개수가 5개 이하라면
// true 아니면 false

// function product(price, total, callback){
//   if(callback){
//     callback(total / price, print)
//   }
// }

// function check(count, callback){
//   if(callback){
//     // result안에 담지 않아서 안되는거였음
//     callback (count <= 5)
//   }
// }

// function print(result){
//   console.log(result)
// }

// product(10000, 30000, check)

// 결제 상품 이름과, 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력

function product(name, condition, callback){
  if(callback){
    callback(condition, print)
  }
}

function check(torf, callback){
  
  result = torf ? "결제 완료" : "결제 실패"
  if(callback){
    callback(result)
  }
}

function print(result){
  console.log(result)
}

product("ㅇㅇ", false, check)


// function getPayStatus(name, status, callback){
//   if(callback){
//     return callback(status)
//   }
// }

// getPayStatus('지우개', true, function(status){console.log(status ? '결제 성공' : '결제 취소')})