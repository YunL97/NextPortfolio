const FrontSkill = () => {
  return (
    <div className=" overflow-x-auto p-28  w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Frontend</h2>
        <div className=" flex">
          <img src="html.svg" alt="HTML5" className="h-8" />
          <img src="css.svg" alt="CSS3" className="h-8" />
          <img src="javascript.svg" alt="JavaScript" className="h-8" />
          <img src="typescript.svg" alt="JavaScript" className="h-8" />
          <img src="vue.svg" alt="JavaScript" className="h-8" />
          <img src="react.svg" alt="JavaScript" className="h-8" />
          <img src="nextjs-dark.svg" alt="JavaScript" className="h-8" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Backend</h2>
        <div className=" flex">
          <img src="nodejs.svg" alt="Python" className="h-8" />
          <img src="python-dark.svg" alt="Python" className="h-8" />
          <img src="fastapi.svg" alt="Django" className="h-8" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Mobile App</h2>
        <div className=" flex">
          <img src="dart-light.svg" alt="JavaScript" className="h-8" />
          <img src="flutter-light.svg" alt="JavaScript" className="h-8" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Version Control</h2>
        <div className="flex">
          <img src="git.svg" alt="Git" className="h-8" />
          <img src="github-dark.svg" alt="GitHub" className="h-8" />
        </div>
      </div>
    </div>
  )
}

export default FrontSkill
