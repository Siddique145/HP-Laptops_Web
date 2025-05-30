function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://th.bing.com/th/id/R.202bd3e18cfac98e430f900b6378887b?rik=xLcbWmLfiAY%2bEA&pid=ImgRaw&r=0"
            className="w-12 h-12 text-white  border-solid border-green-500 border-2 rounded-full"
          />
          <span className="ml-3 text-xl"><h1>HP Laptop</h1></span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900"></a>
          <a className="mr-5 hover:text-gray-900"></a>
          <a className="mr-5 hover:text-gray-900"></a>
          <a className="mr-5 hover:text-gray-900"></a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          {/* Button */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
