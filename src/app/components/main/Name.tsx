import TestComponent from "@/app/(route)/LocalPodo/page"

const Name = () => (
  <div className="justify-center w-full  font-bold text-blac h-full flex items-center flex-col">
    <div className="font-sans text-3xl  pb-7 pt-28">
      이윤식 프론트엔드 개발자 포트폴리오
    </div>
    {/* <TestComponent /> */}
    <div className="whitespace-pre-line text-center pb-10">
      {`안녕하세요. 개발자 이윤식입니다. 
      저는 코어닥스라는 가상자산 거래소에서
  flutter 프레임워크로 코어닥스 어플리케이션 개발,
   코어닥스 웹어플리케이션을 vue.js로 개발,
  value-n 웹을 react로 개발을 했습니다.
  flutter로 개발도중 네이티브(kotlin, swift)를 해야되는 일이 생겨 
  네이티브 코드로 개발을 완료한적도 있습니다. 
  회사에 입사를 할때 flutter개발자로 입사를 하여서 
  앱 개발을 하던 도중 웹 개발을 할 수 있는 기회가 생겨서 앱,웹을 동시에 개발했었습니다. 
  열심히 일하는 개발자가 되겠습니다.
  감사합니다.`}
    </div>
  </div>
)

export default Name
