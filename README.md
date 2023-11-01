## Next 13버전 app router 사용

* next 13 버전부터는 app directory 내부에서는 모든 컴포넌트가 기본적으로 서버 컴포넌트로 동작
* RSC(React Server Component): RCC는 함수 -> 직렬화불가
* RCC(React Client Component)
* 사용자가 페이지를 띄우기 위해 서버로 요청을 날리면 서버는 이때부터 컴포넌트 트리를 root부터 실행해서 직렬화된 json 형태로 재구성(server compont와 client component 가 혼합되어있음)
* 직렬화: 데이터 구조나 오브젝트 상태를 동일하거나 다른 컴퓨터 환경에 저장하고 나중에 재구성 할 수 있는 포맷으로 변환하는 과정
  * function은 직렬화가 불가능한데 실행코드와 실행 컨텍스트를 모두 포함하는 개념이기 때문
* 클라이언트 컴포넌트
  * "use client": 클라이언트 컴포넌트 일때 사용
  *  onClick 같은 상호작용성들을 포험
  *  클라이언트라고 불리는 브라우저에 렌더
  * usestate, useeffect 같은 리액트lifecycle hooks들을 사용할 계획이 있다면 use client 명시

* 클라이언트 컴포넌트
    * 서버 컴포넌트 들은 서버에서 렌더되고 fetch, 클라이언트 컴포넌트들은 클라이언트 족에서 렌더되고 fetch
    * 서버 컴포넌트는 서버사이트렌더링과 다른 뜻
    * 서버 컴포넌트들은 각각의 컴포넌트 마다 클라이언트 컴포넌트로 렌더할지 서버 컴포넌트로 렌더할지 선택
    * 서버사이드렌더링은 페이지당 해당 페이지 자체를 서버사이드 렌더링 하도록함
* next.js는 ssr과 csr의 장점만은 취함: csr은 초기 로딩속도가 느리기 때문에 html파일을 ssr을 통해 빠르게 받아온다. ssr은 html을 계속 내려받아야 하기때문에 스크린간 이동이나 인터렉션에 약점이 있다
* next은 ssr 뿐만 아니라 csr의 특징도 많이 가지고 있기때문에 rsc를 함께 사용했을 때 그 이점이 더욱 크게 극대화 가능하다
* SRC 장점: 
  * 서버에서 이미 모두 실행된 후 직렬화 된 json 형태로 전달되기 때문에 어떠한 번들도 필요x -> 원래 next의 ssr은 초기 로딩속도에 이점만 있었고 csr과 동일한 사이즈의 hs번들을 다운받아야 했기 때문에 TTI(total time to interactive)에 큰메리트가 없었는데 src 컴포넌트 소스파일 뿐만이 아닌 rsc에서만 사용하는 외부 라이브러리도 번들에 포함될 필요가 없기 때문에 번들사이즈를 많이 줄일 수 있음 
  * 원래 서버에서 데이터를 가져오려면 getServerSideProps or getStaticProps 함수를 사용해야하고 무조건 최상단에서 fetch후 page에 props로 넘겨줄 수 밖에 없는 구조로 인해서 실제 데이터를 사용하는 하위 컴포넌트의 depth 까지 props drilling이 불가피했는데 rsc는 그자체가 서버에서 렌더링되서 컴포넌트 내부에서 data fetch를 실행해도 무관 -> nexㅕt 13버전 app directory에서는 기본적으로 모든 컴포넌트가 rsc 이기 때문에 getServerSideProps / getStaticProps는 불필요한 함수가 되었다
  * RSC는 최종 결과물이 html이 아닌 직렬화된 스트림 형태로 데이터를 받아오기 때문에 클라이언트에서 스트림을 해석하여 vitualDOM을 형성하고 Reconciliation을 통해 뷰를 갱신하는 과정을 거치게 된다 -> 화면에 변경사항이 생겨서 서버에서 새로운 정보를 받아와도 새로운 스크린으로 가는것이 아닌 기존 화면의 state등 context를 유지한채로 벼경된 사항만 선택적으로 반영할 수 있다