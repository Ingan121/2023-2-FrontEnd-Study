# WIL1
## 1장 자바스크립트의 개요
* 인터프리터 언어
    * 컴파일 언어 (C 등): 컴파일한 후 실행, 실행속도 빠름
    * 인터프리터 언어 (JS, 파이썬 등): 컴파일 없이 바로 실행, 실행속도 비교적 느림
    * JIT (Just-in-time 컴파일) 도입하여 빨라지긴 함
* 객체 지향 언어: 프로토타입 기반 (클래스 아님)
* 동적 타입 언어: 변수 타입 없고 변수에 저장되는 데이터 타입이 동적으로 변경
* 함수가 객체이며 함수에 함수를 인수로 넘길 수 있는 일급 객체이다.
* 함수가 클로저를 정의
    * 변수 은닉 및 영속성 보장 가능

## 2장 프로그램의 작성법과 실행법
* 텍스트 편집기 아무거나 사용 가능
* 책에선 무료인 VSCode와 어도비 브래킷을 추천하던데... 브래킷은 2년전에 망했으므로 그냥 VSCode 쓰자
* 주의사항
    * 한글은 문자열이나 주석에만
    * 여기선 세미콜론 반드시 쓰라고 하던데, 안써도 작동은 되고 이건 논쟁이 있는 부분인듯 함. 개인적으로 웬만하면 쓰는중
    * 마찬가지로 들여쓰기 탭으로 하라던데, 이건 뭐 vscode에서도 기본값으로 스페이스 4개로 변환해주고 있음. 별 상관 없고 그냥 코딩스타일만 맞춰주면 될듯
    * 확장자는 .js, 인코딩은 UTF-8로 저장. 요새 에디터는 메모장 포함해서 UTF8이 기본값인듯
* 실행법
    * F12 콘솔에 복붙
    * HTML에 집어넣고 브라우저로 실행 (더블클릭 or 웹서버에 올리기)
    * NodeJS REPL로 실행
    * NodeJS로 파일 실행 (node 파일명.js)

## 3장 변수와 값
* 변수 선언
    * var: ES5까지 사용하던 변수 선언 키워드
    * let: ES6부터 사용하는 변수 선언 키워드
    * const: ES6부터 사용하는 상수 선언 키워드
    * 변수 선언 없이 대입하면 전역변수로 설정됨 -> 별로 안좋음
    * 호이스팅: 변수 선언을 유효 범위의 최상단으로 끌어올리는 것, 선언보다 사용이 먼저 일어나도 에러 안남
    * var는 함수 스코프, let과 const는 블록 스코프
    * var는 중복 선언 가능, let과 const는 중복 선언 불가
    * var는 호이스팅, let과 const는 호이스팅 안됨
    * var는 변수 선언 전에 사용 가능, let과 const는 변수 선언 전에 사용 불가
    * var는 전역 변수, let과 const는 전역 변수 아님
    * var는 변수 선언 시 초기값 생략 가능, let과 const는 초기값 생략 불가
    * var는 변수 선언 시 초기값을 다른 변수로 지정 가능, let과 const는 초기값을 다른 변수로 지정 불가
* 데이터 타입
    * 원시 타입: 숫자, 문자열('', ""), 논리값(true, false), null, undefined, 심벌(Symbol, 고유한 값)
    * 객체 타입: 배열, 함수, 정규표현식 등

## 4장 객체와 배열, 함수의 기초
* 객체
    * 객체 리터럴로 생성: var obj = {a: 1, b: 2, c: "가"}
    * 접근: obj.a, obj["a"]
    * 프로퍼티 추가: obj.d = 4
    * 프로퍼티 삭제: delete obj.a
    * 프로퍼티 존재 여부 확인: "a" in obj
    * 프로퍼티 열거: for (var prop in obj) { ... }
* 함수
    * 함수 선언문으로 생성: function func() { ... }
    * 함수 리터럴(익명 함수)로 생성: var func = function() { ... }
* 배열
    * var arr = [1, 2, 3, 4, 5]
    * arr.length: 배열 길이
    * arr[0]: 배열 요소 접근
    * arr[0] = 10: 배열 요소 변경
    * arr.push(6): 배열 요소 추가
    * delete arr[0]: 배열 요소 삭제

## 5장 표현식과 연산자
* 표현식: 값으로 평가되는 문장
* 연산자: 표현식을 연산하여 새로운 값을 만드는 기호
* 산술연산: + - * / % ++ --
  * 모두 부동소수점 연산
  * 문자열 +로 합칠 수 있음
* 관계/논리연산자
    * 관계연산자: > < >= <= == != === !==
    * ===, !==는 타입까지 비교
    * 논리연산자: && || !
    * 논리연산자는 단락평가를 수행 (파이썬이랑 비슷한듯)
* 비트연산: & | ^ ~ << >> <<< >>> 등
* 기타: typeof, delete, new, instanceof, in, this, void, eval 등

## 6장 웹 브라우저에서의 입출력
* 대화상자
    * alert: 경고창
    * prompt: 입력창 (취소시 null)
    * confirm: 확인창 (확인시 true, 취소시 false)
    * 떠있는동안 부모창 스크립트 정지
* 콘솔
    * 부모창 동작 간섭 없음
    * console.log: 로그 출력
    * console.dir: 객체 출력
    * console.error: 에러 출력
    * console.warn: 경고 출력
    * console.clear: 콘솔 내용 지우기
    * console.time: 시간 측정 시작
    * console.timeEnd: 시간 측정 종료
    * console.trace: 스택 트레이스 출력
* 이벤트 처리기(리스너) 및 타이머
    * 이벤트 처리기: 이벤트 발생 시 실행되는 함수
    * 타이머: 일정 시간 후에 실행되는 함수
    * 이벤트 처리기 등록
        * HTML 요소의 속성으로 등록
        * DOM 요소의 프로퍼티로 등록 (elem.on* = func)
        * addEventListener 메서드로 등록
    * 타이머 등록
        * setTimeout: 일정 시간 후에 한 번 실행
        * setInterval: 일정 시간마다 반복 실행
        * requestAnimationFrame: 브라우저가 다음 프레임을 그리기 전에 실행
    * 타이머 해제
        * clearTimeout: setTimeout으로 등록한 타이머 해제
        * clearInterval: setInterval로 등록한 타이머 해제
        * cancelAnimationFrame: requestAnimationFrame으로 등록한 타이머 해제
* 웹 문서 조작
    * innerHTML로 해당 요소 내용 읽거나 변경 가능
    * 폼: value 등으로 입력값 가져올 수 있음
    * document.write
* 캔버스
    * 그림그리는거
    * 2d, webgl 등 (getContext로 컨텍스트 가져오기)
    * 2d: strokeRect, fillRect, clearRect 등

## 7장 제어 구문
* 순차적 실행: 위에서 아래로 순차적으로 실행
* 제어 구문: 그걸 바꾸는거
* 조건문
    * if/else
    * switch
* 반복문
    * while: 조건이 true인동안 계속 반복, break/continue 등 사용
    * do/while: 조건 확인을 뒤에서
    * for: (선언; 조건; 증감) 형태로 사용
    * for/in: 객체의 프로퍼티를 순회, 파이썬 for랑 비슷한듯?
* 점프문