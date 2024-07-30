const FrontSkill = () => {
  return (
    <div className="overflow-x-auto p-28 w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Frontend</h2>
        <div className="flex flex-wrap">
          <img src="/HTML.svg" alt="HTML5" className="h-8 mr-2 mb-2" />
          <img src="/CSS.svg" alt="CSS3" className="h-8 mr-2 mb-2" />
          <img
            src="/JavaScript.svg"
            alt="JavaScript"
            className="h-8 mr-2 mb-2"
          />
          <img
            src="/TypeScript.svg"
            alt="TypeScript"
            className="h-8 mr-2 mb-2"
          />
          <img src="/Vue.svg" alt="Vue.js" className="h-8 mr-2 mb-2" />
          <img src="/React.svg" alt="React" className="h-8 mr-2 mb-2" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Mobile App</h2>
        <div className="flex flex-wrap">
          <img src="/Dart-Light.svg" alt="Dart" className="h-8 mr-2 mb-2" />
          <img
            src="/Flutter-Light.svg"
            alt="Flutter"
            className="h-8 mr-2 mb-2"
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0 mb-3">
        <h2 className="text-red-500 font-bold mb-2">Version Control</h2>
        <div className="flex flex-wrap">
          <img src="/Git.svg" alt="Git" className="h-8 mr-2 mb-2" />
          <img src="/Github-Dark.svg" alt="GitHub" className="h-8 mr-2 mb-2" />
        </div>
      </div>
    </div>
  )
}
export default FrontSkill
