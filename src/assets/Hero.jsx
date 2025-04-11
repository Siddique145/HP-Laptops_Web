function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            HP Spectre
            <br className="hidden lg:inline-block" />
            The Elegent
          </h1>
          <p className="mb-8 leading-relaxed">
            HP laptops stand out for their versatility, reliability, and
            innovative designs, catering to a wide range of users from casual
            consumers to business professionals. The HP Spectre line exemplifies
            premium quality with its elegant design, high-resolution displays,
            and powerful performance, making it ideal for users who need both
            style and substance. 
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              More
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-3/6"
            alt="hero"
            src="https://th.bing.com/th/id/OIP.WI6piKziysuhT48HbDwKZgHaFj?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
