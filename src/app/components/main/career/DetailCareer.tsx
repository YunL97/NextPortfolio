const DetailCareer = () => {
  return (
    <div className="flex flex-col items-start p-8">
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>

        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-white border-2 border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="ml-4">
              <p className="text-black font-bold">value-n 웹개발</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-white border-2 border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="ml-4">
              <p className="text-black font-bold">코어닥스 웹 개발</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-white border-2 border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="ml-4">
              <p className="text-black font-bold">코어닥스 flutter 앱개발</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCareer
