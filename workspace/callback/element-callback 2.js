function doHomework(problem, callback) {
  console.log("숙제를 시작합니다.");
  console.log(`문제 ${problem}을(를) 푸는 중...`);
  // 일부러 시간을 지연시켜 보여주기 위해 setTimeout 사용
  setTimeout(function() {
    console.log(`문제 ${problem}을(를) 풀었습니다.`);
    // 도움이 필요하면 콜백 함수 호출
    callback();
  }, 2000); // 2초 후에 일이 끝납니다.
}

function friendHelp() {
  console.log("도움을 주러 왔어요!");
  console.log("친구와 함께 문제를 해결합니다.");
  console.log("숙제가 모두 끝났어요!");
}

// doHomework 함수에 숙제 문제 번호와 친구 도움 함수를 전달합니다.
doHomework(1, friendHelp);