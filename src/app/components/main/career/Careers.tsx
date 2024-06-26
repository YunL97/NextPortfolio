import DetailCareer from "./detailCareer"

const Careers = () => {
  return (
    <div className="bg-gray-200  justify-center items-center  w-full mt-8">
      <div className="text-center text-5xl pt-7 font-blackSans ">Career</div>
      <div className="flex justify-center pr-10">
        <div className="content-center text-xl pt-7 font-blackSans text-center">
          coredax
          <div>(22.04.14 - 23.12.05)</div>
        </div>
        <DetailCareer />
      </div>
    </div>
  )
}

export default Careers
