// return;
console.log("Hello, Javscript");
const userName = "Sico";
// deprecated 되도록 쓰지 마세요

function printName(nm) {
  console.log(1, nm);

  // const userName = "Hanaro";
  {
    var userName = "True";
    console.log(22, userName);
  }
  console.log(2, userName, typeof userName);
}
// var는 함수 스코프
// Unicode - ASCII code(영어, 숫자, 기호) - UTF8 1~3byte(2에24승), UTF-8 mb4 (이모티콘) EUC-KR, ksc5601?
// UTF-16 한글자당 2바이트 2에16승   A 세 종 - 종은 3바이트,, 고정크기,, 파싱이 빠름, UTF-32 -> 4바이트
// collation - utf8mb5_spanish_ci - sorting
// ecma script tc 39

printName(userName);
console.log(3, userName);

// 렉시컬 스코프 ( 화제의 범위 -> 식별자를 찾아감)
// global scope
// function scope

// 콜 스택 - 실행 컨택스트 스택
